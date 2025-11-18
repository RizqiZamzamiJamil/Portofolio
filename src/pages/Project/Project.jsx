import Project00 from "../../assets/project0.png";
import Project001 from "../../assets/project001.png";
import Project1 from "../../assets/project1.png";
import Project2 from "../../assets/project2.png";
import Project3 from "../../assets/project3.png";
import Project4 from "../../assets/project4.png";
import Project5 from "../../assets/project5.png";
import Project6 from "../../assets/project6.png";
import Project7 from "../../assets/project7.png";
import Project8 from "../../assets/Project8.png";
import Project0 from "../../assets/ProjectNew.png";
import Card from "../../components/Card/Card";

const Projects = () => {
    return (
        <main>
            <section className="portofolio" id="portofolio">
                <div className="container pb-5">
                    <h1
                        data-aos="fade-down"
                        data-aos-delay="100"
                        className="pt-5 pb-4 text-center"
                    >
                        My <span>Projects</span>
                    </h1>

                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            <Card
                                imgSrc={Project001}
                                text="Developing a web-based document repository system for JTI Polinema with secure upload, organization, and sharing features."
                                subtitle="PHP - Laravel"
                                preview="https://github.com/RizqiZamzamiJamil?tab=repositories"
                                code="https://github.com/RizqiZamzamiJamil?tab=repositories"
                                delay="300"
                            />
                            <Card
                                imgSrc={Project00}
                                text="Developing a website for new student admissions for the Recognition of Past Learning (RPL) pathway at the STIMATA Malang campus."
                                subtitle="PHP - Laravel"
                                preview="https://github.com/RizqiZamzamiJamil?tab=repositories"
                                code="https://github.com/RizqiZamzamiJamil?tab=repositories"
                                delay="300"
                            />
                            <Card
                                imgSrc={Project0}
                                text="MSIB Batch 6 - A dynamic clinic website with a database that has the main features of online reservations and push notifications by email."
                                subtitle="JavaScript - React.Js & Express.Js"
                                preview="https://fe-msib-6-klinik-app-04.educalab.id/"
                                code="https://github.com/RizqiZamzamiJamil/klinik-app"
                                delay="300"
                            />
                            <Card
                                imgSrc={Project1}
                                text="A website frontend development project for UMKM Nyah Siok which operates in the dimsum food sector."
                                subtitle="HTML - Bootstrap & SASS"
                                preview="https://rizqizamzamijamil.github.io/Website_UMKM_Nyah_Siok/"
                                code="https://github.com/RizqiZamzamiJamil/Website_UMKM_Nyah_Siok"
                                delay="300"
                            />
                            <Card
                                imgSrc={Project2}
                                text="Implementation of jQuery Ajax which takes the film list API and displays it in the form of a website-based film search"
                                subtitle="JavaScript"
                                preview="https://rizqizamzamijamil.github.io/Cinema_List/"
                                code="https://github.com/RizqiZamzamiJamil/Cinema_List"
                                delay="400"
                            />
                            <Card
                                imgSrc={Project3}
                                text="Full stack project creating a shoe and helmet washing business website that applies the CodeIgniter 4 framework"
                                subtitle="PHP - CodeIgniter 4"
                                preview="https://github.com/RizqiZamzamiJamil/Cuci_Sepatu_Si_Launsh"
                                code="https://github.com/RizqiZamzamiJamil/Cuci_Sepatu_Si_Launsh"
                                delay="500"
                            />
                            <Card
                                imgSrc={Project8}
                                text="Simple project management without a database for naming and adding project members created with Vue JS"
                                subtitle="JavaScript - VueJS"
                                preview="https://github.com/RizqiZamzamiJamil/Manajemen_Proyek_Sederhana"
                                code="https://github.com/RizqiZamzamiJamil/Manajemen_Proyek_Sederhana"
                                delay="300"
                            />
                            <Card
                                imgSrc={Project4}
                                text="A simple To Do List web application without a database built using Vue JS with a CDN link"
                                subtitle="JavaScript - Vue JS"
                                preview="https://rizqizamzamijamil.github.io/To_Do_List/"
                                code="https://github.com/RizqiZamzamiJamil/To_Do_List"
                                delay="400"
                            />
                            <Card
                                imgSrc={Project5}
                                text="A simple static food website landing page created using only HTML and CSS"
                                subtitle="HTML & CSS"
                                preview="https://rizqizamzamijamil.github.io/Landing_Page_Sederhana/"
                                code="https://github.com/RizqiZamzamiJamil/Landing_Page_Sederhana"
                                delay="500"
                            />
                            <Card
                                imgSrc={Project6}
                                text="Implementation of the Multi Attribute Utility Theory (MAUT) method decision support system on websites based on the CodeIgniter 4 Framework"
                                subtitle="PHP - CodeIgniter 4"
                                preview="https://github.com/RizqiZamzamiJamil/Sistem_Pendukung_Keputusan_MAUT"
                                code="https://github.com/RizqiZamzamiJamil/Sistem_Pendukung_Keputusan_MAUT"
                                delay="300"
                            />
                            <Card
                                imgSrc={Project7}
                                text="Peek survey mobile application collaboration project using Flutter (Dart) as the Frontend and Laravel as the Backend."
                                subtitle="Dart & PHP - Flutter & Laravel"
                                preview="https://github.com/RizqiZamzamiJamil/Survey_Mobile"
                                code="https://github.com/RizqiZamzamiJamil/Survey_Mobile"
                                delay="400"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Projects;
