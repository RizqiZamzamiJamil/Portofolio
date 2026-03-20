import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Education from "./pages/Education/Education";
import Experience from "./pages/Experience/Experience";
import Home from "./pages/Home/Home";
import NoPage from "./pages/NoPage";
import Project from "./pages/Project/Project";

import "./App.css";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto",
        });
    }, [pathname]);

    return null;
};

export default function App() {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route index element={<Home />} />
                    <Route path="projects" element={<Project />} />
                    <Route path="education" element={<Education />} />
                    <Route path="experience" element={<Experience />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}
