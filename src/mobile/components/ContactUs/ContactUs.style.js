import styled from "styled-components";

export const ContactUsContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 1px 123px 58px 123px;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
`;

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
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
`

export const ContactUsTitle = styled.div`
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 28.16px; /* 78.222% */
`

export const FollowUsItemsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 21px;
    align-self: stretch;
`

export const FollowUsItem = styled.img.attrs((props)=>({
    src: props.src,
}))`
`

export const ContactUsContent = styled.div`
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
    letter-spacing: 0.16px;
`

export const DetailView = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`
export const DetailsContainer = styled.div`
    display: flex;
    padding-bottom: 16px;
    border-bottom: 1px solid #9F9F9F;
    flex-direction: column;
    gap: 16px;
`

export const Label = styled.div`
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    align-items: center;

`

export const Text = styled.div`
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px; /* 150% */
    letter-spacing: 0.2px;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 345px;
    height: 566px;
    flex-shrink: 0;
    border-radius: 8px 8px 0px 0px;
    background: var(--Color-background-main, #FFF9F9);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    align-items: center;
    padding-bottom: 4rem;
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
    width: 96%;
    padding-top: 1rem;

`

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    // padding: 6px 100px 7px 31px;
    border: 1px solid var(--carts-stroke-color, #9F9F9F);
    background: ${props=> props.active? "#E66A44" : "#fff"};
    color: ${props => props.active ? "#FFF" : "#E66A44" };

    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 100%;
`


export const Title = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 20px;
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
    width: 291px;
    gap: 8px;
`;

export const PersonalDetailTextArea = styled.textarea`
    display: flex;
   width: 291px;
    height: 83px;
    align-items: center;
    border: none;
    border-radius: 8px;
    border: 1px solid var(--carts-stroke-color, #9F9F9F);
    font-size: 16px;
    font-family: "Avenir Next LT Pro";
`

export const PersonalDetailLabelText = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28.16px; /* 176% */
    display: flex;
    gap: 5px;
`

export const PersonalDetailInput = styled.input`
    display: flex;
    width: 291px;
    height: 29px;
    align-items: center;
    border: none;
    border-radius: 8px;
    border: 1px solid var(--carts-stroke-color, #9F9F9F);
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