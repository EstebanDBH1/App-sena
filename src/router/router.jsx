import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import EditPage from "../pages/EditPage";
import Detalles from "../pages/Detalles";
import Post from "../pages/Post";
import Login from "../components/login/Login";
import IniciaSesion from "../components/login/IniciaSesion";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/editar",
        element: <EditPage />,
      },
      {
        path: "/details",
        element: <Detalles />,
      },
      {
        path: "/post",
        element: <Post />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/inicia-sesion",
        element: <IniciaSesion />,
      },
    ],
  },
]);
