import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

import Header from "components/Header/Header";
import Hero from "components/Hero/Hero";
import MostPicked from "components/MostPicked/MostPicked";
import Categories from "components/Categories/Categories";
import Testimony from "components/Testimony/Testimony";
import Chatting from "components/Chatting/Chatting";
import News from "components/News/News";
import Footer from "components/Footer/Footer";

import { fetchPage } from "store/actions/page";

// import GuardRoute from "components/GuardRoute/GuardRoute";

function LandingPage(props) {
  const refMostPicked = useRef(null);
  const { page } = props;

  useEffect(() => {
    document.title = "Fliptour | Home";
    window.scrollTo(0, 0);
  });

  if (!props.page.landingPage) props.fetchPage(`/landing-page`, "landingPage");

  if (!page.hasOwnProperty("landingPage")) return null;

  return (
    <>
      <Header {...props} />
      <Hero refMostPicked={refMostPicked} data={page.landingPage.hero} />
      <MostPicked
        refMostPicked={refMostPicked}
        data={page.landingPage.mostPicked}
      />
      <Categories data={page.landingPage.category} />
      <Testimony data={page.landingPage.testimonial} />
      <News />
      {/* <GuardRoute> */}
        <Chatting />
      {/* </GuardRoute> */}
      <Footer />

     
    </>
  );
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(LandingPage);
