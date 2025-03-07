import React, { useEffect, useState } from "react";
import Header from "../../../common/Header/Header.tsx";
import Footer from "../../../common/Footer/Footer.tsx";
import { useParams } from "react-router-dom";
import Navbar from "../../../common/Navbar/Navbar.tsx";
import Whatsapp from "../../../common/Whatsapp/Whatsapp.tsx";
import PromotionalPopup from "../../../../desktop/common/PromotionalPopup/PromotionalPopup.tsx";

const Blog = () => {
  const { url } = useParams();
  const [blogData, setBlogsData] = useState(null);

  useEffect(() => {
    fetch(
      `https://nextreach-backend-fxdmcnbgf3gsesht.southindia-01.azurewebsites.net/v1/web/get/blog/${url}`,
      {
        method: "GET",
        headers: {
          accept: "text/html",
        },
      }
    )
      .then((response) => {
        return response.text();
      })
      .then((response) => {
        setBlogsData(response);
      });
  }, [url]);

  return (
    <>
      <Header />
      <div
        dangerouslySetInnerHTML={{ __html: blogData }}
        style={{ width: "100%" }}
      />
      <PromotionalPopup />
      <Footer />
      <Whatsapp />
      <Navbar />
    </>
  );
};

export default Blog;
