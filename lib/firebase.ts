import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore, initializeFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const expectedProjectId = 'syncup-98f58';

console.log('[Firebase config]', {
  apiKey: firebaseConfig.apiKey ? 'present' : 'missing',
  authDomain: firebaseConfig.authDomain ?? 'missing',
  projectId: firebaseConfig.projectId ?? 'missing',
  storageBucket: firebaseConfig.storageBucket ?? 'missing',
  appId: firebaseConfig.appId ? 'present' : 'missing',
});

const missingConfigKeys = Object.entries(firebaseConfig)
  .filter(([key, value]) => key !== 'measurementId' && !value)
  .map(([key]) => key);

if (missingConfigKeys.length > 0) {
  throw new Error(
    `Missing Firebase Web App config values: ${missingConfigKeys.join(', ')}.`
  );
}

if (firebaseConfig.projectId !== expectedProjectId) {
  throw new Error(
    `Invalid Firebase project ID. Expected "${expectedProjectId}", received "${firebaseConfig.projectId ?? 'missing'}".`
  );
}

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

export const db = (() => {
  try {
    return initializeFirestore(app, {
      experimentalForceLongPolling: true,
    });
  } catch {
    return getFirestore(app);
  }
})();
