import React from "react";
import "./portfolioSliders.scss";

const PortfolioSliders = () => {
  const sliders = [
    { title: "Landing Ice-cream", img: "images/portfolio-1.png" },
    { title: "test1", img: "images/portfolio-1.png" },
    { title: "test2", img: "images/portfolio-1.png" },
  ];

  return (
    <div className="portfolio__sliders_wrap">
      <button className="portfolio__slider_prev">
        <img src="images/buttons.png" />
      </button>

      <div className="portfolio__slider_wrap">
        {sliders.map((slider) => {
          return (
            <div className="portfolio__slider">
              <div className="portfolio__slider_img">
                <img src={slider.img} />
              </div>
              <div className="portfolio__slider_description">
                <div className="portfolio__slider_title">{slider.title}</div>
                <div className="portfolio__slider_title-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ut orci eu elit consequat posuere ut sed elit. Nulla et
                  tristique felis. Morbi quis orci non purus blandit fringilla.
                  Etiam et mollis eros. Duis venenatis vulputate lacus, non
                  tristique eros placerat vel. Nam nec magna lacus. Etiam
                  euismod egestas mauris nec mollis. Phasellus efficitur et ex
                  vel condimentum. Cras enim purus, tempor sed massa vel,
                  accumsan bibendum magna. Nullam hendrerit cursus purus, sit
                  amet viverra arcu gravida vel.
                </div>
                <a href="">More -></a>
              </div>
            </div>
          );
        })}
      </div>
      <button className="portfolio__slider_next">
        <img src="images/buttons.png" />
      </button>
    </div>
  );
};
export default PortfolioSliders;
