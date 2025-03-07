import React, { useEffect, useRef, useState } from "react";
import Header from "../../common/Header/Header.tsx";
import Footer from "../../common/Footer/Footer.tsx";
import next_reach_orange_logo from "../../../assets/next_reach_ai_logo_orange.svg";
// import next_reach_logo from "../../../assets/nextreach_logo.svg";
import * as S from "./Login_Signup.style.js";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import ModalPopup from "../../../desktop/common/ModalPopup/ModalPopup.tsx";
import { ClipLoader } from "react-spinners";
import { setUserId } from "../../../redux/actions/profileDetailsActions.js";
import Navbar from "../../common/Navbar/Navbar.tsx";
import Whatsapp from "../../common/Whatsapp/Whatsapp.tsx";

const Login_Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const redirectFrom = queryParams.get("redirectFrom");

  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", ""]); // 5 separate OTP inputs
  const [isOtpSent, setIsOtpSent] = useState(false);
  // const [isOtpValid, setIsOtpValid] = useState(false);
  const [error, setError] = useState("");
  const [isOtpButtonEnabled, setIsOtpButtonEnabled] = useState(false);
  const [isVerifyButtonEnabled, setIsVerifyButtonEnabled] = useState(false);
  const [isAPIFailed, setAPIFailed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [seconds, setSeconds] = useState(60);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalResponse, setModalResponse] = useState({});
  const [modalStatus, setModalStatus] = useState("");

  const inputRefs = useRef([]);
  const openModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setIsModalOpen(false);
    setMobileNumber("");
    setIsOtpSent(false);
    setIsVerifyButtonEnabled(false);
    setOtp(["", "", "", "", ""]);
  };

  const dispatch = useDispatch();

  console.log("#isAPIFailed", isAPIFailed);

  useEffect(() => {
    // If the timer is already at 0, stop the countdown
    if (seconds === 0) {
      return;
    }

    // Set up the interval to update the seconds every 1000ms (1 second)
    const timerId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1); // Decrease the seconds by 1 each second
    }, 1000);

    // Clear the interval when the component is unmounted or when the timer reaches 0
    return () => clearInterval(timerId);
  }, [seconds]); // The effect runs when the `seconds` value changes

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle Mobile Number Input
  const handleMobileNumberChange = (e) => {
    const value = e.target.value;

    // Only allow numeric input
    if (/^\d*$/.test(value)) {
      setMobileNumber(value);
    }

    // Enable "Send OTP" button only if mobile number is exactly 10 digits
    if (value.length === 10 && /^\d{10}$/.test(value)) {
      setIsOtpButtonEnabled(true);
      setError("");
    } else {
      setIsOtpButtonEnabled(false);
      setError(value.length === 10 ? "Invalid mobile number format." : "");
    }
  };

  // Handle OTP Input Change (for each individual OTP input box)
  const handleOtpChange = (e, index) => {
    const value = e.target.value;

    if (/^\d?$/.test(value)) {
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);

      // Enable "Verify OTP" button only when all 5 OTP digits are entered
      if (updatedOtp.every((digit) => digit !== "")) {
        setIsVerifyButtonEnabled(true);
        setError("");
      } else {
        setIsVerifyButtonEnabled(false);
      }
    }
    // If a digit is entered, focus on the next input
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const resendOTP = () => {
    setIsLoading(true);
    fetch(
      `https://nextreach-backend-fxdmcnbgf3gsesht.southindia-01.azurewebsites.net/v1/web/request/otp/${mobileNumber}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      }
    )
      .then((resonse) => {
        setIsLoading(false);
        if (resonse?.status === 200) {
          setSeconds(60);
          setIsOtpSent(true); // OTP is sent
          setOtp(["", "", "", "", ""]); // Clear OTP fields
          setIsVerifyButtonEnabled(false); // Disable "Verify OTP" button until a valid OTP is entered
          setIsOtpButtonEnabled(false);
          return resonse.json();
        }
      })
      .then((response) => {
        if (!response?.success) {
          setModalStatus("error");
          setModalResponse(response);
          openModal();
        }
      });
  };

  // Handle form submission (sending OTP)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isOtpButtonEnabled) {
      setIsLoading(true);
      fetch(
        `https://nextreach-backend-fxdmcnbgf3gsesht.southindia-01.azurewebsites.net/v1/web/request/otp/${mobileNumber}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
        }
      )
        .then((resonse) => {
          setIsLoading(false);
          if (resonse?.status === 200) {
            setSeconds(60);
            setIsOtpSent(true); // OTP is sent
            setOtp(["", "", "", "", ""]); // Clear OTP fields
            setIsVerifyButtonEnabled(false); // Disable "Verify OTP" button until a valid OTP is entered
            // alert(`OTP sent to ${mobileNumber}`); // Simulated OTP send message
            setIsOtpButtonEnabled(false);
            return resonse.json();
          }
        })
        .then((response) => {
          if (!response?.success) {
            setModalStatus("error");
            setModalResponse(response);
            openModal();
          }
        });
    }

    if (isVerifyButtonEnabled) {
      const otpValue = otp.join("");
      if (otpValue.length === 5 && /^\d{5}$/.test(otpValue)) {
        setIsLoading(true);
        fetch(
          `https://nextreach-backend-fxdmcnbgf3gsesht.southindia-01.azurewebsites.net/v1/web/validate/otp`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              accept: "application/json",
            },
            body: JSON.stringify({
              phone_number: mobileNumber,
              otp: otp.join(""),
            }),
          }
        )
          .then((response) => {
            setIsLoading(false);
            if (response?.status === 200) {
              return response.json();
            } else {
              setAPIFailed(true);

              openModal();
            }
          })
          .then((response) => {
            if (!response) return;
            if (response.client_id) {
              dispatch(setUserId({ userId: response.client_id }));
              if (redirectFrom === "/") navigate("/");
              else if (redirectFrom) navigate(`/${redirectFrom}`);
              else navigate("/profile_details");
              window.scrollTo(0, 0);
            } else {
              setAPIFailed(true);
              openModal();
              setModalStatus("error");
              setModalResponse(response);
            }
          });
      } else {
        // alert("Invalid OTP!");
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <>
      <Header bgColor="#FFF9F9" />
      <S.LoginSignupContainer>
        <S.InfoContainer>
          <S.Text>
            You are just one step away from scaling your business with
            commission free, perfomance driven influencer marketing 🚀
          </S.Text>
        </S.InfoContainer>
        <S.Container>
          <img
            src={next_reach_orange_logo}
            alt="Next reach logo"
            width={"43px"}
            height={"33px"}
            style={{ marginTop: "1.5rem" }}
          />
          <S.LoginDetailsContainer>
            <S.TitleContainer>
              <S.Title>One-Step Login / Signup </S.Title>
            </S.TitleContainer>
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                marginTop: "1rem",
              }}
            >
              <S.FormContainer>
                <S.TopContainer>
                  <S.PersonalDetailsView>
                    <S.PersonalDetailLabel htmlFor="mobile_number">
                      <S.PersonalDetailLabelText>
                        Phone number(Whatsapp number)
                      </S.PersonalDetailLabelText>
                    </S.PersonalDetailLabel>
                    <S.MobileNumberInputContainer>
                      <div
                        style={{
                          padding: "10px",
                          backgroundColor: "#E9E9E9",
                          borderRight: "none",
                          fontWeight: "700",
                          fontSize: "20px",
                          borderRadius: "8px 0px 0px 8px",
                          color: "#757575",
                          border: `1px solid #BDBDBD`,
                          width: "35px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        +91
                      </div>
                      <S.PersonalDetailInput
                        type="number"
                        id="mobileNumber"
                        value={mobileNumber}
                        onChange={handleMobileNumberChange}
                        maxLength="10"
                        isOtpSent={isOtpSent}
                        placeholder="Enter 10-digit number"
                        // value={formData.name}
                        // onChange={handleInputChange}
                        required
                        disabled={isOtpSent}
                        style={{ background: isOtpSent ? "#E9E9E9" : "#fff" }}
                      />
                    </S.MobileNumberInputContainer>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                  </S.PersonalDetailsView>

                  {isOtpSent && (
                    <S.PersonalDetailsView>
                      <S.PersonalDetailLabel htmlFor="otp">
                        <S.PersonalDetailLabelText>
                          Enter OTP(Received on whatsapp)
                        </S.PersonalDetailLabelText>
                      </S.PersonalDetailLabel>
                      <S.PersonalDetailsOTPInputContainer>
                        {otp.map((digit, index) => (
                          <S.PersonalDetailOTPInput
                            key={index}
                            type="number"
                            id="otp"
                            name="otp"
                            value={digit}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            ref={(el) => (inputRefs.current[index] = el)}
                            required
                            onChange={(e) => handleOtpChange(e, index)}
                            maxLength="1"
                            // placeholder={`OTP ${index + 1}`}
                          />
                        ))}
                      </S.PersonalDetailsOTPInputContainer>

                      <S.ResendOTPContainer
                        enabled={seconds === 0}
                        onClick={(event) => {
                          if (seconds === 0) resendOTP();
                        }}
                      >
                        {seconds === 0 ? (
                          "Resend OTP"
                        ) : (
                          <>
                            <span>Resend OTP in: </span>
                            <span style={{ color: "#333" }}>00:{seconds}</span>
                          </>
                        )}
                      </S.ResendOTPContainer>
                    </S.PersonalDetailsView>
                  )}
                </S.TopContainer>
                <S.BottomContainer>
                  {isLoading ? (
                    <div style={{ textAlign: "center", marginTop: "1rem" }}>
                      <ClipLoader
                        color="#E66A44"
                        loading={isLoading}
                        size={30}
                      />
                    </div>
                  ) : isOtpSent ? (
                    <S.SendOTPButton
                      type="submit"
                      disabled={!isVerifyButtonEnabled}
                    >
                      VERIFY OTP
                    </S.SendOTPButton>
                  ) : (
                    <S.SendOTPButton
                      type="submit"
                      disabled={!isOtpButtonEnabled || isOtpSent}
                    >
                      SEND OTP
                    </S.SendOTPButton>
                  )}
                </S.BottomContainer>
              </S.FormContainer>
            </form>
            <ModalPopup
              isOpen={isModalOpen}
              onClose={closeModal}
              status={modalStatus}
              heading={modalResponse?.header}
              subText={modalResponse?.message}
              buttonText={modalResponse?.button_text}
            />
          </S.LoginDetailsContainer>
        </S.Container>
      </S.LoginSignupContainer>
      <Footer />
      <Whatsapp />
      <Navbar />
    </>
  );
};

export default Login_Signup;
