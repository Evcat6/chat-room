import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, UserCredential } from 'firebase/auth'
import { doc, setDoc, getFirestore, Firestore, serverTimestamp } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBSE_API_KEY,
  authDomain: import.meta.env.VITE_APP_FIREBSE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_FIREBSE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_FIREBSE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_APP_FIREBSE_MESSAGING_ID,
  appId: import.meta.env.VITE_APP_FIREBSE_APP_ID,
  measurementId: import.meta.env.VITE_APP_FIREBSE_MEASUREMENT_ID
};

const app: FirebaseApp = initializeApp(firebaseConfig);

const auth: Auth = getAuth(app);

export const db: Firestore = getFirestore(app);

const googleProvider: GoogleAuthProvider = new GoogleAuthProvider();
const gitHubProvider: GoogleAuthProvider = new GithubAuthProvider();

export const signInWithGoogle = async(): Promise<void> => {
  const result: UserCredential = await signInWithPopup(auth, googleProvider);

  localStorage.setItem(import.meta.env.VITE_APP_TOKEN, JSON.stringify(result));
  window.location.reload();
}


export const signInWithGitHub = async(): Promise<void> => {
  const result: UserCredential = await signInWithPopup(auth, gitHubProvider);

  localStorage.setItem(import.meta.env.VITE_APP_TOKEN, JSON.stringify(result));
  window.location.reload();
}

export const addMessage = async(text: string, user: string, email: string): Promise<void> => {
  const date: Date = new Date();
  await setDoc(doc(db, "messages", uuidv4()), {
    text,
    user,
    date: `${date.getHours()}:${date.getMinutes()}`,
    email,
    createdAt: serverTimestamp(),
  });
}


