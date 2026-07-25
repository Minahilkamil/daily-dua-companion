
# Daily Dua Companion ✨

> Your personal AI-powered guide for authentic, verified Islamic duas for every moment of daily life.

<p align="center">
  <img src="./assets/images/icon.png" alt="Daily Dua Companion Icon" width="120" />
</p>

<p align="center">
  <a href="#"><img src="https://img.shields.io/badge/Expo-54.0.0-blue?style=for-the-badge" /></a>
  <a href="#"><img src="https://img.shields.io/badge/React%20Native-0.81.5-61DAFB?style=for-the-badge&logo=react" /></a>
  <a href="#"><img src="https://img.shields.io/badge/Supabase-2.45.3-3ECF8E?style=for-the-badge&logo=supabase" /></a>
  <a href="#"><img src="https://img.shields.io/badge/TypeScript-5.9.2-3178C6?style=for-the-badge&logo=typescript" /></a>
  <a href="#"><img src="https://img.shields.io/badge/platform-ios%20%7C%20android%20%7C%20web-lightgrey?style=for-the-badge" /></a>
</p>

---

## 📖 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Screenshots](#-screenshots)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Supabase Setup](#supabase-setup)
  - [Running the App](#running-the-app)
- [Environment Variables](#-environment-variables)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## ✨ Features

### Core Functionality
- **🤖 AI Dua Assistant**: Chat-style interface that understands natural language queries (English + Roman Urdu/Hindi) and provides contextually relevant, verified duas.
- **📚 Dua Categories**: Browse duas organized by daily situations (sleep, travel, meals, distress, etc.) — expand any category to read the full dua in Arabic, transliteration, and dual-language translation.
- **❤️ Favorites Bookmarks**: Save your most-used duas with a single tap. Access them instantly even when offline.
- **🌗 Light & Dark Mode**: Switch between elegant light and dark themes. Preference is saved locally per device.
- **🔐 Secure Authentication**: Email/password sign-up and login powered by Supabase Auth, complete with session persistence.
- **☁️ Cross-device Sync**: Chat history and favorites are stored in Supabase, so they follow you across devices.
- **📜 Verified References**: Every dua is sourced from authentic hadith collections (Sahih al-Bukhari, Sahih Muslim, Sunan Abi Dawud, etc.) — no invented or guessed religious text.

### UX Highlights
- **Custom Sidebar Navigation**: Hamburger-style menu for clean, minimal screen real estate.
- **Beautiful Typography**: Serif fonts and a warm, Islamic-inspired palette of cream, forest green, and gold.
- **Typing Indicator**: Visual feedback while the AI generates a response.
- **Offline-Capable UI**: AsyncStorage for theme + session persistence.

---

## 🛠️ Tech Stack

| Layer          | Technology                                                                 |
|----------------|----------------------------------------------------------------------------|
| **Frontend**   | React Native 0.81, Expo 54, React 19, TypeScript 5.9                      |
| **Navigation** | React Navigation v6 (Native Stack + Custom Sidebar/Drawer)                |
| **Backend**    | Supabase (PostgreSQL + Auth + Edge Functions + Row Level Security)        |
| **AI / LLM**   | Google Gemini 3.1 Flash Lite via Supabase Edge Functions                  |
| **Storage**    | `@react-native-async-storage/async-storage` (theme + sessions)            |
| **Icons**      | `@expo/vector-icons` (Ionicons)                                            |
| **State**      | React Hooks (`useState`, `useEffect`, `useMemo`, `useRef`)                 |

---

## 📱 Screenshots

| Light Chat | Dark Chat | Categories | Favorites |
| :--------: | :-------: | :--------: | :-------: |
| *(Add screenshots here)* | *(Add screenshots here)* | *(Add screenshots here)* | *(Add screenshots here)* |

> 💡 **Tip**: Replace the placeholders above with actual screenshots when you upload the repo.

---

## 🏗️ Project Structure

```
daily-dua-companion/
├── .env                         # Local env vars (gitignored)
├── .env.example                 # Example env template
├── .gitignore
├── app.json                     # Expo app config
├── App.tsx                      # Root entry: navigation, theme, auth state
├── babel.config.js
├── metro.config.js
├── package.json
├── tsconfig.json
│
├── assets/
│   └── images/
│       ├── adaptive-icon.png
│       ├── icon.png
│       └── splash.png
│
├── src/
│   ├── constants/
│   │   └── colors.ts            # Light/dark theme palette
│   │
│   ├── data/
│   │   └── duas.ts              # Verified dua database + matchers
│   │
│   ├── screens/
│   │   ├── Login.tsx
│   │   ├── SignUp.tsx
│   │   ├── Chat.tsx             # Main chat screen
│   │   ├── Categories.tsx       # Browse duas by category
│   │   └── Favorites.tsx        # Saved duas
│   │
│   ├── services/
│   │   ├── supabase.ts          # Supabase client + theme/favorites helpers
│   │   └── ai.ts                # AI response pipeline
│   │
│   └── types/
│       └── index.ts             # Shared TypeScript interfaces
│
└── supabase/
    ├── config.toml
    ├── functions/
    │   └── chat-completion/
    │       └── index.ts         # Edge Function: LLM proxy + system prompt
    └── migrations/
        └── 001_create_favorites_table.sql
```

### Key Files Explained

| File | Purpose |
|------|---------|
| [duas.ts](file:///g:/app/src/data/duas.ts) | Single source of truth for verified duas. Also exports `findMatchingDua()` and `extractDuaFromMessage()` helpers. |
| [ai.ts](file:///g:/app/src/services/ai.ts) | Matches user query → local dua → forwards matched dua to Supabase Edge Function so LLM never hallucinates Arabic text. |
| [chat-completion/index.ts](file:///g:/app/supabase/functions/chat-completion/index.ts) | Serverless function that talks to Gemini API, with a strict safety system prompt to prevent invented dua text. |
| [supabase.ts](file:///g:/app/src/services/supabase.ts) | Reusable Supabase client, plus typed helpers for theme storage and favorite CRUD (RLS-protected). |
| [colors.ts](file:///g:/app/src/constants/colors.ts) | Centralized, themed color palette exported through `getColors(theme)`. |

---

## 🚀 Getting Started

### Prerequisites

Before you begin, make sure you have:

1. [Node.js](https://nodejs.org/) ≥ 18
2. [Expo Go App](https://expo.dev/go) installed on your iOS/Android device (optional — or use an emulator)
3. A free [Supabase](https://supabase.com) project
4. A Google AI Studio API key (for Gemini) — get one at [aistudio.google.com](https://aistudio.google.com)

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/Minahilkamil/daily-dua-companion.git
cd daily-dua-companion

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Then open .env and fill in your Supabase URL + anon key
```

### Supabase Setup

#### 1. Run the Database Migration

This creates the `favorites` table with Row-Level-Security policies so users can only manage their own bookmarks.

```sql
-- supabase/migrations/001_create_favorites_table.sql

CREATE TABLE favorites (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    dua_id TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, dua_id)
);

ALTER TABLE favorites ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own favorites"
    ON favorites FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own favorites"
    ON favorites FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own favorites"
    ON favorites FOR DELETE
    USING (auth.uid() = user_id);
```

Run this in your Supabase Dashboard → **SQL Editor** → **New Query** → paste → **Run**.

You also need a `messages` table for chat history (same RLS pattern — `user_id REFERENCES auth.users(id)`, plus `role`, `content`, `created_at` columns). Create that if not already present.

#### 2. Deploy the Edge Function

```bash
# Install Supabase CLI if you don't have it
npm install -g supabase

# Login & link
supabase login
supabase link --project-ref YOUR_PROJECT_REF

# Set the Gemini API key as a secret
supabase secrets set GEMINI_API_KEY=your_google_gemini_api_key

# Deploy the function
supabase functions deploy chat-completion
```

### Running the App

```bash
# Start Expo dev server
npm start

# Or platform-specific:
npm run ios      # iOS simulator
npm run android  # Android emulator
npm run web      # Web browser
```

Then scan the QR code with the **Expo Go** app on your phone. 🎉

---

## 🔐 Environment Variables

Copy `.env.example` to `.env` and fill in the values:

```env
EXPO_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
EXPO_PUBLIC_LLM_API_KEY=                      # (Optional — not used in current Gemini impl)
EXPO_PUBLIC_LLM_ENDPOINT=https://api.openai.com/v1/chat/completions
```

| Variable | Required | Description |
|----------|----------|-------------|
| `EXPO_PUBLIC_SUPABASE_URL` | ✅ | Project URL from Supabase Dashboard → Settings → API |
| `EXPO_PUBLIC_SUPABASE_ANON_KEY` | ✅ | `anon` public key (safe to ship with the app) |
| `EXPO_PUBLIC_LLM_API_KEY` | ❌ | Reserved for future OpenAI-compatible endpoint switch |
| `EXPO_PUBLIC_LLM_ENDPOINT` | ❌ | Reserved for future OpenAI-compatible endpoint switch |

> ⚠️ **Security note**: The `GEMINI_API_KEY` is a *server-side secret*. Set it via `supabase secrets set`, **never** in `.env` or client code.

---

## 🗺️ Roadmap

Future improvements planned:

- [ ] 🔔 **Daily Dua Reminders** — Push notifications for morning/evening adhkar
- [ ] 📤 **Dua Sharing** — Share any dua as an image via WhatsApp/SMS
- [ ] 📿 **Tasbih Counter** — Built-in dhikr counter with vibration
- [ ] 🧭 **Qibla Direction** — Compass-based qibla finder
- [ ] 🔍 **Direct Dua Search** — Keyword search bar on a dedicated screen
- [ ] 🌐 **More Translations** — Arabic, Hindi, Bengali, Turkish, etc.
- [ ] 📴 **True Offline Mode** — SQLite/Realtime cache of all duas
- [ ] 📊 **Prayer Times** — Show next salat on the home header

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repo
2. Create your feature branch: `git checkout -b feat/amazing-feature`
3. Commit your changes: `git commit -m 'feat: add amazing feature'`
4. Push: `git push origin feat/amazing-feature`
5. Open a Pull Request

Please make sure to update tests as appropriate and follow the existing code style.

### Good First Issues
- Expand the dua database in `src/data/duas.ts` with more verified duas
- Improve Arabic font rendering (Amiri font is already installed)
- Add empty-state illustrations
- Write unit tests for `findMatchingDua` and `extractDuaFromMessage`

---

## 📜 License

Distributed under the **MIT License**. See `LICENSE` file for more information.

---


## 💬 Contact

Project Link: [https://github.com/Minahilkamil/daily-dua-companion](https://github.com/Minahilkamil/daily-dua-companion)

---

<div align="center">

Made with ❤️ for the Ummah.

*"And seek help through patience and prayer, and indeed, it is difficult except for the humbly submissive [to Allah]."* — Quran 2:45

</div>
