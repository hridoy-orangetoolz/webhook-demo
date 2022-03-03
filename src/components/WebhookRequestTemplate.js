import React from "react";
import "./requestTemplate.css";

const WebhookRequestTemplate = () => {
  return (
    <>
      <div className="webhook__request__type">
        <span>Request Type</span>
      </div>
      <div className="webhook__request__endpoint">
        <span>Request Endpoint</span>
      </div>
      <div className="webhook__request__format">
        <span>Request Format</span>
      </div>
      <div className="webhook__request__auth__layer">
        <span>Authentication Layer</span>
      </div>
      <div className="webhook__request__data__layer">
        <span>Data Layer</span>
      </div>
    </>
  );
};

export default WebhookRequestTemplate;
