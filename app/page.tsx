import ExperienceSection from "./components/experienceSection/ExperienceSection.component";
import FeaturedWork from "./components/featuredWork/FeaturedWork.component";
import Headingsection from "./components/headingSection/Headingsection.component";
import HeroSection from "./components/heroSection/HeroSection.compoent";
import MySkills from "./components/mySkills/MySkills.component";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <Headingsection />
      <FeaturedWork />
      <MySkills />
      <Headingsection />
    </>
  );
}
