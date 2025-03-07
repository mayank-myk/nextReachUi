import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background-color: #FFF9F9;
    justify-content: space-between;
    // align-items: center;
    padding: 1rem 1.5rem;
    flex: 1 3;

`;

export const Filters = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-top: 3rem;
`

export const FilterView = styled.div`
    padding: 1rem 0rem 1rem 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`


export const DropdownContainer = styled.div`
width: 350px;
`;

export const Select = styled.select`
    width: 100%;
    height: 49px;
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border: 1px solid var(--carts-stroke-color, #9F9F9F);
    border-radius: 8px;
    outline: none;
    display: flex;
    gap: 26px;
`;

export const Option = styled.option`
    padding: 10px;
    display: flex;
    gap: 26px;
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    &:focus, &:active {
        background-color: #E66A44;
    }
`;

export const SortByContainer = styled.div`
    display: flex;
    width: 350px;
    height: 49px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border-radius: 12px;
    border: 1px solid var(--carts-stroke-color, #9F9F9F);
`
export const SortByOptions = styled.div`
    width: 352px;
    height: 436px;
    flex-shrink: 0;
`

export const InflencerListing = styled.div`
   display: flex;
    justify-content: flex-start;
    border: 1px solid black;
`

export const FirstPart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // gap: 1rem;
`

export const WhyChooseUsTitle = styled.div`
    color: #333;
    font-family: "LEMON MILK";
    font-size: 48px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`;

export const WhyChooseUsSubtitle = styled.div`
    color:  #333;
    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
export const StepsContainer = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 99px;
    padding: 4rem 0 0 0 ;
`

export const StepContainer = styled.div`
    border-radius: 12px;
    border: 1px solid  #9F9F9F);
    background: var(--color-background, linear-gradient(180deg, rgba(230, 106, 68, 0.09) 18.74%, rgba(136, 83, 245, 0.09) 105.74%));
    display: flex;
    width: 285px;
    height: 125px;
    padding: 15px 17px;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    align-items: center;
`

export const Title = styled.div`
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
`

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const FilterTitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
`

export const ClearAll = styled.div`
    font-family: "Avenir Next LT Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    color: #E66A44;

`

export const FilterTitle = styled.span`
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    // width: 203px;
`

export const FilterOptions = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
`

export const Subtitle = styled.div`
    // display: flex;
    // justify-content: center;
    // align-items: center;
    width: 100%;
    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const Wrapper = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;

`

export const Container1 = styled.div`
    width: 35rem;
    border-radius: 12px;
    border: 1px solid #000;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    padding: 1rem 0.2rem;
    flex-direction: column;
    gap: 1rem;
`;

export const ImageContainer = styled.div`
    width: 389px;
    height: 380px;
    // border: 1px solid #000;
`

export const SuccessStoryTitle = styled.div`
    color: #000; 
    font-family: "Avenir Next LT Pro"; 
    font-size: 32px;
    font-style: normal; 
    font-weight: 700; 
    line-height: normal;
`

export const SuccessStorySubtitle = styled.div`
    color: var(--tertiary-color, #333);
    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const SuccessStoryTags = styled.div`
`

export const SuccessStoryTag =  styled.div`
    border-radius: 12px;
    background: var(--primary-color, #E66A44);
    padding: 0.5rem 1rem;
    color: #ffffff;
`

export const DropdownMenu = styled.ul`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 43%;
  left: 1%;
  list-style: none;
  padding: 10px 0;
  margin: 0;
  border-radius: 12px;
  border: 1px solid var(--carts-stroke-color, #9F9F9F);
  width: 318px;
  height: 436px;
  background: #FFF;
  gap: 26px;
  padding: 16px 0 20px 32px;
`;

export const DropdownItem = styled.li`
  // padding: 10px 20px;
    cursor: pointer;
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  &:hover {
    // background-color: #ff6347;
  }
`;

export const DropdownItemSelected = styled.div`
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    align-items: center;
    gap: 12px;
`
