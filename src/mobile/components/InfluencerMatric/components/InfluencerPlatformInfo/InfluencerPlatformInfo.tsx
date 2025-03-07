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
import view_icon from "../../../../../assets/icons/view_icon.svg";
import instagram_icon from "../../../../../assets/icons/instagram_icon.png";
import facebook_icon from "../../../../../assets/icons/facebook_icon.png";
import youtube_icon from "../../../../../assets/icons/youtube_icon.png";
import reach_matric_icon from "../../../../../assets/InfluencerMatric/icons/reach_matric.svg";
import price_collab_mobile_icon from "../../../../../assets/InfluencerMatric/icons/price_collab_mobile_icon.jpeg";
import arrow_down_icon from "../../../../../assets/InfluencerMatric/icons/arrow_down.svg";
import arrow_up_icon from "../../../../../assets/InfluencerMatric/icons/arrow_up.svg";
import follwers_count from "../../../../../assets/InfluencerMatric/icons/followers_count.svg";
import info_icon from "../../../../../assets/InfluencerMatric/icons/info_icon.png";
import avg_shares from "../../../../../assets/InfluencerMatric/icons/avg_shares.svg";
import comment_icon from "../../../../../assets/InfluencerMatric/icons/comment_icon.svg";
import like_icon from "../../../../../assets/InfluencerMatric/icons/like_icon.svg";
import graph_icon from "../../../../../assets/InfluencerMatric/icons/graph_icon.svg";
import flag_icon from "../../../../../assets/InfluencerMatric/icons/flag_icon.png";
import * as S from "./InfluencerPlatformInfo.style.js";
import { useDispatch, useSelector } from "react-redux";
import {
  getCollabOption,
  getInfluencerMatricInfo,
} from "../../../../../redux/selectors/influencerMatricSelector.js";
import MobileToolTip from "../../../../../desktop/common/ToolTip/MobileTooltip.tsx";
import InfluencerMatricOverviewDetails from "../InfluencerMatricOverviewDetails/InfluencerMatricOverviewDetails.tsx";
import { userIdSelector } from "../../../../../redux/selectors/profileDetailsSelector.js";
import {
  resetCollabOption,
  setInfluencerMatric,
} from "../../../../../redux/actions/influencerMatricActions.js";
import ModalPopup from "../../../../../desktop/common/ModalPopup/ModalPopup.tsx";
import Loader from "../../../../../desktop/common/Loader/Loader.tsx";

const InfluencerPlatformInfo = () => {
  const dispatch = useDispatch();
  const influencerMatric = useSelector(getInfluencerMatricInfo) || {};
  const [showAIScore, setShowAIScore] = useState(false);
  const [activePlatform, setActivePlatform] = useState("Instagram");
  const [activePlatformDetails, setActivePlatformDetails] = useState({});

  const [genderData, setGenderData] = useState([]);
  const [consistencyData, setConsistencyData] = useState([]);
  const [ageData, setAgeData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [loading, setLoading] = useState(false);

  const selectedCollabOption = useSelector(getCollabOption) || "";
  const userId = useSelector(userIdSelector);
  const [isCollabModalOpen, setIsCollabModalOpen] = useState(false);
  const [collabReqSuccessModalOpen, setCollabReqSuccessModalOpen] =
    useState(false);
  const [collabReqSuccess, setCollabReqSuccess] = useState(null);

  const {
    id: influencer_id,
    collaboration_ongoing,
    collab_charge,
    next_reach_score,
    platform_details,
    primary_platform,
    deliverables,
    languages,
  } = influencerMatric || {};

  const phoneNumber = "918105120349"; // Replace with your WhatsApp phone number (with country code)

  const whatsappLink = `https://wa.me/${phoneNumber}?text=Hello!%20I%20need%20assistance%20`;

  useEffect(() => {
    if (activePlatform === "Instagram") {
      setActivePlatformDetails(platform_details?.insta_detail);

      setGenderData(platform_details?.insta_detail?.sex_graph);
      if (platform_details?.fb_detail?.consistency_score !== null) {
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

  const handlePlatformChange = (platform) => {
    setActivePlatform(platform);
  };

  const handleArrowDown = () => {
    setShowAIScore(!showAIScore);
  };

  const thumbPosition = (next_reach_score / 100) * 100;
  const colors = ["#FF6347", "#6A5ACD", "#32CD32", "#FFD700", "#FF1493"];
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
        <S.PriceCollabEstimation>
          <S.PriceCollabEstimationTxt>
            Total Price Estimation (in Rs)
            <S.ReachMatricInfo>
              <MobileToolTip text="<div>Estimated cost based on the</div><div>influencer's content and views </div><div>charges (from their last 12 posts).</div><div> Actual costs may vary.</div>">
                <img
                  src={info_icon}
                  alt="Info icon"
                  width="14px"
                  height="14px"
                />
              </MobileToolTip>
            </S.ReachMatricInfo>
          </S.PriceCollabEstimationTxt>
          <S.PriceCollabIcon>
            <img
              src={price_collab_mobile_icon}
              alt="Price collab icon"
              width="100%"
            />
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
                width="11px"
                height="12px"
                onClick={handleArrowDown}
              />
            ) : (
              <img
                src={arrow_down_icon}
                alt="arrow down"
                width="11px"
                height="12px"
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
              width="32px"
              height="32px"
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
              <>
                <img
                  src={instagram_icon}
                  alt="Instagram"
                  width={"16px"}
                  height={"16px"}
                />
              </>
              Instagram
              {primary_platform === "INSTAGRAM" ? (
                <span style={{ fontSize: "10px", fontWeight: 400 }}>
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
                width={"16px"}
                height={"16px"}
              />
              Facebook
              {primary_platform === "FACEBOOK" ? (
                <span style={{ fontSize: "10px", fontWeight: 400 }}>
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
                width={"16px"}
                height={"16px"}
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
                    width="26px"
                    height="26px"
                  />
                ) : null}
                {activePlatform === "Facebook" ? (
                  <img
                    src={facebook_icon}
                    alt="Facebook"
                    width="26px"
                    height="26px"
                  />
                ) : null}
                {activePlatform === "Youtube" ? (
                  <img
                    src={youtube_icon}
                    alt="Youtube"
                    width="26px"
                    height="26px"
                  />
                ) : null}

                {activePlatformDetails?.username}
              </S.SelectedMatricHeader>
              <S.ReachMatric>
                {/* <S.ReachMatricHeader>
                <img
                  src={reach_matric_icon}
                  alt=""
                  width="24px"
                  height="24px"
                />
                Reach Matric
              </S.ReachMatricHeader> */}
                <S.ReachMatricContainer>
                  <S.Row>
                    <S.ReachMatricItem>
                      <S.ReachMatricItemLeftPart>
                        <S.ReachMatricIcon>
                          <img
                            src={follwers_count}
                            alt="Followers count"
                            width="25px"
                            height="16px"
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
                        <MobileToolTip text="<div>The influencer's follower</div><div>count at the time of our check.</div>">
                          <img
                            src={info_icon}
                            alt="Info icon"
                            width="14px"
                            height="14px"
                          />
                        </MobileToolTip>
                      </S.ReachMatricInfo>
                    </S.ReachMatricItem>
                    <S.ReachMatricItem>
                      <S.ReachMatricItemLeftPart>
                        <S.ReachMatricIcon>
                          <img
                            src={follwers_count}
                            alt="Engagement Rate"
                            width="25px"
                            height="16px"
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
                        <MobileToolTip
                          text="<div>The percentage of audience</div><div> interactions (views, likes, comments,</div><div> shares) relative to total followers.</div>"
                          isRight={true}
                        >
                          <img
                            src={info_icon}
                            alt="Info icon"
                            width="14px"
                            height="14px"
                          />
                        </MobileToolTip>
                      </S.ReachMatricInfo>
                    </S.ReachMatricItem>
                  </S.Row>
                  <S.Row>
                    <S.ReachMatricItem>
                      <S.ReachMatricItemLeftPart>
                        <S.ReachMatricIcon>
                          <img
                            src={view_icon}
                            alt="Avg Views"
                            width="25px"
                            height="16px"
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
                        <MobileToolTip text="<div>The average number of views based </div><div>on the influencer's last 12 to 15 posts.</div>">
                          <img
                            src={info_icon}
                            alt="Info icon"
                            width="14px"
                            height="14px"
                          />
                        </MobileToolTip>
                      </S.ReachMatricInfo>
                    </S.ReachMatricItem>
                    <S.ReachMatricItem>
                      <S.ReachMatricItemLeftPart>
                        <S.ReachMatricIcon>
                          <img
                            src={like_icon}
                            alt="Avg likes"
                            width="25px"
                            height="16px"
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
                        <MobileToolTip
                          isRight={true}
                          text="<div>The average number of likes based on </div><div>the influencer's last 12 to 15 posts.</div>"
                        >
                          <img
                            src={info_icon}
                            alt="Info icon"
                            width="14px"
                            height="14px"
                          />
                        </MobileToolTip>
                      </S.ReachMatricInfo>
                    </S.ReachMatricItem>
                  </S.Row>
                  <S.Row>
                    <S.ReachMatricItem>
                      <S.ReachMatricItemLeftPart>
                        <S.ReachMatricIcon>
                          <img
                            src={comment_icon}
                            alt="Avg Comment"
                            width="25px"
                            height="16px"
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
                        <MobileToolTip text="<div>The average number of </div><div>comments based on the </div><div>influencer's last 12 to 15 posts.</div>">
                          <img
                            src={info_icon}
                            alt="Info icon"
                            width="14px"
                            height="14px"
                          />
                        </MobileToolTip>
                      </S.ReachMatricInfo>
                    </S.ReachMatricItem>
                    <S.ReachMatricItem>
                      <S.ReachMatricItemLeftPart>
                        <S.ReachMatricIcon>
                          <img
                            src={avg_shares}
                            alt="Avg Shares"
                            width="25px"
                            height="16px"
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
                        <MobileToolTip
                          isRight={true}
                          text="<div>The average number of </div><div>shares based on the </div><div>influencer's last 12 to 15 posts.</div>"
                        >
                          <img
                            src={info_icon}
                            alt="Info icon"
                            width="14px"
                            height="14px"
                          />
                        </MobileToolTip>
                      </S.ReachMatricInfo>
                    </S.ReachMatricItem>
                  </S.Row>
                </S.ReachMatricContainer>
                <S.GraphContainer>
                  {genderData ? (
                    <S.EachGraphContainer>
                      <S.GraphHeader>
                        <img
                          src={graph_icon}
                          alt="Graph icon"
                          width="24px"
                          height="20px"
                        />
                        Audience Male/Female ratio
                        <MobileToolTip
                          isRight={true}
                          text="<div>The percentage split of the </div><div>influencer's audience by gender.</div>"
                        >
                          <img
                            src={info_icon}
                            alt="Info icon"
                            width="14px"
                            height="14px"
                          />
                        </MobileToolTip>
                      </S.GraphHeader>

                      <ResponsiveContainer
                        width={300}
                        height={200}
                        style={{
                          padding: "1rem 2rem 0.5rem 0",
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
                        <img
                          src={reach_matric_icon}
                          alt="Graph icon"
                          width="24px"
                          height="20px"
                        />
                        Consistency Score
                        <MobileToolTip
                          isRight={true}
                          text="<div>Indicates how closely average</div><div> views match the typical range,</div><div> higher score shows greater reliability.</div>"
                        >
                          <img
                            src={info_icon}
                            alt="Info icon"
                            width="14px"
                            height="14px"
                          />
                        </MobileToolTip>
                      </S.GraphHeader>

                      <ResponsiveContainer
                        width={300}
                        height={200}
                        style={{
                          padding: "1rem 2rem 0.5rem 0",
                          borderRadius: "12px",
                          border: "1px solid  #9F9F9F",
                          // filter: "blur(15px)",
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
                        <img
                          src={graph_icon}
                          alt="Graph icon"
                          width="24px"
                          height="20px"
                        />
                        Audience Age
                        <MobileToolTip
                          isRight={true}
                          text="<div>The percentage breakdown  </div><div>of the influencer'saudience </div><div>across different age groups.</div>"
                        >
                          <img
                            src={info_icon}
                            alt="Info icon"
                            width="14px"
                            height="14px"
                          />
                        </MobileToolTip>
                      </S.GraphHeader>

                      <BarChart
                        width={300}
                        height={200}
                        data={ageData}
                        style={{
                          padding: "2rem 2rem 0.5rem 0",
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
                        <img
                          src={reach_matric_icon}
                          alt="Graph icon"
                          width="24px"
                          height="20px"
                        />
                        Audience City
                        <MobileToolTip
                          isRight={true}
                          text="<div>The top cities where the  </div><div>influencer's audience is located, </div><div>along with their percentage share.</div>"
                        >
                          <img
                            src={info_icon}
                            alt="Info icon"
                            width="14px"
                            height="14px"
                          />
                        </MobileToolTip>
                      </S.GraphHeader>

                      <BarChart
                        width={300}
                        height={200}
                        data={cityData}
                        style={{
                          padding: "2rem 2rem 0.5rem 0",
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
          deliverablesList={deliverables}
          contentLanguages={languages}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
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
              gap: "8px",
            }}
          >
            {collaboration_ongoing ? (
              <S.RequestRaised>Collab request has been raised</S.RequestRaised>
            ) : null}
            <S.CollaborateContainer
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

export default InfluencerPlatformInfo;
