import React from "react";
import Fade from "react-reveal/Fade";

import ImageHero from "assets/images/img-hero.jpg";

import IconTravelers from "assets/images/icons/icon-traveler.svg";
import IconSuitcase from "assets/images/icons/icon-suitcase.svg";
import IconCities from "assets/images/icons/icon-cities.svg";

import Button from "components/UI/Button/Button";

import "./Hero.scss";

function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <Fade bottom delay={400}>
      <section className="container section-hero">
        <div className="row align-items-center">
          <div className="col-auto text-banner">
            <h1
              className="headline font-weight-bold"
              style={{ marginBottom: 20 }}
            >
              Let’s Make Your <br /> Best Trip Ever
            </h1>
            <p className="subline text-gray-500" style={{ marginBottom: 30 }}>
              We provide what you need to enjoy vacation with your beloved
              family
            </p>
            <Button
              className="btn btn-explore"
              onClick={showMostPicked}
              style={{ marginBottom: 50 }}
            >
              Let's Explore <span></span>
            </Button>

            <div className="row feature">
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  src={IconTravelers}
                  alt="Booking Tickets"
                  width="36"
                  height="36"
                />
                <h6 className="mt-3">
                  <span className="text-gray-500 font-weight-light">
                    Booking Tickets
                  </span>
                </h6>
              </div>

              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  src={IconSuitcase}
                  alt="Your Schedule"
                  width="36"
                  height="36"
                />
                <h6 className="mt-3">
                  <span className="text-gray-500 font-weight-light">
                    Your Schedule
                  </span>
                </h6>
              </div>

              <div className="col-auto">
                <img src={IconCities} alt="Vacation" width="36" height="36" />
                <h6 className="mt-3">
                  <span className="text-gray-500 font-weight-light">
                    Vacation
                  </span>
                </h6>
              </div>
            </div>
          </div>

          <div className="col-6 hero-banner">
            <div className="wrapper-image">
              <img src={ImageHero} alt="Room with couches" />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}

export default Hero;
