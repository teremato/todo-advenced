import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
import { 
    doc, 
    getDoc, 
    setDoc, 
} from "firebase/firestore"
import { auth, db } from "../../firebase"
import { IUser } from "../../shared/interfaces/user.interface"


// Авторизация юзера по пароль и почте
export const UserLogin = async(email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
    .then((userAuth) => userAuth.user)
}

// Регистрация юзера по почте и паролю
export const UserRegister = async(email: string, password: string) => {
    return await createUserWithEmailAndPassword(auth, email, password)
    .then((user) => user.user)
}

// Создания и получения юзера из базы данных после регистрации
export const createAndGetUser = async(id: string, name: string, email: string | null) => {
    await setUser(id, { name: name, photo: '', email: email, id: id } )
    return await getUser(id)
}

// Получение юзера с сервера по id
export const getUser = async(userId: string) => {
    return await getDoc(doc(db, 'users', userId))
    .then(data => data)
}

// Добавления юзера в базу данных по id
export const setUser = async(userId: string, user: object) => {
    return await setDoc(doc(db, 'users', userId), { ...user} )
}

// Смена имени
export const changeUserName = async(userID: string, newName: string, user: IUser) => {
    return await setDoc(doc(db, 'users', userID), {...user, name: newName})
}