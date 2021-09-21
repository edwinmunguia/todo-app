import React, { useContext } from 'react';
import './todo-results.scss';
import { TodosContext } from "../../todo-context";

export const TodoResults = () => {
  const { todos } = useContext(TodosContext);

  const calculateChecked = () => {
    // Fix an ability to calculate completed tasks
    return todos.reduce((acc, todo) => todo.checked ? acc + 1 : acc, 0);
  };

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
};
