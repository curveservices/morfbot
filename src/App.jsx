import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.scss";
import Layout from "./components/layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}
      ></Route>
    </>,
  ),
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
