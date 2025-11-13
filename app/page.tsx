import HomePage from "@/components/HomePage/HomePage";
import MyJourney from "@/components/MyJourney/Myjourney";
import MyProjects from "@/components/MyProjects/MyProjects";
import Techstack from "@/components/TechStack/Techstack";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <div id="home">
        <HomePage />
      </div>
      <div id="journey">
        <MyJourney />
      </div>
      <div id="skills">
        <Techstack />
      </div>
      <div id="projects">
        <MyProjects />
      </div>
      <Contact />
      <Footer />
    </>
  );
}
