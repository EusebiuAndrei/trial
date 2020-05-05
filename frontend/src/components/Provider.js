import React, { useState } from "react";

import Menu from "./Menu";
import Schedule from "./Schedule";

import { FormControl, FormGroup, FormLabel, Form } from "react-bootstrap";
const Provider = ({ data }) => {
  // const [index, setIndex] = useState(0);
  // const [toInputLocation, setToInputLocation] = useState(false);
  // const [toInputCUI, setToInputCUI] = useState(false);
  // const [toInputType, setToInputType] = useState(false);
  // const [toInputDescription, setToInputDescription] = useState(false);
  // const [toInputPrice, setToInputPrice] = useState(false);
  // const [toInputSpecials, setToInputSpecials] = useState(false);
  // const [toInputTables, setToInputTables] = useState(false);

  // const listSpecials = () => {
  //   let specialsList = [];
  //   for (const [index, value] of data.specials.entries())
  //     specialsList.push(<ListGroup.Item key={index}>{value}</ListGroup.Item>);
  //   return specialsList;
  // };

  // const handleInput = (e, type) => {
  //   if (type === "longitude" || type === "latitude" || type === "adress")
  //     data.location[type] = e.target.value;
  //   else if (type === "specials") {
  //     data[type].push(e.target.value);
  //   } else data[type] = e.target.value;
  // };

  // const [openMenu, setOpenMenu] = useState(false);

  // const handleOpenMenu = () => {
  //   setOpenMenu(!openMenu);
  // };

  // const [openSchedule, setOpenSchedule] = useState(false);

  // const handleOpenSchedule = () => {
  //   setOpenSchedule(!openSchedule);
  // };

  const [latitude, setLatitude] = useState(
    data.location.latitude ? data.location.latitude : 0
  );
  const [longitude, setLongitude] = useState(
    data.location.longitude ? data.location.longitude : 0
  );
  const [adress, setAdress] = useState(
    data.location.adress ? data.location.adress : ""
  );

  const [succesLatitude, setSuccesLatitude] = useState(true);
  const [succesLongitude, setSuccesLongitude] = useState(true);

  const advertisationMessage = (correct, message) => {
    if (correct) {
      return <p></p>;
    } else {
      return (
        <p className="avertisment">
          <small>{message}</small>
        </p>
      );
    }
  };

  const handleChangeLatitude = (event) => {
    if (event.target.value < -180 || event.target.value > 180) {
      setSuccesLatitude(false);
    } else {
      setSuccesLatitude(true);
    }
    setLatitude(event.target.value);
  };

  const handleChangeLongitude = (event) => {
    if (event.target.value < -90 || event.target.value > 90) {
      setSuccesLongitude(false);
    } else {
      setSuccesLongitude(true);
    }
    setLongitude(event.target.value);
  };

  const handleChangeAdress = (event) => {
    setAdress(event.target.value);
  };

  return (
    <div>
      <div className="profile_long_lat">
        <Form className="client_form">
          <div className="profile_title">
            <h2>PROFILE</h2>
          </div>
          <div className="profile_element">
            <h5>Address</h5>
            <p className="profile_explanations">
              <small>Let out clients know where they can find you!</small>
            </p>
            <div className="adress_profile_element">
              <FormGroup>
                <FormLabel>Longitude</FormLabel>
                <FormControl
                  placeholder={longitude}
                  value={longitude}
                  type="number"
                  onChange={handleChangeLongitude}
                ></FormControl>
                <div>
                  {advertisationMessage(
                    succesLongitude,
                    "Value should be between -90 and 90"
                  )}
                </div>
              </FormGroup>
              <FormGroup>
                <FormLabel>Latitude</FormLabel>
                <FormControl
                  placeholder={latitude}
                  value={latitude}
                  type="number"
                  onChange={handleChangeLatitude}
                ></FormControl>
                <div>
                  {advertisationMessage(
                    succesLatitude,
                    "Value should be between -180 and 180"
                  )}
                </div>
              </FormGroup>
            </div>
            <div className="provider_adress">
              <FormGroup>
                <FormLabel>Adrees</FormLabel>
                <FormControl
                  placeholder={adress}
                  value={adress}
                  type="text"
                  onChange={handleChangeAdress}
                ></FormControl>
              </FormGroup>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Provider;
