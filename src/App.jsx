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
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route index element={<Home />} />
                    <Route path="projects" element={<Project />} />
                    <Route path="education" element={<Education />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}
