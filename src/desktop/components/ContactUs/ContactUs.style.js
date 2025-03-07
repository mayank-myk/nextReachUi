import styled from "styled-components";

export const ContactUsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 48px;
`;

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    gap:24px;
    width: 512px;
`

export const ContactUsTitle = styled.div`
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 28.16px; /* 78.222% */
`

export const FollowUsItemsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 6.063px;
    align-self: stretch;
`

export const IconContainer = styled.div`
    width: 47px;
    height: 47px;
    flex-shrink: 0;
    border: 1px solid #C0C0C0;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const FollowUsItem = styled.img.attrs((props)=>({
    src: props.src,
}))`
    // width: 24px;
    // height: 24px;
    // padding: 14px;
    // border: 1px solid #C0C0C0;
    // border-radius: 50%;
`

export const ContactUsContent = styled.div`
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
    letter-spacing: 0.16px;
`

export const DetailsContainer = styled.div`
    display: flex;
    gap: 16px;
    border-bottom: 1px solid  #9F9F9F;
    padding-bottom: 16px;

`

export const Label = styled.div`
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const Text = styled.div`
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px; /* 150% */
    letter-spacing: 0.2px;
    display: flex;
    padding-top: 16px;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    height: 697px;
    flex-shrink: 0;
    border-radius: 24px 24px 0px 0px;
    background: var(--Color-background-main, #FFF9F9);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    align-items: center;
    padding-bottom: 2rem;
`;

export const LoginDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // gap: 1rem;
`
export const ButtonContainer = styled.div`
    display: flex;
    flex: 1 1;
    width: 82%;
    padding-top: 1rem;

`

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    border: 1px solid var(--carts-stroke-color, #9F9F9F);
    background: ${props=> props.active? "#E66A44" : "#fff"};
    color: ${props => props.active ? "#FFF" : "#E66A44" };
    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 50%;
    cursor: pointer;
`


export const Title = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 22.53px; /* 93.875% */
    margin-top: 1rem;
`;


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
    height: 38px;
    align-items: center;
    border: none;
    border-radius: 8px;
    border: 1px solid var(--carts-stroke-color, #9F9F9F);
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
`

export const PersonalDetailTextArea = styled.textarea`
    display: flex;
    width: 491px;
    // height: 41px;
    align-items: center;
    border: none;
    border-radius: 8px;
    border: 1px solid var(--carts-stroke-color, #9F9F9F);
    font-size: 16px;
    font-family: "Avenir Next LT Pro";
`

export const SendOTPButton = styled.button`
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    height: 40px;
    padding: 12px 20px;
    border-radius: 8px;
    border: none;
    background: ${props=>props.enabled ?  "#E66A44" :"#9F9F9F" };
    color: #FFF;
    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 22.53px; /* 112.65% */
`