# DisleksiAI - Next.js Migration Complete! 🎉

**Adaptif Okuma Yardımcısı** | AI-Powered Dyslexia Learning Platform

![Next.js](https://img.shields.io/badge/Next.js-15.5-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.0-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript)
![Prisma](https://img.shields.io/badge/Prisma-6.1-teal?logo=prisma)
![Firebase](https://img.shields.io/badge/Firebase-11.0-orange?logo=firebase)

---

## ✅ Migration Status

The application has been successfully migrated from **Vite** to **Next.js 15** with App Router!

### What's Been Completed

- ✅ Next.js 15 App Router setup
- ✅ Prisma ORM schema (6 models)
- ✅ Firebase Authentication integration
- ✅ Gemini AI service migration
- ✅ Dyslexia-friendly design system (Tailwind CSS)
- ✅ Framer Motion animations
- ✅ Capacitor configuration for mobile
- ✅ API routes architecture (API-first)
- ✅ Welcome & Age Selection pages
- ✅ TypeScript types and utilities

### Development Server Running

🚀 **Server is live at:** http://localhost:3001

---

## 🚦 Next Steps

### 1. Set Up Firebase (Required)

You need to create a Firebase project and configure authentication:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project named "DisleksiAI"
3. Enable **Authentication** → **Email/Password**
4. Get your Firebase config from Project Settings
5. Create `.env.local` file (copy from `.env.example`):

```bash
cp .env.example .env.local
```

6. Fill in your Firebase credentials in `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_actual_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
# ... etc
```

### 2. Set Up PostgreSQL Database (Required)

Choose one of these options:

**Option A: Local PostgreSQL**
```bash
# Install PostgreSQL (macOS)
brew install postgresql@15
brew services start postgresql@15

# Create database
createdb disleksiai

# Update DATABASE_URL in .env.local
DATABASE_URL="postgresql://your_username@localhost:5432/disleksiai"
```

**Option B: Cloud PostgreSQL (Recommended)**

Use a free tier from:
- [Neon](https://neon.tech) - Serverless Postgres (Recommended)
- [Supabase](https://supabase.com) - Postgres + more features
- [Railway](https://railway.app) - Easy deployment

After creating, copy the connection URL to `.env.local`:

```env
DATABASE_URL="postgresql://user:password@host:5432/database?sslmode=require"
```

### 3. Initialize Prisma

```bash
# Generate Prisma Client
npm run db:generate

# Run initial migration (creates tables)
npm run db:migrate

# (Optional) Open Prisma Studio to view database
npm run db:studio
```

### 4. Set Up Gemini AI

1. Get a free API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Add to `.env.local`:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

---

## 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Database commands
npm run db:generate   # Generate Prisma Client
npm run db:migrate    # Run database migrations
npm run db:studio     # Open Prisma Studio
npm run db:push       # Push schema without migration (dev only)

# Mobile commands (for future use)
npm run mobile:prepare   # Build and sync with Capacitor
npm run mobile:ios      # Open iOS project in Xcode
npm run mobile:android  # Open Android project in Android Studio

# Code quality
npm run lint
```

---

## 📁 Project Structure

```
DisleksiAI/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage (Welcome)
│   │   ├── globals.css        # Global styles
│   │   ├── age-selection/     # Age selection page
│   │   └── api/               # API routes
│   │       └── diagnosis/
│   │           └── start-test/
│   ├── components/            # React components
│   │   └── WelcomeScreen.tsx
│   ├── lib/                   # Utilities & services
│   │   ├── prisma.ts         # Prisma client
│   │   ├── gemini.ts         # Gemini AI service
│   │   └── firebase/
│   │       ├── config.ts     # Firebase config
│   │       └── auth.ts       # Auth utilities
│   └── types/                # TypeScript types
│       └── index.ts
├── prisma/
│   └── schema.prisma         # Database schema
├── public/                   # Static assets
├── capacitor.config.ts       # Mobile app config
├── next.config.ts            # Next.js config
├── tailwind.config.ts        # Tailwind config
├── tsconfig.json            # TypeScript config
└── package.json             # Dependencies

```

---

## 🎨 Design System

The app uses a **dyslexia-friendly design system**:

### Colors
- Background: `#F5F5F3` (soft white, not harsh)
- Text: `#2B2D31` (dark gray, not pure black)
- Primary: `#2563EB` (blue)
- Success: `#22C55E` (green)
- Error: `#EF4444` (red)

### Typography
- Font sizes: 18px body (minimum)
- Line height: 1.8 (generous spacing)
- Letter spacing: 0.15em (easier reading)
- Word spacing: 0.3em (clear word boundaries)

### Tailwind Classes
```tsx
// Use these dyslexia-friendly classes
text-dyslexia-body         // 18px, 1.8 line-height, 0.15em spacing
text-dyslexia-heading      // 28px heading
text-dyslexia-subheading   // 24px subheading

bg-dys-bg                  // Background color
text-dys-text              // Text color
bg-dys-primary             // Primary blue

btn-primary                // Primary button
btn-secondary              // Secondary button
card                       // Card container
touch-target               // 56px minimum touch target
```

---

## 🔌 API Routes

### Available Endpoints

#### `POST /api/diagnosis/start-test`
Start a new diagnosis test for a student.

**Request:**
```json
{
  "studentId": "uuid-here"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "testId": "test-uuid",
    "testType": "letter",
    "questions": [...],
    "totalQuestions": 15
  }
}
```

### Coming Soon
- `POST /api/auth/signup` - Create new student account
- `POST /api/auth/login` - Student login
- `POST /api/exercise/get-next` - Get adaptive exercise
- `POST /api/tts/generate` - Text-to-speech
- `GET /api/progress/weekly-report` - Student progress

---

## 📱 Mobile App (Capacitor)

The app is prepared for iOS and Android development with Capacitor:

```bash
# When ready to build mobile app:
npm run mobile:prepare

# Open in Xcode (iOS)
npm run mobile:ios

# Open in Android Studio (Android)
npm run mobile:android
```

---

## 🧪 Testing

### Manual Testing Checklist

1. **Homepage**
   - [ ] Welcome screen loads
   - [ ] "Yeni Hesap Aç" button navigates to age selection
   - [ ] Animations work smoothly

2. **Age Selection**
   - [ ] Age buttons are clickable
   - [ ] Selected age highlights
   - [ ] "Devam Et" button enables after selection
   - [ ] Navigation works

3. **API Routes**
   - [ ] `/api/diagnosis/start-test` returns questions
   - [ ] Error handling works

---

## 🔐 Environment Variables

Required environment variables (create `.env.local`):

```env
# Firebase (REQUIRED)
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# Gemini AI (REQUIRED)
GEMINI_API_KEY=

# Database (REQUIRED)
DATABASE_URL=

# API URL (Optional - defaults to localhost:3000)
NEXT_PUBLIC_API_URL=http://localhost:3000
```

---

## 🚀 Deployment

### Recommended: Vercel

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

### Database Options for Production

- **Neon** (recommended): Serverless PostgreSQL
- **Supabase**: PostgreSQL + additional features
- **Railway**: Easy deployment with databases

---

## 📊 Database Schema

6 Prisma models:

1. **Student** - User profiles with dyslexia profiles
2. **ExerciseResponse** - Student answers and performance
3. **WeeklyReport** - Aggregated progress data
4. **Achievement** - Gamification badges
5. **LLMPromptCache** - Cached AI responses (cost optimization)
6. **DiagnosisResult** - Initial assessment data

---

## 🎯 Project Goals

From the PRD:
- ✅ **Target Users**: 10-16 year old students with dyslexia
- ✅ **Tech Stack**: Next.js, Prisma, Firebase, Gemini AI
- ✅ **Design**: Dyslexia-friendly UI/UX
- ✅ **Architecture**: API-first, mobile-ready
- 🎯 **MVP Features**:
  - [ ] Dyslexia profile diagnosis (ML)
  - [ ] Adaptive exercises (LLM)
  - [ ] Text-to-speech support
  - [ ] Progress tracking
  - [ ] Teacher/Parent dashboard

---

## 📝 Remaining Work

See `task.md` in the artifacts for detailed checklist. Main items:

1. Complete component migrations (4 more components)
2. Build authentication pages (login/signup)
3. Implement diagnosis flow
4. Create exercise system
5. Add progress tracking
6. Build teacher dashboard
7. Integrate 11Labs TTS (optional)
8. Testing and optimization

---

## 🆘 Troubleshooting

### "Module not found" errors
```bash
npm install
npm run dev
```

### Prisma errors
```bash
npm run db:generate
```

### Port already in use
The app will automatically use an available port (3001, 3002, etc.)

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Gemini AI Documentation](https://ai.google.dev/docs)
- [Capacitor Documentation](https://capacitorjs.com/docs)

---

## 👥 Team

DisleksiAI - TÜBITAK 2204-A Project

---

## 📄 License

Private - TÜBITAK 2204-A Project

---

**🎉 Migration Complete! The foundation is ready. Let's build an amazing dyslexia learning platform! 🚀**
