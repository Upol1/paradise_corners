import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import AdminPage from "../pages/AdminPage";
import EditProduct from "../components/products/EditProduct";
import AboutContextProvider from "../context/AboutContextProvider";
import Home from "../../containers/Home";
import ContactUs from "../../containers/ContactUs";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { id: 1, link: "/", element: <Home /> },
    { id: 2, link: "/edit/:id", element: <EditProduct /> },
    {
      id: 4,
      link: "/about",
      element: (
        <AboutContextProvider>
          <AboutPage />
        </AboutContextProvider>
      ),
    },
    { id: 5, link: "/contacts", element: <ContactUs /> },
    { id: 6, link: "/admin", element: <AdminPage /> },
  ];

  return (
    <Routes>
      {PUBLIC_ROUTES.map((elem) => (
        <Route path={elem.link} element={elem.element} key={elem.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
