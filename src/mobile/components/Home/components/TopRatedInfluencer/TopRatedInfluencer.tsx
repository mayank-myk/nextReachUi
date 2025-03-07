import React, { useEffect, useState } from "react";
import * as S from "./TopRatedInfluencer.style";
import arrow_forward_icon from "../../../../../assets/icons/arrow_forward_icon.svg";
import InfluencerCard from "../../../InfluencerListing/components/InflucenerCard/InfluencerCard.tsx";
// import Influencer_photo from "../../../../../assets/Influencer_photo.png";
import Carousel from "react-multi-carousel";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getHomeMetaData } from "../../../../../redux/selectors/homeSelector.js";
// import InfluencerCard from "./components/InflucenerCard/InfluencerCard.tsx";

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
    items: 2,
  },
  smallMobile: {
    breakpoint: { max: 300, min: 0 },
    items: 2,
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
      <S.Left>
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
      </S.Left>
      <S.Right>
        <div
          style={{
            padding: "0rem 0rem 1rem 1rem",
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
                      gap: "18px",
                    }}
                    key={`influencer_${ind}`}
                  >
                    <InfluencerCard
                      redirectFrom="/"
                      influencer={influencerData["firstRow"][ind]}
                    />
                    <InfluencerCard
                      redirectFrom="/"
                      influencer={influencerData["secondRow"][ind]}
                    />
                  </div>
                );
              })}
          </Carousel>
        </div>
      </S.Right>
    </S.Container>
  );
};

export default TopRatedInfluencer;
