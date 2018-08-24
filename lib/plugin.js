"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /*
                                                                                                                                                                                                                                                                   * Copyright (c) 2018, Kevin S. Perrine <kperrine@gmail.com>
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   * License: MIT
                                                                                                                                                                                                                                                                   */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _megadraft = require("megadraft");

var _Button = require("./Button");

var _Button2 = _interopRequireDefault(_Button);

var _Block = require("./Block");

var _Block2 = _interopRequireDefault(_Block);

var _constants = require("./constants");

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var handleUpload = _ref.handleUpload;

  return {
    title: _constants2.default.PLUGIN_NAME,
    type: _constants2.default.PLUGIN_TYPE,
    buttonComponent: _Button2.default,
    blockComponent: function blockComponent(props) {
      return _react2.default.createElement(_Block2.default, _extends({}, props, { onUpload: handleUpload }));
    },
    options: {
      defaultDisplay: "medium",
      displayOptions: [{ key: "small", icon: _megadraft.MegadraftIcons.MediaSmallIcon, label: "SMALL" }, {
        key: "medium",
        icon: _megadraft.MegadraftIcons.MediaMediumIcon,
        label: "MEDIUM"
      }, { key: "big", icon: _megadraft.MegadraftIcons.MediaBigIcon, label: "BIG" }]
    },
    data: {
      alt: "",
      caption: "",
      rightsHolder: "",
      src: ""
    }
  };
};