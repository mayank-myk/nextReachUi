import React from "react";
import Header from "../../../../common/Header/Header.tsx";
import * as S from "./InfoPage.style";
import InfoPage_1 from "../../../../../assets/InfoPage_1.png";
import { useNavigate } from "react-router-dom";

function InfoPage() {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/discover");
    window.scrollTo(0, 0);
  };

  return (
    <S.MainContainer>
      <Header />
      <S.Container>
        <S.LeftTitle>
          Zero Commission Pay Per View Influencer Marketing Platform
        </S.LeftTitle>
        <S.FirstPart>
          <S.Left>
            <S.LeftSubTitle>
              No more upfront influencer fees! Pay only for the views your
              collaboration gets. 100% Transparent - Performance driven
              marketing.
            </S.LeftSubTitle>
            <S.ExploreBtn onClick={handleExplore}>Explore</S.ExploreBtn>
          </S.Left>
          <S.Right>
            <img
              src={InfoPage_1}
              alt="info_page"
              width={"145px"}
              height={"153px"}
            />
          </S.Right>
        </S.FirstPart>
        <S.FollowersCountContainer>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <S.FollowersCount>1000+</S.FollowersCount>
            <S.FollowersDesc>
              Active Influencers on our platform
            </S.FollowersDesc>
          </div>
          <div>
            <S.FollowersCount>2000+</S.FollowersCount>
            <S.FollowersDesc>Successful campaigns executed</S.FollowersDesc>
          </div>
          <div>
            <S.FollowersCount>500M+</S.FollowersCount>
            <S.FollowersDesc>Total Impressions delivered</S.FollowersDesc>
          </div>
        </S.FollowersCountContainer>
      </S.Container>
    </S.MainContainer>
  );
}

export default InfoPage;
