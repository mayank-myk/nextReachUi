import React from "react";
import * as S from "./JoinUs.style.js";
import { useNavigate } from "react-router-dom";

const JoinUs = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Txt>
        Join us today and experience a platform designed with your growth and
        success in mind!
      </S.Txt>
      <S.Button
        onClick={() => {
          navigate("/contact_us");
          window.scrollTo(0, 0);
        }}
      >
        Get Listed
      </S.Button>
    </S.Container>
  );
};

export default JoinUs;
