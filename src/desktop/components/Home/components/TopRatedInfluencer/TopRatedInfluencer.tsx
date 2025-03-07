import React, { useEffect, useState } from "react";
import * as S from "./TopRatedInfluencer.style";
// import Influencer_photo from "../../../../../assets/Influencer_photo.png";
import InfluencerCard from "../../../InfluencerListing/components/InflucenerCard/InfluencerCard.tsx";
import arrow_forward_icon from "../../../../../assets/icons/arrow_forward_icon.svg";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import { useSelector } from "react-redux";
import { getHomeMetaData } from "../../../../../redux/selectors/homeSelector.js";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1363 },
    items: 5,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1363, min: 1050 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 1050, min: 300 },
    items: 1,
    // partialVisibilityGutter: 70,
  },
  smallMobile: {
    breakpoint: { max: 300, min: 0 },
    items: 1,
    // partialVisibilityGutter: 70,
  },
};

const TopRatedInfluencer = () => {
  const navigate = useNavigate();
  const [influencerData, setInfluencerData] = useState({
    firstRow: [],
    secondRow: [],
  });
  const homeMetaData = useSelector(getHomeMetaData);

  useEffect(() => {
    if (!homeMetaData) return;
    setInfluencerData({
      firstRow: homeMetaData.influencer_list.slice(0, 5),
      secondRow: homeMetaData.influencer_list.slice(6),
    });
  }, [homeMetaData]);

  const handleExplore = () => {
    navigate("/top_rated_influencers");
    window.scrollTo(0, 0);
  };

  return (
    <S.Container>
      <S.TitleContainer>
        <S.LeftTitle>TOP RATED INFLUENCERS</S.LeftTitle>
        <S.LeftSubTitle>
          Meet top performing influencers! Ranked by our AI based on engagement,
          pricing, past collabs & reviews.
        </S.LeftSubTitle>
        <S.SeeMore onClick={handleExplore}>
          SEE MORE
          <img
            src={arrow_forward_icon}
            alt="arrow forward"
            width="22px"
            height="14px"
          />
        </S.SeeMore>
      </S.TitleContainer>
      <div
        style={{
          padding: "1rem 0rem 3rem 5rem",
        }}
      >
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={true}
          arrows={false}
          infinite={true}
          partialVisible={false}
        >
          {influencerData &&
            influencerData["firstRow"].length > 0 &&
            influencerData["firstRow"].map((el, ind) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "32px",
                  }}
                  key={`influencer_${ind}`}
                >
                  <InfluencerCard
                    influencer={influencerData["firstRow"][ind]}
                    redirectFrom="/"
                  />
                  <InfluencerCard
                    influencer={influencerData["secondRow"][ind]}
                    redirectFrom="/"
                  />
                </div>
              );
            })}
        </Carousel>
      </div>
    </S.Container>
  );
};

export default TopRatedInfluencer;
