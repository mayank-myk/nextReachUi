import React from "react";
import star_icon from "../../../../../../../assets/icons/star_icon.svg";
import filled_star_icon from "../../../../../../../assets/icons/filled_star_icon.svg";
import person_icon from "../../../../../../../assets/InfluencerMatric/icons/person_icon.svg";
import * as S from "./Review.style";

const Review = ({ campaign_review }) => {
  const { comment, rating, review_date, user_name } = campaign_review || {};
  return (
    <S.Container>
      <S.Heading>
        <S.Profile>
          <img src={person_icon} alt="person_icon" width="77px" height="77px" />
        </S.Profile>
        <S.Details>
          <S.Name>{user_name}</S.Name>
          <S.RatingContainer>
            <S.RatingStar>
              {[1, 2, 3, 4, 5].map((starIndex) =>
                starIndex <= rating ? (
                  <img src={filled_star_icon} alt="Rating" />
                ) : (
                  <img src={star_icon} alt="Rating" />
                )
              )}
            </S.RatingStar>
            <S.DateContainer>{review_date}</S.DateContainer>
          </S.RatingContainer>
        </S.Details>
      </S.Heading>
      <S.Desc>{comment}</S.Desc>
    </S.Container>
  );
};

export default Review;
