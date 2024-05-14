import "./Style.css";

const SosmedButton = ({ link, icon }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-warning me-2 rounded-circle sosmed">
            <i className={icon}></i><span className="visually-hidden">Facebook</span>
        </a>
    );
};

export default SosmedButton;