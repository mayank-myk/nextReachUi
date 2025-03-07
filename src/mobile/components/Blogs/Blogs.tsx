import React, { useEffect, useState } from "react";
import Header from "../../common/Header/Header.tsx";
import Footer from "../../common/Footer/Footer.tsx";
import Carousel from "react-multi-carousel";
import blog_img from "../../../assets/Blog_img.png";
// import influencer_photo from "../../../assets/Influencer_photo.png";
import * as S from "./Blogs.style";
import { useNavigate } from "react-router-dom";
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

const Blogs = () => {
  const navigate = useNavigate();
  const [blogsData, setBlogsData] = useState({});

  useEffect(() => {
    fetch(
      "https://nextreach-backend-fxdmcnbgf3gsesht.southindia-01.azurewebsites.net/v1/web/get/all/blog",
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
        setBlogsData(response);
      });
  }, []);

  const handleBlog = (blog) => {
    navigate(`/blog/${blog.url}`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Header bgColor="#FFF7F3" />
      <S.Container>
        <img src={blog_img} alt="Blogs" width={"80%"} height="160px" />
      </S.Container>
      <S.BlogsContainer>
        {/* <S.TopCategoryTitle>Top categories</S.TopCategoryTitle>
        <S.CategoryContainer>
          {new Array(5).fill(0).map((el) => {
            return <S.Category>Clothing</S.Category>;
          })}
        </S.CategoryContainer> */}
        <S.BlogsList>
          {Object.entries(blogsData).map(([key, val]) => {
            return (
              <S.CategoryView key={`category_${key}`}>
                <S.CategoryTitle>{key}</S.CategoryTitle>
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
                    val.map((blog) => {
                      return (
                        <S.Container1>
                          <S.ImageContainer>
                            <img
                              src={blog?.blog_image}
                              alt={blog?.title}
                              style={{ borderRadius: "12px" }}
                              width="278px"
                              height="157px"
                            />
                          </S.ImageContainer>

                          <S.SuccessStoryTitle>
                            {blog.title}
                          </S.SuccessStoryTitle>
                          <S.SuccessStorySubtitle>
                            {blog.author}{" "}
                            <div
                              style={{
                                backgroundColor: "#9F9F9F",
                                borderRadius: "50%",
                                width: "6px",
                                height: "6px",
                              }}
                            ></div>
                            {blog.created_at}
                          </S.SuccessStorySubtitle>

                          <S.ContinueReading
                            onClick={(event) => handleBlog(blog)}
                          >
                            Continue Reading
                          </S.ContinueReading>
                        </S.Container1>
                      );
                    })}
                </Carousel>
              </S.CategoryView>
            );
          })}
        </S.BlogsList>
      </S.BlogsContainer>
      <PromotionalPopup />
      <Footer />
      <Whatsapp />
      <Navbar />
    </>
  );
};

export default Blogs;
