import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Home from "./Pages/Home/Home";
import { useState } from "react";
import Nav from "./Components/Navbar/Nav";
import MobileNav from "./Components/MobileNav/MobileNav";


const Layout = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);
  return (
    <div className="app">
      <MobileNav nav={nav} closeNav={closeNav} />
      <Nav openNav={openNav} />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // {
      //   path: "/",
      //   element: <Home />,
      // },
      // {
      //   path: "/Home",
      //   element: <Home />,
      // },
      
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;