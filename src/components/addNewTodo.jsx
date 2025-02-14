import React, { useState } from "react";

export default function AddNewTodo({ onAddTodoItem }) {
  const [todoItemText, setTodoItemText] = useState("");

  function handleAddTodoItem(e) {
    e.preventDefault();
    console.log(todoItemText);
    if (!todoItemText) return;

    onAddTodoItem(todoItemText);

    setTodoItemText("");
  }

  return (
    <form
      className="list-container rounded-sm border-none mb-5"
      onSubmit={handleAddTodoItem}
    >
      <button type="submit" className="list-checkbox" />
      <input
        value={todoItemText}
        onChange={(e) => setTodoItemText(e.target.value)}
        type="text"
        placeholder="Create a new todo..."
        className="focus:outline-none grow-1 text-base/0 dark:placeholder:text-dark-dark-grayish-blue dark:text-dark-light-grayish-blue"
      />
    </form>
  );
}
