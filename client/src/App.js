import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import "./styles/App.css";

const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
]);

function App() {
  return <RouterProvider className="App" router={router} />;
}

export default App;
