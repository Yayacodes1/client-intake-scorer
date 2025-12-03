# 🏥 Client Intake Risk Scorer

An AI-powered tool that helps home care agencies quickly assess client risk levels during the intake process. Built with Next.js, React, TypeScript, and OpenAI.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square&logo=tailwindcss)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4o--mini-412991?style=flat-square&logo=openai)

---

## 🎯 Problem It Solves

Home care agencies spend **1-2 hours per client** manually reviewing intake documents to determine:
- Should we accept this client?
- What level of care do they need?
- Are there any red flags?

**This app automates that process in seconds.**

---

## ✨ Features

- 📝 **Simple Intake Form** - Paste client information from any source
- 🤖 **AI-Powered Analysis** - Uses GPT-4o-mini for intelligent risk assessment
- 📊 **Risk Scoring** - 0-100 score with severity levels (LOW/MEDIUM/HIGH/CRITICAL)
- ✅ **Recommendations** - ACCEPT / ACCEPT WITH CONDITIONS / DECLINE
- 📋 **Detected Risks** - Lists specific risk factors found
- 📄 **AI Summary** - Human-readable explanation of the assessment

---

## 🖼️ How It Works

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Paste Client   │────▶│   AI Analyzes   │────▶│  View Results   │
│  Information    │     │   Risk Factors  │     │  & Recommend.   │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

### Risk Factors Analyzed:
| Factor | Points |
|--------|--------|
| Aggressive behavior | +25 |
| Dementia/Alzheimer's | +25 |
| Falls history | +15 |
| Lives alone | +15 |
| 10+ medications | +15 |
| 24-hour care needed | +20 |
| Wandering/elopement | +15 |
| Recent hospitalization | +10 |

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- OpenAI API key

### Installation

```bash
# Clone the repository
git clone https://github.com/Yayacodes1/client-intake-scorer.git
cd client-intake-scorer

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
# Add your OpenAI API key to .env.local

# Start development server
npm run dev
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

---

## 📁 Project Structure

```
client-intake-scorer/
├── src/
│   └── app/
│       ├── page.tsx              # Intake form (home page)
│       ├── results/
│       │   └── page.tsx          # AI results display
│       ├── api/
│       │   └── score/
│       │       └── route.ts      # OpenAI API endpoint
│       ├── layout.tsx            # Root layout
│       └── globals.css           # Global styles
├── .env.local                    # API keys (not committed)
├── package.json
└── README.md
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 16** | React framework with App Router |
| **React 19** | UI components and state management |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Styling |
| **OpenAI API** | GPT-4o-mini for risk analysis |

---

## 📊 Example Usage

### Input (Client Intake):
```
Patient is 82 years old with moderate dementia. Lives alone since 
spouse passed. Takes 12 medications including blood thinners. 
History of 3 falls in the past year. Becomes confused at night 
and has wandered outside twice. Needs 24-hour supervision.
```

### Output:
- **Risk Score:** 85/100
- **Risk Level:** 🔴 CRITICAL
- **Recommendation:** ❌ DECLINE
- **Detected Risks:**
  - Dementia/cognitive decline
  - Lives alone
  - Polypharmacy (10+ medications)
  - Fall history
  - Wandering/elopement risk
  - Requires 24-hour care

---

## 🔐 Security

- API keys are stored in `.env.local` (never committed to git)
- Server-side API calls protect your OpenAI key
- No client data is stored or logged

---

## 🎓 Learning Journey

This project demonstrates:
- ✅ React hooks (`useState`, `useEffect`)
- ✅ Next.js App Router and API routes
- ✅ TypeScript type definitions
- ✅ OpenAI API integration
- ✅ Tailwind CSS styling
- ✅ Client-side routing with `useRouter`
- ✅ localStorage for state persistence

---

## 📈 Future Improvements

- [ ] PDF upload and text extraction
- [ ] Save assessment history to database
- [ ] Export results as PDF report
- [ ] Multi-language support
- [ ] Custom risk factor configuration
- [ ] Integration with EHR systems

---

## 👤 Author

**Yahya Adem**
- GitHub: [@Yayacodes1](https://github.com/Yayacodes1)

---

## 📄 License

MIT License - feel free to use this project for learning or commercial purposes.

---

## 🙏 Acknowledgments

Built as a portfolio project to demonstrate full-stack development skills with AI integration for healthcare applications.
