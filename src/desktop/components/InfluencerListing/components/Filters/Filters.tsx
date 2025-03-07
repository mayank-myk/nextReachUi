import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import * as S from "./Filters.style";
import {
  // Age,
  AverageView,
  City,
  CollabType,
  EngagementRate,
  FollowersCount,
  Gender,
  Niche,
  Platform,
  // Rating,
  ReachPrice,
  SortApplied,
  Language,
} from "../../../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  resetInfluencerListingFilters,
  // setInfluencerListing,
  // setInfluencerListingFilters,
  setQueryString,
} from "../../../../../redux/actions/influencerListingActions";
// import { userIdSelector } from "../../../../../redux/selectors/profileDetailsSelector";
import {
  // getContentPrice,
  // getContentPrice,
  getInfluencersListing,
  getInfluencersListingFilters,
  getQueryString,
  // getPageNoSelector,
} from "../../../../../redux/selectors/influencerListingSelector";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { OutlinedInput } from "@mui/material";

const Filters = ({
  // niche: prevNiche,
  // city: prevCity,
  // follower_count: prevFollowers,
  // platform: prevPlatform,
  // budget: prevBudget,
  activeContentPrice,
  clearContentPriceFilters,
  handleSortByChange,
  // setIsLoading,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const userId = useSelector(userIdSelector);
  const filters_applied = useSelector(getInfluencersListingFilters) || {};
  console.log("!!! 1 filters_applied", filters_applied);
  const queryString = useSelector(getQueryString) || "";
  let {
    niche = [],
    city,
    reach_price = [],
    follower_count = [],
    avg_views = [],
    engagement,
    platform,
    languages = [],
    gender,
    collab_type,
  } = filters_applied;
  // const content_price = useSelector(getContentPrice) || "";
  // const [niche, setNiche] = useState(prevNiche ? [prevNiche] : []);
  // const [city, setCity] = useState(prevCity);
  // const [reach_price, setReachPrice] = useState("");
  // const [follower_count, setFollowers] = useState(prevFollowers);
  // const [avg_views, setAverageView] = useState("");
  // const [engagement, setEngagementRate] = useState("");
  // const [platform, setPlatform] = useState(prevPlatform);
  // const [collab_type, setCollabType] = useState("");
  // const [gender, setGender] = useState("");
  // const [budget, setBudget] = useState(prevBudget);
  // const [age, setAge] = useState();
  // const [rating, setRating] = useState();
  // const [languages, setLanguages] = useState([]);
  // const [selectedOption, setSelectedOption] = useState("RECOMMENDED");
  const influencerListing = useSelector(getInfluencersListing);
  const [isClearAllVisible, setIsClearAllVisible] = useState(false);

  const { sorting_applied = "" } = influencerListing || {};
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  // const [queryString, setQueryString] = useState("");

  // const [params, setParams] = useState({});
  const [isOptionVisible, setIsOptionVisible] = useState({
    niche: true,
    city: true,
    reach_price: true,
    follower_count: true,
    avg_views: true,
    engagement: true,
    platform: true,
    collab_type: true,
    gender: true,
    age: true,
    rating: true,
    languages: true,
  });

  useEffect(() => {
    navigate(`?${queryString}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryString]);

  useEffect(() => {
    if (
      (niche && niche.length > 0) ||
      city ||
      (reach_price && reach_price.length > 0) ||
      (avg_views && avg_views.length > 0) ||
      platform ||
      (follower_count && follower_count.length > 0) ||
      engagement ||
      collab_type ||
      gender ||
      (languages && languages.length > 0) ||
      activeContentPrice
    ) {
      setIsClearAllVisible(true);
    } else {
      setIsClearAllVisible(false);
    }
  }, [
    niche,
    city,
    reach_price,
    avg_views,
    platform,
    follower_count,
    engagement,
    collab_type,
    gender,
    languages,
    activeContentPrice,
  ]);

  const handleNicheCheckboxChange = (event, key) => {
    if (event.target.checked) {
      // checkbox checked
      let queryStr = queryString + `&niche=${key}`;
      dispatch(setQueryString(queryStr));
    } else {
      // checkbox unchecked
      let queryStr = queryString.replace(`&niche=${key}`, "");
      dispatch(setQueryString(queryStr));
    }
  };

  const handleReachPriceChange = (event, key) => {
    if (event.target.checked) {
      // checkbox checked
      let queryStr = queryString + `&reach_price=${key}`;
      dispatch(setQueryString(queryStr));
    } else {
      // checkbox unchecked
      let queryStr = queryString.replace(`reach_price=${key}`, "");
      dispatch(setQueryString(queryStr));
    }
  };

  const handleFollowerCountChange = (event, key) => {
    if (event.target.checked) {
      // checkbox checked
      let queryStr = queryString + `&follower_count=${key}`;
      dispatch(setQueryString(queryStr));
    } else {
      // checkbox unchecked
      let queryStr = queryString.replace(`&follower_count=${key}`, "");
      dispatch(setQueryString(queryStr));
    }
  };

  const handleAvgViewsChange = (event, key) => {
    if (event.target.checked) {
      // checkbox checked
      let queryStr = queryString + `&avg_views=${key}`;
      dispatch(setQueryString(queryStr));
    } else {
      // checkbox unchecked
      let queryStr = queryString.replace(`&avg_views=${key}`, "");
      dispatch(setQueryString(queryStr));
    }
  };

  const handleLanguagesCheckboxChange = (event, key) => {
    if (event.target.checked) {
      // checkbox checked
      let queryStr = queryString + `&languages=${key}`;
      dispatch(setQueryString(queryStr));
    } else {
      // checkbox unchecked
      let queryStr = queryString.replace(`languages=${key}`, "");
      dispatch(setQueryString(queryStr));
    }
  };

  const handleChange = (event, key) => {
    let value = event.target.value;
    if (key === "city") {
      // dispatch(setInfluencerListingFilters({ city: value }));
      if (queryString.includes("city")) {
        const prevCity = filters_applied.city || "";

        let queryStr = queryString.replace(`city=${prevCity}`, "");
        queryStr = queryStr + `city=${value}`;
        dispatch(setQueryString(queryStr));
      } else {
        let queryStr = queryString + `&city=${value}`;
        dispatch(setQueryString(queryStr));
      }
    } else if (key === "engagement") {
      // dispatch(setInfluencerListingFilters({ engagement: value }));
      if (queryString.includes("engagement")) {
        const prevVal = filters_applied.engagement || "";

        let queryStr = queryString.replace(`engagement=${prevVal}`, "");
        queryStr = queryStr + `engagement=${value}`;
        dispatch(setQueryString(queryStr));
      } else {
        let queryStr = queryString + `&engagement=${value}`;
        dispatch(setQueryString(queryStr));
      }
    } else if (key === "platform") {
      // dispatch(setInfluencerListingFilters({ platform: value }));
      if (queryString.includes("platform")) {
        const prevVal = filters_applied.platform || "";

        let queryStr = queryString.replace(`platform=${prevVal}`, "");
        queryStr = queryStr + `platform=${value}`;
        dispatch(setQueryString(queryStr));
      } else {
        let queryStr = queryString + `&platform=${value}`;
        dispatch(setQueryString(queryStr));
      }
    } else if (key === "collab_type") {
      // dispatch(setInfluencerListingFilters({ collab_type: value }));
      if (queryString.includes("collab_type")) {
        const prevVal = filters_applied.platform || "";

        let queryStr = queryString.replace(`collab_type=${prevVal}`, "");
        queryStr = queryStr + `collab_type=${value}`;
        dispatch(setQueryString(queryStr));
      } else {
        let queryStr = queryString + `&collab_type=${value}`;
        dispatch(setQueryString(queryStr));
      }
    } else if (key === "gender") {
      // dispatch(setInfluencerListingFilters({ gender: value }));
      if (queryString.includes("gender")) {
        const prevVal = filters_applied.platform || "";

        let queryStr = queryString.replace(`gender=${prevVal}`, "");
        queryStr = queryStr + `gender=${value}`;
        dispatch(setQueryString(queryStr));
      } else {
        let queryStr = queryString + `&gender=${value}`;
        dispatch(setQueryString(queryStr));
      }
    }
  };

  // useEffect(() => {
  //   if (city) {
  //     setParams((prevParams) => ({
  //       ...prevParams,
  //       city: city,
  //     }));
  //   }
  //   if (reach_price) {
  //     setParams((prevParams) => ({
  //       ...prevParams,
  //       reach_price: reach_price,
  //     }));
  //   }
  //   if (follower_count) {
  //     setParams((prevParams) => ({
  //       ...prevParams,
  //       follower_count: follower_count,
  //     }));
  //   }
  //   if (avg_views) {
  //     setParams((prevParams) => ({
  //       ...prevParams,
  //       avg_views: avg_views,
  //     }));
  //   }
  //   if (engagement) {
  //     setParams((prevParams) => ({
  //       ...prevParams,
  //       engagement: engagement,
  //     }));
  //   }
  //   if (platform) {
  //     setParams((prevParams) => ({
  //       ...prevParams,
  //       platform: platform,
  //     }));
  //   }
  //   if (collab_type) {
  //     setParams((prevParams) => ({
  //       ...prevParams,
  //       collab_type: collab_type,
  //     }));
  //   }
  //   if (gender) {
  //     setParams((prevParams) => ({
  //       ...prevParams,
  //       gender: gender,
  //     }));
  //   }
  //   if (budget) {
  //     setParams((prevParams) => ({
  //       ...prevParams,
  //       budget: budget,
  //     }));
  //   }
  // }, [
  //   city,
  //   reach_price,
  //   follower_count,
  //   avg_views,
  //   engagement,
  //   platform,
  //   collab_type,
  //   gender,
  //   budget,
  // ]);

  // useEffect(() => {
  //   let queryString = Object.keys(params)
  //     .map(
  //       (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
  //     )
  //     .join("&");

  //   const nicheString =
  //     niche && niche.length > 0
  //       ? niche.map((eachNiche) => `niche=${eachNiche}`).join("&")
  //       : "";

  //   const languageString =
  //     languages && languages.length > 0
  //       ? languages.map((language) => `languages=${language}`).join("&")
  //       : "";

  //   if (selectedOption) {
  //     queryString += `&sort_applied=${selectedOption}`;
  //   }

  //   setIsLoading(true);
  //   fetch(
  //     `https://nextreach-backend-fxdmcnbgf3gsesht.southindia-01.azurewebsites.net/v1/web/influencer/discover?client_id=${
  //       userId ? userId : 1
  //     }&page_number=${page_number}&page_size=20&${nicheString}&${queryString}&${languageString}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         accept: "application/json",
  //       },
  //     }
  //   )
  //     .then((response) => {
  //       setIsLoading(false);
  //       if (response?.status === 200) return response.json();
  //     })
  //     .then((response) => {
  //       setIsLoading(false);
  //       dispatch(setInfluencerListing({ ...response }));
  //     })
  //     .catch((err) => {
  //       setIsLoading(false);
  //     });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [params, niche, selectedOption, page_number, userId, languages]);

  const clearAllFilters = () => {
    // setParams({});
    dispatch(setQueryString(""));
    clearContentPriceFilters();
    dispatch(resetInfluencerListingFilters());
    // setNiche([]);
    // setCity("");
    // setReachPrice("");
    // setFollowers("");
    // setAverageView("");
    // setEngagementRate("");
    // setPlatform("");
    // setCollabType("");
    // setGender("");
    // setLanguages([]);

    // setBudget("");
  };

  return (
    <S.Filters>
      {/* <S.SortByContainer>
        Sort By: Recommended
        {isDropdownOpen ? (
          <ExpandLessIcon
            fontSize="large"
            onClick={toggleDropdown}
            // onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}
          />
        ) : (
          <ExpandMoreIcon onClick={toggleDropdown} fontSize="large" />
        )} */}
      {/* <S.DropdownMenu isOpen={isDropdownOpen}>
          <S.DropdownItemSelected>
            Sort By: Recommended
            <ExpandLessIcon
              fontSize="large"
              onClick={toggleDropdown}
              // onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}
            />
          </S.DropdownItemSelected>
          <S.DropdownItem>Recommended</S.DropdownItem>
          <S.DropdownItem>Whats new</S.DropdownItem>
          <S.DropdownItem>Popularity</S.DropdownItem>
          <S.DropdownItem>Better Discount</S.DropdownItem>
          <S.DropdownItem>Price: High to Low</S.DropdownItem>
          <S.DropdownItem>Customer Rating</S.DropdownItem>
        </S.DropdownMenu> */}
      <FormControl sx={{ m: 1, minWidth: 120, width: "410px" }} size="small">
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Niche"
          displayEmpty
          value={sorting_applied}
          onChange={handleSortByChange}
          input={<OutlinedInput />}
          inputProps={{ "aria-label": "Without label" }}
          aria-placeholder="Select Your Niche"
          MenuProps={{
            PaperProps: {
              sx: {
                "& .MuiList-root": {
                  paddingTop: 0, // Remove padding-top
                  paddingBottom: 0,
                  border: "none",
                },
                "& .MuiSelect-root:focus": {
                  border: "none", // Remove the blue border on focus
                },
                borderRadius: "0 0 12px 12px",
              },
            },
          }}
          sx={{
            color: "#333",
            fontFamily: "Avenir Next LT Pro",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "400",
            borderRadius: "12px",
            lineHeight: "normal !important",
            ".MuiSelect-select": {
              minHeight: "unset",
            },
            ".MuiInputBase-input": {
              minHeight: "unset",
            },
            ".MuiOutlinedInput-input": {
              minHeight: "unset",
            },
          }}
          renderValue={(selected) => {
            if (!selected) {
              return <em>Select Your Niche</em>;
            }
            return (
              <div
                style={{
                  color: "#333",
                  fontFamily: "Avenir Next LT Pro",
                  fontSize: "22px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "normal",
                }}
              >
                Sort by: {SortApplied[sorting_applied]}
              </div>
            );
          }}
        >
          {Object.entries(SortApplied).map(([key, val]) => {
            return (
              <MenuItem
                sx={
                  {
                    // backgroundColor: "rgba(230, 106, 68, 0.09)",
                  }
                }
                value={key}
                style={{
                  color: "#333",
                  fontFamily: "Avenir Next LT Pro",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                  backgroundColor: "#FFF",
                  padding: "14px",
                }}
              >
                {val}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      {/* <S.DropdownContainer>
        <S.Select value={selectedOption} onChange={handleSortByChange}>
          {Object.entries(SortApplied).map(([key, val]) => {
            return <S.Option value={key}>{val}</S.Option>;
          })}
        </S.Select>
      </S.DropdownContainer> */}
      {/* </S.SortByContainer> */}

      <S.FilterView>
        <S.FilterContainer>
          <S.FilterTitleContainer>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                cursor: "pointer",
                // borderBottom: "1px solid #9F9F9F",
                // paddingBottom: "1rem",
              }}
            >
              <S.FilterTitle style={{ fontWeight: "700" }}>
                FILTERS
              </S.FilterTitle>
              {isClearAllVisible && (
                <S.ClearAll onClick={clearAllFilters}>CLEAR ALL</S.ClearAll>
              )}
            </div>
          </S.FilterTitleContainer>{" "}
        </S.FilterContainer>

        <S.FilterContainer>
          <S.FilterTitleContainer>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
              onClick={() =>
                setIsOptionVisible((prevs) => ({
                  ...prevs,
                  niche: !prevs["niche"],
                }))
              }
            >
              <S.FilterTitle>NICHE</S.FilterTitle>
              {!isOptionVisible["niche"] ? (
                <ExpandMoreIcon />
              ) : (
                <ExpandLessIcon />
              )}
            </div>
          </S.FilterTitleContainer>
          {isOptionVisible["niche"] ? (
            <S.FilterOptions>
              {Object.entries(Niche).map(([key, val]) => {
                return (
                  <label style={{ cursor: "pointer" }}>
                    <input
                      type="checkbox"
                      name="niche"
                      value={key}
                      checked={niche && niche.includes(key)}
                      onChange={(event) =>
                        handleNicheCheckboxChange(event, key)
                      }
                    />{" "}
                    {val}
                  </label>
                );
              })}
            </S.FilterOptions>
          ) : null}
        </S.FilterContainer>

        <S.FilterContainer>
          <S.FilterTitleContainer>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
              onClick={() =>
                setIsOptionVisible((prevs) => ({
                  ...prevs,
                  city: !prevs["city"],
                }))
              }
            >
              <S.FilterTitle>Region</S.FilterTitle>
              {!isOptionVisible["city"] ? (
                <ExpandMoreIcon />
              ) : (
                <ExpandLessIcon />
              )}
            </div>
          </S.FilterTitleContainer>
          {isOptionVisible["city"] ? (
            <S.FilterOptions>
              {Object.entries(City).map(([key, val]) => {
                return (
                  <label style={{ cursor: "pointer" }}>
                    <input
                      type="radio"
                      name="city"
                      value={key}
                      checked={city === key}
                      onChange={(event) => handleChange(event, "city")}
                    />{" "}
                    {val}
                  </label>
                );
              })}
            </S.FilterOptions>
          ) : null}
        </S.FilterContainer>

        <S.FilterContainer>
          <S.FilterTitleContainer>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
              onClick={() => {
                setIsOptionVisible((prevs) => ({
                  ...prevs,
                  reach_price: !prevs["reach_price"],
                }));
              }}
            >
              <S.FilterTitle>Reach price</S.FilterTitle>
              {!isOptionVisible["reach_price"] ? (
                <ExpandMoreIcon />
              ) : (
                <ExpandLessIcon />
              )}
            </div>
          </S.FilterTitleContainer>

          {isOptionVisible["reach_price"] ? (
            <S.FilterOptions>
              {Object.entries(ReachPrice).map(([key, val]) => {
                return (
                  <label style={{ cursor: "pointer" }}>
                    <input
                      type="checkbox"
                      name="reach_price"
                      value={key}
                      checked={reach_price && reach_price.includes(key)}
                      onChange={(event) => handleReachPriceChange(event, key)}
                    />{" "}
                    {val}
                  </label>
                );
              })}
            </S.FilterOptions>
          ) : null}
        </S.FilterContainer>

        <S.FilterContainer>
          <S.FilterTitleContainer>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
              onClick={() => {
                setIsOptionVisible((prevs) => ({
                  ...prevs,
                  follower_count: !prevs["follower_count"],
                }));
              }}
            >
              <S.FilterTitle>Followers</S.FilterTitle>
              {!isOptionVisible["follower_count"] ? (
                <ExpandMoreIcon />
              ) : (
                <ExpandLessIcon />
              )}
            </div>
          </S.FilterTitleContainer>

          {isOptionVisible["follower_count"] ? (
            <S.FilterOptions>
              {Object.entries(FollowersCount).map(([key, val]) => {
                return (
                  <label style={{ cursor: "pointer" }}>
                    <label style={{ cursor: "pointer" }}>
                      <input
                        type="checkbox"
                        name="follower_count"
                        value={key}
                        checked={follower_count && follower_count.includes(key)}
                        onChange={(event) =>
                          handleFollowerCountChange(event, key)
                        }
                      />{" "}
                      {val}
                    </label>
                  </label>
                );
              })}
            </S.FilterOptions>
          ) : null}
        </S.FilterContainer>

        <S.FilterContainer>
          <S.FilterTitleContainer>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
              onClick={() => {
                setIsOptionVisible((prevs) => ({
                  ...prevs,
                  avg_views: !prevs["avg_views"],
                }));
              }}
            >
              <S.FilterTitle>Average View</S.FilterTitle>
              {!isOptionVisible["avg_views"] ? (
                <ExpandMoreIcon />
              ) : (
                <ExpandLessIcon />
              )}
            </div>
          </S.FilterTitleContainer>

          {isOptionVisible["avg_views"] ? (
            <S.FilterOptions>
              {Object.entries(AverageView).map(([key, val]) => {
                return (
                  <label style={{ cursor: "pointer" }}>
                    <input
                      type="checkbox"
                      name="avg_views"
                      value={key}
                      checked={avg_views && avg_views.includes(key)}
                      onChange={(event) => handleAvgViewsChange(event, key)}
                    />{" "}
                    {val}
                  </label>
                );
              })}
            </S.FilterOptions>
          ) : null}
        </S.FilterContainer>

        <S.FilterContainer>
          <S.FilterTitleContainer>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
              onClick={() => {
                setIsOptionVisible((prevs) => ({
                  ...prevs,
                  engagement: !prevs["engagement"],
                }));
              }}
            >
              <S.FilterTitle>Engagement %</S.FilterTitle>
              {!isOptionVisible["engagement"] ? (
                <ExpandMoreIcon />
              ) : (
                <ExpandLessIcon />
              )}
            </div>
          </S.FilterTitleContainer>
          {isOptionVisible["engagement"] ? (
            <S.FilterOptions>
              {Object.entries(EngagementRate).map(([key, val]) => {
                return (
                  <label style={{ cursor: "pointer" }}>
                    <input
                      type="radio"
                      name="engagement"
                      value={key}
                      checked={engagement === key}
                      onChange={(event) => handleChange(event, "engagement")}
                    />{" "}
                    {val}
                  </label>
                );
              })}
            </S.FilterOptions>
          ) : null}
        </S.FilterContainer>

        <S.FilterContainer>
          <S.FilterTitleContainer>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
              onClick={() => {
                setIsOptionVisible((prevs) => ({
                  ...prevs,
                  platform: !prevs["platform"],
                }));
              }}
            >
              <S.FilterTitle>Platform</S.FilterTitle>
              {!isOptionVisible["platform"] ? (
                <ExpandMoreIcon />
              ) : (
                <ExpandLessIcon />
              )}
            </div>
          </S.FilterTitleContainer>

          {isOptionVisible["platform"] ? (
            <S.FilterOptions>
              {Object.entries(Platform).map(([key, val]) => {
                return (
                  <label style={{ cursor: "pointer" }}>
                    <input
                      type="radio"
                      name="platform"
                      value={key}
                      checked={platform === key}
                      onChange={(event) => handleChange(event, "platform")}
                    />{" "}
                    {val}
                  </label>
                );
              })}
            </S.FilterOptions>
          ) : null}
        </S.FilterContainer>

        <S.FilterContainer>
          <S.FilterTitleContainer>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
              onClick={() => {
                setIsOptionVisible((prevs) => ({
                  ...prevs,
                  collab_type: !prevs["collab_type"],
                }));
              }}
            >
              <S.FilterTitle>TYPE</S.FilterTitle>
              {!isOptionVisible["collab_type"] ? (
                <ExpandMoreIcon />
              ) : (
                <ExpandLessIcon />
              )}
            </div>
          </S.FilterTitleContainer>

          {isOptionVisible["collab_type"] ? (
            <S.FilterOptions>
              {Object.entries(CollabType).map(([key, val]) => {
                return (
                  <label style={{ cursor: "pointer" }}>
                    <input
                      type="radio"
                      name="collab_type"
                      value={key}
                      checked={collab_type === key}
                      onChange={(event) => handleChange(event, "collab_type")}
                    />{" "}
                    {val}
                  </label>
                );
              })}
            </S.FilterOptions>
          ) : null}
        </S.FilterContainer>

        <S.FilterContainer>
          <S.FilterTitleContainer>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
              onClick={() => {
                setIsOptionVisible((prevs) => ({
                  ...prevs,
                  gender: !prevs["gender"],
                }));
              }}
            >
              <S.FilterTitle>Gender</S.FilterTitle>
              {!isOptionVisible["gender"] ? (
                <ExpandMoreIcon />
              ) : (
                <ExpandLessIcon />
              )}
            </div>
          </S.FilterTitleContainer>
          {isOptionVisible["gender"] ? (
            <S.FilterOptions>
              {Object.entries(Gender).map(([key, val]) => {
                return (
                  <label style={{ cursor: "pointer" }}>
                    <input
                      type="radio"
                      name="gender"
                      value={key}
                      checked={gender === key}
                      onChange={(event) => handleChange(event, "gender")}
                    />{" "}
                    {val}
                  </label>
                );
              })}
            </S.FilterOptions>
          ) : null}
        </S.FilterContainer>

        {/* <S.FilterContainer>
        <S.FilterTitleContainer>
          <S.FilterTitle>Age</S.FilterTitle>
          {!isOptionVisible["age"] ? (
            <ExpandMoreIcon
              onClick={() =>
                setIsOptionVisible((prevs) => ({
                  ...prevs,
                  age: !prevs["age"],
                }))
              }
            />
          ) : (
            <ExpandLessIcon
              onClick={() =>
                setIsOptionVisible((prevs) => ({
                  ...prevs,
                  age: !prevs["age"],
                }))
              }
            />
          )}
        </S.FilterTitleContainer>

        {isOptionVisible["age"] ? (
          <S.FilterOptions>
            {Object.entries(Age).map(([key, val]) => {
              return (
                <label>
                  <input
                    type="radio"
                    name="age"
                    value={key}
                    checked={age === key}
                    onChange={(event) => handleChange(event, "age")}
                  />
                  {val}
                </label>
              );
            })}
          </S.FilterOptions>
        ) : null}
      </S.FilterContainer>

      <S.FilterContainer>
        <S.FilterTitleContainer>
          <S.FilterTitle>Rating</S.FilterTitle>
          {!isOptionVisible["rating"] ? (
            <ExpandMoreIcon
              onClick={() =>
                setIsOptionVisible((prevs) => ({
                  ...prevs,
                  rating: !prevs["rating"],
                }))
              }
            />
          ) : (
            <ExpandLessIcon
              onClick={() =>
                setIsOptionVisible((prevs) => ({
                  ...prevs,
                  rating: !prevs["rating"],
                }))
              }
            />
          )}
        </S.FilterTitleContainer>

        {isOptionVisible["rating"] ? (
          <S.FilterOptions>
            {Object.entries(Rating).map(([key, val]) => {
              return (
                <label>
                  <input
                    type="radio"
                    name="rating"
                    value={key}
                    checked={rating === key}
                    onChange={(event) => handleChange(event, "rating")}
                  />
                  {val}
                </label>
              );
            })}
          </S.FilterOptions>
        ) : null}
      </S.FilterContainer> */}

        <S.FilterContainer>
          <S.FilterTitleContainer>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
              onClick={() => {
                setIsOptionVisible((prevs) => ({
                  ...prevs,
                  languages: !prevs["languages"],
                }));
              }}
            >
              <S.FilterTitle>LANGUAGES</S.FilterTitle>
              {!isOptionVisible["languages"] ? (
                <ExpandMoreIcon />
              ) : (
                <ExpandLessIcon />
              )}
            </div>
          </S.FilterTitleContainer>
          {isOptionVisible["languages"] ? (
            <S.FilterOptions>
              {Object.entries(Language).map(([key, val]) => {
                return (
                  <label style={{ cursor: "pointer" }}>
                    <input
                      type="checkbox"
                      name="languages"
                      value={key}
                      checked={languages && languages.includes(key)}
                      onChange={(event) =>
                        handleLanguagesCheckboxChange(event, key)
                      }
                    />{" "}
                    {val}
                  </label>
                );
              })}
            </S.FilterOptions>
          ) : null}
        </S.FilterContainer>
      </S.FilterView>
    </S.Filters>
  );
};

export default Filters;
