import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";

//lazyload || on demand || dynamic imports
const Instamart = lazy(() => "./components/Instamart.js");
/*

<<< APP STRUCTURE >>>
Header
    Logo
    menuItems
    Cart
Body
    Searchbar
    Restaurant list
        Restaurant Card
Footer
    copyright

*/

const heading = React.createElement(
  "h1",
  {
    key: "title",
    id: "title",
    style: {
      color: "red",
    },
  },
  "Heading"
);

const heading1 = React.createElement(
  "h2",
  {
    id: "Sub Heading",
    key: "Sub Heading",
    style: {
      color: "cyan",
    },
  },
  "Sub Heading"
);

//jsx
const myJsx = <h2>Hello jsx</h2>;

const MyFun = () => {
  return <h3>Functional component</h3>;
};

const MyFun1 = () => (
  <>
    {MyFun()}
    <h4>Hello function</h4>
    <p>Fancy functional component</p>
  </>
);

const RestroData = {
  name: "La-Polos Restro",
  image:
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
  rating: "4.5",
  Cuisene: ["Italian", "Mexican"],
};

const AppLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurant/:id", element: <RestaurantMenu /> },
      {
        path: "/instamart",
        element: <Instamart />,
      },
    ],
  },
]);

const container = React.createElement("div", {}, [heading, heading1]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
