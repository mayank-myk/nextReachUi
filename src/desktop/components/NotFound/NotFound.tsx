import React from "react";
import Header from "../../common/Header/Header.tsx";
import * as S from "./NotFound.style.js";
import Whatsapp from "../../common/Whatsapp/Whatsapp.tsx";
import PromotionalPopup from "../../common/PromotionalPopup/PromotionalPopup.tsx";

const PageNotFound = () => {
  return (
    <>
      <Header />
      <S.Container>Not found</S.Container>
      <PromotionalPopup />
      {/* <Footer /> */}
      <Whatsapp />
    </>
  );
};

export default PageNotFound;
