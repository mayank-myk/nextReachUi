import React, { useEffect, useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import * as S from "./NextReachAcademy.style";
// import next_reach_acedemy_img from "../../../../../assets/next_reach_academy_img.png";
import Carousel from "react-multi-carousel";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getHomeMetaData } from "../../../../../redux/selectors/homeSelector";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1363 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1363, min: 1050 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 1050, min: 300 },
    items: 1,
    partialVisibilityGutter: 50,
  },
  smallMobile: {
    breakpoint: { max: 300, min: 0 },
    items: 1,
    partialVisibilityGutter: 50,
  },
};

const NextReachAcademy = () => {
  const navigate = useNavigate();
  const [nextReachAcademyData, setNextReachAcademyData] = useState([]);
  const homeMetaData = useSelector(getHomeMetaData);

  useEffect(() => {
    if (!homeMetaData) return;
    setNextReachAcademyData(homeMetaData.academy_video_list);
  }, [homeMetaData]);

  const handleExplore = () => {
    navigate("/next_reach_academy");
    window.scrollTo(0, 0);
  };

  return (
    <S.Container>
      <S.Title>NEXT REACH ACADEMY</S.Title>
      <S.Subtitle>
        Learn various aspects of Marketing including Digital Marketing and
        Influencer Marketing with our curated list of training videos.{" "}
      </S.Subtitle>
      <S.SeeMore onClick={handleExplore}>
        SEE MORE
        <ChevronRightIcon fontSize="medium" style={{ color: "#FFF" }} />
      </S.SeeMore>
      <S.Wrapper>
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
          {nextReachAcademyData &&
            nextReachAcademyData.length > 0 &&
            nextReachAcademyData.map((academy) => {
              return (
                <S.Container1 key={`academy_${academy?.title}`}>
                  <S.ImageContainer>
                    <iframe
                      width="268px"
                      title={academy?.title}
                      style={{ borderRadius: "12px" }}
                      src={`https://www.youtube.com/embed/${academy?.yt_link}`}
                    ></iframe>
                  </S.ImageContainer>

                  <S.SuccessStory>
                    <S.SuccessStoryTitle>{academy?.title}</S.SuccessStoryTitle>
                    <S.SuccessStoryTags>
                      <S.SuccessStoryTag>{academy?.tag1}</S.SuccessStoryTag>
                      <S.SuccessStoryTag>{academy?.tag2}</S.SuccessStoryTag>
                      <S.SuccessStoryTag>{academy?.tag3}</S.SuccessStoryTag>
                      <S.SuccessStoryTag>{academy?.tag4}</S.SuccessStoryTag>
                    </S.SuccessStoryTags>
                  </S.SuccessStory>
                </S.Container1>
              );
            })}
        </Carousel>
      </S.Wrapper>
    </S.Container>
  );
};

export default NextReachAcademy;
