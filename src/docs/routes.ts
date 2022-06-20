import Imagetut from "./markdown/Imagetut.mdx";
import Projecttut from "./markdown/Projecttut.mdx";
import Gettingstarted from "./markdown/Gettingstarted.mdx";

export default [
  {
    path: "",
    title: "Getting Started",
    component: Gettingstarted,
  },
  {
    path: "image",
    title: "Setting up Images",
    component: Imagetut,
  },
  {
    path: "project",
    title: "Scaffolding a Project",
    component: Projecttut,
  },
];
