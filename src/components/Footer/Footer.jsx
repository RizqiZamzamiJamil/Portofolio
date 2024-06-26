import SosmedButton from "../Sosmed/SosmedButton";

const Footer = () => {
    return (
        <footer className="py-4 border-top">
            <div className="container d-flex flex-wrap justify-content-between align-items-center ">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                        <span className="fs-4 brand"><i className="fa-brands fa-react"></i> Ri<span className="text-dark">zam</span></span>
                    </a>
                    <span className="mb-3 mb-md-0 text-body-secondary fw-bold"><i className="fa-brands fa-react"></i>React JS © 2024 Rizqi Zamzami Jamil</span>
                </div>

                <div className="social-buttons">
                    <SosmedButton link="https://www.facebook.com/rizam99zone" icon="fab fa-facebook-f" aria-label="See more for my Facebook" />
                    <SosmedButton link="https://www.instagram.com/rizam896" icon="fab fa-instagram" aria-label="See more for my Instagram" />
                    <SosmedButton link="https://www.linkedin.com/in/rizqi-zamzami-jamil" icon="fab fa-linkedin-in" aria-label="See more for my LinkedIn" />
                    <SosmedButton link="https://github.com/RizqiZamzamiJamil/" icon="fab fa-github" aria-label="See more for my GitHub" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;