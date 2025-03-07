import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./CategoryView.style";
import CATEGORIES from "../../categories.js";

function CategoryView({ categoryRef }) {
  const navigate = useNavigate();

  const handleCategory = (category) => {
    navigate(`/top_rated_influencers/?Niche=${category.key}`);
    window.scrollTo(0, 0);
  };

  return (
    <S.Container ref={categoryRef}>
      <S.TitleContainer>
        <S.Title>CATEGORY/NICHE</S.Title>
        <S.Subtitle>Connect with influencers in your brand's niche</S.Subtitle>
      </S.TitleContainer>

      <S.CategoryContainer>
        {CATEGORIES.map((category) => {
          return (
            <S.Category
              key={`category_${category?.text}`}
              onClick={() => handleCategory(category)}
            >
              <S.CategoryIcon>
                <img
                  src={category.icon}
                  alt="Category icon"
                  width="32px"
                  height="32px"
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
