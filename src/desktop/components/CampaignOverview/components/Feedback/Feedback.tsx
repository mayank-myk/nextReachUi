import React from "react";
import * as S from "./Feedback.style.js";

const Feedback = () => {
  return (
    <S.Feedback>
      <S.TextArea placeholder="Write a message here..."></S.TextArea>
      <S.SubmitButton state="active">SUBMIT</S.SubmitButton>
    </S.Feedback>
  );
};

export default Feedback;
