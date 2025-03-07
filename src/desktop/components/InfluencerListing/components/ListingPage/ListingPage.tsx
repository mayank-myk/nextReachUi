import React, { useEffect, useState } from "react";
import * as S from "./ListingPage.style";
import Filters from "../Filters/Filters.tsx";
import InfluencerPagination from "../InfluencerPagination/InfluencerPagination.tsx";
import { useDispatch, useSelector } from "react-redux";
// import Loader from "../../../../common/Loader/Loader.tsx";
// import { getContentPrice } from "../../../../../redux/selectors/influencerListingSelector.js";
import {
  setContentPrice,
  setInfluencerListingFilters,
  setQueryString,
} from "../../../../../redux/actions/influencerListingActions.js";
import {
  getContentPrice,
  getInfluencersListingFilters,
  getQueryString,
} from "../../../../../redux/selectors/influencerListingSelector.js";

const ListingPage = ({
  handlePreviousPage,
  handleNextPage,
  handleSortByChange,
}) => {
  // const [loading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  // const content_price = useSelector(getContentPrice) || "";
  const filters_applied = useSelector(getInfluencersListingFilters) || {};
  const queryString = useSelector(getQueryString) || "";
  const budget = useSelector(getContentPrice) || "";
  // console.log("### filters_applied", filters_applied.budget);
  const [activeContentPrice, setActiveContentPrice] = useState(
    filters_applied.budget
  );

  useEffect(() => {
    setActiveContentPrice(filters_applied.budget);
  }, [filters_applied.budget]);

  const handleContentPrice = (key) => {
    if (queryString.includes("&budget")) {
      let queryStr = queryString.replace(`&budget=${budget}`, "");
      queryStr = queryStr + `&budget=${key}`;
      dispatch(setQueryString(queryStr));
    } else if (queryString.includes("budget")) {
      let queryStr = queryString.replace(`budget=${budget}`, "");
      queryStr = queryStr + `&budget=${key}`;
      dispatch(setQueryString(queryStr));
    } else {
      let queryStr = queryString + `&budget=${key}`;
      dispatch(setQueryString(queryStr));
    }
    setActiveContentPrice(key);
    dispatch(setContentPrice(key));
    dispatch(setInfluencerListingFilters({ budget: key }));
  };

  const clearContentPriceFilters = () => {
    dispatch(setContentPrice(""));
    setActiveContentPrice("");
  };

  return (
    <S.Container>
      {/* {loading && <Loader />} */}
      <Filters
        activeContentPrice={activeContentPrice}
        clearContentPriceFilters={clearContentPriceFilters}
        // setIsLoading={setIsLoading}
        handleSortByChange={handleSortByChange}
      />
      <InfluencerPagination
        activeContentPrice={activeContentPrice}
        handleContentPrice={handleContentPrice}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
      />
    </S.Container>
  );
};

export default ListingPage;
