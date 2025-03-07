import React from "react";
import * as S from "./Buget.style";
import { useNavigate } from "react-router-dom";
import {
  setContentPrice,
  // setInfluencerListingFilters,
  setQueryString,
  setStoreSortApplied,
} from "../../../../../redux/actions/influencerListingActions";
import { useDispatch } from "react-redux";

const BugetView = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBudget = (budget) => {
    navigate(`/top_rated_influencers/?budget=${budget}`);
    // dispatch(setInfluencerListingFilters({ budget: budget }));
    dispatch(setQueryString(`budget=${budget}&sort_applied=RECOMMENDED`));
    dispatch(setStoreSortApplied("RECOMMENDED"));
    dispatch(setContentPrice(budget));
    window.scrollTo(0, 0);
  };

  return (
    <S.Container>
      <S.Right>
        <S.FirstPart>
          <S.InfluencerInfo onClick={() => handleBudget("LE_10")}>
            <S.CityTitle>Less than 10k</S.CityTitle>
          </S.InfluencerInfo>
          <S.InfluencerInfo onClick={() => handleBudget("BTN_10_25")}>
            <S.CityTitle>10k to 25k</S.CityTitle>
          </S.InfluencerInfo>
          <S.InfluencerInfo onClick={() => handleBudget("BTN_25_50")}>
            <S.CityTitle>25k to 50k</S.CityTitle>
          </S.InfluencerInfo>
        </S.FirstPart>
        <S.FirstPart>
          <S.InfluencerInfo onClick={() => handleBudget("BTN_50_75")}>
            <S.CityTitle>50k to 75k</S.CityTitle>
          </S.InfluencerInfo>
          <S.InfluencerInfo onClick={() => handleBudget("BTN_75_100")}>
            <S.CityTitle>75k to 1 Lakh</S.CityTitle>
          </S.InfluencerInfo>
          <S.InfluencerInfo onClick={() => handleBudget("GE_100")}>
            <S.CityTitle>More than 1 Lakh</S.CityTitle>
          </S.InfluencerInfo>
        </S.FirstPart>
      </S.Right>
      <S.Left>
        <S.LeftTitle>BUDGET</S.LeftTitle>
        <S.LeftSubTitle>
          Have a budget limit? Select it and discover influencers that match.
        </S.LeftSubTitle>
        {/* <S.ExploreBtn>Explore</S.ExploreBtn> */}
      </S.Left>
    </S.Container>
  );
};

export default BugetView;
