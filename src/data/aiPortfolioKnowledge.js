import { aiCustomKnowledge } from "./aiCustomKnowledge.js";

const profile = {
    name: "Rizqi Zamzami Jamil",
    nickname: "Rizam",
    role: "Fullstack Web Developer",
    location: "Kediri, Jawa Timur, Indonesia",
    email: "rizqizamzamij@gmail.com",
    phone: "+62 821 4708 3442",
    summary:
        "Lulusan Sistem Informasi Bisnis Politeknik Negeri Malang tahun 2025. Rizqi fokus mengubah kebutuhan pengguna dan proses bisnis menjadi aplikasi web yang jelas, terstruktur, dan nyaman dipakai.",
    mainStack: ["HTML & CSS", "JavaScript", "PHP", "MySQL", "Laravel", "React JS", "Tailwind CSS", "Bootstrap"],
    strengths: [
        "Mengerjakan frontend, backend, database, dan integrasi fitur untuk aplikasi web end-to-end.",
        "Membaca kebutuhan proses bisnis lalu menerjemahkannya menjadi alur fitur dan struktur data.",
        "Berpengalaman di project mandiri dan tim, mulai dari proyek pribadi, kuliah, pelatihan, sampai magang.",
    ],
};

const skillGroups = [
    {
        title: "Frontend",
        skills: [
            "HTML & CSS - Lanjut",
            "JavaScript - Menengah",
            "Tailwind CSS - Lanjut",
            "Bootstrap - Lanjut",
            "React JS - Lanjut",
            "Next.js - Dasar",
            "Vue JS - Menengah",
        ],
    },
    {
        title: "Backend",
        skills: [
            "PHP - Lanjut",
            "MySQL - Lanjut",
            "PostgreSQL - Menengah",
            "Laravel - Lanjut",
            "C# - Dasar",
            ".NET - Dasar",
            "CodeIgniter 4 - Menengah",
            "Node.js - Dasar",
            "Express.js - Dasar",
        ],
    },
    {
        title: "Tools",
        skills: [
            "VS Code - Lanjut",
            "Git & GitHub - Menengah",
            "Figma - Menengah",
            "Postman - Menengah",
            "Laragon - Menengah",
            "Vite - Menengah",
        ],
    },
];

const projects = [
    {
        title: "GeoWeather",
        group: "Proyek Pribadi",
        label: "Pribadi",
        position: "Frontend Developer",
        collaboration: "Mandiri",
        stack: ["Vue", "Tailwind CSS", "MapLibre GL JS", "BMKG API"],
        startedAt: "Juli 2026",
        updatedAt: "Juli 2026",
        link: "https://geo.rizam.fun/",
        repository: "https://github.com/RizqiZamzamiJamil/Geo_weather",
        summary:
            "Aplikasi peta interaktif Indonesia untuk mencari wilayah serta melihat prakiraan cuaca, peringatan dini cuaca, dan informasi gempa dari data resmi BMKG langsung pada peta.",
    },
    {
        title: "Rizam Devtools",
        group: "Proyek Pribadi",
        label: "Pribadi",
        position: "Frontend Developer",
        collaboration: "Mandiri",
        stack: ["Next.js", "React", "Tailwind CSS", "Flowbite"],
        updatedAt: "2026-06-17",
        link: "https://devtools.rizam.fun/",
        repository: null,
        summary:
            "Kumpulan tool developer berbasis Next.js untuk JSON formatter, JWT decoder, Base64, UUID, timestamp, URL, hash, dan case converter.",
    },
    {
        title: "Markdown Editor",
        group: "Proyek Pribadi",
        label: "Pribadi",
        position: "Frontend Developer",
        collaboration: "Mandiri",
        stack: ["React", "Vite", "Tailwind CSS", "Flowbite"],
        updatedAt: "2026-05-11",
        link: "https://markdown.rizam.fun/",
        repository:
            "https://github.com/RizqiZamzamiJamil/Rizam_Markdown-Editor",
        summary:
            "Editor Markdown online dengan preview langsung, dukungan GitHub Flavored Markdown dan Mermaid, pengelolaan dokumen, serta penyimpanan otomatis melalui local storage browser.",
    },
    {
        title: "Portfolio Website",
        group: "Proyek Pribadi",
        label: "Pribadi",
        position: "Frontend Developer",
        collaboration: "Mandiri",
        stack: ["React", "Vite", "CSS", "Bootstrap"],
        startedAt: "2024",
        version: "Versi ketiga",
        updatedAt: "2026-06-08",
        link: "https://portfolio.rizam.fun/",
        repository: null,
        summary:
            "Website personal yang mulai dibuat sejak 2024 dan terus diperbarui. Versi saat ini adalah versi ketiga dengan tampilan dark theme, data terbaru, project, education, experience, dan sertifikat yang lebih lengkap.",
    },
    {
        title: "Cinema List",
        group: "Proyek Pribadi",
        label: "Pribadi",
        position: "Frontend Developer",
        collaboration: "Mandiri",
        stack: ["Vue", "Tailwind CSS", "Flowbite", "TMDB API"],
        updatedAt: "2024-03-10",
        link: "https://cinemalist.rizam.fun",
        repository: "https://github.com/RizqiZamzamiJamil/Cinema_List",
        summary:
            "Katalog pencarian film dan serial dengan data TMDB dalam tampilan dark modern.",
    },
    {
        title: "Decision Support System MAUT",
        group: "Proyek Pribadi",
        label: "Pribadi",
        position: "Fullstack Developer",
        collaboration: "Mandiri",
        stack: ["CodeIgniter 4", "Tailwind CSS", "PHP", "MySQL"],
        updatedAt: "2023-12-12",
        link: null,
        repository:
            "https://github.com/RizqiZamzamiJamil/Sistem_Pendukung_Keputusan_MAUT",
        summary:
            "Sistem pendukung keputusan berbasis metode MAUT untuk proses penilaian alternatif.",
    },
    {
        title: "LMS NaZMaLogy",
        group: "Pernah Dikerjakan",
        label: "Magang",
        position: "Fullstack Developer",
        collaboration: "PT Nazmalogy Loka Lastari",
        stack: ["Laravel", "Livewire", "Alpine.js", "Tailwind CSS"],
        updatedAt: "2026-03-20",
        link: "https://lms.nazmalogy.com/",
        repository: null,
        summary:
            "Platform LMS yang dikembangkan bersama PT Nazmalogy Loka Lastari untuk mengelola kelas, materi, course online, dan alur belajar peserta.",
    },
    {
        title: "Singgah Loka",
        group: "Pernah Dikerjakan",
        label: "Magang",
        position: "Fullstack Developer",
        collaboration: "PT Nazmalogy Loka Lastari",
        stack: ["Laravel", "Alpine.js", "Tailwind CSS"],
        updatedAt: "2026-05-03",
        link: "https://silo.nazmalogy.com/",
        repository: null,
        summary:
            "Website reservasi penginapan yang dikembangkan bersama PT Nazmalogy Loka Lastari untuk wilayah Yogyakarta dan sekitarnya, mencakup informasi properti serta pengelolaan booking.",
    },
    {
        title: "Document Repository System",
        group: "Pernah Dikerjakan",
        label: "Skripsi",
        position: "Fullstack Developer",
        collaboration: "Mandiri",
        stack: ["Laravel", "Livewire", "Bootstrap", "MySQL"],
        updatedAt: "2025-07-30",
        link: null,
        repository: null,
        summary:
            "Repository dokumen untuk upload, klasifikasi file, dan akses dokumen yang lebih aman.",
    },
    {
        title: "RPL Admission Website",
        group: "Pernah Dikerjakan",
        label: "Magang",
        position: "Fullstack Developer",
        collaboration: "Tim Duta Technology",
        stack: ["Laravel", "Livewire", "Bootstrap", "MySQL"],
        updatedAt: "2024-11-06",
        link: null,
        repository: null,
        summary: "Website penerimaan mahasiswa jalur RPL untuk STIMATA Malang.",
    },
    {
        title: "Clinic Reservation App",
        group: "Pernah Dikerjakan",
        label: "Magang",
        position: "Frontend Developer",
        collaboration: "Peserta MSIB",
        stack: ["React", "Express", "Tailwind CSS", "Node.js"],
        updatedAt: "2024-06-14",
        link: "https://fe-msib-6-klinik-app-04.educalab.id/",
        repository: "https://github.com/RizqiZamzamiJamil/klinik-app",
        summary:
            "Aplikasi reservasi klinik online dengan notifikasi dan alur booking pasien.",
    },
    {
        title: "Simple Project Management",
        group: "Pernah Dikerjakan",
        label: "Proyek Lain",
        position: "Frontend Developer",
        collaboration: "Mandiri",
        stack: ["Vue", "Tailwind CSS"],
        updatedAt: "2024-04-30",
        link: null,
        repository:
            "https://github.com/RizqiZamzamiJamil/Manajemen_Proyek_Sederhana",
        summary: "Dashboard sederhana untuk mengatur project, task, dan anggota tim.",
    },
    {
        title: "Peek Survey Mobile Collaboration",
        group: "Pernah Dikerjakan",
        label: "Proyek Lain",
        position: "Backend/API Contributor",
        collaboration: "Tim Kolaborasi",
        stack: ["Flutter", "Laravel", "API", "MySQL"],
        updatedAt: "2023-12-25",
        link: null,
        repository: "https://github.com/RizqiZamzamiJamil/Survey_Mobile",
        summary:
            "Project kolaboratif aplikasi survey mobile dengan Flutter dan Laravel API.",
    },
    {
        title: "Si Launsh Business Website",
        group: "Pernah Dikerjakan",
        label: "Proyek Lain",
        position: "Fullstack Developer",
        collaboration: "Tim Kolaborasi",
        stack: ["CodeIgniter 4", "Bootstrap", "PHP", "MySQL"],
        updatedAt: "2023-07-15",
        link: null,
        repository: "https://github.com/RizqiZamzamiJamil/Cuci_Sepatu_Si_Launsh",
        summary:
            "Website bisnis untuk layanan cuci sepatu dan helm berbasis CodeIgniter 4.",
    },
];

const education = [
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
            "Belajar jaringan komputer, troubleshooting perangkat, administrasi dasar, dan praktik teknis IT.",
    },
    {
        period: "2021 - 2025",
        school: "Politeknik Negeri Malang",
        location: "Malang",
        program: "Sistem Informasi Bisnis",
        description:
            "Mempelajari pengembangan sistem informasi, pemodelan proses bisnis, database, analisis kebutuhan, dan implementasi aplikasi web.",
    },
];

const experience = [
    {
        period: "November 2025 - Mei 2026",
        title: "Magang Kementerian Ketenagakerjaan",
        label: "Pengalaman Kerja",
        organization: "PT Nazmalogy Loka Lastari - Sleman",
        role: "Fullstack Developer",
        badges: ["LMS NaZMaLogy", "Singgah Loka"],
        summary:
            "Terlibat dalam pengembangan LMS NaZMaLogy dan Singgah Loka sebagai Fullstack Developer di PT Nazmalogy Loka Lastari, menggunakan Laravel, Livewire, Alpine.js, dan Tailwind CSS.",
    },
    {
        period: "Agustus 2024 - November 2024",
        title: "Magang",
        label: "Pengalaman Kerja",
        organization: "CV Duta Technology - Malang",
        role: "Fullstack Developer",
        badges: ["RPL Admission Website"],
        summary:
            "Mengerjakan pengembangan web fullstack dan menyesuaikan implementasi RPL Admission Website dengan kebutuhan kerja lapangan.",
    },
    {
        period: "Januari 2020 - Mei 2020",
        title: "Magang",
        label: "Pengalaman Kerja",
        organization: "Trans Computer - Kediri",
        role: "IT Support",
        badges: [
            "Instalasi Jaringan",
            "Maintenance Komputer",
            "Troubleshooting",
        ],
        summary:
            "Melakukan instalasi jaringan internet di gedung pemerintah dan BAWASLU Kabupaten Kediri, sekaligus menangani perawatan serta troubleshooting komputer instansi pemerintah daerah.",
    },
    {
        period: "Februari 2024 - Juni 2024",
        title: "Magang dan Studi Independen Batch 6 - Kampus Merdeka",
        label: "Pelatihan",
        organization: "Gamelab Indonesia - Salatiga",
        role: "Frontend Developer",
        badges: ["Clinic Reservation App", "Portfolio"],
        summary:
            "Mengikuti studi independen frontend web developer dengan materi industri, tugas praktik, dan project berbasis web.",
    },
    {
        period: "Februari 2022 - Januari 2023",
        title: "Departemen Kominfo",
        label: "Organisasi",
        organization: "Himpunan Mahasiswa Teknologi Informasi, Polinema - Malang",
        role: "Organizing Committee",
        badges: [
            "Studi Banding HMTI",
            "Publikasi Media Sosial",
            "Kepanitiaan",
        ],
        summary:
            "Ketua pelaksana Program Kerja Studi Banding HMTI 2022, mengelola dan mengedit lebih dari 20 konten publikasi media sosial, serta aktif dalam lebih dari 10 kegiatan kepanitiaan dan program kerja HMTI selama satu periode.",
    },
];

const certificates = [
    "Penghargaan: Wisudawan Terbaik Program Studi - Politeknik Negeri Malang - 2025",
    "Penghargaan: Best Defense Lomba Keamanan Siber - Politeknik Negeri Malang - 2023",
    "Pelatihan dan Magang: Pemagangan Nasional Batch 2 - Kementerian Ketenagakerjaan - 2026",
    "Pelatihan dan Magang: Magang dan Studi Independen Bersertifikat Batch 6 - Kampus Merdeka - 2024",
    "Pelatihan dan Magang: Web Frontend Development Class - Gamelab - 2024",
    "Pengembangan Diri: Sertifikasi Pemrograman Software Komputer - Badan Nasional Sertifikasi Profesi - 2025",
    "Pengembangan Diri: Sertifikasi Asisten Pengembang Web - Badan Nasional Sertifikasi Profesi - 2026",
    "Pengembangan Diri: Web 3.0 & Blockchain - MySkill - 2025",
    "Pengembangan Diri: WordPress Development - MySkill - 2024",
    "Pengembangan Diri: React JS Certification - Gamelab - 2024",
    "Pengembangan Diri: Vue JS Certification - Gamelab - 2024",
    "Pengembangan Diri: JavaScript Certification - Gamelab - 2024",
    "Pengembangan Diri: Bootstrap Certification - Gamelab - 2024",
];

const formatList = (items) => items.map((item) => `- ${item}`).join("\n");

const formatObjectList = (items, formatter) => items.map(formatter).join("\n\n");

export const buildAiPortfolioContext = () => {
    const customKnowledge = aiCustomKnowledge
        .filter((item) => item.title && item.content)
        .map((item) => `- ${item.title}: ${item.content}`)
        .join("\n");

    return `
PROFIL UTAMA
Nama: ${profile.name}
Panggilan: ${profile.nickname}
Role: ${profile.role}
Lokasi: ${profile.location}
Email: ${profile.email}
Telepon/WhatsApp: ${profile.phone}
Ringkasan: ${profile.summary}
Stack utama:
${formatList(profile.mainStack)}
Kekuatan utama:
${formatList(profile.strengths)}

SKILLS
${formatObjectList(
    skillGroups,
    (group) => `- ${group.title}
  ${group.skills.join("\n  ")}`
)}

HALAMAN PROJECT
${formatObjectList(
    projects,
    (project) => `- ${project.title}
  Grup: ${project.group}
  Label: ${project.label}
  Posisi: ${project.position}
  Pola kerja: ${project.collaboration}
  Stack: ${project.stack.join(", ")}
  Mulai dibuat: ${project.startedAt || "Tidak dicantumkan"}
  Versi: ${project.version || "Tidak dicantumkan"}
  Update: ${project.updatedAt}
  Ringkasan: ${project.summary}
  Link live: ${project.link || "Tidak dicantumkan"}
  Repository: ${project.repository || "Tidak dicantumkan"}`
)}

HALAMAN EDUCATION
${formatObjectList(
    education,
    (item) => `- ${item.school} (${item.period})
  Jurusan/program: ${item.program}
  Lokasi: ${item.location}
  Detail: ${item.description}`
)}

HALAMAN EXPERIENCE
${formatObjectList(
    experience,
    (item) => `- ${item.title} (${item.period})
  Label: ${item.label}
  Organisasi: ${item.organization}
  Role: ${item.role}
  Ringkasan: ${item.summary}`
)}

HALAMAN CERTIFICATES
${formatList(certificates)}

DATA TAMBAHAN KHUSUS AI
${customKnowledge || "- Belum ada data tambahan."}
`.trim();
};
