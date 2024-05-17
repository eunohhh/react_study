import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { TestProvider } from "./context/testContext.tsx";
import "./index.css";

import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <TestProvider>
                    <App />
                </TestProvider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
