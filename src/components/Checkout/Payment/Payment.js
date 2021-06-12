import React from "react";
import Fade from "react-reveal/Fade";

import { InputText, InputFile } from "components/UI/Form/Form";

import logoBca from "assets/images/logo-bca.jpg";
import logoMandiri from "assets/images/logo-mandiri.jpg";

import "./Payment.scss";

function Payment(props) {
  const { data, ItemDetails, checkout } = props;

  const tax = 10;
  const subTotal = ItemDetails.price * checkout.duration;
  const grandTotal = (subTotal * tax) / 100 + subTotal;

  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-5 border-right info-rekening">
            <Fade delay={300}>
              <p className="mb-4">To be paid:</p>
              <p>
                Tax: <span className="text-gray-900">{tax}%</span>
              </p>
              <p>
                Sub Total:{" "}
                <span className="text-gray-900">${subTotal} USD</span>
              </p>
              <p>
                Total Price: <span className="total">${grandTotal} USD</span>
              </p>
              <div className="row mt-4">
                <div className="col-3 text-right">
                  <img src={logoBca} alt="Bank Central Asia" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Central Asia</dd>
                    <dd>3651239941</dd>
                    <dd>PT. Fliptour.id</dd>
                  </dl>
                </div>
              </div>

              <div className="row">
                <div className="col-3 text-right">
                  <img src={logoMandiri} alt="Bank Mandiri" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Mandiri</dd>
                    <dd>3334123553</dd>
                    <dd>PT. Fliptour.id</dd>
                  </dl>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-5 payment-form">
            <Fade delay={600}>
              <label htmlFor="proofPayment">Proof Payment</label>
              <InputFile
                accept="image/*"
                id="proofPayment"
                name="proofPayment"
                value={data.proofPayment}
                onChange={props.onChange}
              />
              <label htmlFor="bankName">Name Bank</label>
              <InputText
                id="bankName"
                name="bankName"
                type="text"
                value={data.bankName}
                onChange={props.onChange}
                placeholder="Name Bank"
              />
              <label htmlFor="bankHolder">Bank Holder</label>
              <InputText
                id="bankHolder"
                name="bankHolder"
                type="text"
                value={data.bankHolder}
                onChange={props.onChange}
                placeholder="Bank Holder"
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Payment;
