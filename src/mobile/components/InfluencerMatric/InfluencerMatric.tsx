import React from "react";
import * as S from "./InfluencerMatric.style";
import Header from "../../common/Header/Header.tsx";
import Footer from "../../common/Footer/Footer.tsx";
import InfluencerMatricInfo from "./components/InfluencerMatricInfo/InfluencerMatricInfo.tsx";
import Reviews from "./components/Reviews/Reviews.tsx";
import Navbar from "../../common/Navbar/Navbar.tsx";
import { useSelector } from "react-redux";
import InfluencerPlatformInfo from "./components/InfluencerPlatformInfo/InfluencerPlatformInfo.tsx";
import PageNotFound from "../../../desktop/components/NotFound/NotFound.tsx";
import { getInfluencerMatricInfo } from "../../../redux/selectors/influencerMatricSelector.js";
import Whatsapp from "../../common/Whatsapp/Whatsapp.tsx";
import PromotionalPopup from "../../../desktop/common/PromotionalPopup/PromotionalPopup.tsx";

const InfluencerMatric = () => {
  const influencerMatric = useSelector(getInfluencerMatricInfo) || {};
  if (Object.keys(influencerMatric).length === 0) {
    return <PageNotFound />;
  }

  return (
    <>
      <Header bgColor="#FFF9F9" />
      <S.Container>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "95%",
            justifyContent: "center",
            alignItems: "center",
            background: "#FFF",
            borderRadius: "8px",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          <InfluencerMatricInfo />
          <InfluencerPlatformInfo />
        </div>
        <Reviews />
      </S.Container>
      <PromotionalPopup />
      <Footer />
      <Whatsapp />
      <Navbar />
    </>
  );
};

export default InfluencerMatric;
