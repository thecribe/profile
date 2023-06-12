import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import DefaultStyle from "./default.styled";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

const defaultSettings = {
  colors: {
    dark: {
      background: "#000000",
      primary: "#ffffff",
      secondary: "#28e98c",
      accent: "#999999",
    },
    light: {
      background: "#ffffff",
      primary: "#000000",
      secondary: "#28e98c",
      accent: "#999999",
    },
  },
};

const Root = () => {
  const [mode, setMode] = useState(true);
  const [theme, setTheme] = useState({
    background: "#000000",
    primary: "#ffffff",
    secondary: "#28e98c",
    accent: "#999999",
  });

  const switchHanlder = (mode) => {
    if (mode) {
      setTheme({ ...theme, ...defaultSettings.colors.light });
    } else {
      setTheme({ ...theme, ...defaultSettings.colors.dark });
    }
    setMode(!mode);
  };

  return (
    <ThemeProvider theme={theme}>
      <DefaultStyle />
      <Outlet />
      <button onClick={() => switchHanlder(mode)}>click me</button>
    </ThemeProvider>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Root />}></Route>)
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
