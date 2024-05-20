import {
  routePlugin,
  generateRoutes,
  Route,
  createMetadata,
} from "vite-plugin-pages-metadata";
import react from "@vitejs/plugin-react";
import Pages from "vite-plugin-pages";
import { defineConfig } from "vite";
import { data } from "./src/data";

let routeArray: Route[] = [];

const pages: Route[] = [
  {
    path: "/",
    title: "Cosmic City",
  },
  { path: "games", title: "Cosmic City | Games" },
  { path: "socials", title: "Cosmic City | Socials" },
  { path: "*", title: "404" },
];

data.map((game) => {
  return routeArray.push({
    path: `/game/${game.id}`,
    title: `${game.title} | Cosmic City`,
  });
});

export default defineConfig(({ command }) => {
  return {
    assetsInclude: ["src/**/*.png"],
    plugins: [
      react(),
      Pages({
        onRoutesGenerated() {
          generateRoutes(pages, (page) => {
            routeArray.push({
              path: page.path,
              ...(page && page.title && { title: page.title }),
              ...(page &&
                page.description && {
                  description: page.description,
                }),
            });
          });
          createMetadata(routeArray);
        },
      }),
      routePlugin({
        routeArray,
        outDir: "dist",
        command,
      }),
    ],
  };
});
