import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Match the main IIIT Pune site's Google Translate session behavior.
if (!sessionStorage.getItem("translate_initialized")) {
  sessionStorage.setItem("translate_initialized", "true");
  const host = window.location.hostname;
  document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  if (host !== "localhost" && host !== "127.0.0.1") {
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${host}; path=/;`;
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.${host}; path=/;`;
  }
}

// Google Translate can mutate React text nodes while navigating.
if (typeof Node === "function" && Node.prototype) {
  const originalRemoveChild = Node.prototype.removeChild;
  Node.prototype.removeChild = function (child) {
    if (child.parentNode !== this) return child;
    return originalRemoveChild.apply(this, arguments);
  };
  const originalInsertBefore = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function (newNode, referenceNode) {
    if (referenceNode && referenceNode.parentNode !== this) return newNode;
    return originalInsertBefore.apply(this, arguments);
  };
  const originalReplaceChild = Node.prototype.replaceChild;
  Node.prototype.replaceChild = function (newChild, oldChild) {
    if (oldChild && oldChild.parentNode !== this) return oldChild;
    return originalReplaceChild.apply(this, arguments);
  };
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);