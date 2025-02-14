export default function TodoItem({
  text,
  completed,
  id,
  onCheckList,
  onRemoveList,
}) {
  return (
    <>
      {/* <!-- list Item --> */}
      <li className={`list-container group ${completed ? "list-done" : ""}`}>
        {/* <!-- checkbox --> */}
        <label className="flex items-center grow-1 cursor-pointer">
          <input
            type="checkbox"
            className="list-checkbox"
            checked={completed}
            onChange={() => onCheckList(id)}
          />
          <span className="ml-2 list-text">{text}</span>
        </label>

        {/* <!-- delete icon --> */}
        <button className="cursor-pointer" onClick={() => onRemoveList(id)}>
          <img
            src="/icon-cross.svg"
            alt="cross icon"
            className="w-3.5 hidden group-hover:block"
          />
        </button>
      </li>
    </>
  );
}
