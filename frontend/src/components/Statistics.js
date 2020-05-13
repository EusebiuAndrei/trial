import React, { useState } from "react";
import "../assets/btnStyle.css";

const Statistic = ({ data }) => {
  return (
    <div className="statistics_main">
      <div className="profile_title">
        <h2>PROFILE</h2>
      </div>
      <div className="statistics_per_hour">
        <div className="profile_element">
          <h5>Number of orders per hour</h5>
          <p className="profile_explanations">
            <small>
              Get a visual representation on how orders are distributed through
              the day
            </small>
          </p>
        </div>
        <iframe
          src="http://159.65.247.164/recommendations/stats/orders_per_hour?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWFhOTQ2ODMwYThmMTI5OGQ0ZmMyZjgiLCJpYXQiOjE1ODgyMzc0NTZ9.Ll2HDuN79KKWr5OoQTiZVWBemyDqdo3kDz74Bvi6lOA"
          frameborder="0"
          width="1000"
          height="500"
          scrolling="no"
        ></iframe>
        <iframe
          src="http://159.65.247.164/recommendations/stats/orders_per_hour/5eb16d673a637d28884dc226?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWFhOTQ2ODMwYThmMTI5OGQ0ZmMyZjgiLCJpYXQiOjE1ODgyMzc0NTZ9.Ll2HDuN79KKWr5OoQTiZVWBemyDqdo3kDz74Bvi6lOA"
          frameborder="0"
          width="1200"
          height="500"
          scrolling="no"
        ></iframe>
      </div>
      <div className="statistics_per_food">
        <iframe
          src="http://159.65.247.164/recommendations/stats/food_per_restaurant/5eb16d673a637d28884dc226?show_count=4&order=asc&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWFhOTQ2ODMwYThmMTI5OGQ0ZmMyZjgiLCJpYXQiOjE1ODgyMzc0NTZ9.Ll2HDuN79KKWr5OoQTiZVWBemyDqdo3kDz74Bvi6lOA"
          frameborder="0"
          width="1200"
          height="500"
          scrolling="no"
        ></iframe>
        <iframe
          src="http://159.65.247.164/recommendations/stats/food_all_restaurants?show_count=2&order=asc&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWFhOTQ2ODMwYThmMTI5OGQ0ZmMyZjgiLCJpYXQiOjE1ODgyMzc0NTZ9.Ll2HDuN79KKWr5OoQTiZVWBemyDqdo3kDz74Bvi6lOA"
          frameborder="0"
          width="1200"
          height="500"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
};

export default Statistic;
