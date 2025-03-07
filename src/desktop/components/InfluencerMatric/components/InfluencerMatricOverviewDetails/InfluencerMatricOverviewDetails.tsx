import React from "react";
import * as S from "./InfluencerMatricOverviewDetails.style.js";

const InfluencerMatricOverviewDetails = ({
  deliverablesList,
  contentLanguages,
}) => {
  return (
    <S.Container>
      {deliverablesList && deliverablesList.length > 0 && (
        <S.OverviewDetails>
          <S.OverviewHeading>Deliverables List</S.OverviewHeading>
          <S.OverviewPoints>
            <ul>
              {deliverablesList &&
                deliverablesList.map((deliverable, ind) => {
                  return <li key={`deliverable_${ind}`}>{deliverable}</li>;
                })}
            </ul>
          </S.OverviewPoints>
        </S.OverviewDetails>
      )}
      {contentLanguages && contentLanguages.length > 0 && (
        <S.OverviewDetails>
          <S.OverviewHeading>Content Languages</S.OverviewHeading>
          <S.OverviewPoints>
            <ul>
              {contentLanguages &&
                contentLanguages.length > 0 &&
                contentLanguages.map((contentLanguage, ind) => {
                  return (
                    <li key={`content_language_${ind}`}>{contentLanguage}</li>
                  );
                })}
            </ul>
          </S.OverviewPoints>
        </S.OverviewDetails>
      )}
    </S.Container>
  );
};

export default InfluencerMatricOverviewDetails;
