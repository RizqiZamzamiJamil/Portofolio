import "./Style.css";

const BackgroundAnimation = () => {
    return (
        <div className="background-orbs" aria-hidden="true">
            <div className="background-orb background-orb--primary"></div>
            <div className="background-orb background-orb--secondary"></div>
            <div className="background-orb background-orb--accent"></div>
            <div className="background-grid"></div>
            <ul className="background-particles">
                {Array.from({ length: 8 }).map((_, index) => (
                    <li key={index}></li>
                ))}
            </ul>
        </div>
    );
};

export default BackgroundAnimation;
