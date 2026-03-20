import "./Style.css";

const SosmedButton = ({ link, icon, label }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link-button"
            aria-label={label}
            title={label}
        >
            <i className={icon} aria-hidden="true"></i>
        </a>
    );
};

export default SosmedButton;
