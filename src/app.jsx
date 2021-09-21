import React, { useMemo, useReducer } from 'react';
import { TodoForm } from './components/todo-form';
import { TodoList } from './components/todo-list';
import { TodoResults } from './components/todo-results';
import { TodosContext } from './todo-context';
import todosReducer from './reducers/TodosReducer';
import './index.scss';

const todosTemplate = [
  {
    id: 0,
    label: 'Fix an ability to display all tasks',
    checked: false,
  },
  {
    id: 1,
    label: 'Fix a layout, checkboxes should be listed in a column',
    checked: false,
  },
  {
    id: 2,
    label: 'Fix an ability to add a new task',
    checked: false,
  },
  {
    id: 3,
    label: 'Fix an ability to toggle a task',
    checked: false,
  },
  {
    id: 4,
    label: 'Fix an ability to delete a task',
    checked: false,
  },
  {
    id: 5,
    label: 'Fix an ability to count completed tasks',
    checked: false,
  },
];

export const App = () => {
  const [todos, dispatchTodos] = useReducer(todosReducer, todosTemplate);

  const todosContext = useMemo(() => ({
    todos: todos,
    addTodo: (todoId) => dispatchTodos({ type: "ADD_TODO", todoId }),
    deleteTodo: (todoId) => dispatchTodos({ type: "DELETE_TODO", todoId }),
    toggleTodo: (todoId) => dispatchTodos({ type: "TOGGLE_TODO", todoId }),
  }), [todos]);

  return (
    <div className="root">
      <TodosContext.Provider value={todosContext}>
        <TodoList />
        <TodoResults />
        <TodoForm />
      </TodosContext.Provider>
    </div>
  );
};
