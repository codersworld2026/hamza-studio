import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
import Book from "./pages/Book.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import Privacy from "./components/Privacy.jsx";

function getPath() {
  let p = window.location.pathname || "/";
  p = p.replace(/\/index\.html$/, "/").replace(/\.html$/, "");
  p = p.replace(/\/+$/, "");
  return p === "" ? "/" : p;
}

function route(path) {
  if (path === "/") return <Home />;
  if (path === "/work") return <Work />;
  if (path === "/book") return <Book />;
  if (path === "/privacy") return <Privacy />;
  if (path.startsWith("/services/")) return <ServicePage slug={path.slice("/services/".length)} />;
  return <Home />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Layout>{route(getPath())}</Layout>
  </StrictMode>
);
