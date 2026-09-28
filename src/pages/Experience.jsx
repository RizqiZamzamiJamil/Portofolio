import CertificateCarousel from "../components/CertificateCarousel";
import { experienceEntries } from "../data/portfolioData";

const workExperiences = experienceEntries.filter(
    (experience) => experience.category === "work",
);
const orgExperiences = experienceEntries.filter(
    (experience) => experience.category === "growth",
);

const ExperienceContent = ({ experience, textColor }) => {
    if (experience.contentMode === "summary") {
        return (
            <p className={`font-['Inter'] text-xs leading-relaxed ${textColor}`}>
                {experience.summary}
            </p>
        );
    }

    return (
        <ul className="space-y-1">
            {experience.points.map((point) => (
                <li className="flex items-start gap-2" key={point}>
                    <span
                        className="neo-border mt-1.5 size-1.5 shrink-0 bg-accent"
                        aria-hidden="true"
                    />
                    <span
                        className={`font-['Inter'] text-xs leading-relaxed ${textColor}`}
                    >
                        {point}
                    </span>
                </li>
            ))}
        </ul>
    );
};

const Experience = () => (
    <main>
        <section className="bg-foreground py-16">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="mb-4 inline-block bg-[#FFE500] px-3 py-1 neo-border shadow-[3px_3px_0_#FFE500]">
                    <span className="font-['Bricolage_Grotesque'] text-xs font-bold uppercase tracking-widest text-[#0A0A0A]">
                        Career
                    </span>
                </div>
                <h1 className="mb-4 font-['Bricolage_Grotesque'] text-4xl font-extrabold leading-none text-white sm:text-5xl md:text-6xl">
                    PENGALAMAN
                    <br />
                    <span className="text-[#FFE500]">&amp; SERTIFIKAT</span>
                </h1>
                <p className="max-w-lg font-['Inter'] text-white/60">
                    Rekam jejak profesional, organisasi, dan pengakuan yang
                    membentuk kompetensi saya.
                </p>
            </div>
        </section>

        {/* Career */}
        <section
            className="scroll-mt-20 border-b-4 bg-muted"
            id="experience-main-content"
        >
            <div className="mx-auto max-w-6xl px-6 py-14">
                <div className="grid items-start gap-10 md:grid-cols-2">
                    <div>
                        <div className="mb-7 flex items-center gap-3">
                            <div
                                className="neo-border h-10 w-4 shrink-0 bg-primary"
                                aria-hidden="true"
                            />
                            <div>
                                <h3 className="font-['Bricolage_Grotesque'] text-xl font-extrabold text-[#0A0A0A]">
                                    Pengalaman Kerja
                                </h3>
                                <p className="font-['Inter'] text-xs text-[#0A0A0A]/55">
                                    Magang &amp; kerja
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div
                                className="absolute bottom-0 left-4 top-0 w-0.5 bg-[#0A0A0A] opacity-10"
                                aria-hidden="true"
                            />
                            <div className="space-y-5 pl-10">
                                {workExperiences.map((experience) => (
                                    <article
                                        className="neo-card relative bg-white p-5"
                                        key={`${experience.period}-${experience.organization}`}
                                    >
                                        <span
                                            className="neo-border absolute -left-[34px] top-5 size-3"
                                            style={{
                                                backgroundColor:
                                                    experience.badge.background,
                                            }}
                                            aria-hidden="true"
                                        />
                                        <div className="mb-1 flex flex-wrap items-center gap-2">
                                            <span className="font-['Bricolage_Grotesque'] text-[10px] font-bold uppercase tracking-widest text-[#0A0A0A]/40">
                                                {experience.period}
                                            </span>
                                            <span
                                                className="border-[1.5px] border-[#0A0A0A] px-1.5 py-0.5 font-['Bricolage_Grotesque'] text-[8px] font-bold uppercase tracking-wide"
                                                style={{
                                                    backgroundColor:
                                                        experience.badge
                                                            .background,
                                                    color: experience.badge
                                                        .textColor,
                                                }}
                                            >
                                                {experience.badge.label}
                                            </span>
                                        </div>
                                        <h4 className="font-['Bricolage_Grotesque'] text-base font-extrabold leading-tight text-[#0A0A0A]">
                                            {experience.role}
                                        </h4>
                                        <p className="mb-2.5 font-['Inter'] text-sm font-semibold text-blue">
                                            {experience.organization}
                                        </p>
                                        <ExperienceContent
                                            experience={experience}
                                            textColor="text-[#0A0A0A]/70"
                                        />
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="mb-7 flex items-center gap-3">
                            <div
                                className="neo-border h-10 w-4 shrink-0 bg-accent"
                                aria-hidden="true"
                            />
                            <div>
                                <h3 className="font-['Bricolage_Grotesque'] text-xl font-extrabold text-[#0A0A0A]">
                                    Organisasi &amp; Pelatihan
                                </h3>
                                <p className="font-['Inter'] text-xs text-[#0A0A0A]/55">
                                    Pengalaman non-formal &amp; komunitas
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div
                                className="absolute bottom-0 left-4 top-0 w-0.5 bg-[#0A0A0A] opacity-10"
                                aria-hidden="true"
                            />
                            <div className="space-y-4 pl-10">
                                {orgExperiences.map((experience) => (
                                    <article
                                        className="neo-card relative bg-white p-4"
                                        key={`${experience.period}-${experience.organization}`}
                                    >
                                        <span
                                            className="neo-border absolute -left-[34px] top-4 size-3"
                                            style={{
                                                backgroundColor:
                                                    experience.badge.background,
                                            }}
                                            aria-hidden="true"
                                        />
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className="font-['Bricolage_Grotesque'] text-[10px] font-bold uppercase tracking-widest text-[#0A0A0A]/40">
                                                {experience.period}
                                            </span>
                                            <span
                                                className="border-[1.5px] border-[#0A0A0A] px-1.5 py-0.5 font-['Bricolage_Grotesque'] text-[8px] font-bold uppercase tracking-wide text-[#0A0A0A]"
                                                style={{
                                                    backgroundColor:
                                                        experience.badge
                                                            .background,
                                                    color: experience.badge
                                                        .textColor,
                                                }}
                                            >
                                                {experience.badge.label}
                                            </span>
                                        </div>
                                        <p className="mt-1 font-['Inter'] text-xs font-semibold text-[#0A0A0A]/55">
                                            {experience.title}
                                        </p>
                                        <h4 className="mt-0.5 font-['Bricolage_Grotesque'] text-base font-extrabold leading-tight text-[#0A0A0A]">
                                            {experience.role}
                                        </h4>
                                        <p className="mb-1.5 font-['Inter'] text-sm font-semibold text-accent">
                                            {experience.organization}
                                        </p>
                                        <ExperienceContent
                                            experience={experience}
                                            textColor="text-[#0A0A0A]/65"
                                        />
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Credentials */}
        <CertificateCarousel />
    </main>
);

export default Experience;
