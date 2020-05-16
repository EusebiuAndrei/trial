import React, { useState } from "react";
import { WithContext as ReactTags } from "react-tag-input";
import UploadMenuPhoto from "./UploadMenuPhoto";
import * as api from "../api";

import {
  Accordion,
  Card,
  Button,
  FormControl,
  FormGroup,
} from "react-bootstrap";
const Course = ({ data }) => {
  const KeyCodes = {
    comma: 188,
    enter: 13,
  };
  const delimiters = [KeyCodes.comma, KeyCodes.enter];
  const [loading, setLoading] = useState(false);
  const placeholder = "http://localhost:4000/images/placeholder_menu.png";
  const [name, setName] = useState(data.course.name);
  const [price, setPrice] = useState(data.course.price);
  const [category, setCategory] = useState(
    data.course.category ? data.course.category : []
  );
  const [ingredients, setIngredients] = useState(
    data.course.ingredients ? data.course.ingredients : []
  );
  const [allergenes, setAllergenes] = useState(
    data.course.allergenes ? data.course.allergenes : []
  );

  const [categoryTagItems, setCategoryTagItems] = useState(
    data.course.category
      ? category.map((element) => {
          let rObj = {};
          rObj["id"] = element;
          rObj["text"] = element;
          return rObj;
        })
      : []
  );

  const [newIngredient, setNewIngredient] = useState("");
  const [newAllergen, setNewAllergen] = useState("");
  const handleAddIngredient = (event) => {
    setNewIngredient(event.target.value);
  };

  const handleAddIngredientToList = (event) => {
    setIngredients([...ingredients, newIngredient]);
    console.log(ingredients);
  };

  const handleAddAllergene = (event) => {
    setNewAllergen(event.target.value);
  };

  const handleAddAllergenesToList = (event) => {
    setAllergenes([...allergenes, newAllergen]);
    console.log(ingredients);
  };

  const handleDeleteTags = (tagIndex) => {
    setCategory(category.filter((value, index) => index != tagIndex));
    setCategoryTagItems(
      categoryTagItems.filter((tag, index) => index !== tagIndex)
    );
  };

  const handleAddTag = (tag) => {
    setCategory([...category, tag.text]);
    setCategoryTagItems([...categoryTagItems, tag]);
  };

  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleSaveDate = async () => {
    const userData = {
      menu: {
        courses: [
          {
            name,
            price,
            ingredients,
            allergenes,
            category,
          },
        ],
      },
    };
    setLoading(true);
    try {
      let answer = await api.profile(userData);
      if (answer.success === true) {
        alert("The profile was updated with success!");
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <Card>
      <Card.Header className="header_menu">
        <img
          className="image_menu"
          src={data.course.image ? data.course.image : placeholder}
        />
        <Accordion.Toggle as={Button} variant="link" eventKey={data.index}>
          <p>{name}</p>
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={data.index}>
        <Card.Body>
          <div className="profile_element">
            <h5>Name</h5>
            <div className="align_left_profile_input">
              <FormGroup>
                <FormControl
                  placeholder={name}
                  value={name}
                  type="text"
                  onChange={handleChangeName}
                ></FormControl>
              </FormGroup>
            </div>
          </div>

          <div className="profile_element">
            <h5>Price</h5>
            <div className="align_left_profile_input">
              <FormGroup>
                <FormControl
                  placeholder={price}
                  value={price}
                  type="number"
                  onChange={handleChangePrice}
                ></FormControl>
              </FormGroup>
            </div>
          </div>
          <div className="profile_element">
            <h5>Categories</h5>
            <div className="align_left_profile_input">
              <FormGroup>
                <div className="tags_list">
                  <div className="list_of_objects">
                    <ReactTags
                      placeholder="Add new category"
                      inline={false}
                      inputFieldPosition="top"
                      tags={categoryTagItems}
                      handleDelete={handleDeleteTags}
                      handleAddition={handleAddTag}
                      delimiters={delimiters}
                    />
                  </div>
                  <div className="submit_button">
                    <Button className="actual_button">ADD</Button>
                  </div>
                </div>
              </FormGroup>
            </div>
          </div>
          <div className="profile_element">
            <h5>Ingredients</h5>
            <div className="align_left_profile_input">
              <div className="add_to_list">
                <FormGroup>
                  <FormControl
                    type="text"
                    value={newIngredient}
                    onChange={handleAddIngredient}
                  ></FormControl>
                </FormGroup>
                <div className="add_button">
                  <Button
                    className="actual_button"
                    onClick={handleAddIngredientToList}
                  >
                    Add
                  </Button>
                </div>
              </div>
              <FormGroup>
                <FormControl as="select">
                  <option
                    style={{ display: "none" }}
                    selected="selected"
                    value="0"
                  >
                    Ingredients
                  </option>
                  {ingredients.map((ingredient) => {
                    return <option>{ingredient}</option>;
                  })}
                </FormControl>
              </FormGroup>
            </div>
          </div>
          <div className="profile_element">
            <h5>Allergenes</h5>
            <div className="align_left_profile_input">
              <div className="add_to_list">
                <FormGroup>
                  <FormControl
                    type="text"
                    value={newAllergen}
                    onChange={handleAddAllergene}
                  ></FormControl>
                </FormGroup>
                <div className="add_button">
                  <Button
                    className="actual_button"
                    onClick={handleAddAllergenesToList}
                  >
                    Add
                  </Button>
                </div>
              </div>
              <FormGroup>
                <FormControl value="Allergenes" as="select">
                  <option
                    style={{ display: "none" }}
                    selected="selected"
                    value="0"
                  >
                    Allergenes
                  </option>
                  {allergenes.map((allergenes) => {
                    return <option>{allergenes}</option>;
                  })}
                </FormControl>
              </FormGroup>
            </div>
          </div>
          <UploadMenuPhoto />
          <div className="submit_button">
            <Button className="actual_button" onClick={handleSaveDate}>
              Save
            </Button>
          </div>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default Course;
