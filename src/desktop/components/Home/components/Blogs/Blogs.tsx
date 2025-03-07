import React, { useEffect, useState } from "react";
import * as S from "./Blogs.style";
// import influencer_photo from "../../../../../assets/Influencer_photo.png";
import arrow_forward_icon from "../../../../../assets/icons/arrow_forward_icon.svg";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
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

const Blogs = () => {
  const navigate = useNavigate();
  const [blogsData, setBlogsData] = useState([]);
  const homeMetaData = useSelector(getHomeMetaData);

  useEffect(() => {
    if (!homeMetaData) return;
    setBlogsData(homeMetaData.blog_list);
  }, [homeMetaData]);

  const handleBlog = (blog) => {
    navigate(`/blog/${blog.url}`);
    window.scrollTo(0, 0);
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>BLOG</S.Title>
        <S.SubtitleContainer>
          <div style={{ width: "50%" }}>
            Learn more about Influencer marketing and the revolution which
            pay-per-view brings in this domain.
          </div>
        </S.SubtitleContainer>
      </S.Header>
      <S.SeeMore
        onClick={() => {
          navigate("/blogs");
          window.scrollTo(0, 0);
        }}
      >
        SEE MORE{" "}
        <img
          src={arrow_forward_icon}
          alt="arrow forward"
          width="22px"
          height="14px"
        />
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
          {blogsData &&
            blogsData.length > 0 &&
            blogsData.map((blog) => {
              return (
                <S.Container1 key={`blog_blog?.title`}>
                  <S.ImageContainer>
                    <img
                      src={blog?.blog_image}
                      alt={blog?.title}
                      width="408px"
                      height="252px"
                      style={{ borderRadius: "12px" }}
                    />
                  </S.ImageContainer>

                  <S.SuccessStoryTitle>{blog?.title}</S.SuccessStoryTitle>
                  <S.SuccessStorySubtitle>
                    {blog?.author}{" "}
                    <div
                      style={{
                        backgroundColor: "#9F9F9F",
                        borderRadius: "50%",
                        width: "6px",
                        height: "6px",
                      }}
                    ></div>
                    {blog?.created_at}
                  </S.SuccessStorySubtitle>

                  <S.ContinueReading onClick={(event) => handleBlog(blog)}>
                    Continue Reading
                  </S.ContinueReading>
                </S.Container1>
              );
            })}
        </Carousel>
      </S.Wrapper>
    </S.Container>
  );
};

export default Blogs;
