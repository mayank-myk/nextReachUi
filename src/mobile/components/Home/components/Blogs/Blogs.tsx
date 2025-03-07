import React, { useEffect, useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import * as S from "./Blogs.style";
// import influencer_photo from "../../../../../assets/Influencer_photo.png";
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
    items: 3,
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

const Blogs = () => {
  const navigate = useNavigate();
  const [blogsData, setBlogsData] = useState([]);

  const homeMetaData = useSelector(getHomeMetaData);

  useEffect(() => {
    if (!homeMetaData) return;
    setBlogsData(homeMetaData.blog_list);
  }, [homeMetaData]);

  const handleExplore = () => {
    navigate("/blogs");
    window.scrollTo(0, 0);
  };

  const handleBlog = (blog) => {
    navigate(`/blog/${blog.url}`);
    window.scrollTo(0, 0);
  };

  return (
    <S.Container>
      <S.Title>BLOG</S.Title>
      <S.Subtitle>
        Learn more about Influencer marketing and the revolution which
        pay-per-view brings in this domain.
      </S.Subtitle>
      <S.SeeMore onClick={handleExplore}>
        SEE MORE
        <ChevronRightIcon fontSize="medium" />
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
          partialVisbile={true}
        >
          {blogsData &&
            blogsData.length > 0 &&
            blogsData.map((blog) => {
              return (
                <S.Container1 key={`blog_${blog?.title}`}>
                  <S.ImageContainer>
                    <img
                      src={blog?.blog_image}
                      alt={blog?.title}
                      style={{ borderRadius: "12px" }}
                      width="268px"
                      height="157px"
                    />
                  </S.ImageContainer>

                  <S.SuccessStoryTitle>{blog?.title}</S.SuccessStoryTitle>
                  <S.SuccessStorySubtitle>
                    {blog?.author}{" "}
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        backgroundColor: "#9F9F9F",
                        borderRadius: "50%",
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
