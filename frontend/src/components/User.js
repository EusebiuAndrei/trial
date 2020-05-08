import React, { useState } from "react";
import { Image, Carousel, ListGroup } from "react-bootstrap";
import Client from "./Client";
import Provider from "./Provider";
import AccountSettings from "./AccountSettings";
import { Link } from "react-router-dom";

const User = ({ data }) => {
  console.log(data);
  const [index, setIndex] = useState(0);
  const [openSetting, setOpenSettings] = useState(false);
  const [openProfile, setOpenProfile] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
  const [openSchedule, setOpenSchedule] = useState(false);

  const handleOpenSchedule = () => {
    setOpenMenu(false);
    setOpenProfile(false);
    setOpenSchedule(true);
    setOpenSettings(false);
  };

  const handleOpenMenu = () => {
    setOpenMenu(true);
    setOpenProfile(false);
    setOpenSchedule(false);
    setOpenSettings(false);
  };

  const handleOpenAccountSettings = () => {
    setOpenMenu(false);
    setOpenSchedule(false);
    setOpenSettings(true);
    setOpenProfile(false);
  };

  const handleOpenProfile = () => {
    setOpenMenu(false);
    setOpenSchedule(false);
    setOpenProfile(true);
    setOpenSettings(false);
  };

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const listPhotos = () => {
    let photoList = [];
    if (data["details"]) {
      if (data.details["images"]) {
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
      }
    } else {
      photoList.push(
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
      return photoList;
    }
  };

  const avatarExist = () => {
    if (data.details) {
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
      }
    } else
      return (
        <Image
          alt="avatar"
          src={require("../assets/placeholder.jpg")}
          roundedCircle
          style={{
            width: "150px",
            height: "150px",
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
          {data.role === "Client" ? (
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
                <Link className="menu_link" onClick={handleOpenMenu}>
                  Menu
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="menu_element_profile">
                <Link className="menu_link" onClick={handleOpenSchedule}>
                  Schedule
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="menu_element_profile">
                <Link className="menu_link" onClick={handleOpenAccountSettings}>
                  Account Settings
                </Link>
              </ListGroup.Item>
            </ListGroup>
          )}
        </div>
      </div>
      <div className="profile_form">
        {openProfile && data.role === "Client" && (
          <Client data={data.details}></Client>
        )}
        {openSetting && data.role === "Client" && (
          <AccountSettings data={data}></AccountSettings>
        )}
        {openSetting && data.role === "Provider" && (
          <AccountSettings data={data}></AccountSettings>
        )}
        {openProfile && data.role === "Provider" && (
          <Provider data={data.details}></Provider>
        )}
        {openMenu && data.role === "Provider" && <p>MENU</p>}
        {openSchedule && data.role === "Provider" && <p>SCHEDULE</p>}
      </div>
    </div>
  );
};

export default User;
