import React from "react";

import "./News.scss";

const newsData = [
  {
    _id: 1,
    imageUrl: "/images/news1.jpg",
  },
  {
    _id: 2,
    imageUrl: "/images/news2.jpg",
  },
  {
    _id: 3,
    imageUrl: "/images/news3.jpg",
  },
  {
    _id: 4,
    imageUrl: "/images/news4.jpg",
  },
];

function News() {
  return (
    <section className="news">
      <div className="container">
        <h4 className="mb-4 font-weight-medium">
          Holidays that you might like{" "}
          <hr
            style={{
              borderTop: "1px solid #2E4ACD",
              width: 80,
              marginTop: 5,
              marginLeft: 1,
            }}
          />
        </h4>
      </div>
      <div className="container-flex">
        {newsData.map((news) => {
          return (
            <div className="wrapper-image" key={news._id}>
              <div className="img-wrapper news-image">
                <img src={news.imageUrl} alt="news" className="img-cover" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default News;
