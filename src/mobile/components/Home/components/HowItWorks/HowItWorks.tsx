import React from "react";
import HowItWorksImg from "../../../../../assets/Home/how_it_works_mobile.jpeg";
import * as S from "./HowItWorks.style";

const HowItWorks = () => {
  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>HOW IT WORKS</S.Title>
        <S.Subtitle>
          Execute highly effective influencer campaigns with NextReach's
          revolutionary model. Maximizing ROI on your marketing budget.
        </S.Subtitle>
      </S.TitleContainer>
      <img
        src={HowItWorksImg}
        alt="How it works"
        width={"100%"}
        height={"100%"}
      />
    </S.Container>
  );
};

export default HowItWorks;
