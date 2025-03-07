import React from "react";
import Header from "../../common/Header/Header.tsx";
import Footer from "../../common/Footer/Footer.tsx";
import success_stories_img from "../../../assets/success_stories_img.jpeg";
import Reactangle_1 from "../../../assets/Rectangle 214.png";
import Reactangle_2 from "../../../assets/Rectangle 215.png";

import * as S from "./SuccessStories.style";
import Whatsapp from "../../common/Whatsapp/Whatsapp.tsx";
import PromotionalPopup from "../../common/PromotionalPopup/PromotionalPopup.tsx";

const SuccessStories = () => {
  return (
    <>
      <Header />
      <S.Container>
        <img
          src={success_stories_img}
          alt="Blogs"
          width={"100%"}
          height="316px"
        />
      </S.Container>
      <S.BlogsContainer>
        {/* <S.TopCategoryTitle>Top categories</S.TopCategoryTitle>
        <S.CategoryContainer>
          {new Array(5).fill(0).map((el, ind) => {
            return <S.Category active={ind === 2}>Clothing</S.Category>;
          })}
        </S.CategoryContainer> */}
        <S.BlogsList>
          {new Array(12).fill(0).map((el) => {
            return (
              <S.Container1>
                <S.ImageContainer>
                  <img
                    src={Reactangle_1}
                    alt="1"
                    width="146px"
                    height="132px"
                  />
                  <img
                    src={Reactangle_2}
                    alt="2"
                    width="146px"
                    height="132px"
                    style={{ left: "-10%", position: "relative", top: "20%" }}
                  />
                </S.ImageContainer>
                <S.SuccessStoryTitle>
                  The Binge Town x Delhiblogger
                </S.SuccessStoryTitle>
                <S.SuccessStorySubtitle>
                  The pay-per-view model in influencer marketing is a
                  performance-based approach where brands only pay for the
                  actual views their campaign content receives.
                </S.SuccessStorySubtitle>
                <S.SuccessStoryTags>
                  <S.SuccessStoryTag>13M+ Impressions</S.SuccessStoryTag>
                  <S.SuccessStoryTag>400K+ Engagements</S.SuccessStoryTag>
                </S.SuccessStoryTags>
                <S.ContinueReading>Continue Reading &gt;</S.ContinueReading>
              </S.Container1>
            );
          })}
        </S.BlogsList>
      </S.BlogsContainer>
      <PromotionalPopup />
      <Footer />
      <Whatsapp />
    </>
  );
};

export default SuccessStories;
