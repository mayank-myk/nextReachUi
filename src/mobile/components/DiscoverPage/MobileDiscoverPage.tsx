import React, { useRef, useState } from "react";
import Header from "../../common/Header/Header.tsx";
import CategoryView from "./components/CategoryView/CategoryView.tsx";
import CityView from "./components/CityView/CityView.tsx";
import FollowersView from "./components/FollowersView/FollowersView.tsx";
import BugetView from "./components/BugetView/BugetView.tsx";
import PlatformView from "./components/PlatformView/PlatformView.tsx";
import DiscoverPageHeaderView from "./components/DiscoverPageHeaderView/DiscoverPageHeaderView.tsx";
import Footer from "../../common/Footer/Footer.tsx";
import Navbar from "../../common/Navbar/Navbar.tsx";
import * as S from "./MobileDiscoverPage.style.js";
import Whatsapp from "../../common/Whatsapp/Whatsapp.tsx";
import PromotionalPopup from "../../../desktop/common/PromotionalPopup/PromotionalPopup.tsx";

function MobileDiscoverPage() {
  const [activeCategory, setActiveCategory] = useState("Category");

  const categoryRef = useRef(null);
  const cityRef = useRef(null);
  const followersRef = useRef(null);
  const platformRef = useRef(null);
  const budgetRef = useRef(null);

  return (
    <>
      <Header />
      <DiscoverPageHeaderView />
      <S.ButtonContainer>
        <S.Button
          active={activeCategory === "Category"}
          onClick={() => {
            setActiveCategory("Category");
            categoryRef.current?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <S.Text active={activeCategory === "Category"}>Niche</S.Text>
        </S.Button>
        <S.Button
          active={activeCategory === "Budget"}
          onClick={() => {
            setActiveCategory("Budget");
            budgetRef.current?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <S.Text active={activeCategory === "Budget"}>Budget</S.Text>
        </S.Button>

        <S.Button
          active={activeCategory === "City"}
          onClick={() => {
            setActiveCategory("City");
            cityRef.current?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <S.Text active={activeCategory === "City"}>City</S.Text>
        </S.Button>
        <S.Button
          active={activeCategory === "Followers"}
          onClick={() => {
            setActiveCategory("Followers");
            followersRef.current?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <S.Text active={activeCategory === "Followers"}>
            Follower count
          </S.Text>
        </S.Button>
        <S.Button
          active={activeCategory === "Platform"}
          onClick={() => {
            setActiveCategory("Platform");
            platformRef.current?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <S.Text active={activeCategory === "Platform"}>Platform</S.Text>
        </S.Button>
      </S.ButtonContainer>
      <CategoryView categoryRef={categoryRef} />
      <BugetView budgetRef={budgetRef} />
      <CityView cityRef={cityRef} />
      <FollowersView followersRef={followersRef} />
      <PlatformView platformRef={platformRef} />
      <PromotionalPopup />
      <Footer />
      <Whatsapp />
      <Navbar />
    </>
  );
}

export default MobileDiscoverPage;
