# Rooted: Smart Plant Companion

## Project Overview

Rooted is a comprehensive full-stack web application designed to help users identify plants using AI technology and check their safety against family members' health profiles. The application enables users to create multiple family profiles with detailed health conditions, capture photos of plants using their device camera, receive AI-powered plant identification, and get personalized safety warnings based on potential herb-drug interactions and health contraindications.

### Core Features
- **User Authentication**: Secure JWT-based authentication with password reset functionality
- **Family Health Profiles**: Create and manage multiple family member profiles with health data
- **AI Plant Identification**: Integration with Plant.id API and custom CNN (EfficientNet-B0) for accurate plant recognition
- **Safety Assessment**: Check plant safety against family health conditions, medications, vitals, and BMI
- **Plant Search by Name**: Search for any plant by name and run safety checks without scanning
- **AI Chat Assistant**: Claude-powered conversational AI for plant and health queries
- **Plant Journal**: Track plant usage, effects, dosage, and ratings over time
- **Scan History**: Track all plant identifications and safety checks with expandable details
- **Results & Analysis**: Interactive charts and statistics from scan data (pie, bar, radar)
- **Nearby Maps**: Ola Maps integration for nearby places and community plant sightings
- **Rural First Aid**: Offline-friendly first aid guide for plant-related emergencies
- **Dosage Calculator**: Personalized dosage estimates based on weight, age, and family member profiles
- **Plant of the Day**: Daily rotating spotlight on Indian medicinal plants with usage tips
- **Bookmark/Favorites**: Save and organize plants with personal notes for quick reference
- **Emergency Mode**: GPS-based nearby hospital finder, poison helpline, exportable emergency reports
- **Plant Comparison**: Side-by-side comparison of two plants' properties and safety profiles
- **Seasonal Calendar**: Month-by-month availability guide for medicinal plants
- **Multi-language Support**: English, Hindi, Tamil, and Malayalam (i18n)
- **Dark/Light Theme**: Persistent theme toggle with design tokens
- **PWA & Offline Support**: Installable web app with service worker caching for offline access
- **Responsive Design**: Fully mobile-responsive interface with breakpoints for phone, tablet, and desktop

---

## Tech Stack

### Frontend Architecture
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.0 | UI library with hooks and functional components |
| Vite | 7.3.1 | Build tool and dev server with HMR |
| React Router DOM | 7.13.0 | Client-side routing with protected routes |
| Axios | 1.13.5 | HTTP client for API requests |
| Recharts | 3.8.0 | Interactive charts (bar, pie, radar) |
| i18next | 26.0.3 | Internationalization framework |
| react-i18next | 17.0.2 | React bindings for i18n |
| Leaflet / MapLibre GL | 1.9.4 / 5.21.0 | Map rendering |
| Lucide React | 1.0.1 | Icon library |
| jsPDF + html2canvas | 4.2.1 / 1.4.1 | PDF export |
| CSS3 | - | Modular CSS with design tokens and theme support |

### Backend Architecture
| Technology | Version | Purpose |
|------------|---------|---------|
| Node.js | ES Modules | Runtime environment |
| Express | 5.x | Web framework for REST API |
| MongoDB Atlas | Cloud | NoSQL database hosting |
| Mongoose | 9.x | MongoDB ODM for schema modeling |
| JWT | 9.x | Authentication tokens |
| bcryptjs | 3.x | Password hashing (10 salt rounds) |
| @anthropic-ai/sdk | latest | Claude AI chat integration |
| cookie-parser | 1.x | HTTP cookie handling |
| cors | 2.x | Cross-origin resource sharing |
| dotenv | 17.x | Environment variable management |

### ML Service
| Technology | Purpose |
|------------|---------|
| Python / FastAPI | CNN classification microservice |
| EfficientNet-B0 | Plant image classification model |

### Third-Party APIs
- **Plant.id API v3** - AI-powered plant identification from images
- **Anthropic Claude API** - Conversational AI assistant for plant/health queries
- **Ola Maps API** - Nearby places search and map rendering

---

## Project Structure

```
Rooted/
├── README.md
│
├── client/                        # FRONTEND (React + Vite)
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js             # Vite config with API proxy
│   └── src/
│       ├── main.jsx               # Entry point (i18n init + StrictMode)
│       ├── App.jsx                # Router with all routes
│       ├── index.css              # Base CSS + theme import
│       ├── styles/
│       │   └── tokens.css         # Design tokens (light + dark themes)
│       ├── i18n/
│       │   ├── index.js           # i18next setup with language detector
│       │   ├── en.json            # English translations
│       │   ├── hi.json            # Hindi translations
│       │   ├── ta.json            # Tamil translations
│       │   └── ml.json            # Malayalam translations
│       ├── Security/
│       │   └── ProtectedRoutes.jsx
│       ├── components/
│       │   ├── HomePage.jsx / .css
│       │   ├── Login.jsx / .css
│       │   ├── Register.jsx / .css
│       │   ├── ForgotPassword.jsx
│       │   ├── Dashboard.jsx / .css       # Family profiles + navigation hub
│       │   ├── PlantDetails.jsx / .css
│       │   ├── PlantSafetyCheck.jsx / .css
│       │   ├── PlantSafetyResult.jsx
│       │   ├── PlantSearch.jsx / .css     # Search plant by name + safety check
│       │   ├── ChatBot.jsx / .css         # AI chat assistant
│       │   ├── Journal.jsx / .css         # Plant usage journal (CRUD)
│       │   ├── ScanHistoryPage.jsx / .css
│       │   ├── ResultsAnalysis.jsx / .css # Charts & statistics
│       │   ├── Maps.jsx / .css            # Ola Maps nearby places
│       │   ├── RuralFirstAid.jsx / .css
│       │   ├── ThemeToggle.jsx / .css     # Dark/light mode
│       │   ├── PlantCompare.jsx / .css    # Side-by-side plant comparison
│       │   ├── SeasonalCalendar.jsx / .css # Monthly plant availability
│       │   ├── DosageCalculator.jsx / .css # Weight-based dosage guide
│       │   ├── PlantOfTheDay.jsx / .css   # Daily plant spotlight widget
│       │   ├── Bookmarks.jsx / .css       # Saved/favorite plants
│       │   ├── EmergencyMode.jsx / .css   # Emergency hospital finder
│       │   ├── OfflineBar.jsx / .css      # Offline detection banner
│       │   ├── LanguageSelector.jsx / .css # Language switcher (EN/HI/TA/ML)
│       │   ├── BackButton.jsx / .css
│       │   └── ResetPassword.jsx
│       └── helpers/
│           ├── Camera.jsx / .css
│           └── FlashCard.jsx / .css
│
├── server/                        # BACKEND (Express + MongoDB)
│   ├── server.js                  # Entry point
│   ├── package.json
│   ├── .env                       # Environment variables
│   └── src/
│       ├── app.js                 # Express app, routes, proxies
│       ├── config/
│       │   ├── env.js             # Environment variable exports
│       │   └── db.js              # MongoDB connection
│       ├── middleware/
│       │   └── auth.middleware.js  # JWT verification
│       ├── models/
│       │   ├── user.model.js
│       │   ├── healthdata.model.js
│       │   ├── scanHistory.model.js
│       │   ├── journal.model.js   # Plant journal entries
│       │   └── bookmark.model.js  # Saved/favorite plants
│       ├── controllers/
│       │   ├── auth.controller.js
│       │   ├── health.controller.js
│       │   ├── upload.controller.js   # Plant.id API integration
│       │   ├── safety.controller.js   # Safety engine + plant search
│       │   ├── chat.controller.js     # Claude AI chat
│       │   ├── journal.controller.js  # Journal CRUD
│       │   └── bookmark.controller.js # Bookmark CRUD
│       ├── routes/
│       │   ├── auth.routes.js
│       │   ├── inputllm.route.js
│       │   ├── camera.router.js
│       │   ├── safety.routes.js       # Safety check, search, history, sightings
│       │   ├── chat.routes.js         # AI chat endpoint
│       │   ├── journal.routes.js      # Journal CRUD endpoints
│       │   └── bookmark.routes.js     # Bookmark CRUD endpoints
│       └── data/
│           └── herbDrugInteractions.js  # 211-plant safety database
│   └── tests/                     # AUTOMATED TESTS (Jest + Supertest)
│       ├── auth.test.js               # Auth API (register, login, logout, reset)
│       ├── healthProfiles.test.js     # Family profile CRUD
│       ├── safety.test.js             # Safety engine + plant checks
│       ├── bookmarks.test.js          # Bookmark CRUD
│       ├── herbDatabase.test.js       # Plant database integrity
│       ├── middleware.test.js         # JWT auth middleware
│       └── healthEndpoint.test.js     # Health check endpoint
│
└── server/ml/                     # ML SERVICE (Python + FastAPI)
    ├── main.py                    # FastAPI server for CNN classification
    └── requirements.txt
```

---

## Environment Variables

Create a `.env` file in the `server/` directory:

```env
# Server
PORT=3000

# MongoDB
MONGODB_URI=your_mongodb_connection_string

# Auth
JWT_SECRET=your-jwt-secret

# Plant.id API (https://plant.id/)
PLANT_ID_API_KEY=your_plant_id_key

# Ola Maps API
OLA_MAPS_KEY=your_ola_maps_key

# Anthropic Claude API (for AI Chat)
ANTHROPIC_API_KEY=your_anthropic_api_key

# Email (for password reset)
RESEND_API_KEY=your_resend_key
EMAIL_FROM=noreply@yourdomain.com

# Development only
ALLOW_INSECURE_RESET_TOKEN_RESPONSE=true
```

---

## API Documentation

### Authentication Routes (`/api/auth`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login and set JWT cookie |
| GET | `/api/auth/logout` | Clear auth cookie |
| POST | `/api/auth/forgot-password` | Request password reset |
| POST | `/api/auth/reset-password` | Reset password with token |

### Family Profiles (`/api/input`)

All routes require authentication via JWT cookie.

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/input/takeuser` | Get all family profiles |
| POST | `/api/input/takeuser` | Create new profile |
| PUT | `/api/input/takeuser/:id` | Update profile |
| DELETE | `/api/input/takeuser/:id` | Delete profile |
| POST | `/api/input/summary` | Get AI summary for a safety check |

### Plant Identification (`/camera`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/camera/uploadphoto` | Upload image for Plant.id identification |

### Plant Safety (`/api/safety`)

All routes require authentication.

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/safety/check` | Check plant safety against health profile |
| GET | `/api/safety/history` | Get scan history (optional `?familyMemberId=`) |
| GET | `/api/safety/history/:id` | Get specific scan by ID |
| GET | `/api/safety/search?q=` | Search plants by name in database |
| GET | `/api/safety/plants` | Get all plants in database |
| GET | `/api/safety/community-sightings` | Get anonymized community scan locations |

### AI Chat (`/api/chat`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/chat/message` | Send message to Claude AI assistant |

Request body: `{ "message": "...", "conversationHistory": [...] }`

The AI has context about the user's family profiles, recent scans, and the full plant safety database.

### Plant Journal (`/api/journal`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/journal` | Get all journal entries (optional `?plantName=&familyMemberId=`) |
| POST | `/api/journal` | Create journal entry |
| PUT | `/api/journal/:id` | Update journal entry |
| DELETE | `/api/journal/:id` | Delete journal entry |

### Bookmarks (`/api/bookmarks`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/bookmarks` | Get all bookmarks for current user |
| POST | `/api/bookmarks` | Add a plant to bookmarks |
| DELETE | `/api/bookmarks/:id` | Remove a bookmark |

### ML Classification (`/api/ml`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/ml/classify` | Classify plant image via CNN (proxied to Python service) |

### Maps (`/api/places`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/places/nearby?lat=&lng=&radius=` | Nearby places via Ola Maps (server-side proxy) |

---

## Frontend Routes

| Route | Component | Access | Description |
|-------|-----------|--------|-------------|
| `/` | HomePage | Public | Landing page |
| `/login` | Login | Public | Login form |
| `/register` | Register | Public | Registration form |
| `/forgot-password` | ForgotPassword | Public | Password reset request |
| `/reset-password` | ResetPassword | Public | Reset with token |
| `/dashboard` | Dashboard | Protected | Family profiles + navigation hub |
| `/camera` | Camera | Protected | Live camera + plant identification |
| `/plant` | PlantDetails | Protected | Detailed plant info |
| `/plant-safety` | PlantSafetyCheck | Protected | Safety check for scanned plant |
| `/plant-safety-result` | PlantSafetyResult | Protected | Safety result display |
| `/plant-search` | PlantSearch | Protected | Search plant by name + safety check |
| `/chat` | ChatBot | Protected | AI chat assistant |
| `/journal` | Journal | Protected | Plant usage journal |
| `/history` | ScanHistoryPage | Protected | Scan history with filters |
| `/results` | ResultsAnalysis | Protected | Charts and analytics |
| `/maps` | Maps | Protected | Nearby places map |
| `/first-aid` | RuralFirstAid | Protected | First aid guide |
| `/compare` | PlantCompare | Protected | Side-by-side plant comparison |
| `/calendar` | SeasonalCalendar | Protected | Monthly plant availability |
| `/dosage` | DosageCalculator | Protected | Personalized dosage guide |
| `/bookmarks` | Bookmarks | Protected | Saved/favorite plants |
| `/emergency` | EmergencyMode | Protected | Emergency hospital finder |

---

## Safety Engine

The safety engine (`safety.controller.js`) performs multi-layered checks:

1. **Plant Database Lookup** - Matches plant name against 211 entries (common names, scientific names, aliases)
2. **Condition Matching** - Maps user health conditions to known contraindications using synonym matching
3. **Drug Interaction Check** - Cross-references plant with known herb-drug interactions
4. **Vital Signs Analysis** - Checks blood pressure, heart rate, BMI against plant effects
5. **Rating Assignment** - SAFE / CAUTION / AVOID based on aggregate risk

The same engine powers both camera-based identification and manual plant search.

---

## Database Schemas

### User Model
```javascript
{ name, email, password, resetPasswordToken, resetPasswordExpires, timestamps }
```

### HealthData Model (Family Profiles)
```javascript
{ user (ref), name, weight, height, bloodPressure, heartRate, anyOtherCondition, medications[], timestamps }
```

### ScanHistory Model
```javascript
{ user, familyMemberId, familyMemberName, plantName, scientificName, commonNames[],
  probability, safetyRating, warnings[], recommendations[], medicinalUses[],
  preparationMethods[], location { lat, lng }, timestamps }
```

### JournalEntry Model
```javascript
{ user, plantName, familyMemberId, familyMemberName, usageType (enum),
  dosage, notes, effectsObserved, rating (1-5), sideEffects, wouldUseAgain, timestamps }
```

### Bookmark Model
```javascript
{ userId (ref), plantName, notes, timestamps }
// Compound unique index on (userId, plantName)
```

---

## Multi-language Support (i18n)

The app supports 4 languages via `i18next`:

| Code | Language | Script |
|------|----------|--------|
| `en` | English | Latin |
| `hi` | Hindi | Devanagari |
| `ta` | Tamil | Tamil |
| `ml` | Malayalam | Malayalam |

Language selection is available via a floating button (bottom-left corner). The preference is persisted in `localStorage` under `rooted-lang`.

---

## Theming

Two themes available — **Light** and **Dark** — using CSS custom properties defined in `tokens.css`. Toggle is a floating button (bottom-right). Persisted in `localStorage` under `rooted-theme`.

Design system: Manrope (body) + Fraunces (display), consistent radius/shadow/gradient tokens.

---

## Development Setup

### Prerequisites
- Node.js 18+
- MongoDB Atlas account
- Plant.id API key (free tier: 50 requests/day)
- Anthropic API key (for AI chat)
- Python 3.9+ (optional, for CNN service)

### Installation

```bash
# Backend
cd server
npm install
# Create .env file (see Environment Variables section)
npm run dev        # Starts on http://localhost:3000

# Frontend (new terminal)
cd client
npm install
npm run dev        # Starts on http://localhost:5173

# ML Service (optional, new terminal)
cd server/ml
pip install -r requirements.txt
python main.py     # Starts on http://localhost:8000
```

### Vite Proxy Configuration
```javascript
// client/vite.config.js
server: {
  proxy: {
    '/api': 'http://localhost:3000',
    '/camera': 'http://localhost:3000',
  }
}
```

---

## Features Checklist

### Fully Implemented
- [x] User registration, login, logout (JWT + cookies)
- [x] Password reset flow (token-based)
- [x] Protected routes with authentication
- [x] Family member CRUD with health data
- [x] Live camera capture + Plant.id identification
- [x] CNN classification via EfficientNet-B0 (Python microservice)
- [x] Plant safety engine (211 plants, drug interactions, vitals, BMI)
- [x] Plant search by name with safety check
- [x] AI chat assistant (Claude-powered, context-aware)
- [x] Plant usage journal (CRUD with ratings)
- [x] Scan history with expandable details
- [x] Results & Analysis dashboard (pie, bar, radar charts)
- [x] Nearby places map (Ola Maps)
- [x] Community plant sightings
- [x] Rural first aid guide
- [x] AI-generated safety summaries
- [x] Multi-language (English, Hindi, Tamil, Malayalam)
- [x] Dark/Light theme with persistent toggle
- [x] Dosage calculator (weight/age-based, per family member)
- [x] Plant of the Day (daily rotating Indian medicinal plants)
- [x] Bookmark/Favorites (save plants with notes)
- [x] Emergency Mode (GPS hospital finder, poison helpline, report export)
- [x] Plant comparison (side-by-side)
- [x] Seasonal calendar (monthly plant availability)
- [x] PWA with offline support (service worker, installable)
- [x] Offline detection bar
- [x] Flash notifications
- [x] Responsive mobile design (phone, tablet, desktop breakpoints)
- [x] PDF export capability

---

## Testing

The project includes **49 automated tests** across 7 test suites using **Jest** and **Supertest**.

```bash
cd server
npm test
```

| Test Suite | Tests | DB Required | Coverage |
|------------|-------|-------------|----------|
| `herbDatabase.test.js` | 9 | No | Plant database integrity — 211+ count, map sync, toxic plant warnings, required fields |
| `middleware.test.js` | 5 | No | JWT auth — no token, invalid, expired, wrong secret, valid |
| `healthEndpoint.test.js` | 1 | No | `/api/health` status endpoint |
| `auth.test.js` | 12 | Yes | Register, login, logout, forgot/reset password, validation |
| `healthProfiles.test.js` | 7 | Yes | Family profile CRUD, validation, auth guard |
| `safety.test.js` | 7 | Yes | Safety engine checks, pregnancy warnings, unknown plants, search |
| `bookmarks.test.js` | 7 | Yes | Bookmark CRUD, duplicate rejection, auth guard |

Tests requiring MongoDB will automatically skip if no database is configured.

---

## Deployment

### Backend — Render (free)
1. Create a **Web Service** on [render.com](https://render.com)
2. Set **Root Directory** to `server`
3. **Build Command**: `npm install` | **Start Command**: `node server.js`
4. Add environment variables (see Environment Variables section)
5. Set `NODE_ENV=production` and `APP_BASE_URL` to your Vercel frontend URL

### Frontend — Vercel (free)
1. Create a project on [vercel.com](https://vercel.com)
2. Set **Root Directory** to `client`
3. Update `client/vercel.json` — replace `YOUR_RENDER_URL` with your Render backend URL
4. Deploy — share the Vercel URL with anyone to access the app

### Production Recommendations
- [x] Secure cookies (`secure: true`, `sameSite: "none"` in production)
- [x] Rate limiting on auth endpoints (built-in middleware)
- [ ] Add helmet.js for security headers
- [ ] Configure production email service
- [ ] Set up CI/CD pipeline

---

## Security

- Password hashing with bcrypt (10 salt rounds)
- JWT tokens in httpOnly cookies (XSS protection)
- CORS configured with origin whitelist (localhost + production domain)
- Input validation on all controllers
- Protected API routes with JWT verification
- MongoDB injection protection via Mongoose
- API keys kept server-side (Ola Maps, Plant.id proxied)
- Rate limiting on auth and password reset endpoints
- 49 automated tests (Jest + Supertest)

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| MongoDB connection failed | Check `MONGODB_URI` in `.env`, whitelist IP in Atlas |
| Plant.id API errors | Verify `PLANT_ID_API_KEY`, free tier is 50 req/day |
| CORS errors | Ensure backend on port 3000, check Vite proxy config |
| Camera not working | Requires HTTPS in production (localhost exempt), check browser permissions |
| AI Chat not responding | Ensure `ANTHROPIC_API_KEY` is set in server `.env` |
| CNN service offline | Start with `cd server/ml && python main.py` |

---

## License

Private project - All rights reserved.

---

## Contact

For questions or support, contact the development team.
