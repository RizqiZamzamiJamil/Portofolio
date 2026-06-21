import "./Style.css";

const BackgroundAnimation = () => {
    return (
        <div className="background-field" aria-hidden="true">
            <div className="background-grid"></div>
            <div className="background-scanline"></div>
        </div>
    );
};

export default BackgroundAnimation;
