import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import PackageAndMovers from "@/components/PackageAndMovers/PackageAndMovers";
import HouseRemovals from "@/components/section-package/HouseRemovals";
import OfficeRemovals from "@/components/section-package/OfficeRemovals";
import SectionEight from "@/components/sectionEight/SectionEight";
import SectionFive from "@/components/sectionFive/SectionFive";
import SectionFour from "@/components/sectionFour/SectionFour";
import SectionNine from "@/components/sectionNine/SectionNine";
import SectionSeven from "@/components/sectionSeven/SectionSeven";
import SectionSix from "@/components/sectionSix/SectionSix";
import SectionThree from "@/components/sectionThree/SectionThree";
import SectionTwo from "@/components/sectionTwo/SectionTwo";
import Slider from "@/components/Slider/Slider";
import React from "react";

function Landing() {
  return (
    <div>
      <Slider />
      <SectionTwo />
      <HouseRemovals/>
      <OfficeRemovals/>
      <SectionSeven />

      <SectionFour />

      <SectionFive />
      {/* <SectionSix /> */}
      <SectionThree />

      <SectionEight />
      {/* <SectionNine /> */}
    </div>
  );
}

export default Landing;
