import React, { useEffect, useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (darkMode) {
      htmlElement.classList.add("dark");
      htmlElement.classList.remove("light");
    } else {
      htmlElement.classList.add("light");
      htmlElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <header className="flex items-center justify-between mb-3 md:mb-6">
      <p className="text-light-very-light-gray text-2xl font-medium tracking-[0.3em] md:text-3xl">
        TODO
      </p>
      <div>
        <button onClick={toggleDarkMode}>
          <img
            src="/icon-moon.svg"
            alt="moon icon for dark Mode"
            className="dark:hidden cursor-pointer mode-toggle"
          />
          <img
            src="/icon-sun.svg"
            alt="sun icon for light Mode"
            className="hidden dark:block cursor-pointer mode-toggle"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
