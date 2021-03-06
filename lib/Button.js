"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _constants = require("./constants");

var _constants2 = _interopRequireDefault(_constants);

var _megadraft = require("megadraft");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2018, Kevin S. Perrine <kperrine@gmail.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License: MIT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button(props) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

    _this.onClick = function (e) {
      e.preventDefault();

      var data = {
        alt: "",
        caption: "",
        display: "medium",
        rightsHolder: "",
        src: "",
        target: "_self",
        type: _constants2.default.PLUGIN_TYPE,
        url: ""
      };

      // Calls the onChange method with the new state.
      _this.props.onChange((0, _megadraft.insertDataBlock)(_this.props.editorState, data));
    };

    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "button",
        {
          className: this.props.className,
          type: "button",
          onClick: this.onClick,
          title: _constants2.default.PLUGIN_NAME
        },
        _react2.default.createElement(_megadraft.MegadraftIcons.ImageIcon, { className: "sidemenu__button__icon" })
      );
    }
  }]);

  return Button;
}(_react.Component);

exports.default = Button;