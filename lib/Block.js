"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _megadraft = require("megadraft");

var _underscore = require("underscore");

var _BlockInputFile = require("./BlockInputFile");

var _BlockInputFile2 = _interopRequireDefault(_BlockInputFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2018, Kevin S. Perrine <kperrine@gmail.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License: MIT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var BlockContent = _megadraft.MegadraftPlugin.BlockContent,
    BlockData = _megadraft.MegadraftPlugin.BlockData,
    BlockInput = _megadraft.MegadraftPlugin.BlockInput,
    CommonBlock = _megadraft.MegadraftPlugin.CommonBlock;

var Block = function (_Component) {
  _inherits(Block, _Component);

  _createClass(Block, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.data.src && prevState.typing === false) {
        return {
          src: nextProps.data.src
        };
      }

      return null;
    }
  }]);

  function Block(props) {
    _classCallCheck(this, Block);

    var _this = _possibleConstructorReturn(this, (Block.__proto__ || Object.getPrototypeOf(Block)).call(this, props));

    _this._loadImageWhenUserStopsTyping = (0, _underscore.debounce)(function () {
      _this.props.container.updateData({ src: _this.state.src });
      _this.setState({ typing: false });
    }, 1000);


    _this._handleUploadImage = _this._handleUploadImage.bind(_this);
    _this._handleSrcChange = _this._handleSrcChange.bind(_this);
    _this._handleTargetChange = _this._handleTargetChange.bind(_this);
    _this._handleUrlChange = _this._handleUrlChange.bind(_this);
    _this._handleAltChange = _this._handleAltChange.bind(_this);
    _this._handleCaptionChange = _this._handleCaptionChange.bind(_this);
    _this._handleRightsHolderChange = _this._handleRightsHolderChange.bind(_this);
    _this._loadImageWhenUserStopsTyping = _this._loadImageWhenUserStopsTyping.bind(_this);

    _this._uploadInput = _react2.default.createRef();

    _this.actions = [{
      key: "delete",
      icon: _megadraft.MegadraftIcons.DeleteIcon,
      action: _this.props.container.remove
    }];

    _this.state = {
      src: _this.props.data.src,
      typing: false,
      uploadError: ""
    };
    return _this;
  }

  _createClass(Block, [{
    key: "_handleCaptionChange",
    value: function _handleCaptionChange(event) {
      event.stopPropagation();
      this.props.container.updateData({ caption: event.target.value });
    }
  }, {
    key: "_handleRightsHolderChange",
    value: function _handleRightsHolderChange(event) {
      event.stopPropagation();
      this.props.container.updateData({ rightsHolder: event.target.value });
    }
  }, {
    key: "_handleSrcChange",
    value: function _handleSrcChange(event) {
      var _this2 = this;

      event.stopPropagation();
      this.setState({ src: event.target.value, typing: true }, function () {
        return _this2._loadImageWhenUserStopsTyping();
      });
    }
  }, {
    key: "_handleUrlChange",
    value: function _handleUrlChange(event) {
      event.stopPropagation();
      this.props.container.updateData({ url: event.target.value });
    }
  }, {
    key: "_handleTargetChange",
    value: function _handleTargetChange(event) {
      event.stopPropagation();
      this.props.container.updateData({ target: event.target.value });
    }
  }, {
    key: "_handleAltChange",
    value: function _handleAltChange(event) {
      event.stopPropagation();
      this.props.container.updateData({ alt: event.target.value });
    }
  }, {
    key: "_handleUploadImage",
    value: function _handleUploadImage(fileList) {
      var _this3 = this;

      this.props.onUpload(fileList).then(function (result) {
        _this3.props.container.updateData({ src: result.src });
      }).catch(function (error) {
        return _this3.setState({ uploadError: error.message });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var commonProps = _objectWithoutProperties(this.props, []);

      var uploadError = this.state.uploadError;


      console.log(this.props);

      return _react2.default.createElement(
        CommonBlock,
        _extends({}, commonProps, { actions: this.actions }),
        _react2.default.createElement(
          BlockContent,
          null,
          this.props.data.src ? _react2.default.createElement("img", {
            alt: this.props.data.alt,
            className: "muipImage muipImage--" + this.props.data.display,
            src: this.props.data.src
          }) : null
        ),
        _react2.default.createElement(
          BlockData,
          null,
          _react2.default.createElement(
            "fieldset",
            null,
            _react2.default.createElement(
              "legend",
              { className: "muipLegend" },
              "Link"
            ),
            _react2.default.createElement(BlockInput, {
              placeholder: "Link",
              value: this.props.data.url,
              onChange: this._handleUrlChange
            }),
            _react2.default.createElement(
              "div",
              { className: "block__input__row" },
              _react2.default.createElement(
                "div",
                { className: "block__input__wrapper" },
                _react2.default.createElement(
                  "span",
                  { className: "block__input muipRadioInput" },
                  _react2.default.createElement(
                    "span",
                    { style: { marginRight: "12px" } },
                    "Open Link:"
                  ),
                  _react2.default.createElement("input", {
                    name: this.props.container.props.offsetKey + "-target",
                    type: "radio",
                    value: "_self",
                    checked: this.props.data.target === "_self",
                    onChange: this._handleTargetChange
                  }),
                  " ",
                  "In-App"
                ),
                _react2.default.createElement(
                  "span",
                  { className: "block__input muipRadioInput" },
                  _react2.default.createElement("input", {
                    name: this.props.container.props.offsetKey + "-target",
                    type: "radio",
                    value: "_blank",
                    checked: this.props.data.target === "_blank",
                    onChange: this._handleTargetChange
                  }),
                  " ",
                  "External"
                ),
                _react2.default.createElement(
                  "span",
                  { className: "muipHelperText" },
                  "If being used on the web, 'In-App' will open the link in the same tab and 'External' will open a new tab."
                )
              )
            )
          ),
          _react2.default.createElement(
            "fieldset",
            null,
            _react2.default.createElement(
              "legend",
              { className: "muipLegend" },
              "Image"
            ),
            _react2.default.createElement(BlockInput, {
              placeholder: "Image Url",
              value: this.state.src,
              onChange: this._handleSrcChange
            }),
            _react2.default.createElement(BlockInput, {
              placeholder: "Image Alt",
              value: this.props.data.alt,
              onChange: this._handleAltChange
            }),
            _react2.default.createElement(BlockInput, {
              placeholder: "Caption",
              value: this.props.data.caption,
              onChange: this._handleCaptionChange
            }),
            _react2.default.createElement(BlockInput, {
              placeholder: "Rights Holder",
              value: this.props.data.rightsHolder,
              onChange: this._handleRightsHolderChange
            }),
            _react2.default.createElement(_BlockInputFile2.default, {
              onChange: this._handleUploadImage,
              error: uploadError
            })
          )
        )
      );
    }
  }]);

  return Block;
}(_react.Component);

exports.default = Block;