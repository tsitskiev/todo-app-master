import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import Context from '../context';

function ToDoItem({ todo, index, onChange }) {
  const classes = [];
  if (todo.completed) {
    classes.push('done');
  }
  const { removeToDo } = useContext(Context);
  return (
    <li>
      <span className={classes.join(' ')}>
        <input
          type="checkbox"
          onChange={() => onChange(todo.id)}
          checked={todo.completed}
          id={`todo${index + 1}`}
        />
        <label htmlFor={`todo${index + 1}`}>{todo.title}</label>
      </span>
      <button className="btn rm-btn" onClick={removeToDo.bind(null, todo.id)}></button>
    </li>
  );
}

ToDoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ToDoItem;
