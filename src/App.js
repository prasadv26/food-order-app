import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import store from "./utils/redux/store";
import Cart from "./components/Cart";

//lazyload || on demand || dynamic imports
const Instamart = lazy(() => import("./components/Instamart.js"));
const About = lazy(() => import("./components/About.js"));
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

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Prasad",
    email: "prasad@gmail.com",
  });

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurant/:id", element: <RestaurantMenu /> },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

const container = React.createElement("div", {}, [heading, heading1]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
