import { redirect } from "next/navigation";

// The old combined product listing page has been replaced by individual
// dedicated landing pages for each product category.
export default function ProductPage() {
    redirect("/aluminium-kitchen");
}
