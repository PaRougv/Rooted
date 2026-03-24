-# Rooted: Smart Plant Companion

## Project Overview

Rooted is a comprehensive full-stack web application designed to help users identify plants using AI technology and check their safety against family members' health profiles. The application enables users to create multiple family profiles with detailed health conditions, capture photos of plants using their device camera, receive AI-powered plant identification, and get personalized safety warnings based on potential herb-drug interactions and health contraindications.

### Core Features
- **User Authentication**: Secure JWT-based authentication with password reset functionality
- **Family Health Profiles**: Create and manage multiple family member profiles with health data
- **AI Plant Identification**: Integration with Plant.id API for accurate plant recognition
- **Safety Assessment**: Check plant safety against family health conditions and medications
- **Responsive Design**: Fully mobile-responsive interface with password visibility toggles
- **Scan History**: Track all plant identifications and safety checks

---

## Tech Stack

### Frontend Architecture
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.0 | UI library with hooks and functional components |
| Vite | 7.3.1 | Build tool and dev server with HMR |
| React Router DOM | 7.13.0 | Client-side routing with protected routes |
| Axios | 1.13.5 | HTTP client for API requests |
| CSS3 | - | Modular CSS with responsive breakpoints |

### Backend Architecture
| Technology | Version | Purpose |
|------------|---------|---------|
| Node.js | ES Modules | Runtime environment |
| Express | 5.2.1 | Web framework for REST API |
| MongoDB Atlas | Cloud | NoSQL database hosting |
| Mongoose | 9.2.1 | MongoDB ODM for schema modeling |
| JWT | 9.0.3 | Authentication tokens |
| bcryptjs | 3.0.3 | Password hashing (10 salt rounds) |
| cookie-parser | 1.4.7 | HTTP cookie handling |
| cors | 2.8.6 | Cross-origin resource sharing |
| dotenv | 17.2.4 | Environment variable management |
| axios | 1.13.5 | HTTP client for Plant.id API |

### Third-Party APIs
- **Plant.id API v3** - AI-powered plant identification from images
  - Endpoint: `https://plant.id/api/v3/identification`
  - Supports base64 image encoding
  - Returns taxonomy, common names, descriptions, and Wikipedia links

---

## Project Structure

```
Rooted fail 2/
├── .git/                          # Git version control
├── .gitignore                     # Git ignore rules
├── README.md                      # This file
│
├── client/                        # FRONTEND (React + Vite)
│   ├── index.html                 # HTML entry point with viewport meta
│   ├── package.json               # Frontend dependencies
│   ├── vite.config.js             # Vite config with API proxy
│   ├── eslint.config.js           # ESLint configuration
│   ├── README.md                  # React/Vite default readme
│   ├── public/                    # Static public assets
│   └── src/
│       ├── main.jsx               # React entry point (StrictMode)
│       ├── App.jsx                # Main router with all routes
│       ├── App.css                # Global app styles
│       ├── index.css              # Base CSS variables and reset
│       ├── assets/                # Static images
│       │   ├── plant.png          # Favicon and logo
│       │   └── react.svg          # React logo
│       ├── Security/
│       │   └── ProtectedRoutes.jsx    # JWT route protection wrapper
│       ├── components/            # Page components
│       │   ├── HomePage.jsx       # Landing page with hero section
│       │   ├── HomePage.css       # Gradient background, glassmorphism
│       │   ├── Login.jsx          # Login form with password toggle
│       │   ├── Login.css          # Form styling, password visibility
│       │   ├── Register.jsx       # Registration form
│       │   ├── Register.css       # Registration-specific styles
│       │   ├── ForgotPassword.jsx # Password reset request
│       │   ├── ResetPassword.jsx  # New password with toggles
│       │   ├── Dashboard.jsx      # Main dashboard, family profiles
│       │   ├── Dashboard.css      # Card layouts, grid systems
│       │   ├── PlantDetails.jsx   # Detailed plant info display
│       │   ├── PlantDetails.css   # Image layouts, taxonomy display
│       │   ├── PlantSafetyCheck.jsx   # Safety check component
│       │   ├── PlantSafetyCheck.css   # Safety rating styles
│       │   ├── BackButton.jsx     # Reusable back navigation
│       │   └── BackButton.css     # Fixed positioning, hover effects
│       └── helpers/               # Reusable helper components
│           ├── Camera.jsx         # Camera capture & identification
│           ├── Camera.css         # Preview styling, button layouts
│           ├── FlashCard.jsx      # Toast notification component
│           └── FlashCard.css      # Slide-in animations, positioning
│
└── server/                        # BACKEND (Express + MongoDB)
    ├── server.js                  # Entry point, starts server
    ├── package.json               # Backend dependencies
    ├── package-lock.json          # Locked dependency versions
    ├── .env                       # Environment variables
    ├── .DS_Store                  # macOS metadata
    └── src/                       # Source code
        ├── app.js                 # Express app configuration
        ├── config/                # Configuration files
        │   ├── env.js             # Environment variable exports
        │   └── db.js              # MongoDB connection logic
        ├── middleware/            # Express middleware
        │   └── auth.middleware.js # JWT verification middleware
        ├── models/                # Mongoose schemas
        │   ├── user.model.js      # User schema with reset tokens
        │   ├── healthdata.model.js    # Family health profiles
        │   └── scanHistory.model.js   # Plant scan records
        ├── controllers/           # Route controllers
        │   ├── auth.controller.js     # Login, register, reset
        │   ├── health.controller.js   # Family profile CRUD
        │   ├── upload.controller.js   # Plant.id API integration
        │   ├── safety.controller.js   # Plant safety assessment
        │   └── verification.controller.js
        ├── routes/                # Express routers
        │   ├── auth.routes.js         # /api/auth/* routes
        │   ├── inputllm.route.js      # /api/input/* routes
        │   ├── camera.router.js       # /camera/* routes
        │   ├── safety.routes.js       # /api/safety/* routes
        │   └── verification.routes.js # /api/verification/* routes
        └── data/                  # Static data files
            └── herbDrugInteractions.js    # Plant safety database
```

---

## Environment Variables

Create a `.env` file in the `server/` directory:

```env
# Server Configuration
PORT=3000

# MongoDB Connection (Atlas)
MONGODB_URI=mongodb+srv://athul1810:Athulkrishna1810lol%2A@rootedtest.jpwuwbt.mongodb.net/rooted?retryWrites=true&w=majority&appName=Rootedtest

# JWT Secret (change in production)
JWT_SECRET=your-jwt-secret-change-in-production

# Plant.id API Key (from https://plant.id/)
PLANT_ID_API_KEY=j87F2aRWAnTdyG4mPleKkYaa8q6WcTNQSI8MwEwl7nwx7iRLTm
```

---

## API Documentation

### Authentication Routes (`/api/auth`)

#### POST `/api/auth/register`
Register a new user account.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Response:**
```json
{
  "message": "User registered successfully",
  "user": {
    "id": "65f123abc...",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Errors:**
- 400: Missing fields, invalid email, password < 6 chars
- 400: User already exists
- 500: Database error

---

#### POST `/api/auth/login`
Authenticate user and set JWT cookie.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "user": {
    "id": "65f123abc...",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Cookie Set:** `token` (httpOnly, 7 days)

---

#### GET `/api/auth/logout`
Clear authentication cookie.

**Response:**
```json
{
  "message": "Logged out successfully"
}
```

---

#### POST `/api/auth/forgot-password`
Request password reset token.

**Request Body:**
```json
{
  "email": "john@example.com"
}
```

**Response:**
```json
{
  "message": "Password reset token generated",
  "resetToken": "abc123xyz...",
  "note": "In production, this token would be sent to your email"
}
```

---

#### POST `/api/auth/reset-password`
Reset password using token.

**Request Body:**
```json
{
  "token": "abc123xyz...",
  "newPassword": "newpassword123"
}
```

**Response:**
```json
{
  "message": "Password reset successfully"
}
```

---

### Family Profiles (`/api/input`)

All routes require authentication via JWT cookie.

#### GET `/api/input/takeuser`
Get all family profiles for logged-in user.

**Response:**
```json
{
  "message": "Profiles fetched",
  "data": [
    {
      "id": "65f456def...",
      "name": "Mom",
      "weight": 65,
      "height": 165,
      "bloodPressure": "120/80",
      "heartRate": 72,
      "anyOtherCondition": "Diabetes"
    }
  ]
}
```

---

#### POST `/api/input/takeuser`
Create new family profile.

**Request Body:**
```json
{
  "name": "Dad",
  "weight": "80",
  "height": "175",
  "bloodpressure": "130/85",
  "heartrate": "68",
  "anyothercondition": "Hypertension"
}
```

**Response:**
```json
{
  "message": "Profile created successfully",
  "data": {
    "id": "65f789ghi...",
    "name": "Dad",
    "weight": 80,
    "height": 175,
    "bloodPressure": "130/85",
    "heartRate": 68,
    "anyOtherCondition": "Hypertension"
  }
}
```

---

#### PUT `/api/input/takeuser/:id`
Update existing profile.

**Request Body:** Same as POST (all fields optional)

**Response:** Updated profile object

---

#### DELETE `/api/input/takeuser/:id`
Delete family profile.

**Response:**
```json
{
  "message": "Profile deleted successfully"
}
```

---

### Plant Identification (`/camera`)

#### POST `/camera/uploadphoto`
Upload image for plant identification via Plant.id API.

**Request Body:**
```json
{
  "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ..."
}
```

**Response:**
```json
{
  "success": true,
  "plant": {
    "name": "Aloe vera",
    "probability": 0.9876
  },
  "identification": {
    "result": {
      "classification": {
        "suggestions": [
          {
            "name": "Aloe vera",
            "probability": 0.9876,
            "details": {
              "common_names": ["Aloe", "Medicinal Aloe"],
              "description": {
                "value": "Aloe vera is a succulent plant..."
              },
              "taxonomy": {
                "family": "Asphodelaceae",
                "genus": "Aloe"
              }
            }
          }
        ]
      }
    }
  }
}
```

---

### Plant Safety (`/api/safety`)

All routes require authentication.

#### POST `/api/safety/check`
Check plant safety against family member's health profile.

**Request Body:**
```json
{
  "plantName": "Aloe vera",
  "probability": 0.9876,
  "familyMemberId": "65f456def..."
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "plantName": "Aloe vera",
    "familyMemberName": "Mom",
    "probability": 0.9876,
    "safetyRating": "CAUTION",
    "warnings": [
      "⚠️ Avoid: Aloe vera is not recommended for people with diabetes",
      "💊 Drug Interactions: May interact with diabetes medications"
    ],
    "recommendations": [
      "⚠️ Consult a healthcare provider before using this plant..."
    ],
    "medicinalUses": ["Skin healing", "Digestive aid"],
    "preparationMethods": ["Gel topical application", "Juice"],
    "scannedAt": "2024-03-21T10:30:00.000Z"
  }
}
```

**Safety Ratings:**
- `SAFE` - No contraindications found
- `CAUTION` - Some warnings, consult healthcare provider
- `AVOID` - Contraindicated for this profile

---

#### GET `/api/safety/history`
Get scan history for user.

**Query Parameters:**
- `familyMemberId` (optional) - Filter by specific family member

**Response:** Array of scan history objects

---

#### GET `/api/safety/history/:id`
Get specific scan by ID.

---

## Frontend Routes

| Route | Component | Access | Description |
|-------|-----------|--------|-------------|
| `/` | `HomePage` | Public | Landing page with hero section, login/register buttons |
| `/login` | `Login` | Public | Email/password login with eye toggle, flash messages |
| `/register` | `Register` | Public | Registration form with validation |
| `/forgot-password` | `ForgotPassword` | Public | Email input for reset token |
| `/reset-password` | `ResetPassword` | Public | New password with confirmation toggle |
| `/dashboard` | `Dashboard` | Protected | Family profiles, add/edit/delete, health summaries |
| `/camera` | `Camera` | Protected | Live camera, capture, plant identification results |
| `/plant` | `PlantDetails` | Protected | Detailed plant info from identification |

---

## Component Details

### HomePage (`/client/src/components/HomePage.jsx`)
- Glassmorphism card design with gradient background
- Hero section with value proposition
- Login/Register CTAs
- Responsive: buttons stack on mobile

### Login (`/client/src/components/Login.jsx`)
- Email/password form
- Password visibility toggle (eye icon)
- FlashCard integration for errors/success
- Links to Register and Forgot Password
- Responsive padding and font sizes

### Register (`/client/src/components/Register.jsx`)
- Name, email, password fields
- Password visibility toggle
- Auto-redirect to dashboard on success

### Dashboard (`/client/src/components/Dashboard.jsx`)
- Logout button (top-right)
- Add Family Member form (conditional display)
- Profile tabs with Edit/Remove actions
- Health summary cards (weight, height, BP, etc.)
- Navigation: Camera, Plant Details, Maps
- Fully responsive grid layouts

### Camera (`/client/src/helpers/Camera.jsx`)
- Video preview with live camera
- Start Camera / Capture Photo buttons
- Retake and Identify buttons after capture
- Displays Plant.id results with confidence scores
- "View full plant details" navigation

### PlantDetails (`/client/src/components/PlantDetails.jsx`)
- Displays plant name and scientific name
- Match percentage badge
- Taxonomy information (genus, family, order, class)
- Common names list
- Description from Wikipedia
- External Wikipedia link
- Alternative suggestions if low confidence

### BackButton (`/client/src/components/BackButton.jsx`)
- Reusable navigation component
- Supports `to` prop (Link) or navigate(-1)
- Fixed positioning option
- Responsive sizing

### FlashCard (`/client/src/helpers/FlashCard.jsx`)
- Toast notification component
- Auto-dismiss after 3 seconds
- Types: success (green), error (red)
- Fixed top-right positioning
- Mobile: full width at top

---

## Database Schemas

### User Model
```javascript
{
  name: String,           // required, trimmed
  email: String,          // required, unique, lowercase
  password: String,       // required, bcrypt hashed
  resetPasswordToken: String,      // nullable
  resetPasswordExpires: Date,      // nullable
  createdAt: Date,        // auto
  updatedAt: Date         // auto
}
```

### HealthData Model (Family Profiles)
```javascript
{
  user: ObjectId,         // ref: User, required
  name: String,           // trimmed
  weight: Number,
  height: Number,
  bloodPressure: String,
  heartRate: Number,
  anyOtherCondition: String,
  createdAt: Date,
  updatedAt: Date
}
```

### ScanHistory Model
```javascript
{
  user: ObjectId,         // ref: User
  familyMemberId: ObjectId,
  familyMemberName: String,
  plantName: String,
  probability: Number,
  safetyRating: String,   // SAFE | CAUTION | AVOID
  warnings: [String],
  recommendations: [String],
  medicinalUses: [String],
  preparationMethods: [String],
  createdAt: Date
}
```

---

## Key Implementation Details

### Plant.id API Integration
```javascript
// server/src/controllers/upload.controller.js
const axios = require('axios');

const uploadImage = async (req, res) => {
    const { image } = req.body;
    const base64Image = image.replace(/^data:image\/\w+;base64,/, "");
    
    const response = await axios.post(
        "https://plant.id/api/v3/identification",
        {
            images: [base64Image],
            similar_images: true
        },
        {
            headers: {
                "Api-Key": process.env.PLANT_ID_API_KEY,
                "Content-Type": "application/json"
            }
        }
    );
    
    // Return full identification data to frontend
    return res.status(200).json({
        success: true,
        identification: response.data
    });
};
```

### JWT Authentication Flow
```javascript
// Login: Generate token
const token = jwt.sign(
    { id: user._id },
    ENV.JWT_SECRET,
    { expiresIn: "7d" }
);

res.cookie("token", token, {
    httpOnly: true,
    secure: false,        // Set to true in production (HTTPS)
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,  // 7 days
});

// Middleware: Verify token
export const authMiddleware = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "No token" });
    
    try {
        const decoded = jwt.verify(token, ENV.JWT_SECRET);
        req.user = decoded;
        next();
    } catch {
        return res.status(401).json({ message: "Invalid token" });
    }
};
```

### Password Visibility Toggle (React)
```javascript
const [showPassword, setShowPassword] = useState(false);

<div className="password-input-wrapper">
    <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
    />
    <button
        type="button"
        className="password-toggle-btn"
        onClick={() => setShowPassword(!showPassword)}
    >
        {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
    </button>
</div>
```

### MongoDB Connection with Deprecation Suppression
```javascript
// server/src/config/db.js
import mongoose from "mongoose";

// Suppress Mongoose deprecation warnings
const originalEmit = process.emit;
process.emit = function (name, data, ...args) {
    if (name === "warning" && data?.message?.includes("findOneAndUpdate")) {
        return false;
    }
    return originalEmit.apply(process, [name, data, ...args]);
};

export const connectDB = async () => {
    try {
        await mongoose.connect(ENV.MONGODB_URI);
        console.log(`connected to mongoDB !!!!!`);
    } catch (error) {
        console.log(error);
    }
};
```

---

## Responsive Design

### Breakpoints
```css
/* Tablet and below */
@media (max-width: 760px) { }

/* Large phones */
@media (max-width: 640px) { }

/* Phones */
@media (max-width: 600px) { }

/* Small phones */
@media (max-width: 560px) { }

/* Extra small phones */
@media (max-width: 380px) { }
```

### Fluid Typography
```css
font-size: clamp(1.9rem, 4vw, 2.45rem);
padding: clamp(22px, 4vw, 36px);
```

### Mobile Optimizations
- Password inputs: `font-size: 16px` (prevents iOS zoom)
- Touch targets: minimum 44px height
- Stack layouts on narrow screens
- Top padding for fixed back button clearance

---

## Development Setup

### Prerequisites
- Node.js 18+ installed
- MongoDB Atlas account (free tier works)
- Plant.id API key (free tier: 50 requests/day)

### Installation

```bash
# 1. Navigate to project
cd "Rooted fail 2"

# 2. Setup Backend
cd server
npm install

# Create .env file (see Environment Variables section)
echo "PORT=3000" > .env
echo "MONGODB_URI=your_mongodb_uri" >> .env
echo "JWT_SECRET=your_secret_key" >> .env
echo "PLANT_ID_API_KEY=your_api_key" >> .env

npm run dev        # Starts on http://localhost:3000

# 3. Setup Frontend (new terminal)
cd client
npm install
npm run dev        # Starts on http://localhost:5173
```

### Vite Proxy Configuration
```javascript
// client/vite.config.js
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/api': 'http://localhost:3000',
            '/camera': 'http://localhost:3000',
        },
    },
});
```

---

## Features Checklist

### ✅ Fully Implemented
- [x] User registration with email validation
- [x] User login with JWT cookies
- [x] Password reset flow (token-based)
- [x] Password visibility toggle (all password fields)
- [x] Protected routes with authentication check
- [x] Family member profile creation
- [x] Family member profile editing
- [x] Family member profile deletion
- [x] Health data storage (weight, height, BP, heart rate, conditions)
- [x] Live camera access and preview
- [x] Photo capture and base64 encoding
- [x] Plant identification via Plant.id API
- [x] Plant details display (taxonomy, description, Wikipedia)
- [x] Flash notifications (success/error)
- [x] Back button navigation
- [x] Responsive mobile design
- [x] Logout functionality

### ⚠️ Partially Implemented
- [ ] **Plant Safety Check**: Backend API complete (`/api/safety/check`), frontend component exists (`PlantSafetyCheck.jsx`) but not integrated into main flow
- [ ] **Maps**: Button exists on Dashboard, no implementation
- [ ] **LLM Integration**: Empty controller function placeholder

### ❌ Not Implemented
- [ ] Email service for password reset (currently shows token in UI)
- [ ] Scan history frontend page (backend API ready at `/api/safety/history`)
- [ ] Image file upload (camera-only currently)
- [ ] Push notifications
- [ ] Offline support/PWA

---

## Security Considerations

### Implemented
- ✅ Password hashing with bcrypt (10 salt rounds)
- ✅ JWT tokens in httpOnly cookies (XSS protection)
- ✅ CORS configured for localhost
- ✅ Input validation on all controllers
- ✅ Protected API routes with JWT verification
- ✅ MongoDB injection protection via Mongoose

### Production Recommendations
- Set `secure: true` for cookies (HTTPS only)
- Add rate limiting (express-rate-limit)
- Add helmet.js for security headers
- Implement email service for password reset
- Add request logging and monitoring
- Set up CI/CD pipeline

---

## Troubleshooting

### MongoDB Connection Failed
- Check `MONGODB_URI` in `.env`
- Ensure IP whitelist includes current IP in Atlas
- Verify network connectivity

### Plant.id API Errors
- Check `PLANT_ID_API_KEY` is valid
- Free tier limited to 50 requests/day
- Ensure base64 image is properly formatted

### CORS Errors
- Ensure backend running on port 3000
- Check Vite proxy configuration
- Verify CORS origin settings in `app.js`

### Camera Not Working
- Requires HTTPS in production (localhost exempt)
- Check browser permissions
- Ensure camera not in use by another app

---

## Next Steps / Roadmap

### Priority 1 (Core Features)
1. Integrate PlantSafetyCheck with Dashboard/Camera flow
2. Build Scan History frontend page
3. Add image file upload option

### Priority 2 (Enhancements)
4. Implement Maps with plant location tracking
5. Add email service (SendGrid/AWS SES)
6. Build LLM integration for personalized advice

### Priority 3 (Advanced)
7. Mobile app (React Native)
8. Push notifications
9. Offline mode/PWA
10. Social sharing features

---

## License

Private project - All rights reserved.

---

## Contact

For questions or support, contact the development team.
