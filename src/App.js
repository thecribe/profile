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
import Homepage from "./pages/Homepage/Homepage";

const themeDefaultSettings = {
  colors: {
    dark: {
      background: "#1f1f1f",
      primary: "#ffffff",
      secondary: "#28e98c",
      accent: "#999999",
    },

    light: {
      background: "#ffffff",
      primary: "#1f1f1f",
      secondary: "#28e98c",
      accent: "#999999",
    },
  },
  mobile: "1250px",
  hamburger: false,
};
const Root = () => {
  const [mode, setMode] = useState(true);
  const [theme, setTheme] = useState({
    ...themeDefaultSettings.colors.dark,
    mobile: themeDefaultSettings.mobile,
    hamburger: themeDefaultSettings.hamburger,
  });

  const themeSwitchHandler = (mode) => {
    mode
      ? setTheme({ ...theme, ...themeDefaultSettings.colors.light })
      : setTheme({ ...theme, ...themeDefaultSettings.colors.dark });

    setMode(!mode);
  };

  return (
    <ThemeProvider theme={theme}>
      <DefaultStyle />
      <Outlet context={{ mode, themeSwitchHandler }} />
    </ThemeProvider>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Homepage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
