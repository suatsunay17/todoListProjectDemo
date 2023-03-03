import React, { useState, useEffect } from "react";
import "./App.css";

import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //STATES
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //RUN ONCE when app starts
  // useEffect(() => {
  //   getLocalTodos();
  // }, []);
  
  //USE EFFECT
  useEffect(() => {
    filterHandler();
    // saveLocalTodos();
  }, [todos, filter]);

  //FUNCTIONS
  const filterHandler = () => {
    switch (filter) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //Save to local NOT FUNCTIONAL

  // const saveLocalTodos = () => {
  //   if(todos){
  //     let items = localStorage.setItem("todos", JSON.stringify(todos));
  //     console.log(items);

  //   }
  // };

  // const getLocalTodos = () => {
  //   if (localStorage.getItem("todos") === null) {
  //     localStorage.setItem("todos", JSON.stringify([]));
  //   } else {
  //     let todoLocal = JSON.parse(localStorage.getItem('todos'));
  //     setTodos(todoLocal);
  //   }
  // };

  return (
    <div className="App">
      <header>
        <h1>Suat's Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setFilter={setFilter}
      />
      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}

export default App;
