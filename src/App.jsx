import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Education from "./pages/Education/Education";
import Home from "./pages/Home/Home";
import NoPage from "./pages/NoPage";
import Project from "./pages/Project/Project";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index path="portofolio" element={<Home />} />
          <Route path="portofolio/projects" element={<Project />} />
          <Route path="portofolio/educations" element={<Education />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}