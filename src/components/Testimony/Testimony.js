import React, { useState } from "react";
import Jump from "react-reveal/Jump";

import LeftArrow from "assets/images/icons/left-arrow.svg";
import RightArrow from "assets/images/icons/right-arrow.svg";

import Button from "components/UI/Button/Button";

function Testimony({ data }) {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((index + 1) % data.length);
  };

  const nextSlide = () => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(data.length - 1);
    } else {
      setIndex(nextIndex);
    }
  };

  if (data.length === 0) return null;

  return (
    <Jump delay={500}>
      <section className="container">
        <div className="row align-items-center justify-content-center">
          {data.length > 0 && (
            <>
              <div className="col-auto testimony">
                <div className="testimonial-hero">
                  <img
                    src={`${process.env.REACT_APP_HOST}/${data[index].imageUrl}`}
                    alt="Testimonial"
                    className="position-absolute"
                    style={{ zIndex: 1 }}
                  />
                </div>
              </div>

              <div className="col testimony-content">
                <h4 className="mb-4 font-weight-medium">{data[index].name}</h4>
                <h5 style={{ marginBottom: 30 }}>{data[index].content}</h5>
                <div className="testimony-data">
                  <div className="testimony-data-image">
                    <img
                      src={`${process.env.REACT_APP_HOST}/${data[index].imageUrl}`}
                      alt="Testimonial"
                      className="img-cover rounded-circle"
                    />
                  </div>
                  <div className="testimony-data-diri">
                    <span className="name">{data[index].familyName}</span>
                    <span className="position text-gray-500">
                      {data[index].familyOccupation}
                    </span>
                  </div>
                </div>
                <div>
                  <Button
                    className="btn btn-left"
                    style={{ marginTop: 50 }}
                    onClick={prevSlide}
                  >
                    <img src={LeftArrow} alt="" />
                  </Button>
                  <Button
                    className="btn btn-right"
                    style={{ marginTop: 50 }}
                    onClick={nextSlide}
                  >
                    <img src={RightArrow} alt="" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </Jump>
  );
}

export default Testimony;
