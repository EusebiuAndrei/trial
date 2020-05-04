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
    <div className="main_div_profile">
      <div className="user_profile">
        <div>
          {data.role === "Provider" ? (
            <Carousel onSelect={handleSelect}>{listPhotos()}</Carousel>
          ) : (
            <div>{avatarExist()}</div>
          )}
        </div>
        <div className="email_profile">
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
                <Link className="menu_link" onClick={handleOpenProfile}>
                  {" "}
                  Profile{" "}
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="menu_element_profile">
                <Link className="menu_link" onClick={handleOpenAccountSettings}>
                  {" "}
                  Account Settings{" "}
                </Link>
              </ListGroup.Item>
            </ListGroup>
          ) : (
            <ListGroup className="menu_profile">
              <ListGroup.Item className="menu_element_profile">
                <Link className="menu_link" onClick={handleOpenProfile}>
                  Profile
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="menu_element_profile">
                <Link className="menu_link">Menu</Link>
              </ListGroup.Item>
              <ListGroup.Item className="menu_element_profile">
                <Link className="menu_link">Schedule</Link>
              </ListGroup.Item>
              <ListGroup.Item className="menu_element_profile">
                <Link className="menu_link">Account Settings</Link>
              </ListGroup.Item>
            </ListGroup>
          )}
        </div>
      </div>
      {openProfile ? (
        <div className="profile_form">
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
