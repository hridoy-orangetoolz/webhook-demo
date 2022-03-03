import React from "react";
import "./requestTemplate.css";
import { MenuItem, Select } from "@material-ui/core";
import { BootstrapInput } from "../custom/BootstrapInput";
import { DROPDOWN_BOTTOM_SETUP } from "../../constants/CoreConstants";
import { WEBHOOK_REQUESTS } from "../../constants/TemplateConstants";

const WebhookRequestTemplate = () => {
  return (
    <>
      <div className="webhook__request__type">
        <span>Request Type</span>
        <div className="webhook__request__type__dropdown">
          <Select
            id="webhook__request__type__label"
            // value={
            //   props.builderJson?.logoSize !== undefined
            //     ? props.builderJson.logoSize
            //     : logoSizes[2]
            // }
            MenuProps={DROPDOWN_BOTTOM_SETUP}
            input={<BootstrapInput />}
            // onChange={handleChangeLogoSize}
          >
            {WEBHOOK_REQUESTS.types.map((eachType, index) => {
              return (
                <MenuItem key={eachType} value={eachType} disableRipple>
                  <span id="webhook__request__type__dropdown__type">
                    {eachType}
                  </span>
                </MenuItem>
              );
            })}
          </Select>
        </div>
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
