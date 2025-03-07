import React from "react";
import InfoPage from "./components/InfoPage/InfoPage.tsx";
import TopRatedInfluencer from "./components/TopRatedInfluencer/TopRatedInfluencer.tsx";
import HowItWorks from "./components/HowItWorks/HowItWorks.tsx";
// import SuccessStories from "./components/SuccessStories/SuccessStories.tsx";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs.tsx";
import NextReachAcademy from "./components/NextReachAcademy/NextReachAcademy.tsx";
import Blogs from "./components/Blogs/Blogs.tsx";
import Footer from "../../common/Footer/Footer.tsx";
import EngagementRateCalculator from "./components/EngagementRateCalculator/EngagementRateCalculator.tsx";
import InfluencerPricingCalculator from "./components/InfluencerPricingCalculator/InfluencerPricingCalculator.tsx";
import Navbar from "../../common/Navbar/Navbar.tsx";
import Whatsapp from "../../common/Whatsapp/Whatsapp.tsx";
import PromotionalPopup from "../../../desktop/common/PromotionalPopup/PromotionalPopup.tsx";

function MobileHome() {
  return (
    <>
      <InfoPage />
      <WhyChooseUs />
      <TopRatedInfluencer />
      <HowItWorks />
      {/* <SuccessStories /> */}
      <InfluencerPricingCalculator />
      <EngagementRateCalculator />
      <NextReachAcademy />
      <Blogs />
      <Footer />
      <PromotionalPopup />
      <Whatsapp />
      <Navbar />
    </>
  );
}

export default MobileHome;
