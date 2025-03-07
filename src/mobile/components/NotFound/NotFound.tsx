import React from "react";
import Header from "../../common/Header/Header.tsx";
import * as S from "./NotFound.style.js";
import Navbar from "../../common/Navbar/Navbar.tsx";
import Whatsapp from "../../common/Whatsapp/Whatsapp.tsx";
import PromotionalPopup from "../../../desktop/common/PromotionalPopup/PromotionalPopup.tsx";

const Campaigns = () => {
  return (
    <>
      <Header />
      <S.Container>Not found</S.Container>
      <PromotionalPopup />
      <Whatsapp />
      <Navbar />
    </>
  );
};

export default Campaigns;
