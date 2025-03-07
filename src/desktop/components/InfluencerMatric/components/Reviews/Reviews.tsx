import React from "react";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import filled_star_icon from "../../../../../assets/icons/filled_star_icon.svg";
import * as S from "./Reviews.style";
import Review from "./components/Review/Review.tsx";
import { useSelector } from "react-redux";
import { getInfluencerMatricInfo } from "../../../../../redux/selectors/influencerMatricSelector.js";

const InfluencerMatric = () => {
  const influencerMatric = useSelector(getInfluencerMatricInfo) || {};
  const { influencer_review } = influencerMatric || {};
  if (!influencer_review) return null;

  return (
    <S.Container>
      <S.Heading>
        <S.Left>
          <S.Title>Reviews</S.Title>
          <S.OverallRating>
            <img src={filled_star_icon} alt="rating" />
            {influencer_review?.avg_rating}
          </S.OverallRating>
          <S.TotalRatingCount>
            ({influencer_review?.count} ratings)
          </S.TotalRatingCount>
        </S.Left>
        {/* <S.SeeMore>
          SEE MORE
          <ChevronRightIcon fontSize="large" />
        </S.SeeMore> */}
      </S.Heading>
      {influencer_review?.campaign_reviews &&
        influencer_review?.campaign_reviews?.length > 0 &&
        influencer_review?.campaign_reviews.map((campaign_review) => {
          return <Review campaign_review={campaign_review} />;
        })}
    </S.Container>
  );
};

export default InfluencerMatric;
