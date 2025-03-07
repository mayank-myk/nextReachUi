import styled from "styled-components";

export const PersonalDetailsContainer = styled.div`
    display: flex;
    justify-content: center;
    background: var(--Color-background-main, #FFF9F9);
    padding: 1rem 0rem 1.5rem 0rem;
    width: 100%;
    flex-direction: column;
    gap: 1rem;
    align-items:center;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 318px;
    // height: 993px;
    flex-shrink: 0;
    border-radius: 24px 24px 0px 0px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 28.16px; /* 117.333% */
`;

export const PersonalDetailsHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
`;

export const PersonalDetailsView = styled.div`
    display: flex;
    flex-direction: column;
    // gap: 6px;
    justify-content: center;
    // align-items:center;
`;

export const PersonalDetailsFooter = styled.div`
    display: flex;
    justify-content: center;
    gap: 31px;
    padding: 1rem;
`;

export const EditButtonDisabled = styled.button`
    display: flex;

    padding: 8px 35px;
    justify-content: center;
    align-items: center;
    color: #FFF;
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 28.16px; /* 117.333% */
    border: none;
    border-radius: 8px;
    background: var(--carts-stroke-color, #9F9F9F);
`

export const SaveButton = styled.button`
    display: flex;
    width: 128px;
    height: 45px;
    padding: 8px 35px;
    justify-content: center;
    align-items: center;

    border-radius: 8px;
    border: none;
    background: ${props=> props.active?  "#E66A44": "#9F9F9F"};
    color: #FFF;

    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 28.16px; /* 117.333% */
`

export const PersonalDetailLabel = styled.label`
    display: flex;
    width: 294px;
    gap: 8px;
    align-items: center;
`;


export const DropdownContainer = styled.div`
    background: ${props=> props.disabled ? "#E9E9E9" : ""};
`;

export const Select = styled.select`
    width: 100%;
    width: 278px;
    padding: 6px;
    border: 1px solid var(--carts-stroke-color, #9F9F9F);
    border-radius: 8px;
    outline: none;
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
`;

export const Option = styled.option`
    padding: 10px;
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    &:focus, &:active {
        background-color: #E66A44;
    }
`;


export const PersonalDetailLabelIcon = styled.img.attrs((props)=>({
    src: props.src
}))`
    width: 20px;
    height: 20px;
`

export const PersonalDetailLabelText = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 28.16px; /* 176% */
`

export const PersonalDetailInputContainer = styled.div`
    display: flex;
    width: 461px;
    // height: 32px;
    border-radius: 8px;
    border: 1px solid var(--carts-stroke-color, #9F9F9F);
`
export const EditPersonalDetailInputContainer =  styled.div`
    display: flex;
    width: 294px;
`

export const PersonalDetailInput = styled.input`
    display: flex;
    width: 262px;
    height: 32px;
    align-items: center;
    // gap: -166px;
    border: none;
    border-radius: 8px;
    border: 1px solid var(--carts-stroke-color, #9F9F9F);
    justify-content:center;
    align-items: center;
    padding-left: 16px;
    font-size: 16px;
    color: #333333;
`
export const Text =  styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    // margin-top: 3rem;
`

export const LogoutContainer = styled.div`
    display: flex;
    width: 318px;
    height: 70px;
    padding: 1rem 0;
    // flex-direction: center;
    justify-content:center;
    align-items: center;
    // gap: 10px;
    flex-shrink: 0;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`

export const LogoutButton = styled.button`
    display: flex;
    justify-content:center;

   height: 45px;
// padding: 16px 35px;
    // padding: 16px 35px;
    justify-content: center;
    align-items: center;
    gap: 35px;
    flex-shrink: 0;
    border: none;
    color: #FFF;
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 28.16px; /* 117.333% */
    border-radius: 8px;
    background: var(--primary-color, #E66A44);
`