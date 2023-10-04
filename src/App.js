import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "../src/layout/index";
import Homepage from "./pages/home/Homepage";
import Oriki from "./pages/oriki/Oriki";
import Blog from "./pages/blog/Blog";
import About from "./pages/about/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about_us" element={<About/>} />
          <Route path="/oriki" element={<Oriki />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
