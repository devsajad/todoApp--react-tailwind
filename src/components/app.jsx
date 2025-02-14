import React, { useState } from "react";
import Header from "./header";
import AddNewTodo from "./addNewTodo";
import TodoList from "./todoList";
import Footer from "./footer";

const todos = [
  { id: 1, text: "Jog around the park", completed: false },
  { id: 2, text: "Watch React tutorial", completed: true },
];

function App() {
  const [todoData, setTodoData] = useState(todos);
  const [showListOption, setShowListOption] = useState("all");

  function handleCheckList(id) {
    setTodoData((list) =>
      list.map((el) =>
        el.id === id ? { ...el, completed: !el.completed } : el
      )
    );
  }

  function handleRemoveList(id) {
    setTodoData((list) => list.filter((el) => el.id !== id));
  }

  function handleAddTodoItem(text) {
    setTodoData((list) => [
      ...list,
      { id: crypto.randomUUID(), text, completed: false },
    ]);
  }

  function handleShowListOption() {
    if (showListOption === "all") return todoData;
    else if (showListOption === "active")
      return todoData.filter((el) => !el.completed);
    else if (showListOption === "completed")
      return todoData.filter((el) => el.completed);
  }

  function handleClearCompeted() {
    setTodoData((list) => list.filter((el) => !el.completed));
  }

  return (
    <div className="wrapper back-image">
      <div className="max-w-xl mx-auto px-6 py-3 md:py-20">
        <Header />

        <AddNewTodo onAddTodoItem={handleAddTodoItem} />

        <TodoList
          todoData={handleShowListOption()}
          onCheckList={handleCheckList}
          onRemoveList={handleRemoveList}
        />
        {todoData.length > 0 && (
          <Footer
            todoData={todoData}
            onClearCompleted={handleClearCompeted}
            setShowListOption={setShowListOption}
            showListOption={showListOption}
          />
        )}
      </div>
    </div>
  );
}

export default App;
