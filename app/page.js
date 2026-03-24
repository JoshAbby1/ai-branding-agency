"use client";

import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    audience: "",
    vibe: "",
    colors: "",
    symbols: "",
  });

  const [prompt, setPrompt] = useState("");

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generatePrompt = () => {
    const result = `
Create a luxury, minimalist logo design for a brand named "${form.name}".

The business focuses on: ${form.business}
Target audience: ${form.audience}

Design a clean, premium logo using a black background with elegant pink typography.

Include:
- Main title: "${form.name}"
- Subtitle: "Logo Design"
- Signature: "SMGB X TAE"

Style direction:
${form.vibe}

Color preferences:
${form.colors}

Incorporate subtle crown elements (small, minimal, not overcrowded).

Additional ideas:
${form.symbols}

Design requirements:
- Clean and minimal
- Easy to read
- Strong hierarchy
- Not cluttered
- High-end branding feel

Rendering style:
- Soft glow or slight neon pink effect
- Sharp, crisp edges
- Modern digital branding aesthetic
`;

    setPrompt(result);
  };

  const fields = [
    { name: "name", placeholder: "Brand Name" },
    { name: "business", placeholder: "What does the business do?" },
    { name: "audience", placeholder: "Target audience?" },
    { name: "vibe", placeholder: "Style (luxury, modern, streetwear...)" },
    { name: "colors", placeholder: "Color preferences" },
    { name: "symbols", placeholder: "Any symbols or ideas?" },
  ];

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-center">
        Ai Branding Agency
      </h1>

      <p className="text-pink-500 font-medium">Logo Design</p>
      <p className="text-sm tracking-widest">SMGB X TAE</p>
      <p className="text-pink-500 text-xl mt-2">♛ ♛ ♛</p>

      <div className="w-full max-w-xl mt-8 space-y-4">
        {fields.map((field) => (
          <input
            key={field.name}
            name={field.name}
            placeholder={field.placeholder}
            onChange={handleChange}
            className="w-full p-3 rounded bg-black border border-pink-500 text-white"
          />
        ))}

        <button
          onClick={generatePrompt}
          className="w-full bg-pink-500 hover:bg-pink-600 text-black py-3 rounded font-semibold"
        >
          Generate Logo Prompt
        </button>
      </div>

      {prompt && (
        <div className="w-full max-w-xl mt-8 p-4 border border-pink-500 rounded bg-black text-pink-400 whitespace-pre-wrap">
          {prompt}
        </div>
      )}
    </main>
  );
}
