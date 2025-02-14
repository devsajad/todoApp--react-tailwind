import React from "react";
import TodoItem from "./todoItem.jsx";

const TodoList = ({ todoData, onCheckList, onRemoveList }) => {
  return (
    <section>
      <ul>
        {todoData.map((el) => (
          <TodoItem
            key={el.id}
            text={el.text}
            completed={el.completed}
            id={el.id}
            onCheckList={onCheckList}
            onRemoveList={onRemoveList}
          />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
