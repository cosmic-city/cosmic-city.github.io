import { MetadataProvider } from "vite-plugin-pages-metadata";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { StrictMode, Suspense } from "react";
import Navbar from "./components/navbar";
import Cursor from "./components/cursor";
import { metadata } from "./metadata";
import routes from "~react-pages";
import { ring } from "ldrs";
import "./index.css";
import Hotjar from "@hotjar/browser";
const siteId = 4989916;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

ring.register();

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center gap-2">
          <l-ring
            size="25"
            stroke="4"
            bg-opacity="0.25"
            speed="2"
            color="white"
          />
          <p>Loading...</p>
        </div>
      }
    >
      <Cursor />
      {useRoutes(routes)}
    </Suspense>
  );
}

const app = createRoot(document.getElementById("root")!);

app.render(
  <StrictMode>
    <BrowserRouter>
      <MetadataProvider metadata={metadata} routes={routes}>
        <Navbar />
        <main className="mt-24 inline-block">
          <App />
        </main>
      </MetadataProvider>
    </BrowserRouter>
  </StrictMode>
);
