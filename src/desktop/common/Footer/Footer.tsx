import React from "react";
import { useNavigate } from "react-router-dom";
import nextreach_footer_icon from "../../../assets/Footer/icons/nextreach_footer_logo.svg";
import phone_number_icon from "../../../assets/Footer/icons/phone_footer_logo.svg";
import email_icon from "../../../assets/Footer/icons/email_icon.svg";
import location_icon from "../../../assets/Footer/icons/location_icon.svg";
import instagram_icon from "../../../assets/Footer/icons/instagram_2.png";
import facebook_icon from "../../../assets/Footer/icons/facebook_2.png";
import youtube_icon from "../../../assets/Footer/icons/youtube_2.png";
import linkedin_iocn from "../../../assets/Footer/icons/linkedin_2.png";
import twitter_icon from "../../../assets/Footer/icons/twitter_2.png";
import * as S from "./Footer.style";

function Footer({ influencerPricingRef, influencerEngagementRateRef }) {
  const navigate = useNavigate();

  const handleEarningCalculator = () => {
    // Scroll to the target section with smooth scrolling
    // if (influencerPricingRef && influencerPricingRef.current) {
    //   influencerPricingRef.current.scrollIntoView({
    //     behavior: "smooth", // Smooth scrolling effect
    //     block: "start", // Align the target element to the start of the viewport
    //   });
    // }
    navigate("/", { state: { scrollTo: "target" } });
  };

  const handleEngagementRateCalculator = () => {
    if (influencerEngagementRateRef && influencerEngagementRateRef.current) {
      influencerEngagementRateRef.current.scrollIntoView({
        behavior: "smooth", // Smooth scrolling effect
        block: "start", // Align the target element to the start of the viewport
      });
    }
  };

  return (
    <S.Container>
      <S.LeftPart>
        <S.Column>
          <>
            <img
              src={nextreach_footer_icon}
              alt="Next reach icon"
              style={{ width: "134px", height: "134px" }}
              onClick={() => {
                navigate("/");
                window.scrollTo(0, 0);
              }}
            />
            <S.Content>
              NextReach Ai Pvt Ltd is an influencer marketing platform
              connecting businesses with Influencers on a pay-per-view basis.
            </S.Content>
            <S.Heading>Follow us on</S.Heading>
            <S.SocialMediaContainer>
              <S.IconContainer
                onClick={() =>
                  window.open("https://www.instagram.com/nextreach.ai/")
                }
              >
                <img
                  src={instagram_icon}
                  alt="Instagram"
                  width={"24px"}
                  height={"24px"}
                />
              </S.IconContainer>
              <S.IconContainer
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/profile.php?id=61569235833230"
                  )
                }
              >
                <img
                  src={facebook_icon}
                  alt="Facebook"
                  width={"24px"}
                  height={"24px"}
                />
              </S.IconContainer>
              <S.IconContainer
                onClick={() =>
                  window.open(" https://www.linkedin.com/company/nextreachai/")
                }
              >
                <img
                  src={linkedin_iocn}
                  alt="Linkedin"
                  width={"24px"}
                  height={"24px"}
                />
              </S.IconContainer>
              <S.IconContainer
                onClick={() => window.open("https://x.com/nextreachai")}
              >
                <img
                  src={twitter_icon}
                  alt="Twitter"
                  width={"24px"}
                  height={"24px"}
                />
              </S.IconContainer>
              <S.IconContainer
                onClick={() =>
                  window.open("https://www.youtube.com/@nextreachai")
                }
              >
                <img
                  src={youtube_icon}
                  alt="Youtube"
                  width={"24px"}
                  height={"24px"}
                />
              </S.IconContainer>
            </S.SocialMediaContainer>
          </>
        </S.Column>
      </S.LeftPart>
      <S.RightPart>
        <S.Column>
          <S.Title>Company</S.Title>
          <S.LinksContainer>
            <S.Link
              onClick={() => {
                navigate("/for_influencers");
                window.scrollTo(0, 0);
              }}
            >
              For influencer
            </S.Link>
            <S.Link
              onClick={() => {
                navigate("/discover");
                window.scrollTo(0, 0);
              }}
            >
              Categories
            </S.Link>
            <S.Link
              onClick={() => {
                navigate("/top_rated_influencers");
                window.scrollTo(0, 0);
              }}
            >
              Top rated influencer
            </S.Link>
            <S.Link
              onClick={() => {
                navigate("/contact_us");
                window.scrollTo(0, 0);
              }}
            >
              Contact us
            </S.Link>
          </S.LinksContainer>
        </S.Column>

        <S.Column>
          <S.Title>AI Tools</S.Title>
          <S.LinksContainer>
            <S.Link onClick={handleEarningCalculator}>
              Earnings calculator
            </S.Link>
            <S.Link onClick={handleEngagementRateCalculator}>
              Engagement rate calculator
            </S.Link>
          </S.LinksContainer>
        </S.Column>

        <S.Column>
          <S.Title>Resource</S.Title>
          <S.LinksContainer>
            <S.Link
              onClick={() => {
                navigate("/blogs");
                window.scrollTo(0, 0);
              }}
            >
              Blogs
            </S.Link>
            {/* <S.Link
              onClick={() => {
                navigate("/success_stories");
                window.scrollTo(0, 0);
              }}
            >
              Success stories
            </S.Link> */}
            <S.Link
              onClick={() => {
                navigate("/next_reach_academy");
                window.scrollTo(0, 0);
              }}
            >
              Next reach academy
            </S.Link>
            {/* <S.Link>Pricing</S.Link> */}
            <S.Link
              onClick={() => {
                navigate("/terms_and_conditions");
                window.scrollTo(0, 0);
              }}
            >
              Terms & Conditions
            </S.Link>
            <S.Link
              onClick={() => {
                navigate("/privacy_policy");
                window.scrollTo(0, 0);
              }}
            >
              Privacy Policy
            </S.Link>
          </S.LinksContainer>
        </S.Column>

        <S.ContactUsColumn>
          <S.ContactUsTitle>Contact Us</S.ContactUsTitle>
          <S.ContactUsInfo>
            <S.TitleWithIcon>
              <img
                src={phone_number_icon}
                alt="Phone number"
                width="22px"
                height="22px"
              />
              +91 8105120349
            </S.TitleWithIcon>

            <S.TitleWithIcon>
              <img src={email_icon} alt="email" width="22px" height="22px" />
              hello@nextreach.ai
            </S.TitleWithIcon>

            <S.TitleWithIcon>
              <img
                src={location_icon}
                alt="location"
                width="22px"
                height="22px"
              />
              <S.OfficeLocationContainer>
                <div>1/13, 9th E cross, SBI Colony,</div>
                <div>JP Nagar 1st phase - 560078,</div>
                <div>Bengaluru, India</div>
              </S.OfficeLocationContainer>
            </S.TitleWithIcon>
          </S.ContactUsInfo>
        </S.ContactUsColumn>
      </S.RightPart>
    </S.Container>
  );
}

export default Footer;
