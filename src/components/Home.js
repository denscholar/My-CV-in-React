// import Navbar from "./Navbar";
import Navbar from '../components/Navbar/Navbar'
import Experience from "./Experience";
import Education from "./Education";
import Skill from "./Skill";
import Profile from "./Profile";
import About from "./About";
import BasicInfo from "../BasicInfo";
import Portfolio from "./Portfolio";


const Home = () => {
    return (
        <section>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <Profile />
                        <BasicInfo />
                    </div>
                    <div className="col-sm-8">
                        <About
                            title="ABOUT ME"
                        />
                        <Skill
                            title="PROFESSIONAL SKILL"

                        />
                        <Education
                            title='EDUCATION & CERTIFICATIONS'
                        />
                        <Experience
                            title='EXPERIENCE'
                        />
                        <Portfolio
                            title='MY PORTFOLIO'
                        />

                    </div>
                </div>
            </div>

              


        </section>
    );
}

export default Home;