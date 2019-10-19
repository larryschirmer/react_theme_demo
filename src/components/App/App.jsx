import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper } from "./App.style";
import { toggleTheme } from "../../redux/theme/actions";

const App = () => {
  const dispatch = useDispatch();
  const themeName = useSelector(({ theme }) => theme.name);
  const handleThemeToggle = () => dispatch(toggleTheme());

  return (
    <Wrapper>
      <div>{themeName}</div>
      <button onClick={handleThemeToggle}>toggle theme</button>
    </Wrapper>
  );
};

export default App;
