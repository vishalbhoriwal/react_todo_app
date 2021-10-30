import { ADD, DELETE } from '../constants/list';

const INITIAL_STATE = {
  todo: [],
};

const getId = (todo) => {
  if (todo.length) {
    return todo[todo.length - 1].id + 1;
  }
  return 1;
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        todo: [...state.todo, { ...action.payload, id: getId(state.todo) }],
      };
    case DELETE:
      return {
        ...state,
        todo: state.todo.filter((data) => data.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
