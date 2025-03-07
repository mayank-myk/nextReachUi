import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
`;

export const CoinHeader = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    // padding: 1rem 1.4rem
    gap: 8px;
    margin: 1rem;
    // width: 98%;
`

export const Header = styled.div`
    display: flex;
    // flex-wrap: wrap;
    justify-content: space-around;
    gap: 8px;
    margin:  0 1rem;
`

export const SortFilterHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;;
    flex: 1 1;
    // width: 360px;
    height: 43.598px;
    padding: 15px 0;
    background: #FFF;
`

export const SortContainer=  styled.div`
    display: flex;
    gap: 8px;
    color: var(--tertiary-color, #333);
    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
`
export const CommonFilter = styled.div`
    width: 78px;
    height: 31px;
    flex-shrink: 0;
    border-radius: 12px;
    border: 1px solid #000;
    display: flex;
    justify-content:center;
    align-items: center;
    background: ${props=>props.active? "#E66A44" : "#fff"};
    color: ${props=>props.active? "#fff" : "#333"};

   
    font-family: "Avenir Next LT Pro";
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

`

export const CoinBalanceContainer = styled.div`
    display: flex;
    gap: 0.2rem;
`

export const ShowingResultContainer = styled.div`
    color: #000;

    font-family: "Avenir Next LT Pro";
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const CoinBalanceText = styled.div`
    color: var(--primary-color, #E66A44);
    font-family: "Avenir Next LT Pro";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const Price = styled.div`
    color: var(--primary-color, #E66A44);
    font-family: "Avenir Next LT Pro";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const InfluencerPaginationView = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    // padding: 2rem 0;

`

export const HamburgerIcon = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: 20px;
  left: 20px;
  
  div {
    width: 30px;
    height: 4px;
    background-color: #333;
    border-radius: 2px;
  }
`;

export const OverlayMenu = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #FFF;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.3s ease-in-out;
    z-index: 999;
    display: flex;
    flex-direction: column;
    // margin: 1rem;
`;

export const OverlayMenuSort = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 45%;
    background: #FFF;
    transform: ${({ isSortOpen }) => (isSortOpen ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.3s ease-in-out;
    z-index: 999;
    display: flex;
    flex-direction: column;
`;


export const CloseButton = styled.button`
  // position: absolute;
  // top: 20px;
  // right: 20px;
  font-size: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const MenuItems = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const MenuItem = styled.li`
  color: var(--tertiary-color, #333);
  font-family: "Avenir Next LT Pro";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.165px;
  cursor: pointer;
  display: flex;
  gap: 8px;
`;


export const OverlayHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
  padding: 0 0 1rem 0;
  border-bottom: 1px solid #9F9F9F;
`

export const SortByText = styled.div`
    color: var(--tertiary-color, #333);
    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform:uppercase;
`

export const FiltersContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
`

export const  SortValueContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 0rem 1rem;
    color: #000;

    font-family: "Avenir Next LT Pro";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`


export const EachSortContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const FiltersHeader = styled.div`
    display: flex;
    padding: 0px 19px;
    color: var(--tertiary-color, #333);
    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
`

export const ClearAll = styled.div`
    font-family: "Avenir Next LT Pro";
 font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    color: #E66A44;

`

export const Filters = styled.div`
    display: flex;
    flex-grow: 1;
`

export const FiltersFooter = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    // justify-content: space-around;
    align-items: center;
    height: 60px;
    z-index: 20000;
`

export const FilterActionClose = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: #333;
    font-size: 14px;
    transition: color 0.3s ease;
    justify-content: space-between;
    gap: 8px;
    color: var(--tertiary-color, #333);
    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 50%;
    border-right: 1px solid #333;


`
export const FilterActionApply = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: #333;
    font-size: 14px;
    transition: color 0.3s ease;
    justify-content: space-between;
    gap: 8px;

    color: var(--primary-color, #E66A44);
    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 50%;
`
export const FiltersTitleContainer = styled.div`
    background: #E9E9E9;
    height: 180%;
`

export const FilterTitle = styled.div`
    display: flex;
    height: 30px;
    padding: 8px 19px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    flex-shrink: 0;
    justify-content: center;
    // align-items: center;
    background-color: ${props => props.activeFilter? "#E66A44" :"#E9E9E9"}
    color: ${props => props.activeFilter? "#FFFFFF" :"#000000"}

`

export const EachFilterContainer = styled.div`
    border: 1px solid #E9E9E9;
    height: 30px;
    display: flex;
    align-items: center;
    padding: 8px 0px 8px 8px;
`

export const FiltersValueContainer = styled.div`
    display: flex;
    flex-direction: column;
    // flex-grow: 1;
    width: 60%

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
    padding-bottom: 1rem;
`

export const PreviousBtn = styled.div`
    border-radius: 8px;
    border: 1px solid var(--carts-stroke-color, #9F9F9F);
    background: ${props=> props.disabled ? "#9f9f9f": "#FFF"};
    color: ${props=> props.disabled ? "#FFF": "#000"};
    display: flex;
    width: 115px;
    height: 36px;
    // padding: 11px 29px;
    // flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 14px;
`

export const ActivePage = styled.div`
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

`

export const NextBtn = styled.div`
    border-radius: 8px;
    border: 1px solid var(--carts-stroke-color, #9F9F9F);
    background: ${props=> props.disabled ? "#9f9f9f": "#FFF"};
    color: ${props=> props.disabled ? "#FFF": "#000"};
    display: flex;
    width: 115px;
    height: 36px;
    // padding: 11px 29px;
    // flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
        font-size: 14px;
`