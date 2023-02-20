import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAxVrpOJt26X-mehbayNxtibS87A0UoJQg',
  authDomain: 'crown-clothing-db-743ec.firebaseapp.com',
  projectId: 'crown-clothing-db-743ec',
  storageBucket: 'crown-clothing-db-743ec.appspot.com',
  messagingSenderId: '176879433278',
  appId: '1:176879433278:web:3aa0f21c5dc83b3b9ec36f',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());
};
