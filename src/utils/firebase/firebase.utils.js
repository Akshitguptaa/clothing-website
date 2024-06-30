import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6odzdmUizKuz-AX0FCzNaZAIh-BPBsSQ",
  authDomain: "clothing-db-be3fc.firebaseapp.com",
  projectId: "clothing-db-be3fc",
  storageBucket: "clothing-db-be3fc.appspot.com",
  messagingSenderId: "177347173170",
  appId: "1:177347173170:web:8bed6bbf4f599ebf28d52b",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  try {
    await batch.commit();
    console.log("Batch write successful");
  } catch (error) {
    console.error("Error committing batch:", error);
    throw error; 
  }
};

export const getCategoriesAndDocuments = async () => {
  try {
    const collectionRef = collection(db, 'categories');
    const querySnapshot = await getDocs(collectionRef);

    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
      const { title, items } = docSnapshot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});

    return categoryMap;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  try {
    if (!userAuth) return;

    const userDocRef = doc(db, "users", userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    }
  } catch (error) {
    console.error("Error creating user document:", error);
    throw error;
  }
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  try {
    if (!email || !password) throw new Error("Email and password are required.");

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  try {
    if (!email || !password) throw new Error("Email and password are required.");

    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error signing in:", error);
    throw error;
  }
};

export const signOutUser = () => signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
