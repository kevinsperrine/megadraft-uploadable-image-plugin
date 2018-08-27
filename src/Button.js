/*
 * Copyright (c) 2018, Kevin S. Perrine <kperrine@gmail.com>
 *
 * License: MIT
 */

import React, { Component } from "react";

import constants from "./constants";
import { MegadraftIcons, insertDataBlock } from "megadraft";

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.onClick = ::this.onClick;
  }

  onClick = e => {
    e.preventDefault();

    const data = {
      alt: "",
      caption: "",
      display: "medium",
      rightsHolder: "",
      src: "",
      target: "_self",
      type: constants.PLUGIN_TYPE,
      url: ""
    };

    // Calls the onChange method with the new state.
    this.props.onChange(insertDataBlock(this.props.editorState, data));
  };

  render() {
    return (
      <button
        className={this.props.className}
        type="button"
        onClick={this.onClick}
        title={constants.PLUGIN_NAME}
      >
        <MegadraftIcons.ImageIcon className="sidemenu__button__icon" />
      </button>
    );
  }
}
