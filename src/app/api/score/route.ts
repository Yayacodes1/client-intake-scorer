import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { intakeText } = await req.json();

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are a healthcare intake risk analyst. Analyze client intake information and return a JSON object with:
- score: number 0-100 (risk score)
- level: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL"
- risks: array of detected risk factors as strings
- summary: 2-3 sentence summary of the client's risk profile
- recommendation: "ACCEPT" | "ACCEPT_WITH_CONDITIONS" | "DECLINE"

Score guide:
- Aggressive behavior: +25
- Dementia/Alzheimer's: +25
- Falls history: +15
- Lives alone: +15
- 10+ medications: +15
- 24-hour care needed: +20
- Wandering/elopement: +15
- Recent hospitalization: +10

Return ONLY valid JSON, no markdown or code blocks.`
        },
        {
          role: "user",
          content: `Analyze this client intake:\n\n${intakeText}`
        }
      ],
      temperature: 0.3
    }),
  });

  const data = await response.json();
  
  try {
    const content = data.choices[0].message.content;
    const parsed = JSON.parse(content);
    return NextResponse.json(parsed);
  } catch {
    return NextResponse.json({ 
      error: "Failed to parse AI response",
      raw: data 
    }, { status: 500 });
  }
}

