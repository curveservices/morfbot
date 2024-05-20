import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.scss";
import Layout from "./components/layout";
import NotFound from "./components/pages/404";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<About />} />
        {/* <Route path="services" element={<Services />} /> */}
        <Route path="contact-us" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>,
  ),
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
