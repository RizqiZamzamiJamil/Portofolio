import "./Style.css";

const BackgroundAnimation = () => {
    return (
        <div className="background-field" aria-hidden="true">
            <div className="background-grid"></div>
            <div className="background-scanline"></div>
            <div className="background-rail background-rail--one"></div>
            <div className="background-rail background-rail--two"></div>
        </div>
    );
};

export default BackgroundAnimation;
