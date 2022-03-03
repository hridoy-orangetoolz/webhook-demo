import React from "react";
import "./app.css";
import WebhookRequestTemplate from "./components/template/WebhookRequestTemplate";

const App = () => {
  return (
    <>
      <div className="webhook__main__wr">
        <WebhookRequestTemplate />
      </div>
    </>
  );
};

export default App;
