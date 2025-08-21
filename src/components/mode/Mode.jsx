import { MdLightMode } from "react-icons/md";
import { LuMoonStar } from "react-icons/lu";
import { useEffect, useState } from "react";

const Mode = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // ilk dəfə sistemdən oxu (prefers-color-scheme)
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const hasClass = document.documentElement.classList.contains("dark");

    setDark(hasClass || isDark);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      setDark(false);
    } else {
      html.classList.add("dark");
      setDark(true);
    }
  };

  return (
    <div onClick={toggleTheme} style={{ cursor: "pointer" }}>
      {dark ? (
        <MdLightMode size={24} color="white" />
      ) : (
        <LuMoonStar size={24} color="black" />
      )}
    </div>
  );
};

export default Mode;
