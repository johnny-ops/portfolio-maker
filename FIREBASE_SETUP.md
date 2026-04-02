# Firebase Setup Guide

This guide will help you set up Firebase for the Portfolio Maker application to enable cloud storage and authentication features.

## Prerequisites

- A Google account
- Node.js and npm installed

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or "Create a project"
3. Enter project name: `portfolio-maker` (or your preferred name)
4. Disable Google Analytics (optional)
5. Click "Create project"

## Step 2: Register Your Web App

1. In your Firebase project dashboard, click the web icon (`</>`)
2. Register app with nickname: `Portfolio Maker Web`
3. Don't check "Firebase Hosting" (unless you want to use it)
4. Click "Register app"
5. Copy the Firebase configuration object

## Step 3: Enable Authentication

1. In Firebase Console, go to "Authentication" in the left sidebar
2. Click "Get started"
3. Enable sign-in methods:
   
   **Email/Password:**
   - Click "Email/Password"
   - Toggle "Enable"
   - Click "Save"
   
   **Google:**
   - Click "Google"
   - Toggle "Enable"
   - Enter project support email
   - Click "Save"

## Step 4: Set Up Firestore Database

1. In Firebase Console, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select your preferred location
5. Click "Enable"

### Security Rules (Production)

For production, update Firestore rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /portfolios/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## Step 5: Configure Your App

1. Open `src/firebase.js` in your project
2. Replace the configuration with your Firebase config:

```javascript
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
```

## Step 6: Test the Integration

1. Start your development server:
```bash
npm start
```

2. Click the "Login" button in the app
3. Try signing up with email/password or Google
4. After login, click "Save" to save your portfolio to cloud
5. Your data should now be stored in Firestore

## Step 7: Verify Data in Firestore

1. Go to Firebase Console → Firestore Database
2. You should see a `portfolios` collection
3. Each document ID matches a user's UID
4. Document contains the portfolio data

## Optional: Enable Storage (for images)

If you want to store images in Firebase Storage instead of base64:

1. Go to "Storage" in Firebase Console
2. Click "Get started"
3. Use test mode for development
4. Update storage rules for production:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /portfolios/{userId}/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## Troubleshooting

### "Firebase: Error (auth/configuration-not-found)"
- Make sure you've enabled the authentication methods in Firebase Console
- Check that your Firebase config is correct

### "Missing or insufficient permissions"
- Update your Firestore security rules
- Make sure you're logged in

### "Network request failed"
- Check your internet connection
- Verify Firebase project is active
- Check browser console for specific errors

## Environment Variables (Optional)

For better security, use environment variables:

1. Create `.env` file in project root:
```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

2. Update `src/firebase.js`:
```javascript
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};
```

3. Add `.env` to `.gitignore` (already included)

## Production Deployment

Before deploying to production:

1. Update Firestore security rules (see above)
2. Update Storage security rules (if using)
3. Use environment variables for Firebase config
4. Enable Firebase Hosting (optional):
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
npm run build
firebase deploy
```

## Support

For Firebase-specific issues, check:
- [Firebase Documentation](https://firebase.google.com/docs)
- [Firebase Support](https://firebase.google.com/support)

For app-specific issues:
- Open an issue on GitHub
- Check the README.md for general usage

---

**Note**: Firebase has a free tier (Spark Plan) that's sufficient for personal projects. Monitor your usage in the Firebase Console.
