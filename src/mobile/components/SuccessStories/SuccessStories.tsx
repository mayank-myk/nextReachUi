import React from "react";

import Header from "../../common/Header/Header.tsx";
import Footer from "../../common/Footer/Footer.tsx";
import Carousel from "react-multi-carousel";
import success_stories_img from "../../../assets/success_stories_img.jpeg";
import Reactangle_1 from "../../../assets/Rectangle 214.png";
import Reactangle_2 from "../../../assets/Rectangle 215.png";
import * as S from "./SuccessStories.style.js";
import Navbar from "../../common/Navbar/Navbar.tsx";
import Whatsapp from "../../common/Whatsapp/Whatsapp.tsx";
import PromotionalPopup from "../../../desktop/common/PromotionalPopup/PromotionalPopup.tsx";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1363 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1363, min: 1050 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 1050, min: 300 },
    items: 1,
    partialVisibilityGutter: 70,
  },
  smallMobile: {
    breakpoint: { max: 300, min: 0 },
    items: 1,
    partialVisibilityGutter: 70,
  },
};

const SuccessStories = () => {
  return (
    <>
      <Header />
      <S.Container>
        <img
          src={success_stories_img}
          alt="Blogs"
          width={"100%"}
          height={"176px"}
        />
      </S.Container>
      <S.BlogsContainer>
        {/* <S.TopCategoryTitle>Top categories</S.TopCategoryTitle>
        <S.CategoryContainer>
          {new Array(4).fill(0).map((el) => {
            return <S.Category>Clothing</S.Category>;
          })}
        </S.CategoryContainer> */}
        <S.BlogsList>
          <Carousel
            responsive={responsive}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            showDots={true}
            infinite={true}
            partialVisible={true}
          >
            {new Array(3).fill(0).map((el, index) => {
              return (
                <S.Container1>
                  <S.ImageContainer>
                    <img
                      src={Reactangle_1}
                      alt="1"
                      width="98px"
                      height="78px"
                    />
                    <img
                      src={Reactangle_2}
                      alt="2"
                      width="98px"
                      height="78px"
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
          </Carousel>
        </S.BlogsList>
      </S.BlogsContainer>
      <PromotionalPopup />
      <Footer />
      <Whatsapp />
      <Navbar />
    </>
  );
};

export default SuccessStories;
