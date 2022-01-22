import { getAuth, GoogleAuthProvider,GithubAuthProvider,signInWithPopup,signOut,onAuthStateChanged,createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase=()=>{
   const [user,setUser]=useState({});
   const [email,setEmail]=useState('');
   const [password,setPassword]=useState('');
   const [name,setName]=useState('');

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const signInUsingGoogle=()=>{
    return signInWithPopup(auth, googleProvider)
}

const signInUsingGithub=()=>{
   return signInWithPopup(auth, githubProvider)
}

const createNewAccount=()=>{
   return createUserWithEmailAndPassword(auth, email, password)
}

useEffect(()=>{
    const unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
            setUser('');
        }
      });
      return () => unsubscribed;
},[])


const logOut=()=>{
    signOut(auth)
    .then()
}

return {
    user,
    setUser,
    setEmail,
    setPassword,
    setName,
    createNewAccount,
    signInUsingGoogle,
    signInUsingGithub,
    logOut
}

}


export default useFirebase;

