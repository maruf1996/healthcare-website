import { getAuth, GoogleAuthProvider,GithubAuthProvider,signInWithPopup,signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase=()=>{
   const [user,setUser]=useState({});

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const signInUsingGoogle=()=>{
    return signInWithPopup(auth, googleProvider)
}

const signInUsingGithub=()=>{
   return signInWithPopup(auth, githubProvider)
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
    signInUsingGoogle,
    signInUsingGithub,
    logOut
}

}


export default useFirebase;

