import styled from "styled-components";

export const LoginSignupContainer = styled.div`
    display: flex;
    flex-direction: column;
    // justify-content: center;
    background: var(--Color-background-main, #FFF9F9);
    padding: 1rem 0rem 1.5rem 0rem;
    align-items: center;
    gap: 1rem;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;
`
export const Text = styled.div`
    width: 85%;
    text-align: center;
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 19.53px;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 318px;
    height: 428px;
    flex-shrink: 0;
    border-radius: 24px 24px 0px 0px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    align-items: center;
`;

export const LoginDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    // gap: 1rem;
    margin-top: 1rem;
`

export const TitleContainer = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
    margin-top: 1rem;
`

export const ORText = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    // line-height: 22.53px;
`

export const Title = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 22.53px; /* 93.875% */

`;


export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
`

export const TopContainer = styled.div`

`

export const BottomContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PersonalDetailsView = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: center;
`;

export const PersonalDetailLabel = styled.label`
    display: flex;
    width: 259px;
    gap: 13px;
`;

export const MobileNumberInputContainer = styled.div`
    display: flex;
`

export const PersonalDetailsOTPInputContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ResendOTPContainer = styled.div`
    color: ${props=> props.enabled ?  "#E66A44" : "#9F9F9F"};
    font-family: "Avenir Next LT Pro";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px; /* 571.429% */
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
    width: 228px;
    height: 45px;
    align-items: center;
    border: none;
    border-radius: 0px 8px 8px 0px;
    border: 1px solid var(--carts-stroke-color, #9F9F9F);
    font-size: 20px;
    color: #757575;
    font-family: "Avenir Next LT Pro";
    font-style: normal;
    font-weight: 700;
`

export const PersonalDetailOTPInput = styled.input`
    width: 36px;
    height: 37px;
    border-radius: 4px;
    border: 1px solid #BDBDBD;
    text-align: center;
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 22.53px; /* 112.65% */
`


export const SendOTPButton = styled.button`
    display: flex;
    justify-content: center;
    width: 287px;
    height: 47px;
    align-items: center;
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
`