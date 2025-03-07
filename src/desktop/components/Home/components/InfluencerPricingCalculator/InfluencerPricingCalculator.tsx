import React, { useState, useEffect, useRef } from "react";
import { ClipLoader } from "react-spinners";
import { Slider } from "@mui/material";
import * as S from "./InfluencerPricingCalculator.style.js";
import { Niche } from "../../../../constants/constants.js";
import { useLocation } from "react-router-dom";
// import Dropdown from "../../../../common/Dropdown/Dropdown.tsx";
import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { OutlinedInput } from "@mui/material";

const InfluencerPricingCalculator = ({ influencerPricingRef }) => {
  const location = useLocation();
  const { state = null } = location;
  const targetRef = useRef();

  React.useEffect(() => {
    if (state && state.scrollTo === "target" && targetRef.current) {
      window.scrollBy({ top: 3119, behavior: "smooth" });
      // targetRef.current.scrollIntoView({
      //   behavior: "smooth", // Smooth scrolling effect
      //   block: "start", // Align the target element to the start of the viewport
      // });
      // targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [state]);

  const [selectedNiche, setSelectedNiche] = useState("");
  const [followersValue, setFollowersValue] = useState(10000); // Initial value set to 10,000
  const [avgViewsValue, setAvgViewsValue] = useState(50000);
  const [engagementRateValue, setEngagementRateValue] = useState(0.5);
  const [resultText, setResultText] = useState("");
  const [isCalculateEarningEnable, setIsCalculateEarningEnable] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle slider change
  const handleFollowersSliderChange = (event, newValue) => {
    setFollowersValue(newValue);
  };

  const handleAvgViewsSliderChange = (event, newValue) => {
    setAvgViewsValue(newValue);
  };

  const handleEngagementRateSliderChange = (event, newValue) => {
    setEngagementRateValue(newValue);
  };

  useEffect(() => {
    if (followersValue && avgViewsValue && engagementRateValue && selectedNiche)
      setIsCalculateEarningEnable(true);
    else setIsCalculateEarningEnable(false);
  }, [followersValue, avgViewsValue, engagementRateValue, selectedNiche]);

  // Format the number with commas for readability
  // const formattedValue = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const formatValue = (value) => {
    if (value >= 1000000) {
      return (value / 1000000).toFixed(1) + "M"; // For values in millions
    } else if (value >= 1000) {
      return (value / 1000).toFixed(1) + "K"; // For values in thousands
    }
    return value; // For values less than 1000
  };

  const engagementRateFormatValue = (value) => {
    return `${value.toFixed(1)}%`; // Display value with one decimal place
  };
  // Formatted value to be displayed
  const formattedFollowersValue = formatValue(followersValue);
  const formattedAvgViewsValue = formatValue(avgViewsValue);

  const handleNicheChange = (e) => {
    setSelectedNiche(e.target.value);
  };

  const calculateInfluencerPricing = (event) => {
    event.preventDefault();
    if (!isCalculateEarningEnable) return;
    setIsLoading(true);
    fetch(
      `https://nextreach-backend-fxdmcnbgf3gsesht.southindia-01.azurewebsites.net/v1/web/calculate/earning`,
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          niche: selectedNiche,
          follower_count: followersValue,
          avg_views: avgViewsValue,
          engagement_rate: engagementRateValue,
        }),
      }
    )
      .then((response) => {
        setIsLoading(false);
        return response.json();
      })
      .then((response) => {
        setResultText(response);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  };

  return (
    <S.Container ref={targetRef}>
      <S.Header>
        <S.Title>INFLUENCER Earning CALCULATOR</S.Title>
        <S.Description>
          Join Our Platform and Unlock Your Full Potential with the Pay-Per-View
          Model. Turn Every View into Revenue!
        </S.Description>
      </S.Header>
      <S.FormContainer>
        <form
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          onSubmit={calculateInfluencerPricing}
        >
          <S.FieldContainer>
            <S.LabelText>Niche</S.LabelText>

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Niche"
              displayEmpty
              value={selectedNiche}
              onChange={handleNicheChange}
              input={<OutlinedInput />}
              inputProps={{ "aria-label": "Without label" }}
              aria-placeholder="Select Your Niche"
              MenuProps={{
                PaperProps: {
                  sx: {
                    "& .MuiList-root": {
                      paddingTop: 0, // Remove padding-top
                      paddingBottom: 0, // Remove padding-bottom
                    },
                  },
                },
              }}
              style={{
                background:
                  "linear-gradient(180deg, rgba(230, 106, 68, 0.09) 18.74%, rgba(136, 83, 245, 0.09) 105.74%)",
                color: "#333",
                fontFamily: "Avenir Next LT Pro",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "28.16px",
                borderRadius: "8px",
              }}
            >
              <MenuItem
                value=""
                selected
                hidden
                sx={{
                  color: "#333",
                  fontFamily: "Avenir Next LT Pro",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                  backgroundColor: "rgba(230, 106, 68, 0.09)", // Optional: Change the placeholder text color
                }}
              >
                Select Your Niche
              </MenuItem>

              {Object.entries(Niche).map(([key, val]) => {
                return (
                  <MenuItem
                    sx={{
                      backgroundColor: "rgba(230, 106, 68, 0.09)",
                    }}
                    value={key}
                    style={{
                      color: "#333",
                      fontFamily: "Avenir Next LT Pro",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "normal",
                      backgroundColor: "rgba(230, 106, 68, 0.09)",
                    }}
                  >
                    {val}
                  </MenuItem>
                );
              })}
            </Select>

            {/* <S.DropdownContainer>
                <S.Select
                  value={selectedNiche}
                  onChange={handleNicheChange}
                  aria-placeholder="Select Your Niche"
                >
                  <option value="" disabled selected hidden>
                    Select Your Niche
                  </option>
                  {Object.entries(Niche).map(([key, val]) => {
                    return <S.Option value={key}>{val}</S.Option>;
                  })}
                </S.Select>
              </S.DropdownContainer> */}
          </S.FieldContainer>

          <S.FieldContainer>
            <S.LabelText>
              Total Followers <S.LabelVal>{formattedFollowersValue}</S.LabelVal>
            </S.LabelText>
            <Slider
              style={{ color: "#787880" }}
              type="range"
              onChange={handleFollowersSliderChange}
              min={10000}
              max={3000000}
              step={10000} // Step size of 10,000
              valueLabelDisplay="auto"
              valueLabelFormat={(followersValue) => formatValue(followersValue)} // Show formatted value
              sx={{
                "& .MuiSlider-thumb": {
                  backgroundColor: "white", // Change thumb color
                },
              }}
            />
          </S.FieldContainer>

          <S.FieldContainer>
            <S.LabelText>
              Average Views <S.LabelVal>{formattedAvgViewsValue}</S.LabelVal>
            </S.LabelText>
            <Slider
              style={{ color: "#787880" }}
              type="range"
              onChange={handleAvgViewsSliderChange}
              min={10000}
              max={5000000}
              step={10000} // Step size of 10,000
              valueLabelDisplay="auto"
              valueLabelFormat={(avgViewsValue) => formatValue(avgViewsValue)} // Show formatted value
              sx={{
                "& .MuiSlider-thumb": {
                  backgroundColor: "white", // Change thumb color
                },
              }}
            />
          </S.FieldContainer>

          <S.FieldContainer>
            <S.LabelText>
              Your engagement rate{" "}
              <S.LabelVal>{engagementRateValue}%</S.LabelVal>
            </S.LabelText>
            <Slider
              style={{ color: "#787880" }}
              onChange={handleEngagementRateSliderChange}
              min={0.5} // Minimum value is 0.5%
              max={10.0} // Maximum value is 20.0%
              step={0.1} // Step size of 0.1%
              valueLabelDisplay="auto"
              valueLabelFormat={(value) => engagementRateFormatValue(value)} // Format the value as percentage
              sx={{
                "& .MuiSlider-thumb": {
                  backgroundColor: "#fff", // Change thumb color
                },
              }}
            />
          </S.FieldContainer>

          <S.ResultContainer>
            {isLoading ? (
              <S.CalculateEarnings>
                <ClipLoader color="#FFF" loading={isLoading} size={30} />
              </S.CalculateEarnings>
            ) : (
              <S.CalculateEarnings
                type="submit"
                enabled={isCalculateEarningEnable}
              >
                Calculate your earnings
              </S.CalculateEarnings>
            )}

            <S.DisplayResultInput
              placeholder="Your Result will be displayed here"
              value={resultText}
            ></S.DisplayResultInput>
          </S.ResultContainer>
        </form>
      </S.FormContainer>
    </S.Container>
  );
};

export default InfluencerPricingCalculator;
