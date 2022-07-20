import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text) {
      return;
    }
    setTodos(() => [todo, ...todos]);
  };

  const updateTodo = (id, newValue) => {
    if (!newValue.text) {
      return;
    }
    setTodos((prev) => prev.map((item) => (item.id === id ? newValue : item)));
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const CompleteTodo = (id) => {
    let updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updateTodos);
    console.log("sdd");
  };

  return (
    <div>
      <h1>TO-DO LIST</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={CompleteTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default TodoList;
