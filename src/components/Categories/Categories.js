import React from "react";
import Fade from "react-reveal/Fade";

// import LeftArrow from "assets/images/icons/left-arrow.svg";
// import RightArrow from "assets/images/icons/right-arrow.svg";

import Button from "components/UI/Button/Button";

import "./Categories.scss";

export default function Categories({ data }) {
  // const [index, setIndex] = useState([]);

  // const prevSlide = () => {
  //   setIndex((index + 1) % data.length);
  // };

  // const nextSlide = () => {
  //   const nextIndex = index - 1;
  //   if (nextIndex < 0) {
  //     setIndex(data.length - 1);
  //   } else {
  //     setIndex(nextIndex);
  //   }
  // };

  return data.map((category, index1) => {
    if (category.itemId.length === 0) return null;

    return (
      <section
        className="container position-relative"
        key={`category-${index1}`}
        ref={data.refCategories}
      >
        <Fade bottom>
          <h4 className="mb-4 font-weight-medium">
            {category.name}{" "}
            <hr
              style={{
                borderTop: "1px solid #2E4ACD",
                width: 80,
                marginTop: 5,
                marginLeft: 1,
              }}
            />
          </h4>

          <div className="container-flex">
            {category.itemId.map((item, index2) => {
              return (
                <div key={`category-${index1}-item-${index2}`}>
                  <div
                    className="item column-3 row-1"
                    style={{ marginRight: 30 }}
                  >
                    <div className="card">
                      {item.isPopular && (
                        <div className="tag">
                          Popular{" "}
                          <span className="font-weight-light">Choice</span>
                        </div>
                      )}
                      <figure className="img-wrapper categories-img">
                        <img
                          src={
                            item.imageId[0]
                              ? `${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}`
                              : ""
                          }
                          alt={item.title}
                          className="img-cover"
                        />
                      </figure>
                      <div className="meta-wrapper">
                        <Button
                          type="link"
                          href={`/properties/${item._id}`}
                          className="stretched-link d-block"
                          style={{ color: "#000000" }}
                        >
                          <h5 className="h4">{item.title}</h5>
                        </Button>
                        <span className="text-gray-500">
                          {item.city}, {item.country}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* <div className="left">
              <Button className="btn btn-slider" isLight onClick={prevSlide}>
                <img src={LeftArrow} alt="arrow left" className="img-cover" />
              </Button>
            </div>

            <div className="right">
              <Button className="btn btn-slider right" onClick={nextSlide}>
                <img src={RightArrow} alt="arrow right" className="img-cover" />
              </Button>
            </div> */}
          </div>
        </Fade>
      </section>
    );
  });
}
