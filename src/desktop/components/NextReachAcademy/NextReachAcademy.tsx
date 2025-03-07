import React, { useEffect, useState } from "react";
import Header from "../../common/Header/Header.tsx";
import Footer from "../../common/Footer/Footer.tsx";
// import next_reach_acedemy_img from "../../../assets/next_reach_academy_img.png";
import * as S from "./NextReachAcademy.style.js";
import Whatsapp from "../../common/Whatsapp/Whatsapp.tsx";
import PromotionalPopup from "../../common/PromotionalPopup/PromotionalPopup.tsx";
// import { useNavigate } from "react-router-dom";

const NextReachAcademy = () => {
  // const navigate = useNavigate();
  const [nextReachAcademyData, setNextReachAcademyData] = useState({});

  useEffect(() => {
    fetch(
      "https://nextreach-backend-fxdmcnbgf3gsesht.southindia-01.azurewebsites.net/v1/web/get/all/academy-video",
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setNextReachAcademyData(response);
      });
  }, []);

  return (
    <>
      <Header />
      <S.Container>
        <S.Title>NEXT REACH ACADEMY</S.Title>
        <S.SubTitle>
          The perfect library to learn about NextReach, Influencer Marketing,
          Content Creation, Marketing, Branding and much more!
        </S.SubTitle>
      </S.Container>
      <S.BlogsContainer>
        {/* <S.TopCategoryTitle>Top categories</S.TopCategoryTitle>
        <S.CategoryContainer>
          {new Array(5).fill(0).map((el, ind) => {
            return <S.Category active={ind === 2}>Clothing</S.Category>;
          })}
        </S.CategoryContainer> */}
        <S.BlogsList>
          {Object.entries(nextReachAcademyData).map(([key, val]) => {
            return (
              <React.Fragment key={`academy_${key}`}>
                <S.Heading>{key}</S.Heading>
                <S.BlogContainer>
                  {val &&
                    val.length > 0 &&
                    val.map((academy) => {
                      return (
                        <S.Container1>
                          <S.ImageContainer>
                            <iframe
                              width="408px"
                              height="252px"
                              title={academy?.title}
                              style={{ borderRadius: "18px" }}
                              src={`https://www.youtube.com/embed/${academy?.yt_link}`}
                            ></iframe>
                          </S.ImageContainer>

                          <S.SuccessStory>
                            <S.SuccessStoryTitle>
                              {academy?.title}
                            </S.SuccessStoryTitle>
                            <S.SuccessStoryTags>
                              <S.SuccessStoryTag>
                                {academy?.tag1}
                              </S.SuccessStoryTag>
                              <S.SuccessStoryTag>
                                {academy?.tag2}
                              </S.SuccessStoryTag>
                              <S.SuccessStoryTag>
                                {academy?.tag3}
                              </S.SuccessStoryTag>
                              <S.SuccessStoryTag>
                                {academy?.tag4}
                              </S.SuccessStoryTag>
                            </S.SuccessStoryTags>
                          </S.SuccessStory>
                        </S.Container1>
                      );
                    })}
                </S.BlogContainer>
              </React.Fragment>
            );
          })}
        </S.BlogsList>
      </S.BlogsContainer>
      <PromotionalPopup />
      <Footer />
      <Whatsapp />
    </>
  );
};

export default NextReachAcademy;
