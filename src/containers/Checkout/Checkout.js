import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";

import Button from "components/UI/Button/Button";
import Header from "components/Header/Header";
import Stepper, {
  Numbering,
  Meta,
  MainContent,
  Controller,
} from "components/UI/Stepper/Stepper";

import BookingInformation from "components/Checkout/BookingInformation/BookingInformation";
import Payment from "components/Checkout/Payment/Payment";
import Completed from "components/Checkout/Completed/Completed";

import { submitBooking } from "store/actions/checkout";

import "./Checkout.scss";

class Checkout extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      proofPayment: "",
      bankName: "",
      bankHolder: "",
    },
  };

  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };

  componentDidMount() {
    window.scroll(0, 0);
  }

  _Submit = (nextStep) => {
    const { data } = this.state;
    const { checkout } = this.props;

    const payload = new FormData();
    payload.append("firstName", data.firstName);
    payload.append("lastName", data.lastName);
    payload.append("email", data.email);
    payload.append("phoneNumber", data.phone);
    payload.append("idItem", checkout._id);
    payload.append("duration", checkout.duration);
    payload.append("bookingStartDate", checkout.date.startDate);
    payload.append("bookingEndDate", checkout.date.endDate);
    payload.append("accountHolder", data.bankHolder);
    payload.append("bankFrom", data.bankName);
    payload.append("image", data.proofPayment[0]);
    // payload.append("bankId", checkout.bankId);

    this.props.submitBooking(payload).then(() => {
      nextStep();
    });
  };

  render() {
    const { data } = this.state;
    const { checkout, page } = this.props;

    if (!checkout)
      return (
        <div className="container">
          <div
            className="row align-items-center justify-content-center text-center"
            style={{ height: "100vh" }}
          >
            <div>
              Choose a room first
              <Button
                className="btn btn-prev mt-5 d-flex mx-auto"
                type="button"
                onClick={(_) => this.props.history.goBack()}
                isLight
              >
                Back
              </Button>
            </div>
          </div>
        </div>
      );

    const steps = {
      bookingInformation: {
        title: "Travel Booking",
        description: "Complete the fields below",
        content: (
          <BookingInformation
            data={data}
            checkout={checkout}
            onChange={this.onChange}
            ItemDetails={page[checkout._id]}
          />
        ),
      },

      payment: {
        title: "Your Payment",
        description: "Please follow the instructions below for payment",
        content: (
          <Payment
            data={data}
            checkout={checkout}
            onChange={this.onChange}
            ItemDetails={page[checkout._id]}
          />
        ),
      },

      completed: {
        title: "Yay! All Done",
        content: <Completed />,
      },
    };

    return (
      <>
        <Header isCentered />
        <Stepper steps={steps}>
          {(prevStep, nextStep, CurrentStep, steps) => (
            <>
              <Numbering data={steps} current={CurrentStep} />

              <Meta data={steps} current={CurrentStep} />
              <MainContent data={steps} current={CurrentStep} />

              {CurrentStep === "bookingInformation" && (
                <Controller>
                  {data.firstName !== "" &&
                    data.lastName !== "" &&
                    data.email !== "" &&
                    data.phone !== "" && (
                      <Fade>
                        <Button
                          className="btn btn-next mb-3"
                          type="button"
                          isBlock
                          hasShadow
                          onClick={nextStep}
                        >
                          Continue to Book
                        </Button>
                      </Fade>
                    )}
                  <Button
                    className="btn btn-prev"
                    type="link"
                    isBlock
                    isLight
                    href={`/properties/${checkout._id}`}
                  >
                    Cancel
                  </Button>
                </Controller>
              )}

              {CurrentStep === "payment" && (
                <Controller>
                  {data.proofPayment !== "" &&
                    data.bankName !== "" &&
                    data.bankHolder !== "" && (
                      <Fade>
                        <Button
                          className="btn btn-next mb-3"
                          type="button"
                          isBlock
                          hasShadow
                          onClick={() => this._Submit(nextStep)}
                        >
                          Continue to Book
                        </Button>
                      </Fade>
                    )}
                  <Button
                    className="btn btn-prev"
                    type="button"
                    isBlock
                    isLight
                    onClick={prevStep}
                  >
                    Cancel
                  </Button>
                </Controller>
              )}

              {CurrentStep === "completed" && (
                <Controller>
                  <Button
                    className="btn btn-next"
                    type="link"
                    isBlock
                    hasShadow
                    href=""
                  >
                    Back to Home
                  </Button>
                </Controller>
              )}
            </>
          )}
        </Stepper>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  checkout: state.checkout,
  page: state.page,
});

export default connect(mapStateToProps, { submitBooking })(Checkout);
