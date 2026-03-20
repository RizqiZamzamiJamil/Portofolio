import HeroPortrait from "../assets/foto.png";
import AboutPortrait from "../assets/foto2.png";
import SchoolSdSendang from "../assets/education/sd-negeri-sendang.svg";
import SchoolMtsn3 from "../assets/education/mtsn-3-kediri.svg";
import SchoolSmkGrogol from "../assets/education/smk-1-grogol.svg";
import SchoolPolinema from "../assets/education/polinema.svg";
import ProjectClinic from "../assets/ProjectNew.png";
import ProjectManagement from "../assets/Project8.png";
import ProjectRpl from "../assets/project0.png";
import ProjectRepository from "../assets/project001.png";
import ProjectNyahSiok from "../assets/project1.png";
import ProjectCinema from "../assets/project2.png";
import ProjectLaundry from "../assets/project3.png";
import ProjectTodoVue from "../assets/project4.png";
import ProjectFoodLanding from "../assets/project5.png";
import ProjectMaut from "../assets/project6.png";
import ProjectSurvey from "../assets/project7.png";
import BlockchainCertificate from "../assets/blockchain.png";
import BootstrapCertificate from "../assets/bootstrap.jpg";
import BnspCertificate from "../assets/bnsp.jpg";
import GamelabCertificate from "../assets/gamelab2.jpg";
import JavascriptCertificate from "../assets/javascript.jpg";
import MsibCertificate from "../assets/msib (2).jpg";
import ReactCertificate from "../assets/react.jpg";
import VueCertificate from "../assets/vue.jpg";
import WordpressCertificate from "../assets/wordpress.png";

export const profile = {
    name: "Rizqi Zamzami Jamil",
    shortName: "Rizam",
    role: "Fullstack Web Developer",
    location: "Malang, East Java, Indonesia",
    email: "rizqizamzamij@gmail.com",
    phone: "+62 821 4708 3442",
    heroImage: HeroPortrait,
    aboutImage: AboutPortrait,
    cvUrl: "https://drive.google.com/file/d/1nb3bKVORIM6C8vCNbUMSnI8WyHrsQJE8/view?usp=sharing",
    certificateCollectionUrl:
        "https://drive.google.com/file/d/1gsLwGgcfcvmGLtGij5DAHWtX5mfgtq4L/view?usp=sharing",
    heroDescription:
        "Saya adalah fullstack web developer yang nyaman mengerjakan alur produk dari frontend sampai backend, dengan Laravel sebagai stack yang paling sering saya gunakan untuk membangun sistem web yang rapi, aman, dan terasa halus dipakai.",
    summary:
        "Lulusan tahun 2025 dari Politeknik Negeri Malang dengan latar belakang Business Information System. Saya senang mengubah kebutuhan bisnis menjadi antarmuka yang jelas, alur yang efisien, dan sistem yang mudah dirawat.",
    secondarySummary:
        "Dalam praktiknya saya sering menggabungkan Laravel, PHP, JavaScript, React, dan pengolahan data terstruktur untuk membuat website yang bukan hanya enak dilihat, tapi juga punya fondasi yang kuat di sisi logika dan pengalaman pengguna.",
    heroBadges: [
        "Graduate 2025",
        "Laravel-focused",
        "React-friendly",
        "Best Graduate",
    ],
};

export const socialLinks = [
    {
        label: "Facebook",
        icon: "fa-brands fa-facebook-f",
        url: "https://www.facebook.com/rizam99zone",
    },
    {
        label: "Instagram",
        icon: "fa-brands fa-instagram",
        url: "https://www.instagram.com/rizam_disini",
    },
    {
        label: "LinkedIn",
        icon: "fa-brands fa-linkedin-in",
        url: "https://www.linkedin.com/in/rizqi-zamzami-jamil",
    },
    {
        label: "GitHub",
        icon: "fa-brands fa-github",
        url: "https://github.com/RizqiZamzamiJamil/",
    },
];

export const coreStrengths = [
    {
        title: "End-to-end thinking",
        description:
            "Terbiasa memikirkan alur user, struktur data, dan kebutuhan implementasi secara menyatu sejak awal.",
    },
    {
        title: "Laravel-centered delivery",
        description:
            "Paling sering membangun sistem memakai Laravel untuk backend, validasi, routing, dan pengelolaan logic aplikasi.",
    },
    {
        title: "UI yang lebih tenang",
        description:
            "Suka membuat tampilan yang rapi, punya hierarki visual jelas, dan animasi yang membantu, bukan mengganggu.",
    },
];

export const achievementHighlights = [
    {
        title: "Wisudawan Terbaik 2025",
        value: "Top Graduate",
        icon: "fa-solid fa-award",
        description:
            "Pencapaian akademik yang memperkuat disiplin, konsistensi, dan perhatian saya pada kualitas hasil kerja.",
    },
    {
        title: "Lulus Tahun 2025",
        value: "Polinema",
        icon: "fa-solid fa-graduation-cap",
        description:
            "Menyelesaikan studi Business Information System dan aktif membangun project yang relevan dengan kebutuhan dunia kerja.",
    },
    {
        title: "Stack Utama",
        value: "Laravel + React",
        icon: "fa-solid fa-layer-group",
        description:
            "Berfokus pada kombinasi backend yang terstruktur dan frontend yang responsif untuk pengalaman pengguna yang lebih mulus.",
    },
    {
        title: "Pengalaman Project",
        value: "10+ Builds",
        icon: "fa-solid fa-rocket",
        description:
            "Mulai dari sistem akademik, repository dokumen, website klinik, sampai landing page dan aplikasi manajemen sederhana.",
    },
];

export const skillCategories = [
    "Frontend Interface",
    "Backend Architecture",
    "API & Data Handling",
    "Product-oriented Delivery",
];

export const skills = [
    {
        name: "Laravel",
        iconClass: "fa-brands fa-laravel",
        level: 93,
        color: "#f97316",
        focus: "Routing, validation, auth flow, dashboard, CRUD, and business logic.",
        description:
            "Stack yang paling sering saya pakai untuk membangun website fullstack dengan struktur yang rapi.",
    },
    {
        name: "React JS",
        iconClass: "fa-brands fa-react",
        level: 90,
        color: "#0891b2",
        focus: "Reusable component, state flow, interaction detail, and responsive layout.",
        description:
            "Saya gunakan untuk membuat antarmuka yang lebih hidup, modular, dan nyaman dipakai.",
    },
    {
        name: "PHP",
        iconClass: "fa-brands fa-php",
        level: 91,
        color: "#6366f1",
        focus: "Backend logic, templating, application structure, and server-side processing.",
        description:
            "Menjadi fondasi yang kuat untuk banyak project web yang saya kerjakan, terutama bersama Laravel.",
    },
    {
        name: "JavaScript",
        iconClass: "fa-brands fa-js",
        level: 88,
        color: "#eab308",
        focus: "DOM interaction, dynamic form, client-side logic, and UX enhancement.",
        description:
            "Saya andalkan untuk menambah interaksi yang terasa cepat, ringan, dan lebih natural.",
    },
    {
        name: "HTML & CSS",
        iconClass: "fa-brands fa-html5",
        level: 95,
        color: "#ef4444",
        focus: "Semantic markup, responsive sectioning, layout system, and visual hierarchy.",
        description:
            "Saya suka merapikan struktur tampilan supaya lebih terukur, konsisten, dan mudah dikembangkan.",
    },
    {
        name: "Vue JS",
        iconClass: "fa-brands fa-vuejs",
        level: 80,
        color: "#10b981",
        focus: "Reactive component, lightweight dashboard, and small interactive apps.",
        description:
            "Pernah saya gunakan untuk project manajemen sederhana dan beberapa eksplorasi frontend.",
    },
];

export const projects = [
    {
        id: "document-repository",
        title: "Document Repository System",
        summary:
            "Sistem repository dokumen berbasis web untuk JTI Polinema dengan pengelolaan upload, organisasi file, dan akses berbagi yang lebih aman. Project ini merupakan karya skripsi saya.",
        stack: ["Laravel", "PHP", "MySQL", "Bootstrap"],
        category: "Fullstack",
        role: "Thesis Project",
        updatedAt: "2025-11-18",
        image: ProjectRepository,
        liveUrl: null,
        codeUrl: "https://github.com/RizqiZamzamiJamil?tab=repositories",
        highlight:
            "Proyek skripsi yang menitikberatkan pada alur data dokumen, manajemen repository, dan struktur sistem yang lebih rapi.",
    },
    {
        id: "stimata-rpl",
        title: "RPL Admission Website",
        summary:
            "Website penerimaan mahasiswa baru jalur RPL untuk STIMATA Malang dengan alur informasi yang lebih jelas dan mudah diakses. Project ini saya kerjakan saat PKL kuliah semester 7.",
        stack: ["Laravel", "PHP", "Blade", "Bootstrap"],
        category: "Fullstack",
        role: "PKL Semester 7",
        updatedAt: "2025-09-06",
        image: ProjectRpl,
        liveUrl: null,
        codeUrl: "https://github.com/RizqiZamzamiJamil?tab=repositories",
        highlight:
            "Proyek PKL semester 7 yang berfokus pada arsitektur halaman informasi, form pendaftaran, dan pengalaman user yang lebih efisien.",
    },
    {
        id: "clinic-app",
        title: "Clinic Reservation App",
        summary:
            "Website klinik dinamis dengan reservasi online dan notifikasi email, dibangun selama MSIB Batch 6.",
        stack: ["React", "Express", "JavaScript", "Email Notification"],
        category: "Fullstack",
        role: "Internship Build",
        updatedAt: "2025-07-14",
        image: ProjectClinic,
        liveUrl: "https://fe-msib-6-klinik-app-04.educalab.id/",
        codeUrl: "https://github.com/RizqiZamzamiJamil/klinik-app",
        highlight:
            "Menggabungkan UI dinamis dengan reservasi dan komunikasi notifikasi berbasis email.",
    },
    {
        id: "nyah-siok",
        title: "UMKM Nyah Siok Website",
        summary:
            "Project frontend untuk brand kuliner dimsum dengan tampilan promosi yang kuat dan fokus pada presentasi produk.",
        stack: ["HTML", "Bootstrap", "SASS"],
        category: "Frontend",
        role: "Brand Website",
        updatedAt: "2024-11-20",
        image: ProjectNyahSiok,
        liveUrl: "https://rizqizamzamijamil.github.io/Website_UMKM_Nyah_Siok/",
        codeUrl: "https://github.com/RizqiZamzamiJamil/Website_UMKM_Nyah_Siok",
        highlight:
            "Menekankan tampilan landing page yang lebih komunikatif untuk promosi UMKM.",
    },
    {
        id: "cinema-list",
        title: "Cinema List Search",
        summary:
            "Eksplorasi pencarian film berbasis API menggunakan jQuery Ajax untuk menampilkan daftar film secara dinamis.",
        stack: ["JavaScript", "API", "jQuery", "Bootstrap"],
        category: "Frontend",
        role: "API Exploration",
        updatedAt: "2024-08-10",
        image: ProjectCinema,
        liveUrl: "https://rizqizamzamijamil.github.io/Cinema_List/",
        codeUrl: "https://github.com/RizqiZamzamiJamil/Cinema_List",
        highlight:
            "Melatih pengambilan data eksternal dan pencarian berbasis user input secara real time.",
    },
    {
        id: "si-launsh",
        title: "Si Launsh Business Website",
        summary:
            "Website fullstack untuk usaha cuci sepatu dan helm yang dibangun dengan CodeIgniter 4.",
        stack: ["PHP", "CodeIgniter 4", "MySQL"],
        category: "Fullstack",
        role: "Business Platform",
        updatedAt: "2024-05-15",
        image: ProjectLaundry,
        liveUrl: null,
        codeUrl: "https://github.com/RizqiZamzamiJamil/Cuci_Sepatu_Si_Launsh",
        highlight:
            "Menerapkan alur usaha ke website layanan yang lebih terstruktur dan informatif.",
    },
    {
        id: "project-management-vue",
        title: "Simple Project Management",
        summary:
            "Aplikasi manajemen project sederhana tanpa database untuk mengatur nama project dan anggota tim.",
        stack: ["Vue", "JavaScript", "Local State"],
        category: "Frontend",
        role: "Dashboard Practice",
        updatedAt: "2024-03-22",
        image: ProjectManagement,
        liveUrl: null,
        codeUrl: "https://github.com/RizqiZamzamiJamil/Manajemen_Proyek_Sederhana",
        highlight:
            "Berfokus pada state management sederhana dan penyusunan UI dashboard mini.",
    },
    {
        id: "todo-vue",
        title: "Vue To Do List",
        summary:
            "Aplikasi to do list sederhana berbasis Vue JS dengan pendekatan ringan untuk manajemen task harian.",
        stack: ["Vue", "JavaScript", "CDN"],
        category: "Frontend",
        role: "UI Practice",
        updatedAt: "2023-12-06",
        image: ProjectTodoVue,
        liveUrl: "https://rizqizamzamijamil.github.io/To_Do_List/",
        codeUrl: "https://github.com/RizqiZamzamiJamil/To_Do_List",
        highlight:
            "Menjaga pengalaman input dan pengelolaan task tetap cepat dan sederhana.",
    },
    {
        id: "food-landing-page",
        title: "Static Food Landing Page",
        summary:
            "Landing page makanan statis yang dibangun dengan HTML dan CSS untuk latihan struktur layout dan visual branding.",
        stack: ["HTML", "CSS"],
        category: "Frontend",
        role: "Landing Page",
        updatedAt: "2023-09-18",
        image: ProjectFoodLanding,
        liveUrl: "https://rizqizamzamijamil.github.io/Landing_Page_Sederhana/",
        codeUrl: "https://github.com/RizqiZamzamiJamil/Landing_Page_Sederhana",
        highlight:
            "Mengasah kemampuan visual hierarchy dan layout responsive tanpa framework.",
    },
    {
        id: "maut-system",
        title: "Decision Support System MAUT",
        summary:
            "Sistem pendukung keputusan berbasis metode MAUT menggunakan CodeIgniter 4 untuk kebutuhan evaluasi berbobot.",
        stack: ["PHP", "CodeIgniter 4", "Decision Support"],
        category: "Fullstack",
        role: "Analytical System",
        updatedAt: "2023-06-12",
        image: ProjectMaut,
        liveUrl: null,
        codeUrl: "https://github.com/RizqiZamzamiJamil/Sistem_Pendukung_Keputusan_MAUT",
        highlight:
            "Menerapkan logika pengambilan keputusan ke dalam sistem web yang lebih terstruktur.",
    },
    {
        id: "peek-survey-mobile",
        title: "Peek Survey Mobile Collaboration",
        summary:
            "Project kolaboratif aplikasi survey mobile dengan Flutter untuk frontend dan Laravel sebagai backend.",
        stack: ["Flutter", "Dart", "Laravel", "API"],
        category: "Mobile",
        role: "Collaborative Project",
        updatedAt: "2023-02-25",
        image: ProjectSurvey,
        liveUrl: null,
        codeUrl: "https://github.com/RizqiZamzamiJamil/Survey_Mobile",
        highlight:
            "Memberikan pengalaman kerja lintas stack dengan pembagian peran frontend dan backend.",
    },
];

export const latestProjects = [...projects]
    .sort((left, right) => new Date(right.updatedAt) - new Date(left.updatedAt))
    .slice(0, 3);

export const certificates = [
    {
        title: "Pemrograman Software Komputer",
        issuer: "BNSP",
        focus: "Standar kompetensi profesi bidang software.",
        issuedAt: "2025",
        image: BnspCertificate,
    },
    {
        title: "Web 3.0 & Blockchain",
        issuer: "MySkill",
        focus: "Pengenalan konsep blockchain dan ekosistem web modern.",
        issuedAt: "2025",
        image: BlockchainCertificate,
    },
    {
        title: "WordPress Development",
        issuer: "MySkill",
        focus: "Website management dan development workflow berbasis WordPress.",
        issuedAt: "2024",
        image: WordpressCertificate,
    },
    {
        title: "MSIB Batch 6",
        issuer: "Kampus Merdeka",
        focus: "Magang dan studi independen bersertifikat dengan pendekatan industri.",
        issuedAt: "2024",
        image: MsibCertificate,
    },
    {
        title: "Frontend Development Class",
        issuer: "Gamelab",
        focus: "Pendalaman web frontend sebagai jalur belajar industri.",
        issuedAt: "2024",
        image: GamelabCertificate,
    },
    {
        title: "React JS Certification",
        issuer: "Gamelab",
        focus: "Komponen, state, dan antarmuka interaktif dengan React.",
        issuedAt: "2024",
        image: ReactCertificate,
    },
    {
        title: "Vue JS Certification",
        issuer: "Gamelab",
        focus: "Reactive interface dan eksplorasi SPA berbasis Vue.",
        issuedAt: "2024",
        image: VueCertificate,
    },
    {
        title: "JavaScript Certification",
        issuer: "Gamelab",
        focus: "Dasar logika pemrograman client-side dan interaksi dinamis.",
        issuedAt: "2024",
        image: JavascriptCertificate,
    },
    {
        title: "Bootstrap Certification",
        issuer: "Gamelab",
        focus: "Responsive interface dengan sistem layout komponen Bootstrap.",
        issuedAt: "2024",
        image: BootstrapCertificate,
    },
];

export const educationTimeline = [
    {
        period: "2009 - 2015",
        school: "SD Negeri Sendang",
        location: "Kediri",
        image: SchoolSdSendang,
        title: "Pendidikan dasar",
        description:
            "Membangun dasar kemampuan belajar, rasa ingin tahu, dan kebiasaan disiplin yang kemudian terus terbawa ke jenjang berikutnya.",
        highlights: ["Fondasi akademik", "Adaptasi", "Kedisiplinan"],
    },
    {
        period: "2015 - 2018",
        school: "MTs Negeri 3 Kota Kediri",
        location: "Kediri",
        image: SchoolMtsn3,
        title: "Penguatan akademik dan karakter",
        description:
            "Menjalani pendidikan yang memperkuat kombinasi antara pembelajaran akademik, ketelitian, dan pembentukan karakter.",
        highlights: ["Akademik umum", "Karakter", "Konsistensi"],
    },
    {
        period: "2018 - 2021",
        school: "SMK Negeri 1 Grogol",
        location: "Kediri",
        image: SchoolSmkGrogol,
        title: "Awal ketertarikan ke jalur teknis",
        description:
            "Mulai lebih dekat dengan pola pikir vokasional dan pembelajaran yang berorientasi praktik, problem solving, dan kesiapan kerja.",
        highlights: ["Praktik teknis", "Problem solving", "Vocational mindset"],
    },
    {
        period: "2021 - 2025",
        school: "Politeknik Negeri Malang",
        location: "Malang",
        image: SchoolPolinema,
        title: "Business Information System",
        description:
            "Menyelesaikan studi pada tahun 2025 dengan fokus pada pengembangan web, sistem informasi, dan penerjemahan kebutuhan bisnis menjadi solusi digital yang usable.",
        highlights: ["Graduate 2025", "Best Graduate", "Web Development"],
    },
];

export const contactDetails = [
    {
        label: "Email",
        value: profile.email,
        icon: "fa-solid fa-envelope",
    },
    {
        label: "Phone",
        value: profile.phone,
        icon: "fa-solid fa-phone",
    },
    {
        label: "Location",
        value: profile.location,
        icon: "fa-solid fa-location-dot",
    },
];

export const portfolioStats = [
    {
        label: "Graduation",
        value: "2025",
        detail: "Politeknik Negeri Malang",
    },
    {
        label: "Main Focus",
        value: "Fullstack",
        detail: "Laravel, React, PHP, JavaScript",
    },
    {
        label: "Projects",
        value: `${projects.length}+`,
        detail: "Selected portfolio works",
    },
    {
        label: "Highlight",
        value: "Best Graduate",
        detail: "Academic achievement milestone",
    },
];
