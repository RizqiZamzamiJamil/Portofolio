import { getStackLogos } from "../data/stackLogos";

const StackLogo = ({ stack, size = "md", className = "" }) => {
    const logos = getStackLogos(stack);
    return (
        <span className={`inline-flex shrink-0 items-center justify-center gap-1 ${className}`} aria-hidden="true">
            {logos.map((item) => (
                <span
                    className={`inline-flex ${size === "skill" ? "size-[1.1rem]" : size === "chip" ? "size-4" : size === "project" ? "size-9" : "size-6"} shrink-0 items-center justify-center ${item.needsBackground ? "rounded bg-white p-0.5" : ""}`}
                    key={`${stack}-${item.alt}`}
                >
                    <img className="size-full object-contain" src={item.src} alt="" />
                </span>
            ))}
        </span>
    );
};

export default StackLogo;
