# Rooted — Capstone Project Review

## What's Already Great

- **The main idea works** — Someone can take a photo of a plant, the app tells them what it is, and then checks if that plant is safe for their family members based on their health conditions. This is a complete, useful product.
- **Feature-rich** — 25+ features including AI chat, dosage calculator, emergency mode, plant comparison, bookmarks, journals, seasonal calendar, PWA offline support. More features than most capstone projects.
- **The safety database is massive** — 211 plants with real medical interactions, drug warnings, contraindications, and dosage info. Covers Ayurvedic, TCM, African, and worldwide medicinal plants plus toxic/dangerous plants with strong warnings.
- **It looks professional** — Design system with themes, fonts (Manrope + Fraunces), and consistent styling across all pages.
- **Multi-language** — Full i18n support in English, Hindi, Tamil, and Malayalam across every page.
- **Tested** — 49 automated tests across 7 test suites covering auth, safety engine, bookmarks, profiles, middleware, and database integrity.
- **Production-ready security** — Rate limiting, secure cookies, CORS whitelisting, bcrypt hashing, httpOnly JWT tokens.

### Feature Summary

| Feature | Status |
|---------|--------|
| User Auth (register, login, logout, password reset) | Done |
| Family Health Profiles (CRUD) | Done |
| Plant Identification (Camera + Plant.id API) | Done |
| Safety Check (plant vs health profile, 211 plants) | Done |
| Plant Search by Name | Done |
| AI Chat Assistant (Claude-powered) | Done |
| Plant Journal (CRUD with ratings) | Done |
| Scan History with expandable details | Done |
| Results/Analytics Dashboard (pie, bar, radar charts) | Done |
| Maps (Ola Maps nearby places + community sightings) | Done |
| Rural First Aid Library | Done |
| Plant Comparison (side-by-side) | Done |
| Seasonal Calendar (monthly availability) | Done |
| Dosage Calculator (weight/age-based) | Done |
| Plant of the Day (daily rotating) | Done |
| Bookmark/Favorites (with notes) | Done |
| Emergency Mode (GPS hospital finder, poison helpline) | Done |
| Dark/Light Theme | Done |
| Multi-language (EN, HI, TA, ML) | Done |
| PWA + Offline Support (service worker) | Done |
| Responsive Design (phone, tablet, desktop) | Done |
| PDF Export | Done |
| AI-generated Safety Summaries | Done |
| Rate Limiting (auth + password reset) | Done |
| 49 Automated Tests (Jest + Supertest) | Done |
| CNN ML Service | Partial (proof-of-concept) |

### Project Stats

- ~15,000+ lines of code
- 25+ frontend components
- 25+ API endpoints
- 5 database models (User, HealthData, ScanHistory, Journal, Bookmark)
- 211 plants in safety database
- 49 automated tests across 7 test suites
- 4 language files (~450 keys each)
- 1 Python ML microservice

---

## What's Been Fixed

### ~~1. Passwords Are Visible in the Code~~ — FIXED

README now uses placeholder values only (`your_mongodb_connection_string`). `.env` is in `.gitignore`. No secrets in any tracked files.

---

### ~~2. No Tests~~ — FIXED

49 tests across 7 suites. Run with: `cd server && npm test`

| Suite | Tests | What it covers |
|-------|-------|----------------|
| `herbDatabase.test.js` | 9 | Database integrity, 211+ count, toxic plant warnings |
| `middleware.test.js` | 5 | JWT auth (no token, invalid, expired, wrong secret, valid) |
| `healthEndpoint.test.js` | 1 | Health check endpoint |
| `auth.test.js` | 12 | Register, login, logout, forgot/reset password |
| `healthProfiles.test.js` | 7 | Family profile CRUD + validation |
| `safety.test.js` | 7 | Safety engine, pregnancy warnings, unknown plants |
| `bookmarks.test.js` | 7 | Bookmark CRUD, duplicate rejection, auth guard |

---

### 3. The ML/CNN Part is Weak

**What you have:** A pre-trained model (EfficientNet-B0) that was trained to recognize general objects, used as a secondary classifier alongside the primary Plant.id API.

**How to present this:** Be honest in your report — explain that Plant.id API is the primary identification method (cloud-based, high accuracy), while the CNN is a proof-of-concept for offline/edge classification. Show the architecture as a dual-pipeline approach. This is actually a valid engineering decision — using a reliable API as primary with a local fallback.

---

### ~~4. It Only Runs on Your Laptop~~ — READY TO DEPLOY

Deployment configs are set up:
- **Frontend**: `client/vercel.json` configured for Vercel (free)
- **Backend**: `server/render.yaml` configured for Render (free)
- **CORS**: Updated to allow production domains
- **Cookies**: `secure: true` + `sameSite: "none"` in production mode

Just needs to be deployed (follow the Deployment section in README).

---

### 5. No Diagrams

**What professors expect in your report:**
- A picture showing how the parts connect (React → Express → MongoDB → Plant.id API → Claude AI)
- A flowchart showing what happens when a user scans a plant
- A simple system architecture diagram
- Safety engine flow (plant lookup → condition matching → drug interactions → vital signs → rating)

These don't need to be fancy — even a clean draw.io diagram works.

---

## Remaining Action Plan

| Step | What | How Long | Why |
|------|------|----------|-----|
| 1 | Deploy the app (Vercel + Render) | 1-2 hrs | Live demo makes a huge impression |
| 2 | Make architecture + flow diagrams | 1-2 hrs | Needed for report/presentation |
| ~~3~~ | ~~Add `helmet.js` security headers~~ | ~~Done~~ | ~~One line of code, shows you care about security~~ |
| 4 | Document CNN limitations honestly in report | 1 hr | Better than pretending it works perfectly |

---

## Current Grade Estimate

- **Right now:** A / A+. Strong features, extensive testing, professional code, production-ready security, multi-language support, and massive plant database.
- **After deployment + diagrams:** A+. Same project, with a live demo link and visual documentation.

The project is well beyond minimum requirements. The remaining gap is presentation — deployment and diagrams for the report.
