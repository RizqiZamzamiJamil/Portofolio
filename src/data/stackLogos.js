const DEVICON =
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const SIMPLE_ICON = "https://cdn.simpleicons.org";

const logo = (src, alt, options = {}) => ({
    src,
    alt,
    needsBackground: false,
    ...options,
});

const stackAccentMap = {
    Alpine: "8, 145, 178",
    "Alpine.js": "8, 145, 178",
    API: "59, 130, 246",
    Bootstrap: "124, 58, 237",
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
    "Node.js": "83, 158, 67",
    PHP: "119, 123, 180",
    Postman: "255, 108, 55",
    React: "97, 218, 251",
    "React JS": "97, 218, 251",
    "REST API": "59, 130, 246",
    "Tailwind CSS": "56, 189, 248",
    "TMDB API": "1, 180, 228",
    Vite: "100, 108, 255",
    Vue: "66, 184, 131",
    "Vue JS": "66, 184, 131",
    "VS Code": "0, 122, 204",
};

const stackLogoMap = {
    "HTML & CSS": [
        logo(`${DEVICON}/html5/html5-original.svg`, "HTML5"),
    ],
    CSS: [logo(`${DEVICON}/css3/css3-original.svg`, "CSS3")],
    JavaScript: [
        logo(`${DEVICON}/javascript/javascript-original.svg`, "JavaScript"),
    ],
    "Tailwind CSS": [
        logo(`${DEVICON}/tailwindcss/tailwindcss-original.svg`, "Tailwind CSS"),
    ],
    Bootstrap: [
        logo(`${DEVICON}/bootstrap/bootstrap-original.svg`, "Bootstrap"),
    ],
    React: [logo(`${DEVICON}/react/react-original.svg`, "React")],
    "React JS": [logo(`${DEVICON}/react/react-original.svg`, "React")],
    Vue: [logo(`${DEVICON}/vuejs/vuejs-original.svg`, "Vue.js")],
    "Vue JS": [logo(`${DEVICON}/vuejs/vuejs-original.svg`, "Vue.js")],
    PHP: [logo(`${DEVICON}/php/php-original.svg`, "PHP")],
    MySQL: [logo(`${DEVICON}/mysql/mysql-original.svg`, "MySQL")],
    Laravel: [logo(`${DEVICON}/laravel/laravel-original.svg`, "Laravel")],
    "CodeIgniter 4": [
        logo(`${DEVICON}/codeigniter/codeigniter-plain.svg`, "CodeIgniter"),
    ],
    "Node.js": [logo(`${DEVICON}/nodejs/nodejs-original.svg`, "Node.js")],
    Express: [
        logo(`${DEVICON}/express/express-original.svg`, "Express.js", {
            needsBackground: true,
        }),
    ],
    "Express.js": [
        logo(`${DEVICON}/express/express-original.svg`, "Express.js", {
            needsBackground: true,
        }),
    ],
    "REST API": [
        logo(`${SIMPLE_ICON}/openapiinitiative/6BA539`, "OpenAPI"),
    ],
    API: [logo(`${SIMPLE_ICON}/openapiinitiative/6BA539`, "OpenAPI")],
    Vite: [logo(`${DEVICON}/vitejs/vitejs-original.svg`, "Vite")],
    Figma: [logo(`${DEVICON}/figma/figma-original.svg`, "Figma")],
    "VS Code": [logo(`${DEVICON}/vscode/vscode-original.svg`, "VS Code")],
    "Git & GitHub": [
        logo(`${DEVICON}/git/git-original.svg`, "Git"),
    ],
    Postman: [logo(`${DEVICON}/postman/postman-original.svg`, "Postman")],
    Laragon: [logo(`${SIMPLE_ICON}/laragon/0E83CD`, "Laragon")],
    Flowbite: [logo("https://flowbite.com/docs/images/logo.svg", "Flowbite")],
    Livewire: [logo(`${SIMPLE_ICON}/livewire/4E56A6`, "Livewire")],
    "Alpine.js": [logo(`${SIMPLE_ICON}/alpinedotjs/8BC0D0`, "Alpine.js")],
    Alpine: [logo(`${SIMPLE_ICON}/alpinedotjs/8BC0D0`, "Alpine.js")],
    "TMDB API": [logo(`${SIMPLE_ICON}/themoviedatabase/01B4E4`, "TMDB")],
    Flutter: [logo(`${DEVICON}/flutter/flutter-original.svg`, "Flutter")],
};

export const getStackAccent = (stackName, fallbackAccent = "14, 165, 233") =>
    stackAccentMap[stackName] || fallbackAccent;

export const getStackLogos = (stackName) =>
    stackLogoMap[stackName] || [
        logo(`${SIMPLE_ICON}/codepen/13D8FF`, stackName || "Stack"),
    ];
