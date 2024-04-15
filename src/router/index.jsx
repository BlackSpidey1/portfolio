import { Route, Routes } from "react-router-dom";

import Home from "@/pages/Home/Home";
import About from "@/pages/About/About";
import Projects from "@/pages/Projects/Projects";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};

export default Router;
