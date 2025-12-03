"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  // This stores what the user types
  const [text, setText] = useState("");
  
  // This lets us change pages
  const router = useRouter();

  // When user clicks "Analyze"
  function handleClick() {
    console.log("Button clicked! Text length:", text.length);
    console.log("Text content:", text);
    
    // Check if there's text
    if (!text || text.trim().length === 0) {
      alert("Please enter some client information first!");
      return;
    }
    
    // Save the text to browser storage
    localStorage.setItem("intake", text);
    console.log("Saved to localStorage:", localStorage.getItem("intake"));
    
    // Go to results page
    router.push("/results");
  }

  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Client Intake Form
      </h1>

      {/* Big text box */}
      <textarea
        className="w-full h-64 border-2 rounded p-4 mb-4"
        placeholder="Paste client information here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* Button */}
      <button
        onClick={handleClick}
        className="bg-blue-600 text-white px-6 py-3 rounded"
      >
        Analyze
      </button>
    </div>
  );
}
