import "./Style.css";

const Education = () => {
    return (
        <main>
            <section className="education">
                <div className="container pb-5">
                    <h1 data-aos="fade-down" data-aos-delay="100" className="pt-5 pb-4 text-center">My <span>Education</span></h1>

                    <div className="row">
                        <div className="col-xl-12">
                            <ul data-aos="fade-down" data-aos-delay="300" className="timeline-list">
                                <li>
                                    <div data-aos="fade-left" data-aos-delay="600" className="timeline_content">
                                        <span>2009-2015</span>
                                        <h4>SD Negeri Sendang - <b>Kediri</b></h4>
                                        <p>Attended primary school in Sendang, Kediri, where I developed foundational knowledge and skills in various subjects.</p>
                                    </div>
                                </li>

                                <li>
                                    <div data-aos="fade-right" data-aos-delay="650" className="timeline_content">
                                        <span>2015-2018</span>
                                        <h4>MtS Negeri 3 Kota Kediri - <b>Kediri</b></h4>
                                        <p>Continued my education at MtS Negeri 3 Kota Kediri, where I focused on religious studies alongside academic subjects.</p>
                                    </div>
                                </li>

                                <li>
                                    <div data-aos="fade-left" data-aos-delay="700" className="timeline_content">
                                        <span>2018-2021</span>
                                        <h4>SMK Negeri 1 Grogol - <b>Kediri</b></h4>
                                        <p>Completed my secondary education at SMK Negeri 1 Grogol, Kediri, specializing in technical skills and vocational training.</p>
                                    </div>
                                </li>

                                <li>
                                    <div data-aos="fade-right" data-aos-delay="750" className="timeline_content">
                                        <span>2021-2025 (Expected)</span>
                                        <h4>Politeknik Negeri Malang - <b>Malang</b></h4>
                                        <p>Currently pursuing my tertiary education at Politeknik Negeri Malang, majoring in Information Technology, with a focus on Frontend Development.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Education;