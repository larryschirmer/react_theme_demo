import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper } from "./App.style";
import { setTheme, toggleTheme } from "../../redux/theme/actions";
import { useMedia } from "../../utils/hooks";

const App = () => {
  const dispatch = useDispatch();
  const isDarkMode = useMedia(["(prefers-color-scheme: dark)"], [true], false);
  const themeName = useSelector(({ theme }) => theme.name);
  const handleThemeToggle = () => dispatch(toggleTheme());

  useEffect(() => {
    dispatch(setTheme(isDarkMode ? "dark" : "light"));
  }, [dispatch, isDarkMode]);

  return (
    <Wrapper>
      <div>{themeName}</div>
      <button onClick={handleThemeToggle}>toggle theme</button>
    </Wrapper>
  );
};

export default App;
