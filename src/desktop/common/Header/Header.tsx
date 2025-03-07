import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import logo from "../../../assets/next_reach_ai_logo_orange.svg";
import user_icon from "../../../assets/icons/user_icon_4.png";
import * as S from "./Header.style";

function Header({ bgColor = "", influencerPricingRef }) {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleProfileClick = () => {
    navigate("/profile_details");
    window.scrollTo(0, 0);
  };

  const handleEarningCalculator = () => {
    // Scroll to the target section with smooth scrolling
    navigate("/", { state: { scrollTo: "target" } });
    // if (influencerPricingRef && influencerPricingRef.current) {
    //   influencerPricingRef.current.scrollIntoView({
    //     behavior: "smooth", // Smooth scrolling effect
    //     block: "start", // Align the target element to the start of the viewport
    //   });
    // }
  };

  return (
    <S.Container bgColor={bgColor}>
      <S.Left>
        <img
          src={logo}
          alt="NextReach.ai"
          width={"38px"}
          height={"38px"}
          onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
          style={{
            cursor: "pointer",
          }}
        />
      </S.Left>
      <S.Middle>
        <Link to="/" style={{ textDecoration: "none", color: "#333" }}>
          Home
        </Link>
        <Link to="/discover" style={{ textDecoration: "none", color: "#333" }}>
          Categories
        </Link>
        <Link
          to="/top_rated_influencers"
          style={{ textDecoration: "none", color: "#333" }}
        >
          Explore
        </Link>
        <Link
          to="/your_campaigns"
          style={{ textDecoration: "none", color: "#333" }}
        >
          My campaigns
        </Link>
        <Link
          to="/for_influencers"
          style={{ textDecoration: "none", color: "#333" }}
        >
          For Influencers
        </Link>
        <div
          onClick={handleEarningCalculator}
          style={{ textDecoration: "none", color: "#333", cursor: "pointer" }}
        >
          Earnings calculator
        </div>
        <>
          <div
            onClick={toggleDropdown}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            Resources
            {isDropdownOpen ? (
              <KeyboardArrowUpIcon
                fontSize="large"
                style={{ left: "-2%", position: "relative" }}
                // onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}
              />
            ) : (
              <KeyboardArrowDownIcon
                fontSize="large"
                style={{ left: "-2%", position: "relative" }}
                // onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}
              />
            )}
          </div>

          <S.DropdownMenu isOpen={isDropdownOpen}>
            {/* <S.DropdownItem onClick={() => navigate("/about_us")}>
              About Us
            </S.DropdownItem> */}
            {/* <S.DropdownItem onClick={() => navigate("/success_stories")}>
              Success Stories
            </S.DropdownItem> */}
            <S.DropdownItem
              onClick={() => {
                navigate("/next_reach_academy");
                window.scrollTo(0, 0);
              }}
            >
              Next Reach Academy
            </S.DropdownItem>
            <S.DropdownItem
              onClick={() => {
                navigate("/blogs");
                window.scrollTo(0, 0);
              }}
            >
              Blogs
            </S.DropdownItem>
            {/* <S.DropdownItem onClick={() => navigate("/pricing")}>
              Pricing
            </S.DropdownItem> */}
            <S.DropdownItem
              onClick={() => {
                navigate("/terms_and_conditions");
                window.scrollTo(0, 0);
              }}
            >
              Terms and Conditions
            </S.DropdownItem>
            <S.DropdownItem
              onClick={() => {
                navigate("/privacy_policy");
                window.scrollTo(0, 0);
              }}
            >
              Privacy Policy
            </S.DropdownItem>
          </S.DropdownMenu>
        </>
        <Link
          to="/contact_us"
          style={{ textDecoration: "none", color: "#333" }}
        >
          <S.ContactUs>Contact us</S.ContactUs>
        </Link>
      </S.Middle>
      <S.Right>
        <img
          src={user_icon}
          alt="User icon"
          onClick={handleProfileClick}
          width={"24px"}
          height="24px"
        />
      </S.Right>
    </S.Container>
  );
}

export default Header;
