import React from "react";
import * as S from "./ListingPage.style";
// import Filters from "../Filters/Filters.tsx";
import InfluencerPagination from "../InfluencerPagination/InfluencerPagination.tsx";

const ListingPage = ({
  niche,
  city,
  followers,
  platform,
  budget,
  handlePreviousPage,
  handleNextPage,
}) => {
  return (
    <S.Container>
      <InfluencerPagination
        niche={niche}
        city={city}
        followers={followers}
        platform={platform}
        budget={budget}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
      />
    </S.Container>
  );
};

export default ListingPage;
