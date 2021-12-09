import axios from "axios";
import React, { Component } from "react";
import { isValidURL } from "../Modules/short-url";
import "../Styles/Converter.css";

export class Converter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: this.props.isError,
      url: this.props.url,
    };
  }
  handleChange = (event) => {
    this.setState({
      url: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isError = !isValidURL(this.state.url);
    if (!isError) {
      this.props.parentCallback({
        url: this.state.url,
        short: axios
          .get("http://localhost:5000/short", {
            params: {
              url: this.state.url,
            },
          })
          .then((s) => {
            return s.data;
          }),
      });
    }
    this.setState({
      isError: isError,
      url: "",
    });
  };

  render() {
    let { url, isError } = this.state;
    return (
      <div className="form">
        <form className="form__container">
          <div className="wrapper">
            <input
              value={url}
              placeholder="Shorten a link here..."
              onChange={this.handleChange}
              className={`${isError ? "form__err_input" : ""} ${
                isError ? "form__error" : ""
              } form__input`}
            />
            <span
              className="form__err_msg"
              style={
                isError ? { visibility: "visible" } : { visibility: "hidden" }
              }
            >
              Enter a valid link.
            </span>
          </div>
          <button className="form__button" onClick={this.handleSubmit}>
            Shorten it!
          </button>
        </form>
      </div>
    );
  }
}

export default Converter;
