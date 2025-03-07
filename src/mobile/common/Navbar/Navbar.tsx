import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import home_icon from "../../../assets/Navbar/icons/home_icon_4.png";
import categories_icon from "../../../assets/Navbar/icons/categories_icon_4.png";
import explore_icon from "../../../assets/Navbar/icons/explore_icon_4.png";
import campaigns_icon from "../../../assets/Navbar/icons/campaigns_icon_4_.png";
import user_icon from "../../../assets/Navbar/icons/user_icon_4.png";
import { getIsFilterOpen } from "../../../redux/selectors/influencerListingSelector";
import * as S from "./Navbar.style";
import { useSelector } from "react-redux";

function Navbar() {
  const location = useLocation();
  const isFilterOpen = useSelector(getIsFilterOpen);
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState("");

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveNav("Home");
    } else if (location.pathname === "/discover") {
      setActiveNav("Categories");
    } else if (location.pathname === "/top_rated_influencers") {
      setActiveNav("Explore");
    } else if (location.pathname === "/your_campaigns") {
      setActiveNav("Campaigns");
    } else if (location.pathname === "/profile_details") {
      setActiveNav("Profile");
    }
  }, [location.pathname]);
  return (
    <>
      {isFilterOpen ? null : (
        <S.NavbarContainer>
          <S.NavbarItem
            onClick={() => {
              navigate("/");
              window.scrollTo(0, 0);
            }}
            style={{
              borderTop: activeNav === "Home" ? "3px solid #E66A44" : null,
              paddingTop: "5px",
            }}
          >
            <img src={home_icon} alt="Home" width="24px" height="24px" />
            Home
          </S.NavbarItem>
          <S.NavbarItem
            onClick={() => {
              navigate("/discover");
              window.scrollTo(0, 0);
            }}
            style={{
              borderTop:
                activeNav === "Categories" ? "3px solid #E66A44" : null,
              paddingTop: "5px",
            }}
          >
            <img
              src={categories_icon}
              alt="Categories"
              width="24px"
              height="24px"
            />
            Categories
          </S.NavbarItem>
          <S.NavbarItem
            onClick={() => {
              navigate("/top_rated_influencers");
              window.scrollTo(0, 0);
            }}
            style={{
              borderTop: activeNav === "Explore" ? "3px solid #E66A44" : null,
              paddingTop: "5px",
            }}
          >
            <img src={explore_icon} alt="Exlore" width="24px" height="24px" />
            Explore
          </S.NavbarItem>
          <S.NavbarItem
            onClick={() => {
              navigate("/your_campaigns");
              window.scrollTo(0, 0);
            }}
            style={{
              borderTop: activeNav === "Campaigns" ? "3px solid #E66A44" : null,
              paddingTop: "5px",
            }}
          >
            <img
              src={campaigns_icon}
              alt="Campaigns"
              width="24px"
              height="24px"
            />
            Campaigns
          </S.NavbarItem>
          <S.NavbarItem
            onClick={() => {
              navigate("/profile_details");
              window.scrollTo(0, 0);
            }}
            style={{
              borderTop: activeNav === "Profile" ? "3px solid #E66A44" : null,
              paddingTop: "5px",
            }}
          >
            <img src={user_icon} alt="User" width="24px" height="24px" />{" "}
            Profile
          </S.NavbarItem>
        </S.NavbarContainer>
      )}
    </>
  );
}

export default Navbar;
