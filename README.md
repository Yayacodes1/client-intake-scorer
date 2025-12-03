# 🏥 Client Intake Risk Scorer

> A "bright app" that demonstrates AI-powered healthcare workflow automation — built with React, Next.js, TypeScript, and OpenAI LLM integration.

### 🌐 [Live Demo](https://client-intake-scorer.vercel.app) | 📂 [GitHub Repo](https://github.com/Yayacodes1/client-intake-scorer)

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square&logo=tailwindcss)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4o--mini-412991?style=flat-square&logo=openai)

---

## 🎯 Project Overview

This project is a standalone feature ("bright app") that adds tangible value to healthcare platforms like **BrightSource** and **LumberJack**. It demonstrates how AI and modern web technologies can automate time-consuming healthcare workflows.

### The Problem
Home care agencies spend **1-2 hours per client** manually reviewing intake documents to determine:
- Should we accept this client?
- What level of care do they need?
- Are there any red flags or risk factors?

### The Solution
An AI-powered intake assessment tool that **analyzes client information in seconds**, providing:
- Risk scores (0-100)
- Severity levels (LOW/MEDIUM/HIGH/CRITICAL)
- Actionable recommendations (ACCEPT/ACCEPT WITH CONDITIONS/DECLINE)
- Detailed risk factor breakdown

---

## 🛠️ Tech Stack

| Technology | Purpose | Relevance |
|------------|---------|-----------|
| **React 19** | UI components & state management | Core frontend framework |
| **Next.js 16** | Full-stack React framework with App Router | Server-side rendering & API routes |
| **TypeScript** | Type-safe JavaScript | Code quality & maintainability |
| **Tailwind CSS** | Utility-first styling | Rapid UI development |
| **OpenAI API (GPT-4o-mini)** | Large Language Model integration | AI-driven decision support |

---

## ✨ Features Demonstrated

### 🤖 AI & Language Model Integration
- Direct integration with OpenAI's GPT-4o-mini API
- Structured JSON responses for reliable data parsing
- Prompt engineering for healthcare-specific analysis
- Error handling for API responses

### ⚛️ React & Next.js Development
- React hooks (`useState`, `useEffect`, `useRouter`)
- Next.js App Router architecture
- Server-side API routes for secure API key handling
- Client-side state management with localStorage

### 🎨 UI/UX Implementation
- Clean, responsive interface with Tailwind CSS
- Color-coded risk indicators for quick visual assessment
- Loading states and error handling for better UX
- Mobile-friendly design

### 🏥 Healthcare Workflow Automation
- Automated risk factor detection from unstructured text
- Standardized scoring system for consistent assessments
- Decision support recommendations
- Reduced manual review time from hours to seconds

---

## 🖼️ How It Works

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Paste Client   │────▶│   AI Analyzes   │────▶│  View Results   │
│  Information    │     │   Risk Factors  │     │  & Recommend.   │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

### Risk Factors Analyzed:
| Factor | Points | Why It Matters |
|--------|--------|----------------|
| Aggressive behavior | +25 | Staff safety concern |
| Dementia/Alzheimer's | +25 | Requires specialized care |
| Falls history | +15 | Injury liability risk |
| Lives alone | +15 | Limited support system |
| 10+ medications | +15 | Polypharmacy management |
| 24-hour care needed | +20 | Resource intensive |
| Wandering/elopement | +15 | Safety protocol required |
| Recent hospitalization | +10 | Acute care transition |

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
echo "OPENAI_API_KEY=your_key_here" > .env.local

# Start development server
npm run dev
```

### Environment Variables

```env
OPENAI_API_KEY=your_openai_api_key_here
```

---

## 📁 Project Structure

```
client-intake-scorer/
├── src/
│   └── app/
│       ├── page.tsx              # Intake form (React component)
│       ├── results/
│       │   └── page.tsx          # AI results display
│       ├── api/
│       │   └── score/
│       │       └── route.ts      # OpenAI API endpoint (Next.js API route)
│       ├── layout.tsx            # Root layout
│       └── globals.css           # Tailwind styles
├── .env.local                    # API keys (not committed)
├── package.json
└── README.md
```

---

## 📊 Example Usage

### Input (Client Intake Text):
```
Patient is 82 years old with moderate dementia. Lives alone since 
spouse passed. Takes 12 medications including blood thinners. 
History of 3 falls in the past year. Becomes confused at night 
and has wandered outside twice. Needs 24-hour supervision.
```

### AI-Generated Output:
- **Risk Score:** 85/100
- **Risk Level:** 🔴 CRITICAL
- **Recommendation:** ❌ DECLINE
- **AI Summary:** "This client presents significant risks including advanced cognitive decline, fall history, and elopement behavior. The combination of living alone with 24-hour care needs creates an unsafe situation that exceeds standard home care capabilities."
- **Detected Risks:**
  - Dementia/cognitive decline
  - Lives alone / no support system
  - Polypharmacy (10+ medications)
  - Multiple falls history
  - Wandering/elopement risk
  - Requires 24-hour supervision

---

## 🔐 Security Considerations

- ✅ API keys stored in environment variables (never committed)
- ✅ Server-side API calls protect OpenAI key from client exposure
- ✅ No client PHI/PII stored or logged
- ✅ HIPAA-awareness in design (no data persistence)

---

## 📈 Future Enhancements

Potential features to extend this "bright app":

- [ ] **PDF Upload** - Extract text from intake documents automatically
- [ ] **Assessment History** - Database integration for tracking decisions
- [ ] **PDF Export** - Generate professional reports for stakeholders
- [ ] **Custom Risk Factors** - Agency-specific scoring configuration
- [ ] **EHR Integration** - Connect with existing healthcare systems
- [ ] **Multi-language Support** - Serve diverse patient populations
- [ ] **Batch Processing** - Analyze multiple intakes simultaneously

---

## 🎓 Skills Demonstrated

This project showcases proficiency in:

| Skill | Implementation |
|-------|----------------|
| **React Development** | Functional components, hooks, state management |
| **Next.js** | App Router, API routes, server components |
| **TypeScript** | Type definitions, interfaces, type safety |
| **AI/LLM Integration** | OpenAI API, prompt engineering, JSON parsing |
| **Healthcare Domain** | Understanding of intake workflows, risk assessment |
| **UI/UX Design** | Responsive design, visual feedback, accessibility |
| **API Development** | RESTful endpoints, error handling, security |
| **Version Control** | Git, GitHub, meaningful commits |

---

## 🏢 Relevance to Healthcare Technology

This project directly addresses real challenges in healthcare operations:

1. **Reduces Manual Workload** - Automates repetitive intake review tasks
2. **Improves Consistency** - Standardized risk scoring across all assessments
3. **Supports Decision-Making** - AI-powered recommendations with explanations
4. **Saves Time & Money** - Hours of review reduced to seconds
5. **Scalable Solution** - Can handle increased volume without additional staff

---

## 👤 Author

**Yahya Adem**
- GitHub: [@Yayacodes1](https://github.com/Yayacodes1)

---

## 📄 License

MIT License - Open source for learning and commercial use.

---

## 🙏 Acknowledgments

Built as a demonstration of full-stack development skills with AI integration for healthcare applications. This project represents the type of innovative "bright app" feature development that adds tangible value to healthcare platforms.
