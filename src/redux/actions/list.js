import { ADD, DELETE } from '../constants/list';

export const addTodo = (data) => {
  return {
    type: ADD,
    payload: data
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE,
    payload: id,
  };
};
