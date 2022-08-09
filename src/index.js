import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { makeServer } from "./server";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider, DataProvider, FilterProvider } from "./context";
import { ThemeProvider } from "./context/theme-context";

// Call make Server
makeServer();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <DataProvider>
          <FilterProvider>
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </FilterProvider>
        </DataProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import { makeServer } from "./server";

// // Call make Server
// makeServer();

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
