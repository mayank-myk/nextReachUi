import React from "react";
import coin_icon from "../../../../../assets/icons/coin_icon_4.png";
import previous_icon from "../../../../../assets/InfluencerListing/icons/previous_icon.svg";
import next_icon from "../../../../../assets/InfluencerListing/icons/next_icon.svg";
import * as S from "./InfluencerPagination.style";
import InfluencerCard from "../InflucenerCard/InfluencerCard.tsx";
import { getInfluencersListing } from "../../../../../redux/selectors/influencerListingSelector.js";
import { useSelector } from "react-redux";
import { Budget } from "../../../../constants/constants.js";

const InfluencerPagination = ({
  activeContentPrice,
  handleContentPrice,
  handlePreviousPage,
  handleNextPage,
}) => {
  const influencerListing = useSelector(getInfluencersListing);

  const {
    matched_influencer_list,
    unmatched_influencer_list,
    coin_balance,
    page_number,
    result_start_number,
    result_end_number,
    result_total_count,
    result_count_further_page,
  } = influencerListing || {};

  if (!influencerListing) return;

  return (
    <S.Container>
      <S.TopHeader>
        <S.Header>
          <S.CoinBalanceContainer>
            <S.CoinBalanceText>Coin Balance</S.CoinBalanceText>
            <S.CoinPriceContainer>
              <img
                src={coin_icon}
                alt="coin_icon"
                width={"21px"}
                height={"21px"}
              />
              <S.Price> {coin_balance}</S.Price>
            </S.CoinPriceContainer>
          </S.CoinBalanceContainer>
          <S.ShowingResultContainer>
            Showing {result_start_number}-{result_end_number} out of{" "}
            {result_total_count} matches
          </S.ShowingResultContainer>
        </S.Header>
        <S.ContentPriceHeader>
          <S.CommonFilter style={{ backgroundColor: "#9f9F9f" }}>
            Budget
          </S.CommonFilter>
          {Object.entries(Budget).map(([key, val], ind) => {
            return (
              <S.CommonFilter
                key={`content_price_${key}`}
                active={activeContentPrice === key}
                onClick={() => handleContentPrice(key)}
                style={{ cursor: "pointer" }}
              >
                {val}
              </S.CommonFilter>
            );
          })}
        </S.ContentPriceHeader>
      </S.TopHeader>

      <S.InfluencerPaginationView>
        {matched_influencer_list &&
          matched_influencer_list.length > 0 &&
          matched_influencer_list.map((influencer) => {
            return <InfluencerCard influencer={influencer} />;
          })}
      </S.InfluencerPaginationView>

      {page_number === 1 && matched_influencer_list.length === 0 && (
        <div
          style={{
            textAlign: "center",
            marginBottom: "3rem",
            color: "rgb(230, 106, 68)",
            fontFamily: "Avenir Next LT Pro",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
          }}
        >
          Looks like no influencers match your selected filters.
        </div>
      )}

      {unmatched_influencer_list && unmatched_influencer_list.length > 0 && (
        <>
          <div style={{ fontSize: "28px" }}>
            Here are some additional influencer suggestions you might find
            interesting!
          </div>
          <S.InfluencerPaginationView style={{ padding: "1rem 0" }}>
            {unmatched_influencer_list.map((influencer) => {
              return <InfluencerCard influencer={influencer} />;
            })}
          </S.InfluencerPaginationView>
        </>
      )}

      {result_total_count === 0 ? (
        <h2 style={{ textAlign: "center" }}>
          No matched results found. Try removing some filters to broaden your
          search.
        </h2>
      ) : (
        <S.PaginationFooter>
          <S.PreviousBtn
            disabled={page_number === 1}
            onClick={handlePreviousPage}
          >
            {page_number === 1 ? (
              <span>&lt;</span>
            ) : (
              <img src={previous_icon} alt="Previous icon" />
            )}
            Previous
          </S.PreviousBtn>
          <S.ActivePage>Page {page_number}</S.ActivePage>
          <S.NextBtn
            disabled={result_count_further_page === 0}
            onClick={handleNextPage}
          >
            Next
            {result_count_further_page === 0 ? (
              <span>&gt;</span>
            ) : (
              <img src={next_icon} alt="Next icon" />
            )}
          </S.NextBtn>
        </S.PaginationFooter>
      )}
      {/* <ModalPopup
        isOpen={isModalOpen}
        onClose={closeModal}
        buttonText={"Login/Signup"}
        status={"error"}
        heading={"Login Required"}
        subText={
          "Please log in to view the influencer list and start collaborating."
        }
      /> */}
    </S.Container>
  );
};

export default InfluencerPagination;
