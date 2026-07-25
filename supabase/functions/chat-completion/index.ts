import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const BASE_SYSTEM_PROMPT = `You are a thoughtful, respectful guide on Islamic duas and daily reflection. Respond in a concise, warm, non-preachy tone. Do not use any emojis in your responses.
CRITICAL RULE: You must NEVER invent, generate, or guess the Arabic text, transliteration, or translation of any dua from memory. You are not a reliable source for exact religious text.
If the user's message includes a "VERIFIED_DUA" block below, use ONLY that exact Arabic, transliteration, and translation in your response, and you may add brief warm context/reflection around it.
If no VERIFIED_DUA is provided, do NOT create a dua yourself. Instead, gently tell the user you don't have a verified reference for that specific dua in your database yet, and encourage them to consult a trusted local scholar or a reliable source like Hisnul Muslim.`;

async function callGemini(userContent: string, retries = 2): Promise<string | null> {
  const apiKey = Deno.env.get("GEMINI_API_KEY");
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent`;

  for (let attempt = 0; attempt <= retries; attempt++) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": apiKey ?? "",
      },
      body: JSON.stringify({
        system_instruction: {
          parts: [{ text: BASE_SYSTEM_PROMPT }],
        },
        contents: [
          {
            role: "user",
            parts: [{ text: userContent }],
          },
        ],
      }),
    });

    const data = await response.json();
    console.log("RAW RESPONSE attempt " + attempt + ":", JSON.stringify(data));

    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (text) {
      return text;
    }

    const isRateLimit = response.status === 429;
    if (isRateLimit && attempt < retries) {
      const waitMs = 1500 * (attempt + 1);
      await new Promise((resolve) => setTimeout(resolve, waitMs));
      continue;
    }

    console.log("FINAL FAILURE:", JSON.stringify(data));
    return null;
  }

  return null;
}

Deno.serve(async (req) => {
  const { message, verifiedDua } = await req.json();

  let userContent = message;
  if (verifiedDua) {
    userContent = `User's question: ${message}
VERIFIED_DUA:
Category: ${verifiedDua.category}
Arabic: ${verifiedDua.arabic}
Transliteration: ${verifiedDua.transliteration}
Translation: ${verifiedDua.translation}
Reference: ${verifiedDua.reference}
Please present this verified dua clearly (Arabic, transliteration, translation, reference) with a brief warm reflection.`;
  }

  const replyText = await callGemini(userContent);

  if (!replyText) {
    return new Response(
      JSON.stringify({
        choices: [
          {
            message: {
              content:
                "I'm having trouble responding right now. Please try again in a moment.",
            },
          },
        ],
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  }

  return new Response(
    JSON.stringify({
      choices: [
        {
          message: {
            content: replyText,
          },
        },
      ],
    }),
    { headers: { "Content-Type": "application/json" } }
  );
});