import React, { Component } from "react";

import User from "./User";
import UploadImage from "./ImageUpload";

class Profile extends Component {
  // constructor(props) {
  //   super(props);
  //   var userToken;
  //   if (localStorage.getItem("userToken")) {
  //     userToken = localStorage.getItem("userToken");
  //     this.state = {
  //       userToken,
  //     };
  //   }
  //   console.log(this.state);
  // }

  // state = {
  //   email: "restaurant@gmail.com",
  //   name: "User1",
  //   role: "Provider",
  //   details: {
  //     location: {
  //       latitude: 89,
  //       longitude: 178,
  //       adress: "Strada Uzinei",
  //     },
  //     CUI: "RO123456789010",
  //     type: "Restaurant",
  //     description: "Un restaurant foarte deosebit",
  //     rating: 10,
  //     priceCategory: "Affordable",
  //     specials: ["Pasta", "Crepes", "Buritto", "Chilli con Carne"],
  //     capacity: 100,
  //     images: ["image1.jpg", "image2.jpg"],
  //     menu: [
  //       {
  //         name: "Dovlecei prajiti de post",
  //         category: "Post",
  //         price: 19,
  //         ingredients: ["dovlecei"],
  //       },
  //       {
  //         name: "Bifteki de legume",
  //         category: "Post",
  //         price: 25,
  //         ingredients: ["rosii", "cartofi"],
  //       },
  //       {
  //         name: "Gyros pui",
  //         category: "Greek",
  //         price: 20,
  //         ingredients: ["carne pui", "tzatziki", "ceapa", "rosie"],
  //       },
  //     ],
  //     schedule: [
  //       {
  //         day: "luni",
  //         startHour: "10 am",
  //         endHour: "5 pm",
  //       },
  //       {
  //         day: "marti",
  //         startHour: "10 am",
  //         endHour: "5 pm",
  //       },
  //       {
  //         day: "miercuri",
  //         startHour: "10 am",
  //         endHour: "5 pm",
  //       },
  //       {
  //         day: "joi",
  //         startHour: "10 am",
  //         endHour: "5 pm",
  //       },
  //       {
  //         day: "vineri",
  //         startHour: "10 am",
  //         endHour: "5 pm",
  //       },
  //       {
  //         day: "sambata",
  //         startHour: "10 am",
  //         endHour: "5 pm",
  //       },
  //       {
  //         day: "duminica",
  //         startHour: "10 am",
  //         endHour: "5 pm",
  //       },
  //     ],
  //   },
  // };
  state = {
    email: "user1@gmail.com",
    name: "User1",
    role: "Client",
    token: "",
    details: {
      location: {
        latitude: "4000",
      },
      preferences: ["lapte", "oua"],
      avatar: "profile.jpg",
      allergies: ["gluten", "polen", "alte chestii"],
    },
  };

  render() {
    return <User data={this.state} />;
  }
}

export default Profile;
