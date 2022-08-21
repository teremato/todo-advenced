//Валидация почты
export const isEmailValid = ( email: string ) : boolean => {
    if(email === '') { return false } 
    else {
        let arr : Array<string> = Array.from(email.toLowerCase())
        return arr.includes('@')
    }
}
//Валидация пароля
export const isPasswordValid = ( password: string ) : boolean => {
    if(password === '') { return false }
    else { return (password.length > 6) ? true : false }
}