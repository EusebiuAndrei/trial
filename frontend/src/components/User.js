import React, { useState } from "react";
import { Image, Carousel, ListGroup } from "react-bootstrap";
import Client from "./Client";
import Provider from "./Provider";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

const User = ({ data }) => {
  const [index, setIndex] = useState(0);

  const [openSetting, setOpenSettings] = useState(false);
  const [openProfile, setOpenProfile] = useState(true);

  const handleOpenAccountSettings = () => {
    setOpenSettings(true);
    setOpenProfile(false);
  };

  const handleOpenProfile = () => {
    setOpenProfile(true);
    setOpenSettings(false);
  };

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const listPhotos = () => {
    let photoList = [];
    if (data.details.images != []) {
      for (const [index, value] of data.details.images.entries()) {
        var image = value;
        photoList.push(
          <Carousel.Item key={index}>
            <Image
              alt={value}
              className="providerImage"
              src={require(`../assets/${image}`)}
              roundedCircle
              style={{
                width: "200px",
                height: "200px",
                margin: "5px",
                alignSelf: "center",
              }}
            />
          </Carousel.Item>
        );
      }
      return photoList;
    } else {
      return (
        <Carousel.Item key="1">
          <Image
            alt="avatar"
            src={require("../assets/placeholder.jpg")}
            roundedCircle
            style={{
              width: "200px",
              height: "200px",
              margin: "5px",
              alignSelf: "center",
            }}
          />
        </Carousel.Item>
      );
    }
  };

  const avatarExist = () => {
    if (data.details.avatar) {
      return (
        <Image
          alt="avatar"
          src={require(`../assets/${data.details.avatar}`)}
          roundedCircle
          style={{
            width: "200px",
            height: "200px",
            margin: "5px",
            alignSelf: "center",
          }}
        />
      );
    } else
      return (
        <Image
          alt="avatar"
          src={require("../assets/placeholder.jpg")}
          roundedCircle
          style={{
            width: "200px",
            height: "200px",
            margin: "5px",
            alignSelf: "center",
          }}
        />
      );
  };
  return (
    <div className = "user_profile">
      <div>
        {data.role === "Provider" ? (
          <Carousel onSelect={handleSelect}>{listPhotos()}</Carousel>
        ) : (
          <div>{avatarExist()}</div>
        )}
      </div>
      <div className ="email_profile">
        <p>
          <small>{data.email}</small>
        </p>
      </div>
      <div className="username_profile">
        <p>
          <strong>{data.name}</strong>
        </p>
      </div>
      <div>
        {data.role == "Client" ? (
          <ListGroup className="menu_profile">
            <ListGroup.Item className="menu_element_profile">
              <Link className = "menu_link" onclick={handleOpenAccountSettings} to="/profile"> Profile </Link>
            </ListGroup.Item>
            <ListGroup.Item
              className="menu_element_profile">
              <Link className = "menu_link"> Account Settings </Link>
            </ListGroup.Item>
          </ListGroup>
        ) : (
          <ListGroup className="menu_profile">
            <ListGroup.Item className="menu_element_profile">
              <Link className = "menu_link" onclick={handleOpenAccountSettings} to="/profile">Profile</Link>
            </ListGroup.Item>
            <ListGroup.Item className="menu_element_profile">
              <Link className = "menu_link" >Menu</Link>
            </ListGroup.Item>
            <ListGroup.Item className="menu_element_profile">
              <Link to="\profile" className = "menu_link">Schedule</Link>
            </ListGroup.Item>
            <ListGroup.Item
              className="menuProfile"
              style={{
                border: "0",
                borderTop: "solid 0.5px #e6e6e6",
                textAlign: "left",
                alignSelf: "flex-start",

                width: "100%",
              }}
            >
              <Link to="\profile" style={{ color: "grey", fontWeight: "bold" }}>
                Account Settings
              </Link>
            </ListGroup.Item>
          </ListGroup>
        )}
      </div>
     </div> 
      <div>
      {openProfile ? (
        <div
          style={{
            marginLeft: "5%",
            marginRight: "5%",
            width: "80%",
            height: "100%",
            backgroundColor: "#F8F8F8",
            boxShadow: "64px 10px 106px -51px rgba(0,0,0,0.49)",
            borderRadius: "10px 10px 10px 10px",
            alignContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {data.role === "Client" ? (
            <Client data={data.details}></Client>
          ) : (
            <Provider data={data.details}></Provider>
          )}
        </div>
      ) : (
        <p>BUNA</p>
      )}
      </div>
  );
};

export default User;
