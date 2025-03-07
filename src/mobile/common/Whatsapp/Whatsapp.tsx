import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import * as S from "./Whatsapp.style";

function Whatsapp() {
  const phoneNumber = "918105120349"; // Replace with your WhatsApp phone number (with country code)

  const whatsappLink = `https://wa.me/${phoneNumber}?text=Hello!%20I%20need%20assistance%20`;

  return (
    <>
      <S.NavbarContainer>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-whatsapp-btn"
        >
          <FaWhatsapp
            size={50}
            style={{
              color: "#25d366",
            }}
          />
        </a>
      </S.NavbarContainer>
    </>
  );
}

export default Whatsapp;
