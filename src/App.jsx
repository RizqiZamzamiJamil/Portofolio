import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import AiChat from "./components/AiChat";
import NotFound from "./components/NotFound";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

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
        <MotionConfig reducedMotion="user">
            <BrowserRouter basename={import.meta.env.BASE_URL}>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Header />}>
                        <Route index element={<Home />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="education" element={<Education />} />
                        <Route path="experience" element={<Experience />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
                <ScrollToTopButton />
                <AiChat />
                <Footer />
            </BrowserRouter>
        </MotionConfig>
    );
}
