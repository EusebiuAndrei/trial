import React, { useState } from "react";

import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { WithContext as ReactTags } from "react-tag-input";
import * as api from "../api";

import {
  FormControl,
  FormGroup,
  FormLabel,
  Form,
  Button,
} from "react-bootstrap";
import MultipleImageUpload from "./MultipleImageUpload";

const Provider = ({ data }) => {
  const KeyCodes = {
    comma: 188,
    enter: 13,
  };
  const delimiters = [KeyCodes.comma, KeyCodes.enter];
  const [specials, setSpecials] = useState(data.specials ? data.specials : []);
  const [specialsTagItems, setSpecialTagItems] = useState(
    data.specials
      ? specials.map((element) => {
          let rObj = {};
          rObj["id"] = element;
          rObj["text"] = element;
          return rObj;
        })
      : []
  );

  const [capacity, setCapacity] = useState(data.capacity ? data.capacity : 0);
  const [type, setType] = useState(data.type ? data.type : 0);
  const [latitude, setLatitude] = useState(
    data.location ? (data.location.latitude ? data.location.latitude : 0) : 0
  );
  const [longitude, setLongitude] = useState(
    data.location ? (data.location.longitude ? data.location.longitude : 0) : 0
  );
  const [adress, setAdress] = useState(
    data.location ? (data.location.adress ? data.location.adress : "") : ""
  );

  const [priceCategory, setPriceCategory] = useState(
    data.priceCategory ? data.priceCategory : ""
  );
  const [CUI, setCUI] = useState(data.CUI ? data.CUI : "");
  const [description, setDescription] = useState(
    data.description ? data.description : ""
  );

  const [numberOfCompletedFields, setNumberOdCompletedFileds] = useState(
    Object.keys(data).length + Object.keys(data.location).length
  );
  const totalNumberOfFields = 8;
  const [completedInputs, setCompletedImputs] = useState(
    [
      capacity,
      latitude,
      longitude,
      adress,
      CUI,
      description,
      priceCategory,
      type,
    ].filter((value) => {
      console.log(value);
      if (value === 0 || value === "") return false;
      else return true;
    }).length
  );
  const percentage = ((completedInputs * 100) / totalNumberOfFields).toFixed(1);

  const [loading, setLoading] = useState(false);
  const [succesCUI, setSuccesCUI] = useState(true);
  const [succesLatitude, setSuccesLatitude] = useState(true);
  const [succesLongitude, setSuccesLongitude] = useState(true);
  const [succesCapacity, setSuccesCapacity] = useState(true);
  const [failureSave, setFailureSave] = useState(true);

  const handleSaveDate = async () => {
    const userData = {
      location: {
        latitude,
        longitude,
        adress,
      },
      specials,
      CUI,
      description,
      priceCategory,
      capacity,
      type,
    };
    setLoading(true);
    try {
      let answer = await api.profile(userData);
      if (answer.success === true) {
        setFailureSave(false);
        setLoading(false);
      } else {
        setFailureSave(true);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      this.setState({
        error: err,
        loading: false,
        success: false,
      });
    }
  };

  const handleDeleteTags = (tagIndex) => {
    console.log(specials);
    setSpecials(specials.filter((value, index) => index != tagIndex));

    setSpecialTagItems(
      specialsTagItems.filter((tag, index) => index !== tagIndex)
    );
  };

  const handleAddTag = (tag) => {
    setSpecials([...specials, tag.text]);
    setSpecialTagItems([...specialsTagItems, tag]);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleChangeCUI = (event) => {
    if (!isValidCUI(event.target.value)) {
      setSuccesCUI(false);
    } else {
      setSuccesCUI(true);
    }
    setCUI(event.target.value);
  };

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const handleChangePriceCategory = (event) => {
    setPriceCategory(event.target.value);
  };
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

  const handleChangeCapacity = (event) => {
    if (parseInt(event.target.value) < 0) {
      setSuccesCapacity(false);
    } else {
      setSuccesCapacity(true);
    }
    setCapacity(event.target.value);
  };

  const isValidCUI = (CUI) => {
    if (/^C[.]?U[.]?I[.]?[ ]?R?O?[ ]?[0-9]{6,8}/.test(CUI)) return true;
    return false;
  };

  return (
    <div className="profile_provider">
      <div className="provider_form">
        <Form>
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
            <div className="align_left_profile_input">
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
          <div className="profile_element">
            <h5>CUI</h5>
            <div className="align_left_profile_input">
              <FormGroup>
                <FormControl
                  placeholder={CUI}
                  value={CUI}
                  type="text"
                  onChange={handleChangeCUI}
                ></FormControl>
                <div>
                  {advertisationMessage(succesCUI, "This is not a valid CUI")}
                </div>
              </FormGroup>
            </div>
          </div>
          <div className="profile_element">
            <h5>Location Type</h5>
            <p className="profile_explanations">
              <small>Are you a restaurant or a canteen?</small>
            </p>
            <div className="align_left_profile_input">
              <FormGroup>
                <FormControl
                  placeholder={type}
                  value={type}
                  as="select"
                  onChange={handleChangeType}
                >
                  <option>Restaurant</option>
                  <option>Canteen</option>
                </FormControl>
              </FormGroup>
            </div>
          </div>
          <div className="profile_element">
            <h5>Category Price</h5>
            <p className="profile_explanations">
              <small>Affordable, medium or expensive? It's your choice!</small>
            </p>
            <div className="align_left_profile_input">
              <FormGroup>
                <FormControl
                  placeholder={priceCategory}
                  value={priceCategory}
                  as="select"
                  onChange={handleChangePriceCategory}
                >
                  <option>Affordable</option>
                  <option>Medium</option>
                  <option>Expensive</option>
                </FormControl>
              </FormGroup>
            </div>
          </div>
          <div className="profile_element">
            <h5>Capacity</h5>
            <p className="profile_explanations">
              <small>Enter the number of seats</small>
            </p>
            <div className="align_left_profile_input">
              <FormGroup>
                <FormControl
                  placeholder={capacity}
                  value={capacity}
                  type="number"
                  onChange={handleChangeCapacity}
                ></FormControl>
                <div>
                  {advertisationMessage(
                    succesCapacity,
                    "Mmm... the number doesn't look right"
                  )}
                </div>
              </FormGroup>
            </div>
          </div>
          <div className="profile_element">
            <h5>Specialities</h5>
            <p className="profile_explanations">
              <small>List there your signature dishes</small>
            </p>
            <div className="align_left_profile_input">
              <FormGroup>
                <div className="list_of_objects">
                  <ReactTags
                    placeholder="Add new dish"
                    inline={false}
                    inputFieldPosition="top"
                    tags={specialsTagItems}
                    handleDelete={handleDeleteTags}
                    handleAddition={handleAddTag}
                    delimiters={delimiters}
                  />
                </div>
              </FormGroup>
            </div>
          </div>
          <div className="profile_element">
            <h5>Description</h5>
            <p className="profile_explanations">
              <small>
                Use your Menu Descriptions to tell a story to your customers,
                paint a good picture in their heads, that leaves them salivating
                and ordering for more
              </small>
            </p>
            <div className="align_left_profile_input">
              <FormGroup>
                <FormControl
                  placeholder={description}
                  value={description}
                  as="textarea"
                  onChange={handleChangeDescription}
                ></FormControl>
              </FormGroup>
            </div>
          </div>
          <div className="profile_element">
            <h5>Photos</h5>
            <p className="profile_explanations">
              <small>Upload some photos</small>
            </p>
            <MultipleImageUpload />
          </div>
          <div className="submit_button">
            <Button className="actual_button" onClick={handleSaveDate}>
              Save
            </Button>
            <div>
              {advertisationMessage(
                failureSave,
                "Congratulation! You just updated you're profile"
              )}
            </div>
          </div>
        </Form>
      </div>
      <div className="progress_circle">
        <CircularProgressbarWithChildren
          classes
          value={percentage.toString + "%"}
          styles={{
            path: {
              stroke: `rgb(217, 5, 79, ${percentage / 100})`,
              strokeLinecap: "butt",
              transition: "stroke-dashoffset 0.5s ease 0s",
              transform: "rotate(0.25turn)",
              transformOrigin: "center center",
            },
            trail: {
              stroke: "grey",
              strokeLinecap: "butt",
              transform: "rotate(0.25turn)",
              transformOrigin: "center center",
            },
            text: {
              fill: "rgb(217, 5, 79)",
              fontSize: "16px",
            },
          }}
        >
          <div style={{ fontSize: 25, marginTop: -5 }}>
            <strong>{percentage}</strong>
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
};

export default Provider;
