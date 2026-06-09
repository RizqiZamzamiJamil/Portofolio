import BestDefense from "../assets/bestdefense.jpg";
import BlockchainCertificate from "../assets/blockchain.png";
import BnspCertificate from "../assets/bnsp.jpg";
import BootstrapCertificate from "../assets/bootstrap.jpg";
import HeroPortrait from "../assets/foto.png";
import AboutPortrait from "../assets/foto2.png";
import GamelabCertificate from "../assets/gamelab2.jpg";
import JavascriptCertificate from "../assets/javascript.jpg";
import ProjectLMS from "../assets/lms.png";
import PortfolioLogo from "../assets/logo.png";
import MagangHub from "../assets/maganghub.png";
import MsibCertificate from "../assets/msib (2).jpg";
import ProjectRpl from "../assets/project0.png";
import ProjectRepository from "../assets/project001.png";
import ProjectCinema from "../assets/project2.png";
import ProjectLaundry from "../assets/project3.png";
import ProjectMaut from "../assets/project6.png";
import ProjectSurvey from "../assets/project7.png";
import ProjectManagement from "../assets/Project8.png";
import ProjectClinic from "../assets/ProjectNew.png";
import ReactCertificate from "../assets/react.jpg";
import ProjectSinggahLoka from "../assets/singgah-loka.png";
import VueCertificate from "../assets/vue.jpg";
import BestGraduateCertificate from "../assets/Wisudawan Terbaik Prodi.jpg";
import WordpressCertificate from "../assets/wordpress.png";

export const profile = {
    name: "Rizqi Zamzami Jamil",
    shortName: "Rizam",
    role: "Fullstack Web Developer",
    location: "Kediri, Jawa Timur, Indonesia",
    email: "rizqizamzamij@gmail.com",
    phone: "+62 821 4708 3442",
    heroImage: HeroPortrait,
    aboutImage: AboutPortrait,
    cvUrl: "https://drive.google.com/file/d/1J5-z9hUHXmMpZxg_RZIV9GZGptyGIuYq/view?usp=sharing",
    certificateCollectionUrl:
        "https://drive.google.com/file/d/1gsLwGgcfcvmGLtGij5DAHWtX5mfgtq4L/view?usp=sharing",
    heroDescription:
        "Saya membangun web fullstack yang rapi, mudah dipakai, dan kuat di alur data.",
    summary:
        "Lulusan Sistem Informasi Bisnis Politeknik Negeri Malang tahun 2025. Saya fokus mengubah kebutuhan pengguna dan proses bisnis menjadi aplikasi web yang jelas, terstruktur, dan nyaman dipakai.",
    secondarySummary:
        "Stack yang paling sering saya gunakan adalah Laravel, PHP, React, JavaScript, dan Tailwind CSS, dengan perhatian besar pada struktur backend dan UI yang sesuai dengan kebutuhan pengguna.",
    heroBadges: ["Laravel", "React", "PHP", "JavaScript"],
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
        title: "Fullstack Web Development",
        description:
            "Mengerjakan frontend, backend, database, dan integrasi fitur untuk aplikasi web end-to-end.",
    },
    {
        title: "Alur Bisnis & Sistem",
        description:
            "Membaca kebutuhan proses bisnis lalu menerjemahkannya menjadi alur fitur dan struktur data.",
    },
    {
        title: "Delivery Project",
        description:
            "Berpengalaman di project mandiri dan tim, mulai dari portfolio, skripsi, PKL, MSIB, sampai magang.",
    },
];

export const skillGroups = [
    {
        title: "Frontend",
        skills: [
            {
                name: "HTML & CSS",
                level: "Lanjut",
                color: "#e34f26",
            },
            {
                name: "JavaScript",
                level: "Menengah",
                color: "#f7df1e",
            },
            {
                name: "Tailwind CSS",
                level: "Lanjut",
                color: "#38bdf8",
            },
            {
                name: "Bootstrap",
                level: "Lanjut",
                color: "#7952b3",
            },
            {
                name: "React JS",
                level: "Menengah",
                color: "#61dafb",
            },
            {
                name: "Vue JS",
                level: "Dasar",
                color: "#42b883",
            },
        ],
    },
    {
        title: "Backend",
        skills: [
            {
                name: "PHP",
                level: "Lanjut",
                color: "#777bb4",
            },
            {
                name: "MySQL",
                level: "Lanjut",
                color: "#00758f",
            },
            {
                name: "Laravel",
                level: "Menengah",
                color: "#ff2d20",
            },
            {
                name: "CodeIgniter 4",
                level: "Menengah",
                color: "#ef4223",
            },
            {
                name: "Node.js",
                level: "Dasar",
                color: "#539e43",
            },
            {
                name: "Express.js",
                level: "Dasar",
                color: "#f8fafc",
            },
        ],
    },
    {
        title: "Tools",
        skills: [
            {
                name: "VS Code",
                level: "Lanjut",
                color: "#007acc",
            },
            {
                name: "Git & GitHub",
                level: "Menengah",
                color: "#f05032",
            },
            {
                name: "Figma",
                level: "Menengah",
                color: "#f24e1e",
            },
            {
                name: "Postman",
                level: "Menengah",
                color: "#ff6c37",
            },
            {
                name: "Laragon",
                level: "Menengah",
                color: "#38bdf8",
            },
            {
                name: "Vite",
                level: "Menengah",
                color: "#646cff",
            },
        ],
    },
];

const projectItems = [
    {
        id: "portfolio-new",
        title: "Portfolio Website",
        listDescription:
            "Website personal untuk merangkum profil, pengalaman, project, education, dan sertifikat.",
        detailDescription:
            "Portfolio ini menjadi pusat profil profesional yang merangkum latar belakang, pengalaman, project, education, dan sertifikat dalam satu website.",
        stack: ["React", "Vite", "CSS", "Bootstrap"],
        mainStack: "React",
        logoStack: "React",
        group: "Proyek Pribadi",
        label: "Pribadi",
        position: "Frontend Developer",
        collaboration: "Mandiri",
        updatedAt: "2026-06-08",
        image: PortfolioLogo,
        liveUrl: "https://portfolio.rizam.fun/",
        codeUrl: null,
        accent: "14, 165, 233",
    },
    {
        id: "cinema-list",
        title: "Cinema List",
        listDescription:
            "Katalog pencarian film dan serial dengan data TMDB dalam tampilan dark modern.",
        detailDescription:
            "Cinema List menampilkan data film dan serial TV, pencarian, detail, rating, dan modal informasi dalam UI gelap yang lebih fokus ke konten.",
        stack: ["Vue", "Tailwind CSS", "Flowbite", "TMDB API"],
        mainStack: "Vue",
        logoStack: "Vue",
        group: "Proyek Pribadi",
        label: "Pribadi",
        position: "Frontend Developer",
        collaboration: "Mandiri",
        updatedAt: "2024-03-10",
        image: ProjectCinema,
        liveUrl: "https://cinemalist.rizam.fun",
        codeUrl: "https://github.com/RizqiZamzamiJamil/Cinema_List",
        accent: "5, 150, 105",
    },
    {
        id: "maut-system",
        title: "Decision Support System MAUT",
        listDescription:
            "Sistem pendukung keputusan berbasis metode MAUT untuk proses penilaian alternatif.",
        detailDescription:
            "Project SPK ini menerapkan metode MAUT pada aplikasi web dengan proses input kriteria, pengolahan nilai, dan hasil ranking yang lebih terstruktur.",
        stack: ["CodeIgniter 4", "Tailwind CSS", "PHP", "MySQL"],
        mainStack: "CodeIgniter 4",
        logoStack: "CodeIgniter 4",
        group: "Proyek Pribadi",
        label: "Pribadi",
        position: "Fullstack Developer",
        collaboration: "Mandiri",
        updatedAt: "2023-12-12",
        image: ProjectMaut,
        liveUrl: null,
        codeUrl:
            "https://github.com/RizqiZamzamiJamil/Sistem_Pendukung_Keputusan_MAUT",
        accent: "239, 68, 68",
    },
    {
        id: "lms-nazmalogy",
        title: "LMS NaZMaLogy",
        listDescription:
            "Platform LMS untuk mengelola kelas, materi, dan alur belajar peserta.",
        detailDescription:
            "LMS NaZMaLogy dikembangkan untuk mendukung pengelolaan course online, materi pembelajaran, kelas, dan proses belajar peserta selama program magang.",
        stack: ["Laravel", "Livewire", "Alpine.js", "Tailwind CSS"],
        mainStack: "Laravel",
        logoStack: "Laravel",
        group: "Pernah Dikerjakan",
        label: "Magang",
        position: "Fullstack Developer",
        collaboration: "Tim Nazma Office",
        updatedAt: "2026-03-20",
        image: ProjectLMS,
        liveUrl: "https://lms.nazmalogy.com/",
        codeUrl: null,
        accent: "234, 88, 12",
    },
    {
        id: "singgah-loka",
        title: "Singgah Loka",
        listDescription:
            "Website reservasi penginapan untuk wilayah Yogyakarta dan sekitarnya.",
        detailDescription:
            "Singgah Loka berfokus pada alur reservasi penginapan, informasi properti, dan pengelolaan data booking untuk kebutuhan platform penginapan.",
        stack: ["Laravel", "Alpine.js", "Tailwind CSS"],
        mainStack: "Laravel",
        logoStack: "Laravel",
        group: "Pernah Dikerjakan",
        label: "Magang",
        position: "Fullstack Developer",
        collaboration: "Tim Nazma Office",
        updatedAt: "2026-05-03",
        image: ProjectSinggahLoka,
        liveUrl: "https://silo.nazmalogy.com/",
        codeUrl: null,
        accent: "234, 88, 12",
    },
    {
        id: "document-repository",
        title: "Document Repository System",
        listDescription:
            "Repository dokumen untuk upload, klasifikasi file, dan akses dokumen yang lebih aman.",
        detailDescription:
            "Sistem repository dokumen ini dibuat sebagai project skripsi untuk membantu pengelolaan dokumen pada lingkungan kampus dengan alur upload, kategori, dan akses yang lebih tertata.",
        stack: ["Laravel", "Livewire", "Bootstrap", "MySQL"],
        mainStack: "Laravel",
        logoStack: "Laravel",
        group: "Pernah Dikerjakan",
        label: "Skripsi",
        position: "Fullstack Developer",
        collaboration: "Mandiri",
        updatedAt: "2025-07-30",
        image: ProjectRepository,
        liveUrl: null,
        codeUrl: null,
        accent: "234, 88, 12",
    },
    {
        id: "stimata-rpl",
        title: "RPL Admission Website",
        listDescription:
            "Website penerimaan mahasiswa jalur RPL untuk STIMATA Malang.",
        detailDescription:
            "Website ini membantu penyajian informasi dan proses pendaftaran mahasiswa jalur RPL dengan struktur halaman dan form yang lebih mudah diikuti.",
        stack: ["Laravel", "Livewire", "Bootstrap", "MySQL"],
        mainStack: "Laravel",
        logoStack: "Laravel",
        group: "Pernah Dikerjakan",
        label: "Magang",
        position: "Fullstack Developer",
        collaboration: "Tim Duta Technology",
        updatedAt: "2024-11-06",
        image: ProjectRpl,
        liveUrl: null,
        codeUrl: null,
        accent: "234, 88, 12",
    },
    {
        id: "clinic-app",
        title: "Clinic Reservation App",
        listDescription:
            "Aplikasi reservasi klinik online dengan notifikasi dan alur booking pasien.",
        detailDescription:
            "Clinic Reservation App menggabungkan frontend dinamis, reservasi pasien, dan integrasi notifikasi email untuk kebutuhan simulasi aplikasi klinik.",
        stack: ["React", "Express", "Tailwind CSS", "Node.js"],
        mainStack: "React",
        logoStack: "React",
        group: "Pernah Dikerjakan",
        label: "Magang",
        position: "Frontend Developer",
        collaboration: "Peserta MSIB",
        updatedAt: "2024-06-14",
        image: ProjectClinic,
        liveUrl: "https://fe-msib-6-klinik-app-04.educalab.id/",
        codeUrl: "https://github.com/RizqiZamzamiJamil/klinik-app",
        accent: "14, 165, 233",
    },
    {
        id: "project-management-vue",
        title: "Simple Project Management",
        listDescription:
            "Dashboard sederhana untuk mengatur project, task, dan anggota tim.",
        detailDescription:
            "Project ini digunakan untuk eksplorasi dashboard frontend, pengelolaan state sederhana, dan penyusunan UI manajemen task yang rapi.",
        stack: ["Vue", "Tailwind CSS"],
        mainStack: "Vue",
        logoStack: "Vue",
        group: "Pernah Dikerjakan",
        label: "Proyek Lain",
        position: "Frontend Developer",
        collaboration: "Mandiri",
        updatedAt: "2024-04-30",
        image: ProjectManagement,
        liveUrl: null,
        codeUrl:
            "https://github.com/RizqiZamzamiJamil/Manajemen_Proyek_Sederhana",
        accent: "5, 150, 105",
    },
    {
        id: "peek-survey-mobile",
        title: "Peek Survey Mobile Collaboration",
        listDescription:
            "Project kolaboratif aplikasi survey mobile dengan Flutter dan Laravel API.",
        detailDescription:
            "Project ini memberi pengalaman kerja lintas stack melalui aplikasi survey mobile, integrasi API, dan pembagian peran dalam tim.",
        stack: ["Flutter", "Laravel", "API", "MySQL"],
        mainStack: "Laravel",
        logoStack: "Laravel",
        group: "Pernah Dikerjakan",
        label: "Proyek Lain",
        position: "Backend/API Contributor",
        collaboration: "Tim Kolaborasi",
        updatedAt: "2023-12-25",
        image: ProjectSurvey,
        liveUrl: null,
        codeUrl: "https://github.com/RizqiZamzamiJamil/Survey_Mobile",
        accent: "234, 88, 12",
    },
    {
        id: "si-launsh",
        title: "Si Launsh Business Website",
        listDescription:
            "Website bisnis untuk layanan cuci sepatu dan helm berbasis CodeIgniter 4.",
        detailDescription:
            "Si Launsh dibuat untuk menerapkan alur layanan usaha ke dalam website yang menampilkan informasi layanan, proses, dan struktur data sederhana.",
        stack: ["CodeIgniter 4", "Bootstrap", "PHP", "MySQL"],
        mainStack: "CodeIgniter 4",
        logoStack: "CodeIgniter 4",
        group: "Pernah Dikerjakan",
        label: "Proyek Lain",
        position: "Fullstack Developer",
        collaboration: "Tim Kolaborasi",
        updatedAt: "2023-07-15",
        image: ProjectLaundry,
        liveUrl: null,
        codeUrl: "https://github.com/RizqiZamzamiJamil/Cuci_Sepatu_Si_Launsh",
        accent: "239, 68, 68",
    },
];

export const projects = projectItems;

export const personalProjects = projects.filter(
    (project) => project.group === "Proyek Pribadi",
);

export const workedProjects = projects.filter(
    (project) => project.group === "Pernah Dikerjakan",
);

export const projectLabels = [
    "Semua",
    ...new Set(workedProjects.map((project) => project.label)),
];

export const highlightedProject =
    personalProjects.find((project) => project.id === "portfolio-new") ||
    personalProjects[0] ||
    projects[0];

export const latestProjects = [...projects]
    .sort((left, right) => new Date(right.updatedAt) - new Date(left.updatedAt))
    .slice(0, 3);

export const certificates = [
    {
        title: "Wisudawan Terbaik Program Studi",
        issuer: "Politeknik Negeri Malang",
        focus: "Penghargaan akademik sebagai wisudawan terbaik program studi Sistem Informasi Bisnis pada Wisuda ke-70 Politeknik Negeri Malang.",
        issuedAt: "2025",
        image: BestGraduateCertificate,
        orientation: "landscape",
        category: "Penghargaan",
        isHighlighted: true,
    },
    {
        title: "Best Defense Lomba Keamanan Siber",
        issuer: "Politeknik Negeri Malang",
        focus: "Penghargaan sebagai best defense dalam lomba Keamanan Siber Internal Compotition Jurusan Teknologi Informasi Politeknik Negeri Malang pada tahun 2023.",
        issuedAt: "2023",
        image: BestDefense,
        orientation: "landscape",
        category: "Penghargaan",
        isHighlighted: true,
    },
    {
        title: "Magang dan Studi Independen Bersertifikat Batch 6",
        issuer: "Kampus Merdeka",
        focus: "Program magang dan studi independen bersertifikat batch 6 dari Kampus Merdeka dengan fokus pada frontend web developer.",
        issuedAt: "2024",
        image: MsibCertificate,
        orientation: "landscape",
        category: "Pelatihan dan Magang",
    },
    {
        title: "Pemagangan Nasional Batch 2",
        issuer: "Kementerian Ketenagakerjaan",
        focus: "Program pemagangan nasional lulusan perguruan tinggi dari Kementerian Ketenagakerjaan pada posisi Fullstack Developer di Nazma Office - Sleman",
        issuedAt: "2026",
        image: MagangHub,
        orientation: "landscape",
        category: "Pelatihan dan Magang",
    },
    {
        title: "Sertifikasi Pemrograman Software Komputer",
        issuer: "Badan Nasional Sertifikasi Profesi",
        focus: "Sertifikasi kompetensi yang berkaitan dengan pemrograman software komputer oleh Badan Nasional Sertifikasi Profesi.",
        issuedAt: "2025",
        image: BnspCertificate,
        orientation: "portrait",
        category: "Pengembangan Diri",
    },
    {
        title: "Web 3.0 & Blockchain",
        issuer: "MySkill",
        focus: "Pengenalan konsep blockchain, web modern, dan ekosistem aplikasi terdesentralisasi.",
        issuedAt: "2025",
        image: BlockchainCertificate,
        orientation: "landscape",
        category: "Pengembangan Diri",
    },
    {
        title: "WordPress Development",
        issuer: "MySkill",
        focus: "Dasar pengelolaan dan pengembangan website berbasis WordPress.",
        issuedAt: "2024",
        image: WordpressCertificate,
        orientation: "landscape",
        category: "Pengembangan Diri",
    },
    {
        title: "Frontend Development Class",
        issuer: "Gamelab",
        focus: "Pelatihan frontend web untuk memperkuat dasar layout, komponen, dan interaksi.",
        issuedAt: "2024",
        image: GamelabCertificate,
        orientation: "landscape",
        category: "Pengembangan Diri",
    },
    {
        title: "React JS Certification",
        issuer: "Gamelab",
        focus: "Materi komponen, state, dan pengembangan antarmuka interaktif dengan ReactJs dan disertai proyek akhir dengan ExpressJs.",
        issuedAt: "2024",
        image: ReactCertificate,
        orientation: "landscape",
        category: "Pengembangan Diri",
    },
    {
        title: "Vue JS Certification",
        issuer: "Gamelab",
        focus: "Pengenalan reactive interface dan pengembangan aplikasi berbasis Vue.",
        issuedAt: "2024",
        image: VueCertificate,
        orientation: "landscape",
        category: "Pengembangan Diri",
    },
    {
        title: "JavaScript Certification",
        issuer: "Gamelab",
        focus: "Dasar logika client-side, manipulasi data, dan interaksi dinamis.",
        issuedAt: "2024",
        image: JavascriptCertificate,
        orientation: "landscape",
        category: "Pengembangan Diri",
    },
    {
        title: "Bootstrap Certification",
        issuer: "Gamelab",
        focus: "Responsive layout dan penggunaan komponen Bootstrap untuk kebutuhan web.",
        issuedAt: "2024",
        image: BootstrapCertificate,
        orientation: "landscape",
        category: "Pengembangan Diri",
    },
];

export const certificateGroups = [
    {
        title: "Penghargaan",
        items: certificates.filter(
            (certificate) => certificate.category === "Penghargaan",
        ),
    },
    {
        title: "Pelatihan dan Magang",
        items: certificates.filter(
            (certificate) => certificate.category === "Pelatihan dan Magang",
        ),
    },
    {
        title: "Sertifikasi dan Pengembangan Diri",
        items: certificates.filter(
            (certificate) => certificate.category === "Pengembangan Diri",
        ),
    },
];

export const educationTimeline = [
    {
        period: "2009 - 2015",
        school: "SD Negeri Sendang",
        location: "Kediri",
        program: "Pendidikan Dasar",
        description:
            "Membangun fondasi belajar, disiplin, dan kebiasaan memahami materi secara bertahap.",
    },
    {
        period: "2015 - 2018",
        school: "MTs Negeri 3 Kota Kediri",
        location: "Kediri",
        program: "Pendidikan Menengah Pertama",
        description:
            "Memperkuat dasar akademik umum, ketelitian, keagamaan, dan konsistensi dalam menyelesaikan tugas.",
    },
    {
        period: "2018 - 2021",
        school: "SMK Negeri 1 Grogol",
        location: "Kediri",
        program: "Teknik Komputer dan Jaringan",
        description:
            "Mulai masuk ke jalur teknis melalui jaringan komputer, troubleshooting perangkat, administrasi dasar, dan praktik kerja yang lebih dekat dengan dunia IT.",
    },
    {
        period: "2021 - 2025",
        school: "Politeknik Negeri Malang",
        location: "Malang",
        program: "Sistem Informasi Bisnis",
        description:
            "Mempelajari pengembangan sistem informasi, pemodelan proses bisnis, database, analisis kebutuhan, dan implementasi aplikasi web untuk kebutuhan organisasi.",
    },
];

export const experienceLabels = ["Organisasi", "Program Industri"];

export const experienceEntries = [
    {
        title: "HMTI Polinema",
        organization: "Himpunan Mahasiswa Teknologi Informasi",
        period: "Januari 2022 - Januari 2023",
        label: "Organisasi",
        role: "Organizing Committee - Departemen Kominfo",
        accent: "14, 165, 233",
        icon: "fa-solid fa-users-gear",
        summary:
            "Terlibat dalam kegiatan organisasi, publikasi, pengelolaan konten, dan koordinasi program kerja departemen Kominfo.",
    },
    {
        title: "MSIB Batch 6",
        organization: "Kampus Merdeka x Gamelab - Salatiga",
        period: "Februari 2024 - Juni 2024",
        label: "Program Industri",
        role: "Frontend Web Developer",
        accent: "5, 150, 105",
        icon: "fa-solid fa-laptop-code",
        summary:
            "Mengikuti studi independen frontend web developer dengan materi industri, tugas praktik, dan project berbasis web.",
    },
    {
        title: "Magang Duta Technology",
        organization: "CV. Duta Technology - Malang",
        period: "Agustus 2024 - November 2024",
        label: "Program Industri",
        role: "Fullstack Developer",
        accent: "234, 88, 12",
        icon: "fa-solid fa-code-branch",
        summary:
            "Mengerjakan pengembangan web fullstack dan menyesuaikan implementasi dengan kebutuhan kerja lapangan.",
    },
    {
        title: "Magang Kemnaker",
        organization: "Kemnaker x Nazma Office - Sleman",
        period: "November 2025 - Mei 2026",
        label: "Program Industri",
        role: "Fullstack Developer",
        accent: "59, 130, 246",
        icon: "fa-solid fa-briefcase",
        summary:
            "Terlibat dalam pengembangan aplikasi web fullstack, terutama pada project berbasis Laravel dan Tailwind.",
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

export const contactScopes = ["Kolaborasi", "Diskusi", "Pekerjaan"];

export const portfolioStats = [
    {
        label: "Graduate",
        value: "2025",
        detail: "Sistem Informasi Bisnis",
    },
    {
        label: "Focus",
        value: "Fullstack",
        detail: "Laravel, React, PHP",
    },
    {
        label: "Projects",
        value: `${projects.length}`,
        detail: "Pribadi, magang, skripsi, dan lainnya",
    },
];
