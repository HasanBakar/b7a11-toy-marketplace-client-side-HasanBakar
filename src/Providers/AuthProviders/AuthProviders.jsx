/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {createContext,useState} from 'react';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile  } from "firebase/auth";
import app from './../../Firebase/firebase.init';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const createUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}

const logIn = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
}

const Update = (displayName, photoURL)=>{
    return updateProfile(auth.currentUser, {displayName, photoURL})
}



const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null)

    const AuthInfo = {
        user,
        createUser,
        setUser,
        logIn,
        Update
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;