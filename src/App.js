import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import DefaultStyle from "./default.styled";

const Root = () => {
  return (
    <>
      <DefaultStyle />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Root />}></Route>)
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
