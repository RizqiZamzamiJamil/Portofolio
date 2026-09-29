const stackAccentMap = {
    Alpine: "8, 145, 178",
    "Alpine.js": "8, 145, 178",
    API: "59, 130, 246",
    Bootstrap: "124, 58, 237",
    "ASP.NET Core": "81, 43, 212",
    "C#": "81, 43, 212",
    "CodeIgniter 4": "239, 68, 68",
    CSS: "14, 165, 233",
    Express: "245, 245, 245",
    "Express.js": "245, 245, 245",
    Figma: "242, 78, 30",
    Flowbite: "56, 189, 248",
    Flutter: "14, 165, 233",
    "Git & GitHub": "240, 80, 50",
    Laravel: "255, 45, 32",
    Laragon: "14, 143, 205",
    Livewire: "124, 58, 237",
    MySQL: "0, 117, 143",
    "Next.js": "245, 245, 245",
    "Node.js": "83, 158, 67",
    ".NET": "81, 43, 212",
    PHP: "119, 123, 180",
    Postman: "255, 108, 55",
    PostgreSQL: "51, 103, 145",
    React: "97, 218, 251",
    "React JS": "97, 218, 251",
    "REST API": "59, 130, 246",
    "Tailwind CSS": "56, 189, 248",
    "TMDB API": "1, 180, 228",
    SQLite: "0, 117, 143",
    Velopack: "22, 216, 242",
    WebView2: "14, 165, 233",
    WPF: "81, 43, 212",
    Vite: "100, 108, 255",
    Vue: "66, 184, 131",
    "Vue JS": "66, 184, 131",
    "VS Code": "0, 122, 204",
};

const getReadableForeground = (rgbColor) => {
    const channels = rgbColor.split(",").map((channel) => Number(channel.trim()));
    const luminance = channels
        .map((channel) => channel / 255)
        .map((channel) =>
            channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4,
        )
        .reduce((sum, channel, index) => sum + channel * [0.2126, 0.7152, 0.0722][index], 0);

    return luminance > 0.179 ? "#0A0A0A" : "#FFFFFF";
};

export const getStackBadgeStyle = (stackName) => {
    const accent = stackAccentMap[stackName] || "14, 165, 233";

    return {
        backgroundColor: `rgb(${accent})`,
        color: getReadableForeground(accent),
    };
};
