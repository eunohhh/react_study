import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { TestProvider } from "./context/testContext.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <TestProvider>
                <App />
            </TestProvider>
        </BrowserRouter>
    </React.StrictMode>
);
