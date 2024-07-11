import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const TaskList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <ul>
      {todos.map((todo) => (
        <Task key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TaskList;