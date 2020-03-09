import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ContactState from "./components/context/contact/ContactState";
import AuthState from "./components/context/auth/AuthState";
import AlertState from "./components/context/alert/AlertState";

ReactDOM.render(
  <AuthState>
    <ContactState>
      <AlertState>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AlertState>
    </ContactState>
  </AuthState>,
  document.getElementById("root")
);
