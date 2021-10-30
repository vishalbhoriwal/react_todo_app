import AddTodo from '../views/AddTodo';
import { TodoList } from '../views/TodoList';

const routes = [
  {
    component: TodoList,
    exact: true,
    path: '/',
  },
  {
    component: AddTodo,
    exact: true,
    path: '/add',
  },
];

export default routes;
