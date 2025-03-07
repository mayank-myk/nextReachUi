import React from "react";
import Header from "../../common/Header/Header.tsx";
import Footer from "../../common/Footer/Footer.tsx";
import ForInfluencerPageHeaderView from "./components/ForInfluencerPageHeaderView/ForInfluencerPageHeaderView.tsx";
import ForInfluencersView from "./components/ForInfluencersView/ForInfluencersView.tsx";
import JoinUs from "./components/JoinUs/JoinUs.tsx";
import Whatsapp from "../../common/Whatsapp/Whatsapp.tsx";
import PromotionalPopup from "../../common/PromotionalPopup/PromotionalPopup.tsx";

function ForInflencers() {
  return (
    <>
      <Header />
      <ForInfluencerPageHeaderView />
      <ForInfluencersView />
      <JoinUs />
      <PromotionalPopup />
      <Footer />
      <Whatsapp />
    </>
  );
}

export default ForInflencers;
