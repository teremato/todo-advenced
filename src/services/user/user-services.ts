import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase"


export const UserLogin = async(email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
    .then((userAuth) => userAuth.user)
}

export const UserRegister = async(email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
    .then((userAuth) => userAuth.user)
}
