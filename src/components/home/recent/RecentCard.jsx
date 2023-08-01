import React from "react";
import { list } from "../../data/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";

import "./recentCard.css";

const RecentCard = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="group-of cards">
      <div className="content grid3 mtop">
        {list.map((val, index) => {
          const { cover, category, location, name, price, type } = val;
          return (
            <div className="box shadow" key={index}>
              <div className="img">
                <img src={cover} alt="" />
              </div>
              <div className="text">
                <div className="category flex">
                  <span
                    style={{
                      background:
                        category === "For Sale" ? "#25b5791a" : "#ff98001a",
                      color: category === "For Sale" ? "#25b579" : "#ff9800",
                    }}
                  >
                    {category}
                  </span>
                  <i className="fa fa-heart"></i>
                </div>
                <h4>{name}</h4>
                <p>
                  <i className="fa fa-location-dot"></i> {location}
                </p>
              </div>
              <div className="button flex">
                <div>
                  <button className="btn2">{price}</button>{" "}
                  <label htmlFor="">/sqft</label>
                </div>
                <span>{type}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentCard;
