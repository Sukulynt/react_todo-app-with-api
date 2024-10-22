import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';
import { UpdateTodoData } from '../types/UpdateTodoData';

export const USER_ID = 337;

export const getTodos = () => {
  return client.get<Todo[]>(`/todos?userId=${USER_ID}`);
};

export const uploadTodo = ({ completed, title, userId }: Omit<Todo, 'id'>) => {
  return client.post<Todo>('/todos', { completed, title, userId });
};

export const deleteTodo = (id: number) => {
  return client.delete(`/todos/${id}`);
};

export const updateTodo = (id: number, data: UpdateTodoData) => {
  return client.patch<Todo>(`/todos/${id}`, data);
};
