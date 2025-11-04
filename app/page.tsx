import HomePage from "@/components/HomePage/HomePage";
import MyJourney from "@/components/MyJourney/Myjourney";
import MyProjects from "@/components/MyProjects/MyProjects";
import Techstack from "@/components/TechStack/Techstack";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <HomePage />
    <MyJourney/>
    <Techstack/>
    <MyProjects/>
    </>
  );
}
