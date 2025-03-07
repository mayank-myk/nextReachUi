import React, { useEffect, useState } from "react";
import Header from "../../common/Header/Header.tsx";
import Footer from "../../common/Footer/Footer.tsx";
import blog_img from "../../../assets/Blog_img.jpeg";
import * as S from "./Blogs.style";
import { useNavigate } from "react-router-dom";
import Whatsapp from "../../common/Whatsapp/Whatsapp.tsx";
import PromotionalPopup from "../../common/PromotionalPopup/PromotionalPopup.tsx";

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
      <Header bgColor="#FFF9F9" />
      <S.Container>
        <img src={blog_img} alt="Blogs" width={"100%"} height="336px" />
      </S.Container>
      <S.BlogsContainer>
        {/* <S.TopCategoryTitle>Top categories</S.TopCategoryTitle>
        <S.CategoryContainer>
          {new Array(5).fill(0).map((el, ind) => {
            return <S.Category active={ind === 2}>Clothing</S.Category>;
          })}
        </S.CategoryContainer> */}
        <S.BlogsList>
          {Object.entries(blogsData).map(([key, val]) => {
            return (
              <div key={`blog_${key}`} style={{ margin: "1rem 0" }}>
                <S.Heading>{key}</S.Heading>
                <S.BlogContainer>
                  {val &&
                    val.length > 0 &&
                    val.map((blog) => {
                      return (
                        <S.Container1 key={`blog_${blog?.title}`}>
                          <S.ImageContainer>
                            <img
                              src={blog.blog_image}
                              alt={blog?.title}
                              width="408px"
                              height="252px"
                              style={{ borderRadius: "12px" }}
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
                          </S.ContinueReading>{" "}
                        </S.Container1>
                      );
                    })}
                </S.BlogContainer>
              </div>
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

export default Blogs;
