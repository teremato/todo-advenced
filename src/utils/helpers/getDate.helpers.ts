export const getCurrentDate = (): string => {
  const date = new Date();
  return `${date.getDate()}.${date.getMonth() + 1}`;
};

// для формирования id можно использовать либу uuid
export const createProjectId = (): string => {
  return Date.now().toString().slice(7, 12);
};

export const createTodoId = (): string => {
  return Date.now().toString();
};

export const createProjectTodoId = (): string => {
  return Date.now().toString().slice(3, 12);
};
