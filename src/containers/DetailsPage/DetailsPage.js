import React, { useEffect } from "react";
import Pulse from "react-reveal/Pulse";
import { connect } from "react-redux";

import DetailTitle from "components/DetailTitle/DetailTitle";
import Header from "components/Header/Header";
import FeatureImage from "components/FeatureImage/FeatureImage";

import Description from "components/Description/Description";
import BookingForm from "components/BookingForm/BookingForm";
import Activities from "components/Activities/Activities";
import Testimony from "components/Testimony/Testimony";
import Footer from "components/Footer/Footer";

import { checkoutBooking } from "store/actions/checkout";
import { fetchPage } from "store/actions/page";

import "./DetailsPage.scss";

function DetailsPage(props) {
  const { page, match } = props;

  const breadcrumbList = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "House Details", pageHref: "" },
  ];

  useEffect(() => {
    document.title = "Fliptour | Details Page";
    window.scrollTo(0, 0);
  });

  if (!props.page[props.match.params.id])
    props.fetchPage(
      `/detail-page/${props.match.params.id}`,
      props.match.params.id
    );

  if (!page[match.params.id]) return null;

  return (
    <>
      <Header {...props} />
      <DetailTitle data={page[match.params.id]} breadcrumb={breadcrumbList} />
      <FeatureImage data={page[match.params.id].imageId} />
      <section className="container">
        <div className="row">
          <div className="col-7">
            <Pulse delay={700}>
              <Description data={page[match.params.id]} />
            </Pulse>
          </div>
          <div className="col-5">
            <Pulse delay={700}>
              <BookingForm
                itemDetails={page[match.params.id]}
                startBooking={props.checkoutBooking}
              />
            </Pulse>
          </div>
        </div>
      </section>
      <Activities data={page[match.params.id].activityId} />
      <Testimony data={page[match.params.id].testimonial} />
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { checkoutBooking, fetchPage })(
  DetailsPage
);
