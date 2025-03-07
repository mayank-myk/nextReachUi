import React from "react";
import * as S from "./InfluencerMatric.style";
import Header from "../../common/Header/Header.tsx";
import Footer from "../../common/Footer/Footer.tsx";
import InfluencerMatricInfo from "./components/InfluencerMatricInfo/InfluencerMatricInfo.tsx";
import Reviews from "./components/Reviews/Reviews.tsx";
import { useSelector } from "react-redux";
import { getInfluencerMatricInfo } from "../../../redux/selectors/influencerMatricSelector.js";
import PageNotFound from "../NotFound/NotFound.tsx";
import Whatsapp from "../../common/Whatsapp/Whatsapp.tsx";
import PromotionalPopup from "../../common/PromotionalPopup/PromotionalPopup.tsx";

const InfluencerMatric = () => {
  const influencerMatric = useSelector(getInfluencerMatricInfo) || {};
  if (Object.keys(influencerMatric).length === 0) {
    return <PageNotFound />;
  }

  return (
    <>
      <Header bgColor="#FFF9F9" />
      <S.Container>
        <InfluencerMatricInfo />
        <Reviews />
      </S.Container>
      <PromotionalPopup />
      <Footer />
      <Whatsapp />
    </>
  );
};

export default InfluencerMatric;
