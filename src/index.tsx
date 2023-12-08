import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppContext from "./context/app.context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="bg-slate-200 dark:bg-gray-900 h-full">
      <AppContext>
        <App />
      </AppContext>
    </div>
  </React.StrictMode>
);
