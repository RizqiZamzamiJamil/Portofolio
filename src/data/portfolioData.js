import HeroPortrait from "../assets/foto.png";
import AboutPortrait from "../assets/foto2.png";
import SchoolSdSendang from "../assets/education/sd.jpeg";
import SchoolMtsn3 from "../assets/education/mts.png";
import SchoolSmkGrogol from "../assets/education/smk.jpeg";
import SchoolPolinema from "../assets/education/kuliah.jpg";
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
        "Fullstack web developer yang fokus membangun web Laravel yang rapi, aman, dan nyaman dipakai.",
    summary:
        "Lulusan 2025 dari Politeknik Negeri Malang. Saya fokus mengubah kebutuhan bisnis menjadi web yang jelas dan mudah dipakai.",
    secondarySummary:
        "Saya sering menggabungkan Laravel, PHP, JavaScript, dan React untuk web yang rapi di UI dan kuat di logika.",
    heroBadges: [
        "2025 Graduate",
        "Laravel",
        "React",
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
            "Terbiasa memikirkan alur user, data, dan implementasi secara menyatu.",
    },
    {
        title: "Laravel-centered delivery",
        description:
            "Paling sering membangun sistem dengan Laravel untuk backend dan logic aplikasi.",
    },
    {
        title: "UI yang lebih tenang",
        description:
            "Suka membuat tampilan yang rapi, jelas, dan nyaman dipakai.",
    },
];

export const achievementHighlights = [
    {
        title: "Wisudawan Terbaik 2025",
        value: "Top Graduate",
        icon: "fa-solid fa-award",
        description:
            "Pencapaian akademik yang saya jadikan standar kualitas kerja.",
    },
    {
        title: "Lulus Tahun 2025",
        value: "Polinema",
        icon: "fa-solid fa-graduation-cap",
        description:
            "Lulus Business Information System dan aktif membangun project web.",
    },
    {
        title: "Stack Utama",
        value: "Laravel + React",
        icon: "fa-solid fa-layer-group",
        description:
            "Kombinasi utama saya untuk backend terstruktur dan UI responsif.",
    },
    {
        title: "Pengalaman Project",
        value: "10+ Builds",
        icon: "fa-solid fa-rocket",
        description:
            "Mulai dari sistem akademik, repository, website klinik, dan landing page.",
    },
];

export const skillCategories = [
    "Frontend",
    "Backend",
    "API",
    "Delivery",
];

export const skills = [
    {
        name: "Laravel",
        iconClass: "fa-brands fa-laravel",
        level: 93,
        color: "#f97316",
        focus: "CRUD, auth, dashboard, business logic.",
        description: "Stack utama untuk web fullstack.",
    },
    {
        name: "React JS",
        iconClass: "fa-brands fa-react",
        level: 90,
        color: "#0891b2",
        focus: "Component, state flow, responsive UI.",
        description: "UI modular dan interaktif.",
    },
    {
        name: "PHP",
        iconClass: "fa-brands fa-php",
        level: 91,
        color: "#6366f1",
        focus: "Backend logic, templating, server-side flow.",
        description: "Fondasi backend yang stabil.",
    },
    {
        name: "JavaScript",
        iconClass: "fa-brands fa-js",
        level: 88,
        color: "#eab308",
        focus: "DOM, dynamic form, frontend logic.",
        description: "Interaksi cepat di frontend.",
    },
    {
        name: "HTML & CSS",
        iconClass: "fa-brands fa-html5",
        level: 95,
        color: "#ef4444",
        focus: "Semantic markup, layout, visual hierarchy.",
        description: "Layout rapi dan responsif.",
    },
    {
        name: "Vue JS",
        iconClass: "fa-brands fa-vuejs",
        level: 80,
        color: "#10b981",
        focus: "Reactive component dan dashboard ringan.",
        description: "Eksplorasi dashboard ringan.",
    },
];

export const projects = [
    {
        id: "document-repository",
        title: "Document Repository System",
        summary:
            "Repository dokumen web untuk JTI Polinema dengan upload, klasifikasi file, dan akses yang lebih aman.",
        stack: ["Laravel", "PHP", "MySQL", "Bootstrap"],
        category: "Fullstack",
        role: "Thesis Project",
        updatedAt: "2025-11-18",
        image: ProjectRepository,
        liveUrl: null,
        codeUrl: "https://github.com/RizqiZamzamiJamil?tab=repositories",
        highlight:
            "Proyek skripsi dengan fokus repository dan alur data dokumen.",
    },
    {
        id: "stimata-rpl",
        title: "RPL Admission Website",
        summary:
            "Website penerimaan mahasiswa jalur RPL untuk STIMATA Malang.",
        stack: ["Laravel", "PHP", "Blade", "Bootstrap"],
        category: "Fullstack",
        role: "PKL Semester 7",
        updatedAt: "2025-09-06",
        image: ProjectRpl,
        liveUrl: null,
        codeUrl: "https://github.com/RizqiZamzamiJamil?tab=repositories",
        highlight:
            "Proyek PKL semester 7 untuk alur informasi dan pendaftaran mahasiswa.",
    },
    {
        id: "clinic-app",
        title: "Clinic Reservation App",
        summary:
            "Website klinik dengan reservasi online dan notifikasi email.",
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
            "Website promosi brand kuliner dimsum dengan fokus presentasi produk.",
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
            "Eksplorasi pencarian film berbasis API dengan jQuery Ajax.",
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
            "Aplikasi manajemen project sederhana untuk mengatur project dan tim.",
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
            "Aplikasi to do list berbasis Vue JS untuk manajemen task harian.",
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
            "Landing page makanan statis untuk latihan layout dan visual branding.",
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
            "Sistem pendukung keputusan berbasis metode MAUT dengan CodeIgniter 4.",
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
            "Project kolaboratif aplikasi survey mobile dengan Flutter dan Laravel.",
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

export const experienceStats = [
    {
        label: "Campus Org",
        value: "HMTI",
        detail: "Januari 2022 - Januari 2023",
    },
    {
        label: "MSIB",
        value: "MSIB 6",
        detail: "Februari 2024 - Juni 2024",
    },
    {
        label: "PKL",
        value: "Duta Tech",
        detail: "Agustus 2024 - November 2024",
    },
    {
        label: "Internship",
        value: "Kemnaker",
        detail: "November 2025 - Mei 2026",
    },
];

export const experienceEntries = [
    {
        title: "HMTI Polinema",
        organization: "Himpunan Mahasiswa Teknologi Informasi",
        period: "Januari 2022 - Januari 2023",
        phase: "Semester 2 - 3",
        role: "Organizing Committee - Departemen Kominfo",
        accent: "249, 115, 22",
        icon: "fa-solid fa-users-gear",
        summary:
            "Aktif selama satu tahun penuh sebagai panitia kegiatan, editor konten sosial media, dan bagian organizing committee departemen Kominfo.",
        highlights: [
            "Ketua pelaksana program kerja Studi Banding",
            "Panitia pada program kerja lainnya",
            "Editor konten sosial media",
        ],
    },
    {
        title: "MSIB Batch 6",
        organization: "Kampus Merdeka x Gamelab Indonesia",
        period: "Februari 2024 - Juni 2024",
        phase: "Semester 6",
        role: "Frontend Web Developer",
        accent: "8, 145, 178",
        icon: "fa-solid fa-laptop-code",
        summary:
            "Mengikuti Studi Independen satu semester penuh untuk belajar teknis web frontend di luar kampus bersama mitra industri.",
        highlights: [
            "Skema Frontend Web Developer",
            "Mitra Gamelab Indonesia",
            "Program nasional Kampus Merdeka",
        ],
    },
    {
        title: "PKL Duta Technology",
        organization: "CV. Duta Technology - Malang",
        period: "Agustus 2024 - November 2024",
        phase: "Semester 7",
        role: "Fullstack Developer",
        accent: "245, 158, 11",
        icon: "fa-solid fa-code-branch",
        summary:
            "Menjalani PKL selama empat bulan dengan fokus implementasi web fullstack dan penyesuaian kebutuhan kerja lapangan.",
        highlights: [
            "Durasi 4 bulan",
            "Fullstack Developer",
            "Pengalaman industri semester 7",
        ],
    },
    {
        title: "Magang Kemnaker",
        organization: "Kemnaker x Nazma Office",
        period: "November 2025 - Mei 2026",
        phase: "Setelah lulus",
        role: "Fullstack Developer",
        accent: "99, 102, 241",
        icon: "fa-solid fa-briefcase",
        summary:
            "Program magang setelah lulus dengan durasi enam bulan untuk terlibat langsung dalam pengembangan web fullstack.",
        highlights: [
            "Batch 2 2025",
            "Durasi 6 bulan setelah lulus",
            "Mitra Nazma Office",
        ],
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
