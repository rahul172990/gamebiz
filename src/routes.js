import { useRoutes } from "react-router-dom";
import HomeScreen from "./screens/homeScreen";
import GameDetails from "./screens/gameDetails";
import Contact from "./screens/contact";
import Privacy from "./screens/privacy";
import About from "./screens/about";
import GamesByTag from "./screens/gamesByTag";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <HomeScreen />,
    },

    {
      path: "/game/:id",
      element: <GameDetails />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/privacy",
      element: <Privacy />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/tag/:id",
      element: <GamesByTag />,
    },
  ]);
}
