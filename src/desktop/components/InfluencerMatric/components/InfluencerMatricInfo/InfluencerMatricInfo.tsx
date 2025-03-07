import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
  LabelList,
} from "recharts";
import { PieChart, Pie, ResponsiveContainer } from "recharts";
import category_icon from "../../../../../assets/icons/list_icon.svg";
import location_icon from "../../../../../assets/icons/location_icon.svg";
import content_charge_icon from "../../../../../assets/icons/content_charge_icon.svg";
import view_icon from "../../../../../assets/icons/view_icon.svg";
import instagram_icon from "../../../../../assets/icons/instagram_icon.png";
import facebook_icon from "../../../../../assets/icons/facebook_icon.png";
import youtube_icon from "../../../../../assets/icons/youtube_icon.png";
import reach_matric_icon from "../../../../../assets/InfluencerMatric/icons/reach_matric.svg";
import price_collab_icon from "../../../../../assets/InfluencerMatric/icons/price_collab.png";
import arrow_down_icon from "../../../../../assets/InfluencerMatric/icons/arrow_down.svg";
import arrow_up_icon from "../../../../../assets/InfluencerMatric/icons/arrow_up.svg";
import follwers_count from "../../../../../assets/InfluencerMatric/icons/followers_count.svg";
import info_icon from "../../../../../assets/InfluencerMatric/icons/info_icon.png";
import avg_shares from "../../../../../assets/InfluencerMatric/icons/avg_shares.svg";
import comment_icon from "../../../../../assets/InfluencerMatric/icons/comment_icon.svg";
import like_icon from "../../../../../assets/InfluencerMatric/icons/like_icon.svg";
// import views_icon from "../../../../../assets/InfluencerMatric/icons/view_icon.svg";
import graph_icon from "../../../../../assets/InfluencerMatric/icons/graph_icon.svg";
import flag_icon from "../../../../../assets/InfluencerMatric/icons/flag_icon.png";
import { Niche, City } from "../../../../constants/constants";
import * as S from "./InfluencerMatricInfo.style";
import { useDispatch, useSelector } from "react-redux";
import {
  getCollabOption,
  getInfluencerMatricInfo,
} from "../../../../../redux/selectors/influencerMatricSelector";
import ToolTip from "../../../../common/ToolTip/ToolTip.tsx";
import { userIdSelector } from "../../../../../redux/selectors/profileDetailsSelector.js";
import ModalPopup from "../../../../common/ModalPopup/ModalPopup.tsx";
import {
  resetCollabOption,
  setInfluencerMatric,
} from "../../../../../redux/actions/influencerMatricActions.js";
import InfluencerMatricOverviewDetails from "../InfluencerMatricOverviewDetails/InfluencerMatricOverviewDetails.tsx";
// import Slider from "@mui/material/Slider";
import Loader from "../../../../common/Loader/Loader.tsx";

const InfluencerMatricInfo = () => {
  const dispatch = useDispatch();
  const influencerMatric = useSelector(getInfluencerMatricInfo) || {};
  const selectedCollabOption = useSelector(getCollabOption) || "";

  const userId = useSelector(userIdSelector);
  const [showAIScore, setShowAIScore] = useState(false);
  const [activePlatform, setActivePlatform] = useState("Instagram");
  const [activePlatformDetails, setActivePlatformDetails] = useState({});
  const [isCollabModalOpen, setIsCollabModalOpen] = useState(false);
  const [collabReqSuccessModalOpen, setCollabReqSuccessModalOpen] =
    useState(false);
  const [collabReqSuccess, setCollabReqSuccess] = useState();

  const [genderData, setGenderData] = useState([]);
  const [consistencyData, setConsistencyData] = useState([]);
  const [ageData, setAgeData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [loading, setLoading] = useState(false);

  const {
    id: influencer_id,
    profile_picture,
    name,
    niche,
    city,
    collaboration_ongoing,
    content_charge,
    views_charge,
    collab_charge,
    last_updated_at,
    next_reach_score,
    platform_details,
    primary_platform,
  } = influencerMatric || {};

  const phoneNumber = "918105120349"; // Replace with your WhatsApp phone number (with country code)

  const whatsappLink = `https://wa.me/${phoneNumber}?text=Hello!%20I%20need%20assistance%20`;

  useEffect(() => {
    if (activePlatform === "Instagram") {
      setActivePlatformDetails(platform_details?.insta_detail);
      setGenderData(platform_details?.insta_detail?.sex_graph);
      if (platform_details?.insta_detail?.consistency_score !== null) {
        setConsistencyData([
          {
            name: "Consistency",
            value: platform_details?.insta_detail?.consistency_score,
          },
          {
            name: "",
            value:
              100 - Number(platform_details?.insta_detail?.consistency_score),
          },
        ]);
      }
      setAgeData(platform_details?.insta_detail?.age_graph);
      setCityData(platform_details?.insta_detail?.city_graph);
    } else if (activePlatform === "Facebook") {
      setActivePlatformDetails(platform_details?.fb_detail);
      setGenderData(platform_details?.fb_detail?.sex_graph);
      if (platform_details?.fb_detail?.consistency_score !== null) {
        setConsistencyData([
          {
            name: "Consistency",
            value: platform_details?.fb_detail?.consistency_score,
          },
          {
            name: "",
            value: 100 - Number(platform_details?.fb_detail?.consistency_score),
          },
        ]);
      }
      setAgeData(platform_details?.fb_detail?.age_graph);
      setCityData(platform_details?.fb_detail?.city_graph);
    } else if (activePlatform === "Youtube") {
      setActivePlatformDetails(platform_details?.yt_detail);
      setGenderData(platform_details?.yt_detail?.sex_graph);
      if (platform_details?.yt_detail?.consistency_score !== null) {
        setConsistencyData([
          {
            name: "Consistency",
            value: platform_details?.yt_detail?.consistency_score,
          },
          {
            name: "",
            value: 100 - Number(platform_details?.yt_detail?.consistency_score),
          },
        ]);
      }
      setAgeData(platform_details?.yt_detail?.age_graph);
      setCityData(platform_details?.yt_detail?.city_graph);
    }
  }, [
    activePlatform,
    platform_details?.insta_detail,
    platform_details?.yt_detail,
    platform_details?.fb_detail,
  ]);

  useEffect(() => {
    if (
      !selectedCollabOption ||
      selectedCollabOption === "" ||
      collaboration_ongoing ||
      !influencer_id ||
      !userId
    )
      return;

    setLoading(true);

    fetch(
      `https://nextreach-backend-fxdmcnbgf3gsesht.southindia-01.azurewebsites.net/v1/web/request/collab`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          client_id: userId,
          influencer_id: influencer_id,
          collab_date: selectedCollabOption,
        }),
      }
    )
      .then((response) => {
        if (response?.status === 200) {
          setLoading(false);
          return response.json();
        }
      })
      .then((response) => {
        dispatch(resetCollabOption());
        setLoading(false);
        setCollabReqSuccessModalOpen(true);
        setCollabReqSuccess(response);
      })
      .catch((error) => {
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCollabOption, userId, influencer_id]);

  useEffect(() => {
    if (!collabReqSuccessModalOpen) return;
    setLoading(true);
    fetch(
      `https://nextreach-backend-fxdmcnbgf3gsesht.southindia-01.azurewebsites.net/v1/web/influencer/insight`,
      {
        method: "POST",

        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          client_id: userId,
          influencer_id: influencer_id,
        }),
      }
    )
      .then((response) => {
        setLoading(false);
        return response.json();
      })
      .then((response) => {
        setLoading(false);
        dispatch(setInfluencerMatric(response));
      })
      .catch((error) => {
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collabReqSuccessModalOpen]);

  const handlePlatformChange = (platform) => {
    setActivePlatform(platform);
  };

  const handleArrowDown = () => {
    setShowAIScore(!showAIScore);
  };

  const thumbPosition = ((next_reach_score - 1) / 100) * 100;
  const colors = ["#FF6347", "#6A5ACD", "#32CD32", "#FFD700", "#FF1493"];

  const handleCollaboration = () => {
    if (collaboration_ongoing) return;
    setIsCollabModalOpen(true);
  };

  const closeCollabModal = () => {
    setIsCollabModalOpen(false);
  };

  const closeModal = () => {
    setCollabReqSuccessModalOpen(false);
  };

  return (
    <>
      {loading && <Loader />}
      <S.Container>
        <S.InfluencerInfoContainer>
          <S.Left>
            <img
              src={profile_picture}
              width="257px"
              height="260px"
              alt="Influencer profile"
              style={{
                borderRadius: "12px",
              }}
            />
            <S.LastUpdatedTxt>
              Last Updated on {last_updated_at}
            </S.LastUpdatedTxt>
          </S.Left>
          <S.Right>
            <S.InfluencerPersonalInfo>
              <S.InfluencerUsername>{name}</S.InfluencerUsername>
              <S.Category>
                <img
                  src={category_icon}
                  alt="category"
                  width="30px"
                  height="30px"
                />
                {niche &&
                  niche
                    .slice(0, 2)
                    .map((niche) => Niche[niche])
                    .join(", ")}
              </S.Category>
              <S.Location>
                <img
                  src={location_icon}
                  alt="location"
                  width="30px"
                  height="30px"
                />
                {City[city]}
              </S.Location>
            </S.InfluencerPersonalInfo>
            <S.ChargeView>
              <S.ChargeContainerLeft>
                <S.ChargeContainer>
                  <S.OverviewLeft>
                    <img src={content_charge_icon} alt="Content charge" />
                  </S.OverviewLeft>
                  <S.OverviewRight>
                    <S.OverviewTitle>Content Charge</S.OverviewTitle>
                    <S.OverviewValue>{content_charge}</S.OverviewValue>
                  </S.OverviewRight>
                </S.ChargeContainer>
                <S.ChargeContainer>
                  <S.OverviewLeft>
                    <img src={view_icon} alt="Views charge" />
                  </S.OverviewLeft>
                  <S.OverviewRight>
                    <S.OverviewTitle>Views Charge</S.OverviewTitle>
                    <S.OverviewValue>{views_charge}</S.OverviewValue>
                  </S.OverviewRight>
                </S.ChargeContainer>
              </S.ChargeContainerLeft>
              <S.RightContainer>
                {collaboration_ongoing ? (
                  <S.RequestRaised>
                    Collab request has been raised
                  </S.RequestRaised>
                ) : null}
                <S.CollaborateContainer
                  onClick={handleCollaboration}
                  disabled={collaboration_ongoing}
                >
                  Collaborate
                </S.CollaborateContainer>
              </S.RightContainer>
            </S.ChargeView>
          </S.Right>
        </S.InfluencerInfoContainer>
        <S.PriceCollabEstimation>
          <S.PriceCollabEstimationTxt>
            Total Price Estimation (in Rs)
            <S.ReachMatricInfo>
              <ToolTip text="<div>Estimated cost based on the influencer's </div><div>content and views charges (from their last 12 posts).</div><div> Actual costs may vary.</div>">
                <img
                  src={info_icon}
                  alt="Info icon"
                  width={"19px"}
                  height={"19px"}
                />
              </ToolTip>
            </S.ReachMatricInfo>
          </S.PriceCollabEstimationTxt>
          <S.PriceCollabIcon>
            <img src={price_collab_icon} alt="Price collab icon" />
          </S.PriceCollabIcon>
          <S.AmountContainer>
            <S.MinAmountContainer>
              <S.MinAmountTxt>Min Amount</S.MinAmountTxt>
              <S.MinAmountVal>{collab_charge?.min}</S.MinAmountVal>
            </S.MinAmountContainer>
            <S.MinAmountContainer>
              <S.MinAmountTxt>Predicted Amount</S.MinAmountTxt>
              <S.MinAmountVal>{collab_charge?.avg}</S.MinAmountVal>
            </S.MinAmountContainer>
            <S.MinAmountContainer>
              <S.MinAmountTxt>Maximum Amount</S.MinAmountTxt>
              <S.MinAmountVal>{collab_charge?.max}</S.MinAmountVal>
            </S.MinAmountContainer>
          </S.AmountContainer>
        </S.PriceCollabEstimation>
        <S.NextReachAIScoreContainer>
          <S.NextReachTxt>NextReach AI score</S.NextReachTxt>
          <S.CalculateNextReachAIScore>
            <div onClick={handleArrowDown}>
              How do we calculate Nextreach Ai Score?{" "}
              {showAIScore ? (
                <S.AIScoreDesc>
                  Our AI meticulously evaluates influencer accounts across 10+
                  key parameters to ensure authenticity, reliability, and value
                  for collaborations. From analyzing audience demographics,
                  comment sentiment, and content originality to detecting fake
                  followers and verifying contact details, every profile
                  undergoes a thorough assessment.{" "}
                </S.AIScoreDesc>
              ) : null}
            </div>
            {showAIScore ? (
              <img
                src={arrow_up_icon}
                alt="arrow up"
                width="13px"
                height="16px"
                onClick={handleArrowDown}
              />
            ) : (
              <img
                src={arrow_down_icon}
                alt="arrow down"
                width="13px"
                height="16px"
                onClick={handleArrowDown}
              />
            )}
          </S.CalculateNextReachAIScore>
        </S.NextReachAIScoreContainer>
        <S.FlagContainer>
          <S.SliderWrapper>
            <S.SliderInput
              type="range"
              min="0"
              max="100"
              value={next_reach_score}
              // onChange={handleSliderChange}
            />
            <S.FlagImage
              src={flag_icon} // Make sure the flag image is in your public folder
              alt="Flag"
              width="64px"
              height="64px"
              thumbPosition={thumbPosition}
            />
            <S.ValueDisplay thumbPosition={thumbPosition}>
              {next_reach_score}
            </S.ValueDisplay>
          </S.SliderWrapper>
          <S.ValueDisplayWrapper>
            <span>0</span>
            <span>100</span>
          </S.ValueDisplayWrapper>
        </S.FlagContainer>
        <S.InfluencerMatricDetails>
          <S.Header>
            <S.InstagramTitle
              style={{
                borderBottom:
                  activePlatform === "Instagram" ? "3px solid #E66A44" : null,
              }}
              onClick={() => handlePlatformChange("Instagram")}
            >
              <img
                src={instagram_icon}
                alt="Instagram"
                width={"24px"}
                height={"24px"}
              />
              Instagram
              {primary_platform === "INSTAGRAM" ? (
                <span style={{ fontSize: "14px", fontWeight: 400 }}>
                  (Primary account)
                </span>
              ) : null}
            </S.InstagramTitle>
            <S.InstagramTitle
              style={{
                borderBottom:
                  activePlatform === "Facebook" ? "3px solid #E66A44" : null,
              }}
              onClick={() => handlePlatformChange("Facebook")}
            >
              <img
                src={facebook_icon}
                alt="Facebook"
                width={"24px"}
                height={"24px"}
              />
              Facebook
              {primary_platform === "FACEBOOK" ? (
                <span style={{ fontSize: "14px", fontWeight: 400 }}>
                  (Primary account)
                </span>
              ) : null}
            </S.InstagramTitle>
            <S.InstagramTitle
              style={{
                borderBottom:
                  activePlatform === "Youtube" ? "3px solid #E66A44" : null,
              }}
              onClick={() => handlePlatformChange("Youtube")}
            >
              <img
                src={youtube_icon}
                alt="Youtube"
                width={"24px"}
                height={"24px"}
              />
              Youtube
              {primary_platform === "YOUTUBE" ? (
                <span style={{ fontSize: "14px", fontWeight: 400 }}>
                  (Primary account)
                </span>
              ) : null}
            </S.InstagramTitle>
          </S.Header>
          {activePlatformDetails ? (
            <S.SelectedMatricInfo>
              <S.SelectedMatricHeader
                onClick={() => {
                  window.open(activePlatformDetails?.profile_link);
                }}
              >
                {activePlatform === "Instagram" ? (
                  <img
                    src={instagram_icon}
                    alt="Instagram"
                    width="52px"
                    height="52px"
                  />
                ) : null}
                {activePlatform === "Facebook" ? (
                  <img
                    src={facebook_icon}
                    alt="Facebook"
                    width="52px"
                    height="52px"
                  />
                ) : null}
                {activePlatform === "Youtube" ? (
                  <img
                    src={youtube_icon}
                    alt="Youtube"
                    width="52px"
                    height="52px"
                  />
                ) : null}

                {activePlatformDetails?.username}
              </S.SelectedMatricHeader>
              <S.ReachMatric>
                <>
                  {/* <S.ReachMatricHeader>
                  <img
                    src={reach_matric_icon}
                    alt=""
                    width="43px"
                    height="39px"
                  />
                    Reach Matric 
                </S.ReachMatricHeader> */}
                  <S.ReachMatricContainer>
                    <S.ReachMatricItem>
                      <S.ReachMatricItemLeftPart>
                        <S.ReachMatricIcon>
                          <img
                            src={follwers_count}
                            alt="Followers count"
                            width="32px"
                            height="22px"
                          />
                        </S.ReachMatricIcon>
                        <S.ReachMatricDesc>
                          <S.ReachMatricTitle>
                            Followers count
                          </S.ReachMatricTitle>
                          <S.ReachMatricVal>
                            {activePlatformDetails?.followers || "---------"}
                          </S.ReachMatricVal>
                        </S.ReachMatricDesc>
                      </S.ReachMatricItemLeftPart>
                      <S.ReachMatricInfo>
                        <ToolTip text="The influencer's follower count at the time of our check.">
                          <img
                            src={info_icon}
                            alt="Info icon"
                            width={"19px"}
                            height={"19px"}
                          />
                        </ToolTip>
                      </S.ReachMatricInfo>
                    </S.ReachMatricItem>
                    <S.ReachMatricItem>
                      <S.ReachMatricItemLeftPart>
                        <S.ReachMatricIcon>
                          <img
                            src={follwers_count}
                            alt="Engagement Rate"
                            width="32px"
                            height="22px"
                          />
                        </S.ReachMatricIcon>
                        <S.ReachMatricDesc>
                          <S.ReachMatricTitle>
                            Engagement Rate
                          </S.ReachMatricTitle>
                          <S.ReachMatricVal>
                            {activePlatformDetails?.engagement_rate ||
                              "---------"}
                          </S.ReachMatricVal>
                        </S.ReachMatricDesc>
                      </S.ReachMatricItemLeftPart>
                      <S.ReachMatricInfo>
                        <ToolTip text="<div>The percentage of audience interactions (views, likes,</div><div> comments, shares) relative to total followers.</div>">
                          <img
                            src={info_icon}
                            alt="Info icon"
                            width={"19px"}
                            height={"19px"}
                          />
                        </ToolTip>
                      </S.ReachMatricInfo>
                    </S.ReachMatricItem>
                    <S.ReachMatricItem>
                      <S.ReachMatricItemLeftPart>
                        <S.ReachMatricIcon>
                          <img
                            src={view_icon}
                            alt="Avg Views"
                            width="32px"
                            height="22px"
                          />
                        </S.ReachMatricIcon>
                        <S.ReachMatricDesc>
                          <S.ReachMatricTitle>Avg Views</S.ReachMatricTitle>
                          <S.ReachMatricVal>
                            {activePlatformDetails?.avg_views || "---------"}
                          </S.ReachMatricVal>
                        </S.ReachMatricDesc>
                      </S.ReachMatricItemLeftPart>
                      <S.ReachMatricInfo>
                        <ToolTip
                          text="<div>The average number of views based </div><div>on the influencer's last 12 to 15 posts.</div>"
                          isRight={true}
                        >
                          <img
                            src={info_icon}
                            alt="Info icon"
                            width={"19px"}
                            height={"19px"}
                          />
                        </ToolTip>
                      </S.ReachMatricInfo>
                    </S.ReachMatricItem>

                    <S.ReachMatricItem>
                      <S.ReachMatricItemLeftPart>
                        <S.ReachMatricIcon>
                          <img
                            src={like_icon}
                            alt="Avg likes"
                            width="32px"
                            height="22px"
                          />
                        </S.ReachMatricIcon>
                        <S.ReachMatricDesc>
                          <S.ReachMatricTitle>Avg Likes</S.ReachMatricTitle>
                          <S.ReachMatricVal>
                            {activePlatformDetails?.avg_likes || "---------"}
                          </S.ReachMatricVal>
                        </S.ReachMatricDesc>
                      </S.ReachMatricItemLeftPart>
                      <S.ReachMatricInfo>
                        <ToolTip text="<div>The average number of likes based on </div><div>the influencer's last 12 to 15 posts.</div>">
                          <img
                            src={info_icon}
                            alt="Info icon"
                            width={"19px"}
                            height={"19px"}
                          />
                        </ToolTip>
                      </S.ReachMatricInfo>
                    </S.ReachMatricItem>
                    <S.ReachMatricItem>
                      <S.ReachMatricItemLeftPart>
                        <S.ReachMatricIcon>
                          <img
                            src={comment_icon}
                            alt="Avg Comment"
                            width="32px"
                            height="22px"
                          />
                        </S.ReachMatricIcon>
                        <S.ReachMatricDesc>
                          <S.ReachMatricTitle>Avg Comment</S.ReachMatricTitle>
                          <S.ReachMatricVal>
                            {activePlatformDetails?.avg_comments || "---------"}
                          </S.ReachMatricVal>
                        </S.ReachMatricDesc>
                      </S.ReachMatricItemLeftPart>
                      <S.ReachMatricInfo>
                        <ToolTip text="<div>The average number of comments </div><div>based on the influencer's last 12 to 15 posts.</div>">
                          <img
                            src={info_icon}
                            alt="Info icon"
                            width={"19px"}
                            height={"19px"}
                          />
                        </ToolTip>
                      </S.ReachMatricInfo>
                    </S.ReachMatricItem>
                    <S.ReachMatricItem>
                      <S.ReachMatricItemLeftPart>
                        <S.ReachMatricIcon>
                          <img
                            src={avg_shares}
                            alt="Avg Shares"
                            width="32px"
                            height="22px"
                          />
                        </S.ReachMatricIcon>
                        <S.ReachMatricDesc>
                          <S.ReachMatricTitle>Avg Shares</S.ReachMatricTitle>
                          <S.ReachMatricVal>
                            {activePlatformDetails?.avg_shares || "---------"}
                          </S.ReachMatricVal>
                        </S.ReachMatricDesc>
                      </S.ReachMatricItemLeftPart>
                      <S.ReachMatricInfo>
                        <ToolTip
                          text="<div>The average number of shares </div><div>based on the influencer's last 12 to 15 posts.</div>"
                          isRight={true}
                        >
                          <img
                            src={info_icon}
                            alt="Info icon"
                            width={"19px"}
                            height={"19px"}
                          />
                        </ToolTip>
                      </S.ReachMatricInfo>
                    </S.ReachMatricItem>
                  </S.ReachMatricContainer>
                </>
                <S.GraphContainer>
                  {genderData ? (
                    <S.EachGraphContainer>
                      <S.GraphHeader>
                        <S.LeftGraphHeader>
                          <img
                            src={graph_icon}
                            alt="Graph icon"
                            width={"44px"}
                            height={"36px"}
                          />
                        </S.LeftGraphHeader>
                        <S.RightGraphHeader>
                          Audience Male/Female ratio
                          <ToolTip text="<div>The percentage split of the </div><div>influencer's audience by gender.</div>">
                            <img
                              src={info_icon}
                              alt="Info icon"
                              width={"19px"}
                              height={"19px"}
                            />
                          </ToolTip>
                        </S.RightGraphHeader>
                      </S.GraphHeader>

                      <ResponsiveContainer
                        width="100%"
                        height={250}
                        style={{
                          padding: "1.1rem 0rem 1.2rem 0rem",
                          borderRadius: "12px",
                          border: "1px solid  #9F9F9F",
                        }}
                      >
                        <PieChart>
                          <Pie
                            data={genderData}
                            dataKey="value"
                            nameKey="name"
                            innerRadius="60%" // Makes it a doughnut chart (inner hole)
                            outerRadius="80%"
                            fill="#8884d8"
                            label
                          >
                            {/* Assigning different colors to each segment */}
                            {genderData &&
                              genderData.length > 0 &&
                              genderData.map((entry, index) => (
                                <Cell
                                  key={`cell-${index}`}
                                  fill={colors[index]}
                                />
                              ))}
                          </Pie>
                          <Tooltip />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </S.EachGraphContainer>
                  ) : null}
                  {consistencyData && consistencyData.length > 0 ? (
                    <S.EachGraphContainer>
                      <S.GraphHeader>
                        <S.LeftGraphHeader>
                          <img
                            src={reach_matric_icon}
                            alt=""
                            width={"44px"}
                            height={"36px"}
                          />
                        </S.LeftGraphHeader>
                        <S.RightGraphHeader>
                          Consistency Score
                          <ToolTip text="<div>Indicates how closely average views match the </div><div>typical range, higher score shows greater reliability.</div>">
                            <img
                              src={info_icon}
                              alt="Info icon"
                              width={"19px"}
                              height={"19px"}
                            />
                          </ToolTip>
                        </S.RightGraphHeader>
                      </S.GraphHeader>

                      <ResponsiveContainer
                        width="100%"
                        height={250}
                        style={{
                          padding: "1.1rem 0rem 1.2rem 0rem",
                          borderRadius: "12px",
                          border: "1px solid  #9F9F9F",
                        }}
                      >
                        <PieChart>
                          <Pie
                            data={consistencyData}
                            dataKey="value"
                            nameKey="name"
                            innerRadius="60%" // Makes it a doughnut chart (inner hole)
                            outerRadius="80%"
                            // fill="#8884d8"
                            label
                          >
                            {/* Assigning different colors to each segment */}
                            {consistencyData && (
                              <Cell key={`cell-index`} fill={colors[0]} />
                            )}
                          </Pie>
                          <Tooltip />
                          <Legend
                            payload={consistencyData.map((entry, ind) => ({
                              value: entry.name,
                              type: "square",
                              color:
                                entry.name === ""
                                  ? "#ffffff"
                                  : colors[ind % colors.length],
                            }))}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </S.EachGraphContainer>
                  ) : null}
                  {ageData ? (
                    <S.EachGraphContainer>
                      <S.GraphHeader>
                        <S.LeftGraphHeader>
                          <img
                            src={graph_icon}
                            alt="Age Graph icon"
                            width={"44px"}
                            height={"36px"}
                          />
                        </S.LeftGraphHeader>
                        <S.RightGraphHeader>
                          Audience Age
                          <ToolTip text="<div>The percentage breakdown of the influencer's </div><div>audience across different age groups.</div>">
                            <img
                              src={info_icon}
                              alt="Info icon"
                              width={"19px"}
                              height={"19px"}
                            />
                          </ToolTip>
                        </S.RightGraphHeader>
                      </S.GraphHeader>

                      <BarChart
                        width={450}
                        height={250}
                        data={ageData}
                        style={{
                          padding: "1.5rem 2.5rem 1rem 0",
                          borderRadius: "12px",
                          border: "1px solid  #9F9F9F",
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="age" />
                        <YAxis />
                        <Tooltip />
                        {/* <Legend /> */}
                        <Bar dataKey="value">
                          <LabelList dataKey="value" position="top" />
                          {ageData &&
                            ageData.length > 0 &&
                            ageData.map((entry, index) => (
                              <Cell
                                key={`cell-${index}`}
                                fill={colors[index]}
                              />
                            ))}
                        </Bar>
                      </BarChart>
                    </S.EachGraphContainer>
                  ) : null}
                  {cityData ? (
                    <S.EachGraphContainer>
                      <S.GraphHeader>
                        <S.LeftGraphHeader>
                          <img
                            src={reach_matric_icon}
                            alt="City Graph icon"
                            width={"44px"}
                            height={"36px"}
                          />
                        </S.LeftGraphHeader>
                        <S.RightGraphHeader>
                          Audience City
                          <ToolTip text="<div>The top cities where the influencer's audience </div><div>is located, along with their percentage share.</div>">
                            <img
                              src={info_icon}
                              alt="Info icon"
                              width={"19px"}
                              height={"19px"}
                            />
                          </ToolTip>
                        </S.RightGraphHeader>
                      </S.GraphHeader>
                      <BarChart
                        width={450}
                        height={250}
                        data={cityData}
                        style={{
                          padding: "1.5rem 2.5rem 1rem 0",
                          borderRadius: "12px",
                          border: "1px solid  #9F9F9F",
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="city" />
                        <YAxis />
                        <Tooltip />
                        {/* <Legend /> */}
                        <Bar dataKey="value">
                          <LabelList dataKey="value" position="top" />
                          {cityData &&
                            cityData.length > 0 &&
                            cityData.map((entry, index) => (
                              <Cell
                                key={`cell-${index}`}
                                fill={colors[index]}
                              />
                            ))}
                        </Bar>
                      </BarChart>
                    </S.EachGraphContainer>
                  ) : null}
                </S.GraphContainer>
              </S.ReachMatric>
            </S.SelectedMatricInfo>
          ) : (
            <S.DataNotAvailable>
              Information currently unavailable for this platform
            </S.DataNotAvailable>
          )}
        </S.InfluencerMatricDetails>

        <InfluencerMatricOverviewDetails
          deliverablesList={influencerMatric.deliverables}
          contentLanguages={influencerMatric.languages}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <S.ContactUsContainer>Contact Us</S.ContactUsContainer>
          </a>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              // gap: "8px",
            }}
          >
            {collaboration_ongoing ? (
              <S.RequestRaised>Collab request has been raised</S.RequestRaised>
            ) : null}
            <S.CollaborateContainer
              // style={{ width: "20%" }}
              onClick={handleCollaboration}
              disabled={collaboration_ongoing}
            >
              Collaborate
            </S.CollaborateContainer>
          </div>
        </div>

        {isCollabModalOpen ? (
          <ModalPopup
            isOpen={isCollabModalOpen}
            onClose={closeCollabModal}
            status={"success"}
            heading={"Great Choice"}
            subText={"When would you like the influencer to post the content?"}
            buttonText={"Collaborate"}
            isForm={true}
          />
        ) : null}
        {collabReqSuccessModalOpen ? (
          <ModalPopup
            isOpen={collabReqSuccessModalOpen}
            onClose={closeModal}
            status={collabReqSuccess?.success ? "success" : "error"}
            heading={collabReqSuccess?.header}
            subText={collabReqSuccess?.message}
            buttonText={collabReqSuccess?.button_text}
          />
        ) : null}
      </S.Container>
    </>
  );
};

export default InfluencerMatricInfo;
