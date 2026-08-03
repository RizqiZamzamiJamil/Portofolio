import "./Style.css";

const SectionScrollCue = ({ label, targetId }) => {
    return (
        <a className="section-scroll-cue" href={`#${targetId}`}>
            <span>{label}</span>
            <svg
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 24 24"
            >
                <path d="M12 5v14m7-7-7 7-7-7" />
            </svg>
        </a>
    );
};

export default SectionScrollCue;
