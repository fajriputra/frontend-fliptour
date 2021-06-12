import React from "react";
import Fade from "react-reveal/Fade";

import "./FeatureImage.scss";

function FeatureImage({ data }) {
  return (
    <section className="container">
      <div className="wrapper-feature-image">
        {data.map((item, index) => {
          return (
            <div key={`FeatureImage-${index}`} className="item column-4 row-1">
              <Fade bottom delay={500 * index}>
                <div className="card h-100">
                  <figure className="img-wrapper feature-img">
                    <img
                      src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`}
                      alt={item._id}
                      className="img-cover"
                    />
                  </figure>
                </div>
              </Fade>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FeatureImage;
