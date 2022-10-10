import React from "react";
import PortfolioSliders from "../portfolioSliders/PortfolioSliders";
import "./portfolio.scss";

const Portfolio = (props) => {
  return (
    <section className="portfolio">
      <div className="container">
        <h1 className="portfolio__title">{props.title}</h1>
        <PortfolioSliders />
      </div>
    </section>
  );
};
export default Portfolio;
