import React, { useEffect, useState } from "react";
import Header from "./header";
import AddNewTodo from "./addNewTodo";
import TodoList from "./todoList";
import Footer from "./footer";

// Apply dark mode class based on local storage before React renders to prevent Flash of Incorrect Theme
const savedMode = localStorage.getItem("darkMode");
if (savedMode === "true") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.add("light");
}

function App() {
  const [todoData, setTodoData] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("todoData"));
    return savedData || [];
  });

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

  // Effect to save data in local storage
  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todoData));
  }, [todoData]);

  return (
    <div className="wrapper back-image">
      <div className="max-w-xl mx-auto px-6 py-3 md:py-20">
        <Header />

        <AddNewTodo onAddTodoItem={handleAddTodoItem} />

        {todoData?.length > 0 && (
          <>
            <TodoList
              todoData={handleShowListOption()}
              onCheckList={handleCheckList}
              onRemoveList={handleRemoveList}
            />
            <Footer
              todoData={todoData}
              onClearCompleted={handleClearCompeted}
              setShowListOption={setShowListOption}
              showListOption={showListOption}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
