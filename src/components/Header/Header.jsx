import { Outlet, Link, useLocation } from "react-router-dom";
import "./Style.css";

const Header = () => {
    const location = useLocation();
    const isActive = (path) => {
        return location.pathname === path ? "nav-link aktif" : "nav-link";
    };

    return (
        <>
        <nav>
            <header className="border-bottom">
                <div className="container d-flex flex-wrap justify-content-center py-3 mb-0 ">
                    <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                        <span className="fs-4 brand"><i className="fa-brands fa-react"></i> Ri<span className="text-dark">zam</span></span>
                    </Link>

                    <ul className="nav nav-pills">
                        <li className="nav-item"><Link className={isActive("/Portofolio")} to="Portofolio">Home</Link></li>
                        <li className="nav-item"><Link className={isActive("/Portofolio/projects")} to="portofolio/projects">Projects</Link></li>
                        <li className="nav-item"><Link className={isActive("/Portofolio/educations")} to="portofolio/educations">Educations</Link></li>
                    </ul>
                </div>
                
            </header>
        </nav>

        <Outlet />
        </>
    )
};

export default Header;
