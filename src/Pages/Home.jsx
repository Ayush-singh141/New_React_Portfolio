import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import AboutMeSection from "../Components/AboutMeSection";
import FlowingMenu from "../Components/FlowingMenu";
import ExploreMyProjectSection from "../Components/ExploreMyProjectSection";
import Footer from "../Components/Footer";
import ContactMeSection from "../Components/ContactMeSection";
import TrueFocus from "../Components/TrueFocus";

const demoItems = [
  {
    link: "#",
    text: "Design",
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    link: "#",
    text: "Create",
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    link: "#",
    text: "Deliver",
    image: "https://picsum.photos/600/400?random=3",
  },
  {
    link: "#",
    text: "Inspire",
    image: "https://picsum.photos/600/400?random=4",
  },
];
const Home = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <HeroSection />
      <div id="about">
      <AboutMeSection />
      </div>
      <div
        style={{ height: "600px", position: "relative" }}
        className="hidden md:block lg:block"
      >
        <FlowingMenu items={demoItems} />
      </div>
     <div id="portfolio">
     <ExploreMyProjectSection />
     </div>
      <div id="services" className=" h-[600px] flex justify-center items-center">
      
      <TrueFocus
        sentence="Fullstack Ui/Ux Backend Frontend"
        manualMode={false}
        blurAmount={5}
        borderColor="red"
        animationDuration={2}
        pauseBetweenAnimations={1}
      />
      </div>
      <ContactMeSection />
      <Footer />
    </div>
  );
};

export default Home;
