import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.scss";
import Layout from "./components/layout";
import NotFound from "./components/pages/404";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>

      </Route>
      <Route path="*" element={<NotFound />} />
    </>,
  ),
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
