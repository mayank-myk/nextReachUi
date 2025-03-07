import React from "react";
import instagram_icon from "../../../../../assets/icons/instagram_icon.png";
import youtube_icon from "../../../../../assets/icons/youtube_icon.png";
import facebook_icon from "../../../../../assets/icons/facebook_icon.png";
import stage_icon from "../../../../../assets/icons/stage_icon.svg";
import disable_stage_icon from "../../../../../assets/CampaignOverview/icons/disable_stage_icon.svg";
import * as S from "./CampaignStages.style.js";
// import { PriceDisplay } from "../../../../utils/utils.js";

const CampaignStages = ({ campaignDetails }) => {
  const getPaymentText = (status) => {
    if (status === "PENDING") {
      return "Pending";
    } else if (status === "FAILED") {
      return "Failed";
    } else if (status === "CANCELLED") {
      return "Cancelled";
    } else if (status === "COMPLETED") {
      return "Payment Done";
    }
  };

  return (
    <S.Container>
      <S.CampaignStage>
        <S.Left>
          {campaignDetails?.influencer_finalization_date === null ? (
            <img
              src={disable_stage_icon}
              alt="Inflencer finalized"
              style={{
                width: "60px",
                height: "23px",
              }}
            />
          ) : (
            <img
              src={stage_icon}
              alt="Inflencer finalized"
              style={{
                width: "60px",
                height: "23px",
              }}
            />
          )}
          <div
            style={{
              width: "1px" /* Thickness of the line */,
              height: "100%" /* Height of the line */,
              backgroundColor: "#9C9A9A",
              top: "-15%",
              position: "relative",
              left: "14%",
            }}
          ></div>
        </S.Left>
        <S.Right>
          <S.Header>Influencer finalization</S.Header>
          <S.StartDate>
            <S.DateTitle>Date:</S.DateTitle>{" "}
            {campaignDetails?.influencer_finalization_date === null ? (
              <S.DisableDate>_ _ _ _ _ _ _ _ _ _ _ </S.DisableDate>
            ) : (
              <S.DateValue>
                {campaignDetails?.influencer_finalization_date}
              </S.DateValue>
            )}
          </S.StartDate>
        </S.Right>
      </S.CampaignStage>
      <S.CampaignStage>
        <S.Left>
          {campaignDetails.content_shoot_date === null ? (
            <img
              src={disable_stage_icon}
              alt="Content shoot"
              style={{
                width: "60px",
                height: "23px",
              }}
            />
          ) : (
            <img
              src={stage_icon}
              alt="Content shoot"
              style={{
                width: "60px",
                height: "23px",
              }}
            />
          )}
          <div
            style={{
              width: "1px" /* Thickness of the line */,
              height: "100%" /* Height of the line */,
              backgroundColor: "#9C9A9A",
              top: "-15%",
              position: "relative",
              left: "14%",
            }}
          ></div>
        </S.Left>
        <S.Right>
          <S.Header>Content shoot</S.Header>
          <S.StartDate>
            <S.DateTitle>Date:</S.DateTitle>{" "}
            {campaignDetails.content_shoot_date === null ? (
              <S.DisableDate>_ _ _ _ _ _ _ _ _ _ _ </S.DisableDate>
            ) : (
              <S.DateValue>{campaignDetails.content_shoot_date}</S.DateValue>
            )}
          </S.StartDate>
        </S.Right>
      </S.CampaignStage>
      <S.CampaignStage>
        <S.Left>
          {campaignDetails.content_draft === null ? (
            <img
              src={disable_stage_icon}
              alt="Draft approved"
              style={{
                width: "60px",
                height: "23px",
              }}
            />
          ) : (
            <img
              src={stage_icon}
              alt="Draft approved"
              style={{
                width: "60px",
                height: "23px",
              }}
            />
          )}
          <div
            style={{
              width: "1px" /* Thickness of the line */,
              height: "100%" /* Height of the line */,
              backgroundColor: "#9C9A9A",
              top: "-5%",
              position: "relative",
              left: "14%",
            }}
          ></div>
        </S.Left>
        <S.Right>
          <S.Header>Draft approved</S.Header>
          <S.StartDate>
            <S.DateTitle>Date:</S.DateTitle>{" "}
            {campaignDetails.content_draft === null ? (
              <S.DisableDate>_ _ _ _ _ _ _ _ _ _ _ </S.DisableDate>
            ) : (
              <S.DateValue>{campaignDetails?.content_draft?.date}</S.DateValue>
            )}
          </S.StartDate>

          <S.StartDate>
            <S.DateTitle>Billing Date:</S.DateTitle>{" "}
            {campaignDetails.content_draft == null ? (
              <S.DisableDate>_ _ _ _ _ _ _ _ _ _ _ </S.DisableDate>
            ) : (
              <S.DateValue>
                {
                  campaignDetails?.content_draft?.billing_info
                    ?.billing_payment_at
                }
              </S.DateValue>
            )}
          </S.StartDate>

          <S.StartDate>
            <S.DateTitle>Billing Amount:</S.DateTitle>{" "}
            {campaignDetails.content_draft === null ? (
              <S.DisableDate>_ _ _ _ _ _ _ _ _ _ _ </S.DisableDate>
            ) : (
              <S.AmountContainer>
                {campaignDetails?.content_draft?.billing_info?.billing_amount}
              </S.AmountContainer>
            )}
          </S.StartDate>

          <S.StartDate style={{ marginTop: "8px" }}>
            <S.DateTitle>Payment status:</S.DateTitle>{" "}
            {campaignDetails.content_draft === null ? (
              <S.DisableDate>_ _ _ _ _ _ _ _ _ _ _ </S.DisableDate>
            ) : (
              <S.PaymentStatus
                status={
                  campaignDetails?.content_draft?.billing_info
                    ?.billing_payment_status
                }
              >
                {getPaymentText(
                  campaignDetails?.content_draft?.billing_info
                    ?.billing_payment_status
                )}
              </S.PaymentStatus>
            )}
          </S.StartDate>
        </S.Right>
      </S.CampaignStage>

      <S.CampaignStage>
        <S.Left>
          {campaignDetails?.content_post === null ? (
            <img
              src={disable_stage_icon}
              alt="Content post"
              style={{
                width: "60px",
                height: "23px",
              }}
            />
          ) : (
            <img
              src={stage_icon}
              alt="Content post"
              style={{
                width: "60px",
                height: "23px",
              }}
            />
          )}
          <div
            style={{
              width: "1px" /* Thickness of the line */,
              height: "100%" /* Height of the line */,
              backgroundColor: "#9C9A9A",
              top: "-9%",
              position: "relative",
              left: "14%",
            }}
          ></div>
        </S.Left>
        <S.Right>
          <S.Header>Posted on social media</S.Header>
          <S.StartDate>
            <S.DateTitle>Date:</S.DateTitle>{" "}
            {campaignDetails.content_post === null ? (
              <S.DisableDate>_ _ _ _ _ _ _ _ _ _ _ </S.DisableDate>
            ) : (
              <S.DateValue>{campaignDetails?.content_post?.date}</S.DateValue>
            )}
          </S.StartDate>

          <S.StartDate>
            <S.DateTitle>Post Link:</S.DateTitle>{" "}
            <S.PostLinkContainer>
              {campaignDetails?.content_post?.insta_post_link ? (
                <img
                  src={instagram_icon}
                  alt="instagram"
                  onClick={() =>
                    window.open(campaignDetails?.content_post?.insta_post_link)
                  }
                  style={{
                    border: "1px solid #9F9F9F",
                    borderRadius: "8px",
                    padding: "12px",
                  }}
                  width="20px"
                  height="21px"
                />
              ) : null}
              {campaignDetails?.content_post?.yt_post_link ? (
                <img
                  src={youtube_icon}
                  onClick={() =>
                    window.open(
                      campaignDetails?.content_post?.youtube_post_link
                    )
                  }
                  alt="Youtube"
                  style={{
                    border: "1px solid #9F9F9F",
                    borderRadius: "8px",
                    padding: "12px",
                  }}
                  width="20px"
                  height="21px"
                />
              ) : null}
              {campaignDetails?.content_post?.fb_post_link ? (
                <img
                  src={facebook_icon}
                  onClick={() =>
                    window.open(campaignDetails?.content_post?.fb_post_link)
                  }
                  alt="Facebook"
                  style={{
                    border: "1px solid #9F9F9F",
                    borderRadius: "8px",
                    padding: "12px",
                  }}
                  width="20px"
                  height="21px"
                />
              ) : null}
            </S.PostLinkContainer>
          </S.StartDate>
        </S.Right>
      </S.CampaignStage>

      <S.CampaignStage>
        <S.Left>
          {campaignDetails?.first_billing == null ? (
            <img
              src={disable_stage_icon}
              alt="Day 2"
              style={{
                width: "60px",
                height: "23px",
              }}
            />
          ) : (
            <img
              src={stage_icon}
              alt="Day 2"
              style={{
                width: "60px",
                height: "23px",
              }}
            />
          )}
          <div
            style={{
              width: "1px" /* Thickness of the line */,
              height: "100%" /* Height of the line */,
              backgroundColor: "#9C9A9A",
              top: "-2.4%",
              position: "relative",
              left: "14%",
            }}
          ></div>
        </S.Left>
        <S.Right>
          <S.Header>Day 2 billing</S.Header>
          <S.StartDate>
            <S.DateTitle>Date:</S.DateTitle>{" "}
            {campaignDetails.first_billing === null ? (
              <S.DisableDate>_ _ _ _ _ _ _ _ _ _ _ </S.DisableDate>
            ) : (
              <S.DateValue>{campaignDetails?.first_billing?.date}</S.DateValue>
            )}
          </S.StartDate>
          <S.StartDate>
            <S.DateTitle>Billing Date:</S.DateTitle>{" "}
            {campaignDetails.first_billing === null ? (
              <S.DisableDate>_ _ _ _ _ _ _ _ _ _ _ </S.DisableDate>
            ) : (
              <S.DateValue>
                {
                  campaignDetails?.first_billing?.billing_info
                    ?.billing_payment_at
                }
              </S.DateValue>
            )}
          </S.StartDate>

          <S.StartDate>
            <S.DateTitle>Billing Amount:</S.DateTitle>{" "}
            {campaignDetails.first_billing === null ? (
              <S.DisableDate>_ _ _ _ _ _ _ _ _ _ _ </S.DisableDate>
            ) : (
              <S.AmountContainer>
                {campaignDetails?.first_billing?.billing_info?.billing_amount}
              </S.AmountContainer>
            )}
          </S.StartDate>

          <S.StartDate style={{ marginTop: "8px" }}>
            <S.DateTitle>Payment status:</S.DateTitle>{" "}
            {campaignDetails.first_billing === null ? (
              <S.DisableDate>_ _ _ _ _ _ _ _ _ _ _ </S.DisableDate>
            ) : (
              <S.PaymentStatus
                status={
                  campaignDetails?.first_billing?.billing_info
                    ?.billing_payment_status
                }
              >
                {getPaymentText(
                  campaignDetails?.first_billing?.billing_info
                    ?.billing_payment_status
                )}
              </S.PaymentStatus>
            )}
          </S.StartDate>

          <S.PostContainer>
            <S.DateTitle>Post Insights:</S.DateTitle>{" "}
            <S.PostInsightsViews>
              <S.FirstRow>
                <S.PostInsightsContainer>
                  <S.PostInsightsTitle>Views</S.PostInsightsTitle>
                  <S.PostInsightsVal>
                    {campaignDetails.first_billing === null ||
                    campaignDetails?.first_billing?.campaign_metrics?.views ===
                      null ? (
                      <S.DisableDate>_ _ _</S.DisableDate>
                    ) : (
                      campaignDetails?.first_billing?.campaign_metrics?.views
                    )}
                  </S.PostInsightsVal>
                </S.PostInsightsContainer>
                <S.PostInsightsContainer>
                  <S.PostInsightsTitle>Comments</S.PostInsightsTitle>
                  <S.PostInsightsVal>
                    {campaignDetails.first_billing === null ||
                    campaignDetails?.first_billing?.campaign_metrics
                      ?.comments === null ? (
                      <S.DisableDate>_ _ _</S.DisableDate>
                    ) : (
                      campaignDetails?.first_billing?.campaign_metrics?.comments
                    )}
                  </S.PostInsightsVal>
                </S.PostInsightsContainer>
              </S.FirstRow>
              <S.FirstRow>
                <S.PostInsightsContainer>
                  <S.PostInsightsTitle>Shares</S.PostInsightsTitle>
                  <S.PostInsightsVal>
                    {campaignDetails.first_billing === null ||
                    campaignDetails?.first_billing?.campaign_metrics?.shares ===
                      null ? (
                      <S.DisableDate>_ _ _</S.DisableDate>
                    ) : (
                      campaignDetails?.first_billing?.campaign_metrics?.shares
                    )}
                  </S.PostInsightsVal>
                </S.PostInsightsContainer>
                <S.PostInsightsContainer>
                  <S.PostInsightsTitle>Likes</S.PostInsightsTitle>
                  <S.PostInsightsVal>
                    {campaignDetails.first_billing === null ||
                    campaignDetails?.first_billing?.campaign_metrics?.likes ===
                      null ? (
                      <S.DisableDate>_ _ _</S.DisableDate>
                    ) : (
                      campaignDetails?.first_billing?.campaign_metrics?.likes
                    )}
                  </S.PostInsightsVal>
                </S.PostInsightsContainer>
              </S.FirstRow>
            </S.PostInsightsViews>
          </S.PostContainer>
        </S.Right>
      </S.CampaignStage>

      <S.CampaignStage>
        <S.Left>
          {campaignDetails.second_billing === null ? (
            <img
              src={disable_stage_icon}
              alt="Day 8"
              style={{
                width: "60px",
                height: "23px",
              }}
            />
          ) : (
            <img
              src={stage_icon}
              alt="Day 8"
              style={{
                width: "60px",
                height: "23px",
              }}
            />
          )}
          <div
            style={{
              width: "1px" /* Thickness of the line */,
              height: "97%" /* Height of the line */,
              backgroundColor: "#9C9A9A",
              top: "-2.3%",
              position: "relative",
              left: "14%",
            }}
          ></div>
        </S.Left>
        <S.Right>
          <S.Header>Day 8</S.Header>
          <S.StartDate>
            <S.DateTitle>Date:</S.DateTitle>{" "}
            {campaignDetails.second_billing === null ? (
              <S.DisableDate>_ _ _ _ _ _ _ _ _ _ _ </S.DisableDate>
            ) : (
              <S.DateValue>{campaignDetails?.second_billing?.date}</S.DateValue>
            )}
          </S.StartDate>

          <S.StartDate>
            <S.DateTitle>Billing Date:</S.DateTitle>{" "}
            {campaignDetails.second_billing === null ? (
              <S.DisableDate>_ _ _ _ _ _ _ _ _ _ _ </S.DisableDate>
            ) : (
              <S.DateValue>
                {
                  campaignDetails?.second_billing?.billing_info
                    ?.billing_payment_at
                }
              </S.DateValue>
            )}
          </S.StartDate>
          <S.StartDate>
            <S.DateTitle>Billing Amount:</S.DateTitle>{" "}
            {campaignDetails.second_billing == null ? (
              <S.DisableDate>_ _ _ _ _ _ _ _ _ _ _ </S.DisableDate>
            ) : (
              <S.AmountContainer>
                {campaignDetails?.second_billing?.billing_info?.billing_amount}
              </S.AmountContainer>
            )}
          </S.StartDate>
          <S.StartDate style={{ marginTop: "8px" }}>
            <S.DateTitle>Payment status:</S.DateTitle>{" "}
            {campaignDetails.second_billing === null ? (
              <S.DisableDate>_ _ _ _ _ _ _ _ _ _ _ </S.DisableDate>
            ) : (
              <S.PaymentStatus
                status={
                  campaignDetails?.second_billing?.billing_info
                    ?.billing_payment_status
                }
              >
                {getPaymentText(
                  campaignDetails?.second_billing?.billing_info
                    ?.billing_payment_status
                )}
              </S.PaymentStatus>
            )}
          </S.StartDate>

          <S.PostContainer>
            <S.DateTitle>Post Insights:</S.DateTitle>{" "}
            <S.PostInsightsViews>
              <S.FirstRow>
                <S.PostInsightsContainer>
                  <S.PostInsightsTitle>Views</S.PostInsightsTitle>
                  <S.PostInsightsVal>
                    {campaignDetails.second_billing === null ||
                    campaignDetails?.second_billing?.campaign_metrics?.views ==
                      null ? (
                      <S.DisableDate>_ _ _</S.DisableDate>
                    ) : (
                      campaignDetails?.second_billing?.campaign_metrics?.views
                    )}
                  </S.PostInsightsVal>
                </S.PostInsightsContainer>
                <S.PostInsightsContainer>
                  <S.PostInsightsTitle>Comments</S.PostInsightsTitle>
                  <S.PostInsightsVal>
                    {campaignDetails.second_billing == null ||
                    campaignDetails?.second_billing?.campaign_metrics
                      ?.comments == null ? (
                      <S.DisableDate>_ _ _</S.DisableDate>
                    ) : (
                      campaignDetails?.second_billing?.campaign_metrics
                        ?.comments
                    )}
                  </S.PostInsightsVal>
                </S.PostInsightsContainer>
              </S.FirstRow>
              <S.FirstRow>
                <S.PostInsightsContainer>
                  <S.PostInsightsTitle>Shares</S.PostInsightsTitle>
                  <S.PostInsightsVal>
                    {campaignDetails.second_billing === null ||
                    campaignDetails?.second_billing?.campaign_metrics
                      ?.shares === null ? (
                      <S.DisableDate>_ _ _</S.DisableDate>
                    ) : (
                      campaignDetails?.second_billing?.campaign_metrics?.shares
                    )}
                  </S.PostInsightsVal>
                </S.PostInsightsContainer>
                <S.PostInsightsContainer>
                  <S.PostInsightsTitle>Likes</S.PostInsightsTitle>
                  <S.PostInsightsVal>
                    {campaignDetails.second_billing === null ||
                    campaignDetails?.second_billing?.campaign_metrics?.likes ===
                      null ? (
                      <S.DisableDate>_ _ _</S.DisableDate>
                    ) : (
                      campaignDetails?.second_billing?.campaign_metrics?.likes
                    )}
                  </S.PostInsightsVal>
                </S.PostInsightsContainer>
              </S.FirstRow>
            </S.PostInsightsViews>
          </S.PostContainer>
        </S.Right>
      </S.CampaignStage>
    </S.Container>
  );
};

export default CampaignStages;
