import React, { useEffect } from "react";

const ChatbotEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js";
    script.async = true;
    script.type = "module";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <zapier-interfaces-chatbot-embed is-popup="true" chatbot-id="cmfpi0pvz000m8hnmoc80bv13"></zapier-interfaces-chatbot-embed>
    </div>
  );
};

export default ChatbotEmbed;
