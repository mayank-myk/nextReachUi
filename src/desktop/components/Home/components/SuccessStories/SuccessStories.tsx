import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import Carousel from "react-multi-carousel";
import * as S from "./SuccessStories.style";
// import SuccessStory from "./comp/SuccessStory";
import Reactangle_1 from "../../../../../assets/Rectangle 214.png";
import Reactangle_2 from "../../../../../assets/Rectangle 215.png";
import { useNavigate } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1363 },
    items: 3,
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
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>SUCCESS STORIES</S.Title>
        <S.Subtitle>
          Read about some of our most successful influencer marketing campaigns
          based on pay-per-view model. For us a successful campaign is which
          drives real revenue for our clients and creates a long term positive
          business impact.
        </S.Subtitle>
      </S.TitleContainer>
      <S.SeeMore
        onClick={() => {
          navigate("/success_stories");
          window.scrollTo(0, 0);
        }}
      >
        SEE MORE
        <ChevronRightIcon fontSize="large" />
      </S.SeeMore>

      <S.Wrapper>
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          arrows={false}
          // partialVisible={true}
        >
          {new Array(4).fill(0).map((el, ind) => {
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
                </S.SuccessStoryTags>
                <S.ContinueReading>Continue Reading &gt;</S.ContinueReading>
              </S.Container1>
            );
          })}
        </Carousel>
      </S.Wrapper>
    </S.Container>
  );
};

export default SuccessStories;
