import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import App from "./App";
import { Typography } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="about" element={<About />} />

      <Route
        path="*"
        element={
          <>
            <Typography
              align="center"
              variant="h1"
              sx={{ marginTop: { xs: "20rem", md: "30rem" } }}
            >
              nothing to see here
            </Typography>
            <Typography align="center" variant="h4">
              I think you may have stubled along a page that doesn't exist,
              return to home here:
            </Typography>
            <Link to="/">
              <Typography align="center" variant="h5">
                Click me c:
              </Typography>
            </Link>
          </>
        }
      />
    </Routes>
  </BrowserRouter>
);
