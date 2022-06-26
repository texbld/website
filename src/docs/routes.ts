import { lazy } from "react";

interface Route {
  path: string;
  title: string;
  component: string;
}

const routes: Route[] = [
  {
    path: "",
    title: "Getting Started",
    component: "Gettingstarted",
  },
  {
    path: "0.2/project",
    title: "Project (0.2-dev)",
    component: "0.2/project",
  },
  {
    path: "0.2/image",
    title: "Image (0.2-dev)",
    component: "0.2/image",
  },
  {
    path: "0.1/project",
    title: "Project (0.1)",
    component: "0.1/project",
  },
  {
    path: "0.1/image",
    title: "Images (0.1)",
    component: "0.1/image",
  },
];

const exp = routes.map((route) => ({
  ...route,
  component: lazy(() => import(`./markdown/${route.component}.mdx`)),
}));

export default exp;

//console.log(import.meta.glob("./markdown/**/*.mdx"));
