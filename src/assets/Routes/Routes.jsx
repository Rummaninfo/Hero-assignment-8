import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../../Page/Home";
import Apps from "../../Page/Apps";
import Install from "../../Page/Install";

 export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {index: true, path:"/", Component: Home},
      {path: "/home", Component: Home},
      {path: "/apps", Component: Apps},
      {path: "install", Component: Install}
    ]
  },
]);