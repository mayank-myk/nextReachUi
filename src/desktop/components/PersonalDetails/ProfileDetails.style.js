import styled from "styled-components";

export const PersonalDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: var(--Color-background-main, #FFF9F9);
    padding: 1rem 0rem 1.5rem 0rem;
    gap: 10px;
    align-items: center;
    padding-bottom: ${props => props.paddingRequired ? "15rem": ""} 
    height: 100vh;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    height: 1168px;
    flex-shrink: 0;
    border-radius: 24px 24px 0px 0px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    justify-content: center;
    align-items: center;
`;

export const Title = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
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
`;

export const PersonalDetailsView = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    justify-content: center;
    background-color: ${props=> props.disbled ? "#E9E9E9" : ""}
`;

export const PersonalDetailsFooter = styled.div`
    display: flex;
    justify-content: center;
    gap: 31px;

`;

export const SaveButton = styled.button`
    display: flex;
    width: 161px;
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
    cursor: pointer;
`

export const DropdownContainer = styled.div`
    background: ${props=> props.disabled ? "#E9E9E9" : ""};
`;

export const Select = styled.select`
    width: 100%;
    width: 493px;
    padding: 6px;
    font-size: 16px;
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


export const PersonalDetailLabel = styled.label`
    display: flex;
    width: 461px;
    gap: 8px;
`;

export const PersonalDetailLabelIcon = styled.img.attrs((props)=>({
    src: props.src
}))`
    width: 24px;
    height: 24px;
`

export const PersonalDetailLabelText = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
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
`
export const PersonalDetailInput = styled.input`
    display: flex;
    width: 469px;
    height: 32px;
    align-items: center;
    gap: -166px;
    border: none;
    border-radius: 8px;
    border: 1px solid var(--carts-stroke-color, #9F9F9F);
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28.16px; /* 176% */
    // border: 1px solid var(--carts-stroke-color, #9F9F9F);
    padding-left: 22px;
`

// export const DropdownContainer = styled.div`
// border-radius: 8px;
// border: 1px solid var(--carts-stroke-color, #9F9F9F);
// background: #FFF;
// display: flex;
// flex-direction: column;
// gap: 8px;
// width: 469px;
// padding-left: 22px;
// `

export const Text =  styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 3rem;
`

export const LogoutContainer = styled.div`
    display: flex;
    width: 600px;
    height: 95px;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 8px;
    padding: 1rem 0;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    justify-content: center;
    align-items: center;
`

export const LogoutBtn = styled.button`
    border-radius: 8px;
    background: var(--primary-color, #E66A44);
    width: 161px;
    // height: 26px;
    display: flex;
    height: 52px;
    // padding: 13px 39px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    color: #FFF;

    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 28.16px; /* 117.333% */
    border: none;
    top:25%;
    position: relative;
    cursor: pointer;
`
