import { useRoutes } from "react-router"
import { Home } from "../pages"

export const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
  ])
  console.log("in router")
  return routes
}
