import { useState,useEffect } from "react"
import initializeAuth from "../firebase.init";
import { GoogleAuthProvider,getAuth,signInWithPopup,signOut,onAuthStateChanged,GithubAuthProvider  } from "firebase/auth";

initializeAuth();
const UseFirebase = () => {
    const [user, SetUser] = useState({});
    const [error, SetError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider =new GithubAuthProvider();
    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
            
            .catch(error => {
                console.log(error.message);
                SetError(error.message);
            })
            .finally(() => {
                setIsLoading(false)
            });
          
    }
    const signInUsingGithub = () => {
        setIsLoading(true)
        return signInWithPopup(auth, githubProvider)
            
            .catch(error => {
                console.log(error.message);
                SetError(error.message);
        })
           .finally(() => {
            setIsLoading(false)
        })
    }

    // observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                SetUser(user);
            } else {
                SetUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
},[])
    const logOut = () => {
        setIsLoading(true);
           signOut(auth)
               .then(() => {
                   SetUser({})
               }).finally(() => {
                   setIsLoading(false)
               });
    }

    return {
        user,
        error,
        logOut,
        isLoading,
        signInUsingGithub,
        signInUsingGoogle
    }
}

export default UseFirebase;