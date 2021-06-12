import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";

function Description({ data }) {
  const [hidden, setHidden] = useState(true);

  return (
    <main id="description">
      <h2>
        Description{" "}
        <hr
          style={{
            borderTop: "1px solid #2E4ACD",
            width: 80,
            marginTop: 5,
            marginLeft: 1,
          }}
        />
      </h2>
      {ReactHtmlParser(
        hidden
          ? `${data.description.substring(0, 300).trim()}... `
          : data.description
      )}

      {hidden ? (
        <span
          style={{
            cursor: "pointer",
            fontStyle: "italic",
          }}
          onClick={() => setHidden(false)}
        >
          Lihat selengkapnya
        </span>
      ) : (
        <span
          style={{ cursor: "pointer", fontStyle: "italic" }}
          onClick={() => setHidden(true)}
        >
          Tutup selengkapnya
        </span>
      )}

      <div className="row" style={{ marginTop: 30 }}>
        {data.featureId.length === 0
          ? "Feature belum tersedia"
          : data.featureId.map((feature, index) => {
              return (
                <div
                  key={`description-${index}`}
                  className="col-3"
                  style={{ marginBottom: 20 }}
                >
                  <img
                    src={`${process.env.REACT_APP_HOST}/${feature.imageUrl}`}
                    alt={feature.name}
                    className="d-block mb-2"
                    width="38"
                  />
                  <span>{feature.qty}</span>{" "}
                  <span className="text-gray-500 font-weight-light">
                    {feature.name}
                  </span>
                </div>
              );
            })}
      </div>
    </main>
  );
}

export default Description;
