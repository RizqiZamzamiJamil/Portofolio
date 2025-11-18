import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Certificate.css";

import Blockchain from "../../assets/blockchain.png";
import Bootstrap from "../../assets/bootstrap.jpg";
import BNSP from "../../assets/bnsp.jpg";
import Gamelab from "../../assets/gamelab2.jpg";
import Javascript from "../../assets/javascript.jpg";
import MSIB from "../../assets/msib (2).jpg";
import ReactJs from "../../assets/react.jpg";
import VueJs from "../../assets/vue.jpg";
import Wordpress from "../../assets/wordpress.png";


const certificates = [
    { img: BNSP, text: "Pemrograman Software Komputer <b>BNSP</b>" },
    { img: Blockchain, text: "Web 3.0 & Blockchain <b>MySkill</b>" },
    { img: Wordpress, text: "Wordpress Development <b>MySkill</b>" },
    {
        img: MSIB,
        text: "Magang dan Studi Independen Bersertifikat <b>(MSIB Batch 6)</b>",
    },
    {
        img: Gamelab,
        text: "Kelas Industri Web Frontend Development <b>(MSIB Batch 6)</b>",
    },
    { img: ReactJs, text: "ReactJs certification by <b>Gamelab</b>" },
    { img: VueJs, text: "VueJs certification by <b>Gamelab</b>" },
    { img: Javascript, text: "JavaScript certification by <b>Gamelab</b>" },
    { img: Bootstrap, text: "Bootstrap certification by <b>Gamelab</b>" },
];

const CertificateCarousel = () => {
    const [items, setItems] = useState([...certificates, ...certificates]);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const trackRef = useRef(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setItems((prevItems) => {
                    const newItems = [...prevItems];
                    const firstItem = newItems.shift();
                    newItems.push(firstItem);
                    return newItems;
                });
                setIsTransitioning(false);
            }, 500);
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <section className="certificates">
            <div className="container">
                <h1
                    data-aos="fade-down"
                    data-aos-delay="100"
                    className="pt-5 pb-4 text-center"
                >
                    My Latest <span>Certificates</span>
                </h1>

                <div id="certificateCarousel" className="carousel-container">
                    <div
                        ref={trackRef}
                        className="carousel-track gap-3"
                        style={{
                            transform: `translateX(${
                                isTransitioning ? "-33.333%" : "0"
                            })`,
                            transition: isTransitioning
                                ? "transform 0.5s ease"
                                : "none",
                        }}
                    >
                        {items.map((cert, index) => (
                            <div
                                className="carousel-card"
                                data-aos="fade-left"
                                data-aos-delay="200"
                                key={index}
                            >
                                <img
                                    src={cert.img}
                                    className="card-img-top"
                                    alt=""
                                />
                                <div className="card-body">
                                    <p
                                        className="card-text"
                                        dangerouslySetInnerHTML={{
                                            __html: cert.text,
                                        }}
                                    ></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div
                    className="text-center my-5"
                    data-aos="fade-down"
                    data-aos-delay="100"
                >
                    <Link
                        className="btn more"
                        to="https://drive.google.com/file/d/1gsLwGgcfcvmGLtGij5DAHWtX5mfgtq4L/view?usp=sharing"
                        target="_blank"
                    >
                        More Certificates Here{" "}
                        <i className="fas fa-chevron-right"></i>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CertificateCarousel;
