import React from "react";
import ReactDOM, {type Container} from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import WorkoutDetails from "./components/WorkoutDetails.tsx";

const root = document.getElementById("root") as Container;

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/workout/1" element={<WorkoutDetails/>}/>
    </Routes>
  </BrowserRouter>
);
