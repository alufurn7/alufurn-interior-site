import { NextResponse } from "next/server";

/**
 * API Route: /api/quote
 *
 * Handles multi-step quote form submissions with anti-spam measures.
 */

// Telegram Bot Integration Type
type TelegramData = {
    name: string;
    phone: string;
    email?: string;
    projectType?: string;
    product?: string;
    location: string;
    message?: string;
    budget?: string;
    timeline?: string;
    scheduleDate?: string;
    quantity?: string;
};

// Telegram Function
const sendTelegramMessage = async (data: TelegramData) => {
    try {
        const isExperienceVisit = !data.email || data.projectType === "Experience Center Visit";
        const title = isExperienceVisit ? "📍 *Experience Center Booking*" : "🔥 *New Premium Inquiry* 🔥";

        const text = `
${title}

👤 *Contact Details:*
- Name: ${data.name}
- Phone: ${data.phone}
${data.email ? `- Email: ${data.email}` : ""}

🏗️ *Project Info:*
- Type: ${data.projectType || "Visit"}
${data.product ? `- Products: ${data.product}` : ""}
- Location: ${data.location}
${data.scheduleDate ? `- *Scheduled Date:* ${data.scheduleDate}` : ""}
${data.budget ? `- Budget: ${data.budget}` : ""}
${data.timeline ? `- Timeline: ${data.timeline}` : ""}
${data.quantity ? `- Quantity: ${data.quantity}` : ""}

📝 *User Message:*
${data.message || "No additional message."}

🕒 ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
`;

        await fetch(
            `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: process.env.TELEGRAM_CHAT_ID,
                    text,
                    parse_mode: "Markdown",
                }),
            }
        );
    } catch (err) {
        console.error("Telegram Error:", err);
    }
};

// AiSensy WhatsApp Notification Function
const sendWhatsAppNotification = async (body: any) => {
    try {
        if (!process.env.AISENSY_API_KEY) {
            console.warn("AISENSY_API_KEY is not defined. Skipping WhatsApp.");
            return;
        }

        // Sanitize text for WhatsApp template safety
        const cleanText = (value: any, fallback = "N/A"): string => {
            if (!value) return fallback;
            return (
                String(value)
                    .replace(/₹/g, "Rs ")
                    .replace(/\s+/g, " ")
                    .trim() || fallback
            );
        };

        // Phone: digits only, last 10
        const phone = String(body.phone || "").replace(/\D/g, "").slice(-10);

        // Build exactly 12 string params in strict order
        const templateParams: string[] = [
            cleanText(body.name),                                                                  // {{1}}  name
            phone || "0000000000",                                                                 // {{2}}  phone
            body.email || "N/A",                                                                   // {{3}}  email
            cleanText(body.projectType),                                                           // {{4}}  projectType
            cleanText(Array.isArray(body.product) ? body.product.join(", ") : body.product),       // {{5}}  product
            cleanText(body.budget),                                                                // {{6}}  budget
            cleanText(body.location || body.city),                                                 // {{7}}  location
            cleanText(body.message),                                                               // {{8}}  message
            body.scheduleDate ? cleanText(body.scheduleDate) : "-",                                // {{9}}  scheduleDate
            cleanText(body.quantity, "1"),                                                          // {{10}} quantity
            cleanText(body.status, "New"),                                                         // {{11}} status
            new Date().toLocaleString("en-IN", {
                timeZone: "Asia/Kolkata",
                hour12: true,
            })                                                             // {{12}} submitted date
        ];

        console.log("WhatsApp templateParams:", templateParams);

        const payload = {
            apiKey: process.env.AISENSY_API_KEY,
            campaignName: "new_lead_full",
            destination: "917763970474",
            userName: body.name || "Customer",
            templateParams,
            source: "website-form",
            media: {},
            buttons: [],
            carouselCards: [],
            location: {},
            attributes: {},
            paramsFallbackValue: {
                FirstName: "Customer",
            },
        };

        console.log("WhatsApp payload:", JSON.stringify(payload, null, 2));

        const response = await fetch("https://backend.aisensy.com/campaign/t1/api/v2", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        const responseText = await response.text();
        if (!response.ok) {
            console.error("AiSensy API Error:", response.status, responseText);
        } else {
            console.log("WhatsApp sent successfully:", responseText);
        }
    } catch (err) {
        console.error("WhatsApp Notification Error:", err);
    }
};

export async function POST(req: Request) {
    try {
        const body = await req.json();
        console.log("Incoming Quote Data:", body);

        const {
            name,
            phone,
            email,
            projectType,
            product,
            budget,
            location,
            city,
            timeline,
            message,
            scheduleDate,
            quantity,
            honeypot,    // Hidden field for bot detection
            startTime,   // Timestamp to detect fast submissions
        } = body;

        // 1. Honeypot check
        if (honeypot) {
            return NextResponse.json({ error: "Spam detected." }, { status: 400 });
        }

        // 2. Submission speed check (reject if under 2 seconds)
        const currentTime = Date.now();
        if (startTime && currentTime - startTime < 2000) {
            return NextResponse.json({ error: "Too fast. Are you a bot?" }, { status: 400 });
        }

        // 3. Validation
        if (!name || !phone) {
            return NextResponse.json({ error: "Name and Phone are required." }, { status: 400 });
        }

        const isExperienceVisit = !email && city;
        const finalLocation = location || city;

        if (!isExperienceVisit && (!email || !projectType || !finalLocation)) {
            return NextResponse.json({ error: "Missing required fields for inquiry." }, { status: 400 });
        }

        // 4. Basic email format check (if provided)
        if (email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                return NextResponse.json({ error: "Invalid email format." }, { status: 400 });
            }
        }

        // 5. Indian phone validation (basic)
        const phoneRegex = /^[6-9]\d{9}$/;
        if (!phoneRegex.test(phone.replace(/\D/g, "").slice(-10))) {
            return NextResponse.json({ error: "Invalid Indian phone number." }, { status: 400 });
        }

        // 6. Save to Google Sheets
        try {
            const { addToSheet } = await import("@/lib/googleSheets");
            await addToSheet({
                ...body,
                location: finalLocation,
                scheduleDate: scheduleDate || body.date, // Handle 'date' from Experience page
            });
        } catch (sheetError) {
            console.error("Failed to save to Google Sheets:", sheetError);
        }

        // 7. Send Telegram Notification
        await sendTelegramMessage({
            name,
            phone,
            email,
            projectType: projectType || (isExperienceVisit ? "Experience Center Visit" : "General Inquiry"),
            product: Array.isArray(product)
                ? product.join(", ")
                : product || (isExperienceVisit ? "Showroom Walkthrough" : ""),
            location: finalLocation || "Not specified",
            message,
            budget,
            timeline,
            scheduleDate: scheduleDate || body.date,
            quantity,
        });

        // 8. Send WhatsApp Notification
        await sendWhatsAppNotification(body);

        console.log("Inquiry Request Received:", {
            name,
            phone,
            email,
            location: finalLocation,
            scheduleDate: scheduleDate || body.date,
            userAgent: req.headers.get("user-agent"),
        });

        // Delay for realism
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return NextResponse.json({
            success: true,
            message: "Quote request submitted successfully.",
        });
    } catch (error) {
        console.error("Quote API Error:", error);
        return NextResponse.json({ error: "Internal server error." }, { status: 500 });
    }
}