import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <main>
      <h1>CHOCCO</h1>
      <p>O aplicativo está começando.</p>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);