import Root from "./layouts/Root";
import Home from "./pages/Home";

export const routes = [
  {
    component: Root,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home,
      },
    ],
  },
];
