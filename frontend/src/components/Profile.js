import React, { Component } from "react";

import User from "./User";
import Client from "./Client";
import Provider from "./Provider";
import UploadImage from "./ImageUpload";

class Profile extends Component {
  //   state = {
  //     email: "restaurantulRestaurant@gmail.com",
  //     name: "Restaurant Restaurant",
  //     role: "Provider",
  //     token: "",
  //     details: {
  //       location: {
  //         latitude: "123",
  //         longitude: "-189",
  //         adress: "Mihail Kogalniceanu",
  //       },
  //       CUI: "1242341353463563",
  //       type: "Restaurant",
  //       description:
  //         "Un restaurant foarte frumos si foarte interesant as putea zice",
  //       images: ["image1.jpg", "image2.jpg", "image3.jpg"],
  //       rating: 5,
  //       priceCategory: "Medium",
  //       specials: ["Pizza", "Pasta", "Fish", "Parfais"],
  //       tables: "6",
  //     },
  //   };
  state = {
    email: "user1@gmail.com",
    name: "User1",
    role: "Client",
    token: "",
    details: {
      location: {
        latitude: "4000",
        longitude: "234",
      },
      preferences: ["lapte", "oua"],
      avatar: "profile.jpg",
      allergies: ["gluten", "polen", "alte chestii"],
    },
  };

  render() {
    {
      /* <UploadImage /> */
    }
    return (
      <div className="main_div_profile">
        {" "}
        <User data={this.state} />
      </div>
    );
  }
}

export default Profile;
