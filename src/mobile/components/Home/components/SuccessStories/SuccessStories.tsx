import React from "react";
import * as S from "./SuccessStories.style";
// import SuccessStory from "./comp/SuccessStory";
import Reactangle_1 from "../../../../../assets/Rectangle 214.png";
import Reactangle_2 from "../../../../../assets/Rectangle 215.png";

const SuccessStories = () => {
  return (
    <S.Container>
      <S.Title>SUCCESS STORIES</S.Title>
      <S.Subtitle>
        Read about some of our most successful influencer marketing campaigns
        based on pay-per-view model. For us a successful campaign is which
        drives real revenue for our clients and creates a long term positive
        business impact.
      </S.Subtitle>
      <S.Wrapper>
        {new Array(2).fill(0).map((el) => {
          return (
            <S.Container1>
              <S.ImageContainer>
                <img src={Reactangle_1} alt="1" width="146px" height="132px" />
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
                performance-based approach where brands only pay for the actual
                views their campaign content receives.
              </S.SuccessStorySubtitle>
              <S.SuccessStoryTags>
                <S.SuccessStoryTag>13M+ Impressions</S.SuccessStoryTag>
              </S.SuccessStoryTags>
              <S.ContinueReading>Continue Reading &gt;</S.ContinueReading>
            </S.Container1>
          );
        })}
      </S.Wrapper>
    </S.Container>
  );
};

export default SuccessStories;
