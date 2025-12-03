import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // Check if API key exists
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json({ 
      error: "OpenAI API key not configured",
      details: "Please add OPENAI_API_KEY to your environment variables"
    }, { status: 500 });
  }

  const { intakeText } = await req.json();

  if (!intakeText || intakeText.trim().length === 0) {
    return NextResponse.json({ 
      error: "No intake text provided"
    }, { status: 400 });
  }

  try {
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
            content: `You are a healthcare intake risk analyst. Analyze client intake information and return ONLY a valid JSON object (no markdown, no code blocks, no extra text) with these exact fields:
{
  "score": <number 0-100>,
  "level": "<LOW|MEDIUM|HIGH|CRITICAL>",
  "risks": ["<risk1>", "<risk2>", ...],
  "summary": "<2-3 sentence summary>",
  "recommendation": "<ACCEPT|ACCEPT_WITH_CONDITIONS|DECLINE>"
}

Scoring guide:
- Aggressive/violent behavior: +25
- Dementia/Alzheimer's: +25
- Falls history: +15
- Lives alone: +15
- 10+ medications: +15
- 24-hour care needed: +20
- Wandering/elopement risk: +15
- Recent hospitalization: +10

IMPORTANT: Return ONLY the JSON object, nothing else.`
          },
          {
            role: "user",
            content: `Analyze this client intake and return the JSON assessment:\n\n${intakeText}`
          }
        ],
        temperature: 0.2
      }),
    });

    const data = await response.json();

    // Check for OpenAI API errors
    if (data.error) {
      return NextResponse.json({ 
        error: "OpenAI API error",
        details: data.error.message || data.error
      }, { status: 500 });
    }

    // Check if we have a valid response structure
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      return NextResponse.json({ 
        error: "Invalid response from OpenAI",
        details: "No choices in response"
      }, { status: 500 });
    }

    let content = data.choices[0].message.content;

    // Clean up the response - remove markdown code blocks if present
    content = content.trim();
    if (content.startsWith("```json")) {
      content = content.slice(7);
    }
    if (content.startsWith("```")) {
      content = content.slice(3);
    }
    if (content.endsWith("```")) {
      content = content.slice(0, -3);
    }
    content = content.trim();

    // Parse the JSON
    const parsed = JSON.parse(content);

    // Validate required fields
    if (typeof parsed.score !== 'number' || !parsed.level || !parsed.recommendation) {
      return NextResponse.json({ 
        error: "Invalid response format",
        details: "Missing required fields in AI response"
      }, { status: 500 });
    }

    return NextResponse.json(parsed);

  } catch (error) {
    // Handle JSON parse errors or other exceptions
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ 
      error: "Failed to process request",
      details: errorMessage
    }, { status: 500 });
  }
}
