import { getStackLogos } from "../../data/stackLogos";
import "./Style.css";

const StackLogo = ({ stack, size = "md", className = "" }) => {
    const logos = getStackLogos(stack);
    const classes = ["stack-logo", `stack-logo--${size}`, className]
        .filter(Boolean)
        .join(" ");

    return (
        <span className={classes} aria-hidden="true">
            {logos.map((item) => (
                <span
                    className={
                        item.needsBackground
                            ? "stack-logo__item stack-logo__item--background"
                            : "stack-logo__item"
                    }
                    key={`${stack}-${item.alt}`}
                >
                    <img src={item.src} alt="" />
                </span>
            ))}
        </span>
    );
};

export default StackLogo;
