import React from "react";
import * as api from "../api";
import { Form } from "react-bootstrap";

class MultipleImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();
    api.uploadMultiple(this.state.file);
  }

  onChange(e) {
    this.setState({ file: e.target.files[0] });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <p>Upload a photo</p>
        <input type="file" name="myImage" multiple onChange={this.onChange} />
        <button type="submit" class="btn btn-outline-primary">
          Upload
        </button>
      </form>
    );
  }
}

export default MultipleImageUpload;
