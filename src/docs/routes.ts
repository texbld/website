import React, { lazy } from "react";

interface Route {
  path: string;
  title: string;
  component: React.LazyExoticComponent<any>;
}

const routes: Route[] = [
  {
    path: "",
    title: "Getting Started",
    component: lazy(() => import(`./markdown/Gettingstarted.mdx`)),
  },
  {
    path: "0.2/project",
    title: "Project (0.2-dev)",
    component: lazy(() => import(`./markdown/0.2/project.mdx`)),
  },
  {
    path: "0.2/image",
    title: "Image (0.2-dev)",
    component: lazy(() => import(`./markdown/0.2/image.mdx`)),
  },
  {
    path: "0.1/project",
    title: "Project (0.1)",
    component: lazy(() => import(`./markdown/0.1/project.mdx`)),
  },
  {
    path: "0.1/image",
    title: "Images (0.1)",
    component: lazy(() => import(`./markdown/0.1/image.mdx`)),
  },
];

const exp = routes.map((route) => ({
  ...route,
  component: lazy(() => import(`./markdown/${route.component}.mdx`)),
}));

export default routes;

//console.log(import.meta.glob("./markdown/**/*.mdx"));
