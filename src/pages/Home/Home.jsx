import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from "react-router-dom";
import BackgroundAnimation from '../../components/Background/BackgroundAnimation';
import Card from '../../components/Card/Card';
import ConfirmationModal from '../../components/Modal/ConfirmationModal';
import ScrollToTopButton from '../../components/ScrollTop/ScrollToTopButton';
import SosmedButton from '../../components/Sosmed/SosmedButton';

import Foto from '../../assets/foto.png';
import Foto2 from '../../assets/foto2.png';
import Project1 from '../../assets/project1.png';
import Project2 from '../../assets/project2.png';
import Project3 from '../../assets/project3.png';
import "./Style.css";

const Home = () => {
    const skills = [
        { name: "HTML & CSS", iconClass: "fab fa-html5", progress: 90 },
        { name: "Java", iconClass: "fab fa-java", progress: 60 },
        { name: "JavaScript", iconClass: "fab fa-js", progress: 85 },
        { name: "Laravel", iconClass: "fab fa-laravel", progress: 65 },
        { name: "Vue JS", iconClass: "fab fa-vuejs", progress: 75 },
        { name: "React JS", iconClass: "fab fa-react", progress: 80 },
    ];

    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowConfirmModal(true);
    };

    const handleConfirm = () => {
        setShowConfirmModal(false);
        console.log("Pesan baru telah terkirim!");

        const messageBody = `Assalamualaikum Wr. Wb. \n\nNama: ${name} \nEmail: ${email} \n\nPesan: ${message}`;
        const url = `https://api.whatsapp.com/send?phone=6282147083442&text=${encodeURIComponent(messageBody)}`;

        window.open(url, "_blank");
    };

    const handleCloseModal = () => {
        setShowConfirmModal(false);
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <main>
            <section className="hero container px-4 py-5">
                <BackgroundAnimation />
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-lg-6 order-lg-1 d-flex justify-content-center justify-content-lg mt-0 foto">
                        <div data-aos="fade-left" data-aos-delay="200" className="position-relative d-flex tengah">
                            <div className="yellow-circle bg-warning position-absolute top-50 start-50 translate-middle"></div>
                            <div data-aos="fade-left" data-aos-delay="300">
                                <img src={Foto} className="img-fluid rounded-circle position-relative z-index-1" alt="Rizqi Zamzami Jamil" width="480"/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="hero-content col-lg-6 order-lg-2 mt-3">
                        <h2 data-aos="fade-right" data-aos-delay="0" className="fw-bold lh-1 mb-3 hero-color">Hi <span className="text-dark">There</span>, I'm</h2>
                        <h1 data-aos="fade-right" data-aos-delay="100" className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Rizqi Zamzami Jamil</h1>
                        <h2 data-aos="fade-right" data-aos-delay="200" className="">I am a <span className="fw-bold hero-color">Frontend Developer</span></h2>
                        
                        <div data-aos="fade-right" data-aos-delay="300" className="social-buttons mt-4">
                            <SosmedButton link="https://www.facebook.com/rizam99zone" icon="fab fa-facebook-f" aria-label="See more for my Facebook" />
                            <SosmedButton link="https://www.instagram.com/rizam896" icon="fab fa-instagram" aria-label="See more for my Instagram" />
                            <SosmedButton link="https://www.linkedin.com/in/rizqi-zamzami-jamil" icon="fab fa-linkedin-in" aria-label="See more for my LinkedIn" />
                            <SosmedButton link="https://github.com/RizqiZamzamiJamil/" icon="fab fa-github" aria-label="See more for my GitHub" />
                        </div>

                        <div data-aos="fade-right" data-aos-delay="400">
                            <button className="btn btn-warning mt-3">
                                <AnchorLink className='anchor-link' offset={80} href="#contact-me">
                                    Contact Me <i className="fa-brands fa-rocketchat"></i>
                                </AnchorLink>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about">
                <div className="container">
                    <h1 data-aos="fade-down" data-aos-delay="100" className="py-5 text-center">About <span>Me</span></h1>

                    <div className="container bg-white content">
                        <div className="row p-4 pb-0 pe-lg-0 align-items-center rounded-3 border shadow-lg">
                            <div className="col-10 col-sm-8 col-lg-4 fotoo">
                                <img data-aos="fade-left" data-aos-delay="400" src={Foto2} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="200" height="500"/>
                            </div>

                            <div className="col-lg-8">
                                <h1 data-aos="fade-right" data-aos-delay="600" className="display-5 fw-bold text-body-emphasis lh-1 mb-3">I'm Rizqi Zamzami Jamil</h1>
                                <p data-aos="fade-right" data-aos-delay="600">Front End Developer</p>
                                <br />
                                <p data-aos="fade-right" data-aos-delay="650" className="lead">
                                    I am a Frontend Web Developer based in Kediri. I have an educational background in Information Technology from <b>Politeknik Negeri Malang</b>.
                                    I am very excited to continue improving my programming skills and developing various applications and websites.
                                </p>
                                
                                <div data-aos="fade-right" data-aos-delay="650" className="d-grid gap-2 d-md-flex justify-content-md-start">
                                    <a type="button" className="btn btn-outline-dark me-2 btn-warning" href='https://drive.google.com/file/d/1bCU0RCD5QQ-jI3US0Wdj6qozbAACYVVZ/view?usp=sharing' target='_blank'>Curriculum Vitae</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="skill">
                <h1 data-aos="fade-down" data-aos-delay="100" className="pt-5 pb-3 text-center">My <span>Skills</span></h1>
                <p data-aos="fade-down" data-aos-delay="300" className="text-center pb-5">
                    In my programming career, I have had various abilities, both in the Frontend and Backend fields.
                    I have a strong understanding of Frontend technologies such as HTML, CSS, and JavaScript, as well as popular frameworks such as
                    Laravel, Vue JS, and React JS.
                </p>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            {skills.slice(0, 3).map((skill, index) => (
                                <div key={index} className="skill-item mb-3">
                                    <div data-aos="fade-left" data-aos-delay="600" className="d-flex align-items-center justify-content-between">
                                        <i className={`${skill.iconClass} icon-lg`}></i>
                                        <div className="skill-info">
                                            <div className="skill-name">{skill.name}</div>
                                            <div className="progress">
                                                <div data-aos="fade-right" data-aos-delay="1200" className="progress-bar" role="progressbar" style={{ width: `${skill.progress}%` }} aria-label={skill.name} aria-valuenow={skill.progress} aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="col-md-6">
                            {skills.slice(3, 6).map((skill, index) => (
                                <div key={index} className="skill-item mb-3">
                                    <div data-aos="fade-right" data-aos-delay="600" className="d-flex align-items-center justify-content-between">
                                        <i className={`${skill.iconClass} icon-lg`}></i>
                                        <div className="skill-info">
                                            <div className="skill-name">{skill.name}</div>
                                            <div className="progress">
                                                <div data-aos="fade-right" data-aos-delay="1200" className="progress-bar" role="progressbar" style={{ width: `${skill.progress}%` }} aria-label={skill.name} aria-valuenow={skill.progress} aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="portofolio">
                <div className="container">
                    <h1 data-aos="fade-down" data-aos-delay="100" className="pt-5 pb-4 text-center">My Latest <span>Projects</span></h1>

                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            <Card imgSrc={Project1}
                                text="A website frontend development project for UMKM Nyah Siok which operates in the dimsum food sector."
                                subtitle="HTML - Bootstrap & SASS"
                                preview="https://rizqizamzamijamil.github.io/Website_UMKM_Nyah_Siok/"
                                code="https://github.com/RizqiZamzamiJamil/Website_UMKM_Nyah_Siok"
                                delay="600"
                            />
                            <Card imgSrc={Project2}
                                text="Implementation of jQuery Ajax which takes the film list API and displays it in the form of a website-based film search"
                                subtitle="JavaScript"
                                preview="https://rizqizamzamijamil.github.io/Cinema_List/"
                                code="https://github.com/RizqiZamzamiJamil/Cinema_List"
                                delay="800"
                            />
                            <Card imgSrc={Project3}
                                text="Full stack project creating a shoe and helmet washing business website that applies the CodeIgniter 4 framework"
                                subtitle="PHP - CodeIgniter 4"
                                preview="/"
                                code="https://github.com/RizqiZamzamiJamil/Cuci_Sepatu_Si_Launsh"
                                delay="1000"
                            />
                        </div>
                    </div>
                    
                    <div className="text-center my-4">
                        <Link className="btn more" to="/projects">More Projects Here <i className="fas fa-chevron-right"></i></Link>
                    </div>
                </div>
            </section>

            <section className="contact" id="contact-me">
                <h1 data-aos="fade-down" data-aos-delay="100" className="py-5 text-center">Contact <span>Me</span></h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 px-5 mb-3">
                            <h2 data-aos="fade-left" data-aos-delay="400"><b>Let's Talk</b></h2>
                            <p data-aos="fade-left" data-aos-delay="500">I'm happy if you want to talk to me. Feel free to get closer to me. Whether you have questions, want to collaborate, or simply say hello, I'm here and ready to connect. Don't hesitate to reach out through the contact form below.</p>
                            <div className="contact-details">
                                <div data-aos="fade-left" data-aos-delay="700" className="contact-item">
                                    <i className="fa-solid fa-envelope"></i>
                                    <p>rizqizamzamij@gmail.com</p>
                                </div>
                                <div data-aos="fade-left" data-aos-delay="800" className="contact-item">
                                    <i className="fa-solid fa-phone"></i>
                                    <p>+62 821 4708 3442</p>
                                </div>
                                <div data-aos="fade-left" data-aos-delay="900" className="contact-item">
                                    <i className="fa-solid fa-location-dot"></i>
                                    <p>Kediri, East Java, Indonesia</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 px-5">
                            <div className="contact-form">
                                <form className='needs-validation was-validated' onSubmit={handleSubmit}>
                                    <div data-aos="fade-right" data-aos-delay="400" className="mb-3">
                                        <label htmlFor="name" className="form-label">Your Name</label>
                                        <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" required
                                            value={name} onChange={(e) => setName(e.target.value)}/>
                                    </div>
                                    <div data-aos="fade-right" data-aos-delay="500" className="mb-3">
                                        <label htmlFor="email" className="form-label">Email Address</label>
                                        <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" required
                                            value={email} onChange={(e) => setEmail(e.target.value)}/>
                                    </div>
                                    <div data-aos="fade-right" data-aos-delay="600" className="mb-3">
                                        <label htmlFor="message" className="form-label">Message</label>
                                        <textarea className="form-control" id="message" name="message" rows="3" placeholder="Enter your message" required
                                            value={message}onChange={(e) => setMessage(e.target.value)}
                                        ></textarea>
                                    </div>
                                    <button data-aos="fade-right" data-aos-delay="700" type="submit" className="btn btn-warning">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ScrollToTopButton />
            <ConfirmationModal
                show={showConfirmModal}
                handleClose={handleCloseModal}
                handleConfirm={handleConfirm}
            />
        </main>
    );
};

export default Home;
