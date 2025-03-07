import React, { useEffect, useState } from "react";
import Header from "../../common/Header/Header.tsx";
import Footer from "../../common/Footer/Footer.tsx";
import Carousel from "react-multi-carousel";
// import next_reach_academy_background from "../../../assets/next_reach_academy_background.png";
// import influencer_photo from "../../../assets/Influencer_photo.png";
// import next_reach_acedemy_img from "../../../assets/next_reach_academy_img.png";
import * as S from "./NextReachAcademy.style.js";
import Navbar from "../../common/Navbar/Navbar.tsx";
import Whatsapp from "../../common/Whatsapp/Whatsapp.tsx";
import PromotionalPopup from "../../../desktop/common/PromotionalPopup/PromotionalPopup.tsx";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1363 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1363, min: 1050 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 1050, min: 300 },
    items: 1,
    partialVisibilityGutter: 30,
  },
  smallMobile: {
    breakpoint: { max: 300, min: 0 },
    items: 1,
    partialVisibilityGutter: 30,
  },
};

const NextReachAcademy = () => {
  const [nextReachAcademyData, setNextReachAcademyData] = useState({});
  // const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // const handleVideoPlay = () => {
  //   setIsVideoPlaying(true); // Stop carousel when video starts
  // };

  // const handleVideoEnd = () => {
  //   setIsVideoPlaying(false); // Resume carousel after video ends
  // };

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
      <Header bgColor="#FFF7F3" />
      <S.Container>
        {/* <img
          src={next_reach_academy_background}
          alt="Next reach academy"
          width={"100%"}
          height={"182px"}
        /> */}
        <S.Title>NEXT REACH ACADEMY</S.Title>
        <S.Subtitle>
          The perfect library to learn about NextReach, Influencer Marketing,
          Content Creation, Marketing, Branding and much more!
        </S.Subtitle>
      </S.Container>
      <S.BlogsContainer>
        {/* <S.TopCategoryTitle>Top categories</S.TopCategoryTitle>
        <S.CategoryContainer>
          {new Array(5).fill(0).map((el) => {
            return <S.Category>Clothing</S.Category>;
          })}
        </S.CategoryContainer>
        <S.CategoryTitle>Trending this month</S.CategoryTitle> */}
        {Object.entries(nextReachAcademyData).map(([key, val]) => {
          return (
            <>
              <S.CategoryTitle>{key}</S.CategoryTitle>
              <S.BlogsList>
                <Carousel
                  responsive={responsive}
                  autoPlay={true}
                  swipeable={true}
                  draggable={true}
                  showDots={true}
                  infinite={true}
                  arrows={false}
                  partialVisible={true}
                >
                  {val &&
                    val.length > 0 &&
                    val.map((academy, ind) => {
                      return (
                        <S.Container1 key={`academy_${ind}`}>
                          <S.ImageContainer>
                            <iframe
                              width="100%"
                              title={academy?.title}
                              style={{ borderRadius: "12px" }}
                              src={`https://www.youtube.com/embed/${academy?.yt_link}?autoplay=1`}
                              // onPlay={handleVideoPlay} // Trigger on play
                              // onEnded={handleVideoEnd}
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
                </Carousel>
              </S.BlogsList>
            </>
          );
        })}
        {/* <S.BlogsList>
          <Carousel
            responsive={responsive}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            showDots={true}
            infinite={true}
            partialVisible={true}
          >
            {new Array(4).fill(0).map((el) => {
              return (
                <S.Container1>
                  <S.ImageContainer>
                    <img
                      src={next_reach_acedemy_img}
                      alt="1"
                      width="268px"
                      height="180px"
                    />
                  </S.ImageContainer>

                  <S.SuccessStory>
                    <S.SuccessStoryTitle>
                      How to go viral on instagram?
                    </S.SuccessStoryTitle>
                    <S.SuccessStoryTags>
                      <S.SuccessStoryTag>Measuring Success</S.SuccessStoryTag>
                      <S.SuccessStoryTag>Measuring Success</S.SuccessStoryTag>
                      <S.SuccessStoryTag>Measuring Success</S.SuccessStoryTag>
                      <S.SuccessStoryTag>Measuring Success</S.SuccessStoryTag>
                    </S.SuccessStoryTags>
                  </S.SuccessStory>
                </S.Container1>
              );
            })}
          </Carousel>
        </S.BlogsList> */}
      </S.BlogsContainer>
      <PromotionalPopup />
      <Footer />
      <Whatsapp />
      <Navbar />
    </>
  );
};

export default NextReachAcademy;
