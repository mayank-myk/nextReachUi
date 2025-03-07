import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./CategoryView.style";
import CATEGORIES from "../../categories.js";
import { useDispatch } from "react-redux";
import {
  // setInfluencerListingFilters,
  setQueryString,
  setStoreSortApplied,
} from "../../../../../redux/actions/influencerListingActions.js";

function CategoryView() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCategory = (category) => {
    navigate(`/top_rated_influencers/?niche=${category.key}`);
    // dispatch(setInfluencerListingFilters({ niche: [category.key] }));
    dispatch(setQueryString(`niche=${category.key}&sort_applied=RECOMMENDED`));
    dispatch(setStoreSortApplied("RECOMMENDED"));
    window.scrollTo(0, 0);
  };

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>CATEGORY/NICHE</S.Title>
        <S.Subtitle>Connect with influencers in your brand's niche</S.Subtitle>
      </S.TitleContainer>
      <S.CategoryContainer>
        {CATEGORIES.map((category) => {
          return (
            <S.Category
              onClick={() => handleCategory(category)}
              key={`category_${category.text}`}
            >
              <S.CategoryIcon>
                <img
                  src={category.icon}
                  alt="Category icon"
                  width="40px"
                  height="40px"
                />
              </S.CategoryIcon>
              <S.CategoryTitle>{category.text}</S.CategoryTitle>
            </S.Category>
          );
        })}
      </S.CategoryContainer>
    </S.Container>
  );
}

export default CategoryView;
