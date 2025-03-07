import React from "react";
import * as S from "./FollowersView.style";
import { useNavigate } from "react-router-dom";

const FollowersView = ({ followersRef }) => {
  const navigate = useNavigate();

  const handleFollowers = (followers) => {
    navigate(`/top_rated_influencers/?Followers=${followers}`);
    window.scrollTo(0, 0);
  };

  return (
    <S.Container ref={followersRef}>
      <S.Left>
        <S.LeftTitle>FOLLOWERS</S.LeftTitle>
        <S.LeftSubTitle>
          Browse through nano, micro, macro or mega influencers based on their
          follower base.
        </S.LeftSubTitle>
        {/* <S.ExploreBtn>Explore</S.ExploreBtn> */}
      </S.Left>
      <S.Right>
        <S.FirstPart>
          <S.InfluencerInfo onClick={() => handleFollowers("LE_25")}>
            <S.CityTitle>Less than 25k</S.CityTitle>
          </S.InfluencerInfo>
          <S.InfluencerInfo onClick={() => handleFollowers("BTN_25_100")}>
            <S.CityTitle>25k to 100k </S.CityTitle>
          </S.InfluencerInfo>
          <S.InfluencerInfo onClick={() => handleFollowers("BTN_100_250")}>
            <S.CityTitle>100k to 250k</S.CityTitle>
          </S.InfluencerInfo>
        </S.FirstPart>
        <S.FirstPart>
          <S.InfluencerInfo onClick={() => handleFollowers("BTN_250_500")}>
            <S.CityTitle>250k to 500k</S.CityTitle>
          </S.InfluencerInfo>
          <S.InfluencerInfo onClick={() => handleFollowers("BTN_500_1000")}>
            <S.CityTitle>500k to 1M</S.CityTitle>
          </S.InfluencerInfo>
          <S.InfluencerInfo onClick={() => handleFollowers("GE_1000")}>
            <S.CityTitle>More than 1M</S.CityTitle>
          </S.InfluencerInfo>
        </S.FirstPart>
      </S.Right>
    </S.Container>
  );
};

export default FollowersView;
