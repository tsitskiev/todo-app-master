import React, { useEffect } from 'react';
import { ToDoList, AddToDo } from './components/index';
import Context from './context';
import Loader from './Loader/Loader';

function App() {
  const [todos, setTodos] = React.useState([]);
  const [fetching, setFetching] = React.useState(true);

  const fakeDB = require('./db.json');

  useEffect(() => {
    setTimeout(() => {
      setTodos(fakeDB.todo);
      setFetching(false);
    }, 1000);
  }, [fakeDB]);

  const handleChange = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    );
  };

  const addToDo = (title) => {
    if (todos.filter((todo) => todo.title === title).length === 0) {
      setTodos(
        todos.concat([
          {
            title,
            id: todos.length ? todos[todos.length - 1].id + 1 : 1,
            completed: false,
          },
        ]),
      );
    } else alert('You already have this task in your list!');
  };

  const removeToDo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Context.Provider value={{ removeToDo }}>
      <div className="wrapper">
        <h2>Your todays list</h2>
        {fetching && <Loader />}
        <AddToDo onCreate={addToDo} />
        {todos.length ? (
          <ToDoList todos={todos} handleChange={handleChange} />
        ) : fetching ? null : (
          <p>You have no Do's today 😔</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
