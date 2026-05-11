import OpenAI from 'openai'
import { NextRequest, NextResponse } from 'next/server'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const SYSTEM_PROMPT = `
You are a knowledgeable and warm design consultant for Alufurn, a premium 
aluminium interior brand based in India. You help customers with:

- Kitchen designs: modular, bespoke, aluminium-frame, available in light/dark/neutral 
  tones and L-shape, U-shape, parallel layouts
- Wardrobe solutions: sliding, hinged, and walk-in options
- Vanity units: aluminium-frame, humidity-resistant, elegant finishes
- Interior doors: aluminium-framed in wood, glass, and frosted panel options
- Aluminium panels: architectural wall finishes for feature walls and ceilings
- Material quality: 0.1mm precision, E1 eco-safe standards, 100% automated production,
  German machinery
- Experience Centers: Patna (G-15, Shashi Complex, Exhibition Road), 
  Jaipur (131-132, Main Niwaru Road, Jhotwara Industrial Area), 
  Calicut (42/1680, Kunnummal Nallalam)
- Getting a quote or booking a design consultation

Guidelines:
- Keep responses concise (3-4 sentences max) and professional but warm
- If asked about pricing, explain it depends on size, layout, and finish, 
  and invite them to book a free consultation or visit an experience center
- If asked something completely unrelated to interiors or Alufurn, 
  politely say you can only help with interior design and Alufurn products
- Always close with one relevant next step question 
  e.g. "Would you like to book a visit to our nearest studio?" 
  or "Can I help you explore kitchen layout options?"
- Never make up product names, prices, or specifications not listed above
`

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages,
      ],
      max_tokens: 300,
      temperature: 0.7,
    })

    const reply = response.choices[0]?.message?.content ?? 
      'Sorry, I could not generate a response. Please try again.'

    return NextResponse.json({ reply })

  } catch (error) {
    console.error('OpenAI API error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
