import React from "react";
import Fade from "react-reveal/Fade";

import Breadcrumb from "components/UI/Breadcrumb/Breadcrumb";

import "./DetailTitle.scss";

function DetailTitle({ data, breadcrumb }) {
  return (
    <section className="spacing-sm breadcrumb-wrapper">
      <Fade delay={400}>
        <div className="row align-items-center">
          <div className="col" style={{ flex: "none" }}>
            <Breadcrumb data={breadcrumb} />
          </div>
          <div
            className="col-auto"
            style={{ width: "100%", textAlign: "center" }}
          >
            <h1 className="h2">{data.title}</h1>
            <span className="h4 text-gray-400">
              {data.city}, {data.country}
            </span>
          </div>
          <div className="col"></div>
        </div>
      </Fade>
    </section>
  );
}

export default DetailTitle;
