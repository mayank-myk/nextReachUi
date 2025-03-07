import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem 3rem 1rem 0rem;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    // padding: 1rem 0rem;
`

export const ContentPriceHeader = styled.div`
    display: flex;
    justify-content: space-between;
    // padding: 1rem 0rem;
    overflow-x: hidden;

    @media (max-width: 568px) {
        flex-wrap: nowrap; /* Prevent wrapping on larger screens */
        overflow-x: auto; /* Enable horizontal scrolling */
    }
    
`



export const CommonFilter = styled.div`
    width: 125px;
    height: 43px;
    flex-shrink: 0;
    border-radius: 12px;
    border: 1px solid #000;
    display: flex;
    justify-content:center;
    align-items: center;
    // box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: 1px solid var(--carts-stroke-color, #9F9F9F);
    background: ${props=>props.active? "#E66A44" : "#fff"};
    color: ${props=>props.active? "#fff" : "#000"};
`

export const CoinBalanceContainer = styled.div`
    display: flex;
    gap: 1rem;
`

export const TopHeader = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
`



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
    margin-top: 3rem;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;

`

export const LogoutBtn = styled.button`
    border-radius: 8px;
    background: var(--primary-color, #E66A44);
    width: 161px;
    display: flex;
    height: 52px;
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
    position:relative;
`

export const ShowingResultContainer = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const CoinPriceContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
`

export const CoinBalanceText = styled.div`
    color: var(--primary-color, #E66A44);
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const Price = styled.div`
    color: var(--primary-color, #E66A44);
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const InfluencerPaginationView = styled.div`
    display: flex;
    row-gap: 2rem;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 2rem 0;
    column-gap: 1rem;
`

export const PaginationFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 1rem 0;
`

export const PreviousBtn = styled.div`
    border-radius: 8px;
    border: 1px solid var(--carts-stroke-color, #9F9F9F);
    background: ${props=> props.disabled ? "#9f9f9f": "#FFF"};
    color: ${props=> props.disabled ? "#FFF": "#000"};
    display: flex;
    width: 199px;
    height: 62px;
    // padding: 11px 29px;
    // flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

export const ActivePage = styled.div`

`

export const NextBtn = styled.div`
    border-radius: 8px;
    border: 1px solid var(--carts-stroke-color, #9F9F9F);
    background: ${props=> props.disabled ? "#9f9f9f": "#FFF"};
    color: ${props=> props.disabled ? "#FFF": "#000"};
    display: flex;
    width: 199px;
    height: 62px;
    // padding: 11px 29px;
    // flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`