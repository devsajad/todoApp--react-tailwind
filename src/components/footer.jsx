export default function Footer({
  todoData,
  onClearCompleted,
  setShowListOption,
  showListOption,
}) {
  const itemsLeftNumber = todoData.filter(
    (el) => el.completed === false
  ).length;

  return (
    <footer>
      <div className="flex text-xs justify-between py-2 px-4 rounded-b-md footer-text-style">
        <p className="mr-5">
          {itemsLeftNumber === 0
            ? "You Did Everything"
            : `${itemsLeftNumber} items left`}
        </p>
        {/* <!-- sorting for desktop --> */}
        <div className="gap-4 font-bold hidden md:flex">
          <button
            className={`btn ${showListOption === "all" ? "text-primary" : ""}`}
            onClick={() => {
              setShowListOption("all");
            }}
          >
            All
          </button>
          <button
            className={`btn ${
              showListOption === "active" ? "text-primary" : ""
            }`}
            onClick={() => {
              setShowListOption("active");
            }}
          >
            Active
          </button>
          <button
            className={`btn ${
              showListOption === "completed" ? "text-primary" : ""
            }`}
            onClick={() => {
              setShowListOption("completed");
            }}
          >
            Completed
          </button>
        </div>

        <button
          className={`btn`}
          onClick={() => {
            onClearCompleted();
          }}
        >
          Clear Completed
        </button>
      </div>

      {/* <!-- Sorting for mobile --> */}
      <div className="gap-4 font-bold flex text-xs justify-center py-3.5 px-4 rounded-md mt-4 md:hidden footer-text-style">
        <button
          className={`btn ${showListOption === "all" ? "text-primary" : ""}`}
          onClick={() => {
            setShowListOption("all");
          }}
        >
          All
        </button>
        <button
          className={`btn ${showListOption === "active" ? "text-primary" : ""}`}
          onClick={() => {
            setShowListOption("active");
          }}
        >
          Active
        </button>
        <button
          className={`btn ${
            showListOption === "completed" ? "text-primary" : ""
          }`}
          onClick={() => {
            setShowListOption("completed");
          }}
        >
          Completed
        </button>
      </div>
    </footer>
  );
}
