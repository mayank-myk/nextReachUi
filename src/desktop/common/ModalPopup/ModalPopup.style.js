import styled from "styled-components";

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

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`

export const CollabButtonView = styled.button`
  border-radius: 8px;
  background: ${props=> !props.disabled ? "#03BB56": "#9F9F9F"};
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



export const ButtonView = styled.button`
  border-radius: 8px;
  background: ${props=> props.status === 'error' ? "#E66A44": "#03BB56"};
  color: #FFF;
  text-align: center;
  font-family: "Avenir Next LT Pro";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
  height: 41.667px;
  cursor: pointer;
`;
