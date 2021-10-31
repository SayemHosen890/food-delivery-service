import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Fire/firebase.init";

initializeAuthentication();


const useFirebase = () => {
    const [user, setUsers] = useState({})
    const auth = getAuth();

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        // ((result) => {
        //     setUsers(result.user)
        // })
    }

    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUsers(user)
            }
            else {
                setUsers({})
            }
        });
        return () => unSubscribed;
    }, [])

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUsers({})
            })
    }

    return {
        user,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;