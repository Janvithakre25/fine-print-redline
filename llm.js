// llm.js
async function callGroq(apiKey, prompt) {
  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "llama-3.1-8b-instant",
      messages: [{ role: "user", content: prompt }],
      temperature: 0,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Groq error ${res.status}: ${errText}`);
  }

  const data = await res.json();
  return data.choices?.[0]?.message?.content ?? "(no content returned)";
}

async function callOllama(prompt, model = "llama3.1") {
  const res = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ model, prompt, stream: false }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Ollama error ${res.status}: ${errText}`);
  }

  const data = await res.json();
  return data.response ?? "(no content returned)";
}

async function callLLM({ provider, apiKey, prompt }) {
  if (provider === "groq") {
    if (!apiKey) throw new Error("Missing Groq API key");
    return callGroq(apiKey, prompt);
  }
  if (provider === "ollama") {
    return callOllama(prompt);
  }
  throw new Error(`Unknown provider: ${provider}`);
}