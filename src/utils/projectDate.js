export const getProjectDateLabel = (project) => {
    if (project.dateLabel) return project.dateLabel;
    if (!project.updatedAt) return "Tanggal belum tersedia";

    return new Intl.DateTimeFormat("id-ID", {
        month: "long",
        year: "numeric",
    }).format(new Date(project.updatedAt));
};
