import React, {useState} from "react";
import "./requestTemplate.css";
import { WEBHOOK_REQUESTS } from "../../constants/TemplateConstants";
import CustomSelect from "../custom/CustomSelect";

const WebhookRequestTemplate = () => {
  const [data, setData] = useState(null);
  const [endpoint, setEndpoint] = useState("");

  const isValidJSONString = (str) => {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
  }

  const isValidHttpUrl =(str)=>{
    let pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }

  const handleValidEndpoint = e => {
    if(isValidHttpUrl(e.target.value)) {
      setEndpoint(e.target.value);
    }
  }

  const handleChangeDataLayer = (e) => {
    if(isValidJSONString(e.target.value)){
      setData(e.target.value);
    }
  }
  console.log("Data", data);
  console.log("Endpoint", endpoint);
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
        <input type="text" className="webhook__request__endpoint" onChange={handleValidEndpoint} />
      </div>

      <div className="webhook__request__each__section">
        <span>Authentication</span>
      </div>

      <div className="webhook__request__each__section">
        <span>Data</span>
        ​<textarea id="txtArea" rows="10" cols="70" onChange={handleChangeDataLayer}></textarea>
      </div>
    </>
  );
};

export default WebhookRequestTemplate;
