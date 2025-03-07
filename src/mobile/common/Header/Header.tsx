import React from "react";
import { useNavigate } from "react-router-dom";
import arrow_forward from "../../../assets/icons/arrow_forward.svg";
import close_icon from "../../../assets/icons/close_icon.svg";
import call_now_icon from "../../../assets/icons/call_now_icon.svg";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import logo from "../../../assets/next_reach_ai_logo_orange.svg";
import MenuIcon from "@mui/icons-material/Menu";
import * as S from "./Header.style";

function Header({ bgColor = "" }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isResourcesOptionVisible, setIsResourcesOptionVisible] =
    React.useState(false);

  const handleMenuToggle = () => setIsOpen(!isOpen);

  const handleResourcesToggle = () => {
    setIsResourcesOptionVisible(!isResourcesOptionVisible);
  };

  return (
    <S.Container bgColor={bgColor}>
      <img
        src={logo}
        alt="NextReach.ai"
        width={"22px"}
        height={"18px"}
        onClick={() => {
          navigate("/");
          window.scrollTo(0, 0);
        }}
        style={{
          margin: 0,
        }}
      />
      <MenuIcon onClick={handleMenuToggle} />
      <S.OverlayMenu isOpen={isOpen}>
        <S.OverlayHeader>
          <img src={logo} alt="NextReach.ai" width={"22px"} height={"18px"} />
          <img
            src={close_icon}
            alt="Close icon"
            width={"20px"}
            height={"20px"}
            onClick={handleMenuToggle}
          />
        </S.OverlayHeader>
        {/* Categories, Top rated influencers, My Campaigns, My Profile, For
        Influencers, Earning Calculator, Engagement Rate Calculator, Resources" */}

        <S.MenuItems>
          <S.MenuItem
            onClick={() => {
              handleMenuToggle();
              navigate("/discover");
              window.scrollTo(0, 0);
            }}
          >
            Categories
            <img
              src={arrow_forward}
              alt="Arrow forward"
              width="16px"
              height="13px"
            />
          </S.MenuItem>
          <S.MenuItem
            onClick={() => {
              handleMenuToggle();
              navigate("/for_influencers");
              window.scrollTo(0, 0);
            }}
          >
            For Influencers
            <img
              src={arrow_forward}
              alt="Arrow forward"
              width="16px"
              height="13px"
            />
          </S.MenuItem>
          <S.MenuItem
            onClick={() => {
              handleMenuToggle();
              navigate("/", { state: { scrollTo: "target" } });
            }}
          >
            Earning calculator
            <img
              src={arrow_forward}
              alt="Arrow forward"
              width="16px"
              height="13px"
            />
          </S.MenuItem>
          <S.MenuItem
            onClick={() => {
              handleMenuToggle();
              navigate("/", { state: { scrollTo: "target" } });
            }}
          >
            Engagement Rate Calculator
            <img
              src={arrow_forward}
              alt="Arrow forward"
              width="16px"
              height="13px"
            />
          </S.MenuItem>

          <S.MenuItem onClick={handleResourcesToggle}>
            Resources
            {isResourcesOptionVisible ? (
              <KeyboardArrowUpIcon
                fontSize="large"
                style={{
                  color: "#9F9F9F",
                }}
              />
            ) : (
              <KeyboardArrowDownIcon
                fontSize="large"
                style={{
                  color: "#9F9F9F",
                }}
              />
            )}
          </S.MenuItem>
          {isResourcesOptionVisible ? (
            <S.MenuOptions>
              {/* <S.MenuOption onClick={() => navigate("/about_us")}>
                  About Us
                </S.MenuOption> */}
              {/* <S.MenuOption onClick={() => navigate("/success_stories")}>
                  Success Stories
                </S.MenuOption> */}
              <S.MenuOption
                onClick={() => {
                  handleMenuToggle();
                  navigate("/next_reach_academy");
                  window.scrollTo(0, 0);
                }}
              >
                Next Reach Academy
              </S.MenuOption>
              <S.MenuOption
                onClick={() => {
                  handleMenuToggle();
                  navigate("/blogs");
                  window.scrollTo(0, 0);
                }}
              >
                Blogs
              </S.MenuOption>
              {/* <S.MenuOption onClick={() => navigate("/pricing")}>
                  Pricing
                </S.MenuOption> */}
              <S.MenuOption
                onClick={() => {
                  handleMenuToggle();
                  navigate("/terms_and_conditions");
                  window.scrollTo(0, 0);
                }}
              >
                Terms and Conditions
              </S.MenuOption>
              <S.MenuOption
                onClick={() => {
                  handleMenuToggle();
                  navigate("/privacy_policy");
                  window.scrollTo(0, 0);
                }}
              >
                Privacy Policy
              </S.MenuOption>
            </S.MenuOptions>
          ) : null}
          <S.ButtonContainer>
            <S.ContactUsBtn
              onClick={() => {
                handleMenuToggle();
                navigate("/contact_us");
                window.scrollTo(0, 0);
              }}
            >
              Contact Us
            </S.ContactUsBtn>
            <a href="tel:+918105120349" style={{ textDecoration: "none" }}>
              <S.CallNowBtn>
                <img
                  src={call_now_icon}
                  alt="Call now"
                  width="16px"
                  height="16px"
                />
                Call now
              </S.CallNowBtn>
            </a>
          </S.ButtonContainer>
        </S.MenuItems>
      </S.OverlayMenu>
    </S.Container>
  );
}

export default Header;
