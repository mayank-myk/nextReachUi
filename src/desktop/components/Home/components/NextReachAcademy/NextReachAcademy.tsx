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
    partialVisibilityGutter: 40,
  },
  smallMobile: {
    breakpoint: { max: 300, min: 0 },
    items: 1,
    partialVisibilityGutter: 40,
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

  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [videoUrl, setVideoUrl] = useState("");

  // // Handle opening the modal and setting the video URL
  // const openModal = (yt_link) => {
  //   setVideoUrl(`https://www.youtube.com/embed/${yt_link}?autoplay=1`); // Replace with your video ID
  //   setIsModalOpen(true);
  // };

  // // Handle closing the modal and stopping the video
  // const closeModal = () => {
  //   setIsModalOpen(false);
  //   setVideoUrl(""); // Stop the video when the modal is closed
  // // };

  return (
    <S.Container>
      <S.Header>
        <S.Title>NEXT REACH ACADEMY</S.Title>
        <S.SubtitleContainer>
          <div style={{ width: "50%" }}>
            Learn various aspects of Marketing including Digital Marketing and
            Influencer Marketing with our curated list of training videos.{" "}
          </div>
        </S.SubtitleContainer>
      </S.Header>
      <S.SeeMore
        onClick={() => {
          navigate("/next_reach_academy");
          window.scrollTo(0, 0);
        }}
      >
        SEE MORE
        <ChevronRightIcon fontSize="large" />
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
        >
          {nextReachAcademyData &&
            nextReachAcademyData.length > 0 &&
            nextReachAcademyData.map((academy) => {
              return (
                <S.Container1 key={`academy_${academy?.title}`}>
                  <S.ImageContainer>
                    <iframe
                      width="408px"
                      height="252px"
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
      {/* Video Modal */}
      {/* {isModalOpen && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 1000,
            width: "80%",
            height: "80%",
          }}
        >
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                fontSize: "30px",
                color: "white",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              &times;
            </button>
            <iframe
              src={videoUrl}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{ width: "100%", height: "100%" }}
            ></iframe>
          </div>
        </div>
      )} */}
    </S.Container>
  );
};

export default NextReachAcademy;
