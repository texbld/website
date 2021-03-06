import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { remarkMdxFrontmatter } from "remark-mdx-frontmatter";

export default defineConfig(async () => {
  const mdx = await import("@mdx-js/rollup");
  return {
    optimizeDeps: {
      include: ["react/jsx-runtime"],
    },
    plugins: [react(), mdx.default({ remarkPlugins: [remarkMdxFrontmatter] })],
  };
});
