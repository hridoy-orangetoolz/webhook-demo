import React from "react";
import "./requestTemplate.css";
import { WEBHOOK_REQUESTS } from "../../constants/TemplateConstants";
import CustomSelect from "../custom/CustomSelect";

const WebhookRequestTemplate = () => {
  return (
    <>
      <div className="webhook__request__each__section">
        <span>Request Type</span>
        <div className="webhook__request__each__section__dropdown">
          <CustomSelect
            type={WEBHOOK_REQUESTS.types}
            dropdownLabelId={"webhook__request__each__section__dropdown__label"}
            dropdownTypeId={"webhook__request__each__section__dropdown__type"}
          />
        </div>
      </div>

      <div className="webhook__request__each__section">
        <span>Request Format</span>
        <div className="webhook__request__each__section__dropdown">
          <CustomSelect
            type={WEBHOOK_REQUESTS.formats}
            dropdownLabelId={"webhook__request__each__section__dropdown__label"}
            dropdownTypeId={"webhook__request__each__section__dropdown__type"}
          />
        </div>
      </div>

      <div className="webhook__request__each__section">
        <span>Request Endpoint</span>
        <input type="text" className="webhook__request__endpoint" />
      </div>

      <div className="webhook__request__each__section">
        <span>Authentication Layer</span>
      </div>

      <div className="webhook__request__each__section">
        <span>Data Layer</span>
      </div>
    </>
  );
};

export default WebhookRequestTemplate;
