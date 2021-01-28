import React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from './ToDoItem';

function ToDoList(props) {
  return (
    <ul>
      {props.todos.map((todo, index) => {
        return <ToDoItem todo={todo} key={todo.id} index={index} onChange={props.handleChange} />;
      })}
    </ul>
  );
}

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ToDoList;
