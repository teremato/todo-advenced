import { IProjectTodo } from '../../shared/interfaces/project-todo.interface';

export const getCompleteArrayLength = (todos: Array<IProjectTodo>): number => {
  return todos.filter((todo) => todo.complete !== false).length;
};

export const getNotCompleteArrayLength = (
  todos: Array<IProjectTodo>
): number => {
  return todos.filter((todo) => todo.complete !== true).length;
};
