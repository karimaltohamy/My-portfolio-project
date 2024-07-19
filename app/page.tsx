import { Suspense } from "react";
import ExperienceSection from "./components/experienceSection/ExperienceSection.component";
import FeaturedWork from "./components/featuredWork/FeaturedWork.component";
import Headingsection from "./components/headingSection/Headingsection.component";
import HeroSection from "./components/heroSection/HeroSection.compoent";
import MySkills from "./components/mySkills/MySkills.component";
import ContactUs from "./components/contactUs/ContactUs.component";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <Headingsection />
      <Suspense fallback={"Loading..."}>
        <FeaturedWork />
      </Suspense>
      <MySkills />
      <Headingsection />
      <ContactUs />
    </>
  );
}
