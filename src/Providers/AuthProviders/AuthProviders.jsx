/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {createContext,useState, useEffect} from 'react';
import { getAuth,onAuthStateChanged, createUserWithEmailAndPassword,signOut, signInWithEmailAndPassword,updateProfile,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import app from './../../Firebase/firebase.init';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const GProvider = new GoogleAuthProvider();

const createUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}

const logIn = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
}

const googleSigIn = () =>{
    return signInWithPopup(auth, GProvider)
}

const Update = (displayName, photoURL)=>{
    return updateProfile(auth.currentUser, {displayName, photoURL})
}

const logOut = () =>{
    return signOut(auth)
}




const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null);
    const [sellerName, setSellerName]=useState("")

    useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        // console.log("****************", currentUser);
        setUser(currentUser);
    })

    return () =>{
        unsubscribe();
    }
    

    },[])

    const AuthInfo = {
        user,
        sellerName, setSellerName,
        createUser,
        setUser,
        logIn,
        Update,
        googleSigIn,
        logOut
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;