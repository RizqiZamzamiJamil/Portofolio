import "./Style.css";

const Card = ({ imgSrc, text, subtitle, preview, code, delay }) => {
    return (
        <div className="col">
            <div data-aos="fade-left" data-aos-delay={delay} className="card shadow-sm">
                <img src={imgSrc} alt="" />
                <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                        <p className="card-text">{text}</p>
                        
                    </div>
                    <div className="other">
                        <div className="preview d-flex align-items-center gap-3 mb-2">
                            <a className="btn" href={preview} target="_blank">Preview <i className="fa-solid fa-eye"></i></a>
                            <a className="btn" href={code} target="_blank">Code <i className="fa-solid fa-code"></i></a>
                        </div>
                        
                    </div>
                </div>
                <small className="text-warning py-2 px-4">{subtitle}</small>
            </div>
            
        </div>
    );
};

export default Card;