/*
 * Copyright (c) 2018, Kevin S. Perrine <kperrine@gmail.com>
 *
 * License: MIT
 */
import React from "react";
import { MegadraftIcons } from "megadraft";

import Button from "./Button";
import Block from "./Block";
import constants from "./constants";

export default ({ handleUpload }) => {
  return {
    title: constants.PLUGIN_NAME,
    type: constants.PLUGIN_TYPE,
    buttonComponent: Button,
    blockComponent: props => <Block {...props} onUpload={handleUpload} />,
    options: {
      defaultDisplay: "medium",
      displayOptions: [
        { key: "small", icon: MegadraftIcons.MediaSmallIcon, label: "SMALL" },
        {
          key: "medium",
          icon: MegadraftIcons.MediaMediumIcon,
          label: "MEDIUM"
        },
        { key: "big", icon: MegadraftIcons.MediaBigIcon, label: "BIG" }
      ]
    },
    data: {
      alt: "",
      caption: "",
      rightsHolder: "",
      src: "",
      zoomable: false
    }
  };
};
