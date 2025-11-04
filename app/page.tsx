import HomePage from "@/components/HomePage/HomePage";
import MyJourney from "@/components/MyJourney/Myjourney";
import MyProjects from "@/components/MyProjects/MyProjects";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <HomePage />
    <MyJourney/>
    <MyProjects/>
    </>
  );
}
