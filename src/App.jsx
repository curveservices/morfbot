import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.scss";
import Layout from "./layout/main";
import NotFound from "./pages/404";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Services from "./pages/services";
import LoadingSpinner from "./components/loadingSpinner";
import { Suspense } from "react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="about-us"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="services"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Services />
            </Suspense>
          }
        />
        <Route
          path="contact-us"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Contact />
            </Suspense>
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>,
  ),
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
