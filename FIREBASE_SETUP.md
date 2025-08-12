# Firebase Setup Guide

## Initial Setup

1. **Install Firebase CLI** (if not already installed):
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**:
   ```bash
   firebase login
   ```

3. **Initialize Firebase in your project**:
   ```bash
   firebase init
   ```
   - Select "Firestore" and "Hosting" (optional)
   - Choose your project
   - Use default settings for Firestore rules and indexes

## Deploy Firestore Security Rules

The `firestore.rules` file contains permissive rules for testing. To deploy them:

```bash
firebase deploy --only firestore:rules
```

## Troubleshooting Connection Issues

### 400 Errors and "Client Offline" Warnings

These errors typically occur due to:

1. **Security Rules**: The default Firestore rules deny all access. Deploy the provided `firestore.rules` file.

2. **Project Configuration**: Ensure your `.env` file has the correct Firebase project ID and API keys.

3. **Network Issues**: Check if your firewall or network is blocking Firebase connections.

### Environment Variables

Make sure your `.env` file contains all required Firebase configuration:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### Testing the Connection

1. Go to your admin dashboard at `/react-admin`
2. Click the "Populate Database" button
3. Check the browser console for any errors
4. If successful, you should see "Database populated successfully" message

## Production Security Rules

For production, replace the permissive rules with proper authentication-based rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow authenticated users to read/write pages collection
    match /pages/{document} {
      allow read, write: if request.auth != null;
    }
    
    // Allow public read access to published content
    match /pages/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## Firebase Console

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Navigate to "Firestore Database" to view your data
4. Check "Authentication" to manage users
5. Monitor "Usage" for any quota issues

## Common Issues

- **CORS Errors**: Ensure your Firebase project allows your domain
- **Quota Exceeded**: Check your Firebase usage limits
- **Authentication Errors**: Verify your API keys are correct
- **Network Errors**: Try disabling any VPN or proxy services
