import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../../Page/Home";
import Apps from "../../Page/Apps";
import Install from "../../Page/Install";
import Error from "../../Page/Error";
import AppsDetails from "../../Page/AppsDetail/AppsDetails";

 export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {index: true, path:"/", Component: Home},
      {path: "/home", Component: Home},
      {path: "/apps", Component: Apps},
      {path: "/install", Component: Install},
      {path: "/*", Component: Error  },
       {path:"/appsDetails/:id", Component: AppsDetails}
    ]
  },
]);