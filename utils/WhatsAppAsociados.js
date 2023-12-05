import React, { useState, useEffect } from "react";
import isMobileDevice from "./IsMobile";

const whastAppAsociados = () => {
  const [whatsAppUrl, setWhatsAppUrl] = useState("");

  useEffect(() => {
    const getWhatsAppUrl = async () => {
      const val = await isMobileDevice();
      const url = `https://${val ? "api" : "web"}.whatsapp.com/send?phone=+46727242267&text=Hi`;
      setWhatsAppUrl(url);
    };

    getWhatsAppUrl();
  }, []);

  return whatsAppUrl;
};
export default whastAppAsociados;
