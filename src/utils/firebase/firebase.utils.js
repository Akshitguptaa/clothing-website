import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6odzdmUizKuz-AX0FCzNaZAIh-BPBsSQ",
  authDomain: "clothing-db-be3fc.firebaseapp.com",
  projectId: "clothing-db-be3fc",
  storageBucket: "clothing-db-be3fc.appspot.com",
  messagingSenderId: "177347173170",
  appId: "1:177347173170:web:8bed6bbf4f599ebf28d52b",
};

const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth)=> {
    const userDocRef= doc(db, 'users',userAuth.uid);
    console.log(userDocRef);

    const userSnapshot= await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
        const { displayName, email }= userAuth;
        const createdAt= new Date();

        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
            });
        }catch(error){
            console.log('error creating the user',error.message);
        }
        
    }
}