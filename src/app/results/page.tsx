"use client";

import { useEffect, useState } from "react";

type AnalysisResult = {
  score: number;
  level: string;
  risks: string[];
  summary: string;
  recommendation: string;
};

export default function Results() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Load intake data from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("intake");
    if (saved) {
      setText(saved);
    }
  }, []);

  // Call OpenAI when text is loaded
  useEffect(() => {
    if (!text) return;

    setLoading(true);
    setError("");

    fetch("/api/score", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ intakeText: text }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setResult(data);
        }
      })
      .catch((err) => {
        setError("Failed to analyze: " + err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [text]);

  // Get color based on level
  const getLevelColor = (level: string) => {
    switch (level) {
      case "CRITICAL": return "text-red-700 bg-red-100";
      case "HIGH": return "text-red-600 bg-red-50";
      case "MEDIUM": return "text-yellow-600 bg-yellow-50";
      default: return "text-green-600 bg-green-50";
    }
  };

  // Get recommendation color
  const getRecommendationColor = (rec: string) => {
    switch (rec) {
      case "DECLINE": return "text-red-700";
      case "ACCEPT_WITH_CONDITIONS": return "text-yellow-600";
      default: return "text-green-600";
    }
  };

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🏥 AI Risk Assessment Results</h1>

      {/* Show what they typed */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Client Info:</h2>
        <div className="border-2 rounded p-4 bg-gray-50 max-h-40 overflow-y-auto text-sm">
          {text || "No data"}
        </div>
      </div>

      {/* Loading state */}
      {loading && (
        <div className="text-center py-10">
          <div className="text-2xl mb-2">🤖 Analyzing with AI...</div>
          <div className="text-gray-500">This may take a few seconds</div>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      {/* Results */}
      {result && !loading && (
        <>
          {/* Score */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Risk Score:</h2>
            <div className="text-5xl font-bold">{result.score} / 100</div>
          </div>

          {/* Risk Level */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Risk Level:</h2>
            <div className={`text-3xl font-bold inline-block px-4 py-2 rounded ${getLevelColor(result.level)}`}>
              {result.level === "CRITICAL" && "🔴 "}
              {result.level === "HIGH" && "🟠 "}
              {result.level === "MEDIUM" && "🟡 "}
              {result.level === "LOW" && "🟢 "}
              {result.level} RISK
            </div>
          </div>

          {/* Recommendation */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Recommendation:</h2>
            <div className={`text-2xl font-bold ${getRecommendationColor(result.recommendation)}`}>
              {result.recommendation === "ACCEPT" && "✅ ACCEPT"}
              {result.recommendation === "ACCEPT_WITH_CONDITIONS" && "⚠️ ACCEPT WITH CONDITIONS"}
              {result.recommendation === "DECLINE" && "❌ DECLINE"}
            </div>
          </div>

          {/* AI Summary */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">AI Analysis:</h2>
            <div className="border-2 rounded p-4 bg-blue-50 text-gray-700">
              {result.summary}
            </div>
          </div>

          {/* Detected Risks */}
          {result.risks && result.risks.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Detected Risk Factors:</h2>
              <ul className="list-disc list-inside space-y-1">
                {result.risks.map((risk, i) => (
                  <li key={i} className="text-gray-700">
                    ⚠️ {risk}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}

      {/* Back button */}
      <div className="mt-8">
        <a href="/" className="text-blue-600 hover:underline">
          ← Analyze another client
        </a>
      </div>
    </div>
  );
}

