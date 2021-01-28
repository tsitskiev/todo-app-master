import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function AddToDo({ onCreate }) {
  const useInputValue = (defaultValue = '') => {
    const [value, setValue] = useState(defaultValue);
    return {
      bind: {
        value,
        onChange: (event) => setValue(event.target.value),
      },
      value: () => value,
      clear: () => setValue(''),
    };
  };

  const input = useInputValue('');
  const submitHandler = (event) => {
    event.preventDefault();
    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
    }
  };

  return (
    <form style={{ marginBottom: '1rem' }} onSubmit={submitHandler}>
      <input {...input.bind} className="todo-input" placeholder="Enter your new task here" />
      <Button classes="btn add-btn">Add new task</Button>
    </form>
  );
}

AddToDo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default AddToDo;
