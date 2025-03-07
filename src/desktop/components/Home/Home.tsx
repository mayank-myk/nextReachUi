import React, { useRef } from "react";
import InfoPage from "./components/InfoPage/InfoPage.tsx";
import TopRatedInfluencer from "./components/TopRatedInfluencer/TopRatedInfluencer.tsx";
import HowItWorks from "./components/HowItWorks/HowItWorks.tsx";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs.tsx";
import NextReachAcademy from "./components/NextReachAcademy/NextReachAcademy.tsx";
import Blogs from "./components/Blogs/Blogs.tsx";
import Footer from "../../common/Footer/Footer.tsx";
import EngagementRateCalculator from "./components/EngagementRateCalculator/EngagementRateCalculator.tsx";
import InfluencerPricingCalculator from "./components/InfluencerPricingCalculator/InfluencerPricingCalculator.tsx";
import Whatsapp from "../../common/Whatsapp/Whatsapp.tsx";
import PromotionalPopup from "../../common/PromotionalPopup/PromotionalPopup.tsx";

function Home() {
  const influencerPricingRef = useRef();
  const influencerEngagementRateRef = useRef();

  return (
    <>
      <InfoPage influencerPricingRef={influencerPricingRef} />
      <WhyChooseUs />
      <TopRatedInfluencer />
      <HowItWorks />
      {/* <SuccessStories /> */}
      <InfluencerPricingCalculator
        influencerPricingRef={influencerPricingRef}
      />
      <EngagementRateCalculator
        influencerEngagementRateRef={influencerEngagementRateRef}
      />
      <NextReachAcademy />
      <Blogs />
      <Footer
        influencerPricingRef={influencerPricingRef}
        influencerEngagementRateRef={influencerEngagementRateRef}
      />
      <PromotionalPopup />
      <Whatsapp />
    </>
  );
}

export default Home;
