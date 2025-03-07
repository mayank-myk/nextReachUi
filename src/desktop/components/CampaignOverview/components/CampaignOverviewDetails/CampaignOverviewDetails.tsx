import React from "react";
import * as S from "./CampaignOverviewDetails.style.js";

const CampaignOverviewDetails = ({ pendingDeliverables, postInsights }) => {
  return (
    <S.Container>
      {pendingDeliverables && pendingDeliverables.length > 0 && (
        <S.OverviewDetails>
          <S.OverviewHeading>Pending Deliverables</S.OverviewHeading>
          <S.OverviewPoints>
            <ul>
              {pendingDeliverables &&
                pendingDeliverables.map((pendingDeliverable, ind) => {
                  return (
                    <li key={`pendingDeliverable_${ind}`}>
                      {pendingDeliverable}
                    </li>
                  );
                })}
            </ul>
          </S.OverviewPoints>
        </S.OverviewDetails>
      )}
      {postInsights && postInsights.length > 0 && (
        <S.OverviewDetails>
          <S.OverviewHeading>Post insights</S.OverviewHeading>
          <S.OverviewPoints>
            <ul>
              {postInsights &&
                postInsights.length > 0 &&
                postInsights.map((postInsight, ind) => {
                  return <li key={`postInsight_${ind}`}>{postInsight}</li>;
                })}
            </ul>
          </S.OverviewPoints>
        </S.OverviewDetails>
      )}
    </S.Container>
  );
};

export default CampaignOverviewDetails;
