import { aiCustomKnowledge } from "./aiCustomKnowledge.js";

const profile = {
    name: "Rizqi Zamzami Jamil",
    nickname: "Rizam",
    role: "Fullstack Web Developer",
    location: "Kediri, East Java, Indonesia",
    email: "rizqizamzamij@gmail.com",
    phone: "+62 821 4708 3442",
    summary:
        "Lulusan 2025 dari Politeknik Negeri Malang yang fokus mengubah kebutuhan bisnis menjadi web yang jelas, rapi, aman, dan mudah dipakai.",
    mainStack: ["Laravel", "React JS", "PHP", "JavaScript", "HTML", "CSS"],
    strengths: [
        "End-to-end thinking untuk menghubungkan alur user, data, dan implementasi.",
        "Laravel-centered delivery untuk CRUD, auth, dashboard, dan business logic.",
        "UI yang rapi, tenang, jelas, dan nyaman dipakai.",
    ],
    achievements: [
        "Wisudawan Terbaik Prodi pada Wisuda Polinema ke-70.",
        "Lulus tahun 2025 dari Politeknik Negeri Malang.",
        "Memiliki 10+ project pilihan di portofolio.",
    ],
};

const projects = [
    {
        title: "LMS NaZMaLogy",
        category: "Fullstack",
        role: "Kemnaker Internship",
        stack: ["Laravel", "Livewire", "Alpine.js", "Tailwind CSS"],
        updatedAt: "2026-03-20",
        link: "https://lms.nazmalogy.com/",
        summary:
            "Website LMS/course online NaZMaLogy untuk pengelolaan kelas, materi, dan alur belajar peserta.",
        highlight:
            "Proyek magang Kemnaker bulan ke-3 dengan fokus Laravel, Livewire, dan Alpine.js.",
    },
    {
        title: "Singgah Loka",
        category: "Fullstack",
        role: "Kemnaker Internship",
        stack: ["Laravel", "Alpine.js", "Tailwind CSS"],
        updatedAt: "2026-05-03",
        link: "https://silo.nazmalogy.com/",
        summary:
            "Website reservasi penginapan untuk wilayah Yogyakarta dan sekitarnya.",
        highlight:
            "Platform reservasi penginapan Magang Kemnaker/Nazma Office yang sedang dikembangkan ulang pada staging repository.",
    },
    {
        title: "Document Repository System",
        category: "Fullstack",
        role: "Thesis Project",
        stack: ["Laravel", "Livewire", "Bootstrap"],
        updatedAt: "2025-07-30",
        summary:
            "Repository dokumen web untuk JTI Polinema dengan upload, klasifikasi file, dan akses yang lebih aman.",
        highlight: "Proyek skripsi dengan fokus repository dan alur data dokumen.",
    },
    {
        title: "RPL Admission Website",
        category: "Fullstack",
        role: "PKL Semester 7",
        stack: ["Laravel", "Livewire", "Bootstrap"],
        updatedAt: "2024-11-06",
        summary: "Website penerimaan mahasiswa jalur RPL untuk STIMATA Malang.",
        highlight:
            "Proyek PKL semester 7 untuk alur informasi dan pendaftaran mahasiswa.",
    },
    {
        title: "Clinic Reservation App",
        category: "Fullstack",
        role: "Internship Build",
        stack: ["React", "Express", "Tailwind CSS"],
        updatedAt: "2024-06-14",
        link: "https://fe-msib-6-klinik-app-04.educalab.id/",
        repository: "https://github.com/RizqiZamzamiJamil/klinik-app",
        summary: "Website klinik dengan reservasi online dan notifikasi email.",
        highlight:
            "Menggabungkan UI dinamis dengan reservasi dan komunikasi notifikasi berbasis email.",
    },
    {
        title: "Simple Project Management",
        category: "Frontend",
        role: "Dashboard Practice",
        stack: ["Vue", "Tailwind CSS"],
        updatedAt: "2024-04-30",
        repository:
            "https://github.com/RizqiZamzamiJamil/Manajemen_Proyek_Sederhana",
        summary:
            "Aplikasi manajemen project sederhana untuk mengatur project dan tim.",
        highlight:
            "Berfokus pada state management sederhana dan penyusunan UI dashboard mini.",
    },
    {
        title: "Cinema List Search",
        category: "Frontend",
        role: "API Exploration",
        stack: ["Vue", "API", "Tailwind CSS"],
        updatedAt: "2024-03-10",
        link: "https://rizqizamzamijamil.github.io/Cinema_List/",
        repository: "https://github.com/RizqiZamzamiJamil/Cinema_List",
        summary:
            "Eksplorasi pencarian film berbasis API dengan jQuery Ajax dan framework VueJs.",
        highlight:
            "Melatih pengambilan data eksternal dan pencarian berbasis user input secara real time.",
    },
    {
        title: "Peek Survey Mobile Collaboration",
        category: "Mobile",
        role: "Collaborative Project",
        stack: ["Flutter", "Laravel", "API"],
        updatedAt: "2023-12-25",
        repository: "https://github.com/RizqiZamzamiJamil/Survey_Mobile",
        summary:
            "Project kolaboratif aplikasi survey mobile dengan Flutter dan Laravel.",
        highlight:
            "Memberikan pengalaman kerja lintas stack dengan pembagian peran frontend dan backend.",
    },
    {
        title: "Decision Support System MAUT",
        category: "Fullstack",
        role: "Analytical System",
        stack: ["CodeIgniter 4", "Tailwind CSS"],
        updatedAt: "2023-12-12",
        repository:
            "https://github.com/RizqiZamzamiJamil/Sistem_Pendukung_Keputusan_MAUT",
        summary:
            "Sistem pendukung keputusan berbasis metode MAUT dengan CodeIgniter 4.",
        highlight:
            "Menerapkan logika pengambilan keputusan ke dalam sistem web yang lebih terstruktur.",
    },
    {
        title: "Si Launsh Business Website",
        category: "Fullstack",
        role: "Business Platform",
        stack: ["CodeIgniter 4", "Bootstrap"],
        updatedAt: "2023-07-15",
        repository: "https://github.com/RizqiZamzamiJamil/Cuci_Sepatu_Si_Launsh",
        summary:
            "Website fullstack untuk usaha cuci sepatu dan helm yang dibangun dengan CodeIgniter 4.",
        highlight:
            "Menerapkan alur usaha ke website layanan yang lebih terstruktur dan informatif.",
    },
];

const education = [
    {
        period: "2009 - 2015",
        school: "SD Negeri Sendang",
        location: "Kediri",
        description:
            "Pendidikan dasar yang membangun dasar kemampuan belajar, rasa ingin tahu, dan disiplin.",
    },
    {
        period: "2015 - 2018",
        school: "MTs Negeri 3 Kota Kediri",
        location: "Kediri",
        description:
            "Penguatan akademik umum, karakter, ketelitian, dan konsistensi.",
    },
    {
        period: "2018 - 2021",
        school: "SMK Negeri 1 Grogol",
        location: "Kediri",
        description:
            "Awal ketertarikan pada jalur teknis, praktik, problem solving, dan kesiapan kerja.",
    },
    {
        period: "2021 - 2025",
        school: "Politeknik Negeri Malang",
        location: "Malang",
        description:
            "Business Information System. Lulus tahun 2025 dengan fokus pengembangan web, sistem informasi, dan penerjemahan kebutuhan bisnis menjadi solusi digital yang usable.",
    },
];

const experience = [
    {
        period: "Januari 2022 - Januari 2023",
        title: "HMTI Polinema",
        organization: "Himpunan Mahasiswa Teknologi Informasi",
        role: "Organizing Committee - Departemen Kominfo",
        summary:
            "Aktif selama satu tahun sebagai panitia kegiatan, editor konten sosial media, dan bagian organizing committee departemen Kominfo.",
        highlights: [
            "Ketua pelaksana program kerja Studi Banding.",
            "Panitia pada program kerja lainnya.",
            "Editor konten sosial media.",
        ],
    },
    {
        period: "Februari 2024 - Juni 2024",
        title: "MSIB Batch 6",
        organization: "Kampus Merdeka x Gamelab Indonesia",
        role: "Frontend Web Developer",
        summary:
            "Mengikuti Studi Independen satu semester penuh untuk belajar teknis web frontend bersama mitra industri.",
        highlights: [
            "Skema Frontend Web Developer.",
            "Mitra Gamelab Indonesia.",
            "Program nasional Kampus Merdeka.",
        ],
    },
    {
        period: "Agustus 2024 - November 2024",
        title: "PKL Duta Technology",
        organization: "CV. Duta Technology - Malang",
        role: "Fullstack Developer",
        summary:
            "PKL selama empat bulan dengan fokus implementasi web fullstack dan penyesuaian kebutuhan kerja lapangan.",
        highlights: [
            "Durasi 4 bulan.",
            "Fullstack Developer.",
            "Pengalaman industri semester 7.",
        ],
    },
    {
        period: "November 2025 - Mei 2026",
        title: "Magang Kemnaker",
        organization: "Kemnaker x Nazma Office",
        role: "Fullstack Developer",
        summary:
            "Program magang setelah lulus dengan durasi enam bulan untuk terlibat langsung dalam pengembangan web fullstack.",
        highlights: [
            "Batch 2 2025.",
            "Durasi 6 bulan setelah lulus.",
            "Mitra Nazma Office.",
        ],
    },
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
Pencapaian:
${formatList(profile.achievements)}

HALAMAN PROJECT
${formatObjectList(
    projects,
    (project) => `- ${project.title}
  Kategori: ${project.category}
  Role: ${project.role}
  Stack: ${project.stack.join(", ")}
  Update: ${project.updatedAt}
  Ringkasan: ${project.summary}
  Highlight: ${project.highlight}
  Link live: ${project.link || "Tidak dicantumkan"}
  Repository: ${project.repository || "Tidak dicantumkan"}`
)}

HALAMAN EDUCATION
${formatObjectList(
    education,
    (item) => `- ${item.school} (${item.period})
  Lokasi: ${item.location}
  Detail: ${item.description}`
)}

HALAMAN EXPERIENCE
${formatObjectList(
    experience,
    (item) => `- ${item.title} (${item.period})
  Organisasi: ${item.organization}
  Role: ${item.role}
  Ringkasan: ${item.summary}
  Highlight: ${item.highlights.join(" ")}`
)}

DATA TAMBAHAN KHUSUS AI
${customKnowledge || "- Belum ada data tambahan."}
`.trim();
};
