import React from "react";
import * as S from "./FollowersView.style";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  // setInfluencerListingFilters,
  setQueryString,
  setStoreSortApplied,
} from "../../../../../redux/actions/influencerListingActions";

const FollowersView = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFollowers = (followers) => {
    navigate(`/top_rated_influencers/?follower_count=${followers}`);
    // dispatch(setInfluencerListingFilters({ follower_count: followers }));
    dispatch(
      setQueryString(`follower_count=${followers}&sort_applied=RECOMMENDED`)
    );
    dispatch(setStoreSortApplied("RECOMMENDED"));
    window.scrollTo(0, 0);
  };

  return (
    <S.Container>
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
      <S.Left>
        <S.LeftTitle>FOLLOWERS</S.LeftTitle>
        <S.LeftSubTitle>
          Browse through nano, micro, macro or mega influencers based on their
          follower base.
        </S.LeftSubTitle>
        {/* <S.ExploreBtn>Explore</S.ExploreBtn> */}
      </S.Left>
    </S.Container>
  );
};

export default FollowersView;
