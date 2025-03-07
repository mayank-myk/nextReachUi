import styled from "styled-components";

export const LoginSignupContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: var(--Color-background-main, #FFF9F9);
    padding: 1rem 0rem 1.5rem 0rem;
    align-items: center;
    height: 89vh;
    gap: 2rem;
`;


export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;
    padding-top: 1rem;
`

export const Text = styled.div`
    width: 50%;
    text-align: center;
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 28.53px;
`


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;

    flex-shrink: 0;
    border-radius: 24px 24px 0px 0px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    align-items: center;
    padding-bottom: 3rem;
`;

export const LoginDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    // gap: 1rem;
    width: 85%;
`

export const TitleContainer = styled.div`
    display: flex;
    margin-top: 4rem;
    gap: 8px;
`

export const ORText = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 22.53px;
`

export const Title = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 22.53px; /* 93.875% */

`;


export const ResendOTPContainer = styled.div`
    color: ${props=> props.enabled ?  "#E66A44" : "#9F9F9F"};
    font-family: "Avenir Next LT Pro";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px; /* 571.429% */
    cursor: pointer;
` 

export const PersonalDetailsView = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: center;
`;

export const PersonalDetailLabel = styled.label`
    display: flex;
    width: 461px;
    gap: 13px;
`;

export const MobileNumberInputContainer = styled.div`
    display: flex;
`

export const PersonalDetailsOTPInputContainer = styled.div`
    display: flex;
    justify-content: space-between;
`


export const PersonalDetailLabelText = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28.16px; /* 176% */
`

export const PersonalDetailInput = styled.input`
    display: flex;
    width: 491px;
    // height: 45px;
    align-items: center;
    border: none;
    border-radius: 0px 8px 8px 0px;
    padding-left: 1rem;
    border:  ${props=>props.isOtpSent? `1px solid #D9D9D9`: `1px solid #9F9F9F`};
    color: ${props=>props.isOtpSent ? `#727272` : `#757575`};
    border: ${props=>props.isOtpSent ? `1px solid #D9D9D9` : ""};
    background-color:  ${props=>props.isOtpSent ?  "#E9E9E9" : "#fff"};
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 28.16px; /* 117.333% */

`

export const PersonalDetailOTPInput = styled.input`
    width: 76px;
    height: 77px;
    border-radius: 4px;
    border: 1px solid #BDBDBD;
    color: #000;

    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 22.53px; /* 93.875% */

    text-align: center;
`


export const SendOTPButton = styled.button`
    display: flex;
    padding: 8px 35px;
    justify-content: center;
    width: 100%;
    align-items: center;
    height: 73px;
    border-radius: 8px;
    border: none;
    background: ${props=>props.disabled? "#9F9F9F" : "#E66A44"};
    color: #FFF;
    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 22.53px; /* 112.65% */
    margin-top: 2rem;
    cursor: pointer;
`



export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 0rem;
  flex: 1;
`;

export const ModalHeading = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  justify-content: center;
  align-items: center;
  gap: 17px;
`;

export const ModalHeading1 = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  justify-content: center;
`;

export const ModalHeadingTxt = styled.div`
    color: #000;

    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.165px;
`;

export const ModalDescription = styled.div`
    color: #000;

    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.165px;
`;

export const ModalSubTxt = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  text-align: center;
`;

export const ButtonView = styled.button`
 border-radius: 8px;
background: #E66A44;
color: #FFF;

text-align: center;
font-family: "Avenir Next LT Pro";
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
// letter-spacing: -0.165px;
border: none;
height: 41.667px;
`;
