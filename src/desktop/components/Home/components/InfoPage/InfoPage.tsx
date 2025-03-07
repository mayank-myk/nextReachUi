import React from "react";
import * as S from "./InfoPage.style";
import InfoPage_1 from "../../../../../assets/InfoPage_1.png";
import { useNavigate } from "react-router-dom";
import Header from "../../../../common/Header/Header.tsx";

function InfoPage({ influencerPricingRef }) {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/discover");
    window.scrollTo(0, 0);
  };

  return (
    <S.Container>
      <Header influencerPricingRef={influencerPricingRef} />
      <S.FirstPart>
        <S.Left>
          <S.LeftTitle>
            Zero Commission Pay Per View Influencer Marketing Platform
          </S.LeftTitle>
          <S.LeftSubTitle>
            No more upfront influencer fees! Pay only for the views your
            collaboration gets. 100% Transparent - Performance driven marketing.
          </S.LeftSubTitle>
          <S.ExploreBtn onClick={handleExplore}>Explore</S.ExploreBtn>
        </S.Left>
        <S.Right>
          <img
            src={InfoPage_1}
            alt="info_page"
            width={"399px"}
            height={"403px"}
          />
        </S.Right>
      </S.FirstPart>
      <S.FollowersCountContainer>
        <div>
          <S.FollowersCount>1000+ </S.FollowersCount>
          <S.FollowersDesc>Active Influencers on our platform</S.FollowersDesc>
        </div>
        <div>
          <S.FollowersCount>2000+ </S.FollowersCount>
          <S.FollowersDesc>Successful campaigns executed</S.FollowersDesc>
        </div>
        <div>
          <S.FollowersCount>500M+ </S.FollowersCount>
          <S.FollowersDesc>Total Impressions Delivered</S.FollowersDesc>
        </div>
      </S.FollowersCountContainer>
    </S.Container>
  );
}

export default InfoPage;
