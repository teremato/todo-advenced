//Валидация почты
// Можно с регекспами поиграться...
export const isEmailValid = (email: string): boolean => {
  if (email) {
    const arr: Array<string> = Array.from(email.toLowerCase());
    return arr.includes('@');
  }
  return !!email;
};

//Валидация пароля
// Такая же история с регекспами
export const isPasswordValid = (password: string): boolean => {
  return password.length > 6;
};
