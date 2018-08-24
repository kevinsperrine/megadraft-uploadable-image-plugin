"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BlockInputFile = function (_Component) {
  _inherits(BlockInputFile, _Component);

  function BlockInputFile(props) {
    _classCallCheck(this, BlockInputFile);

    var _this = _possibleConstructorReturn(this, (BlockInputFile.__proto__ || Object.getPrototypeOf(BlockInputFile)).call(this, props));

    _this._inputRef = _react2.default.createRef();

    _this._handleChange = _this._handleChange.bind(_this);
    return _this;
  }

  _createClass(BlockInputFile, [{
    key: "renderError",
    value: function renderError(error) {
      if (!error) {
        return;
      }
      return _react2.default.createElement(
        "div",
        { className: "block__input__error-text" },
        error
      );
    }
  }, {
    key: "_handleDrop",
    value: function _handleDrop(event) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, {
    key: "_handleChange",
    value: function _handleChange(event) {
      event.preventDefault();
      event.stopPropagation();

      this.props.onChange(this._inputRef.current.files);
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _props = this.props,
          value = _props.value,
          error = _props.error,
          styles = _props.styles,
          onChange = _props.onChange,
          props = _objectWithoutProperties(_props, ["value", "error", "styles", "onChange"]);

      styles = styles || {};

      var className = (0, _classnames2.default)((_classNames = {
        block__input: true,
        "block__input--empty": !value,
        "block__input--error": error
      }, _defineProperty(_classNames, "block__input--" + styles.padding + "-padding", styles.padding), _defineProperty(_classNames, "block__input--" + styles.text + "-text", styles.text), _classNames));

      return _react2.default.createElement(
        "div",
        { className: "block__input__row" },
        _react2.default.createElement(
          "div",
          { className: "block__input__wrapper" },
          _react2.default.createElement("input", _extends({}, props, {
            ref: this._inputRef,
            type: "file",
            className: className,
            onDrop: this._handleDrop,
            onChange: this._handleChange
          }))
        ),
        this.renderError(error)
      );
    }
  }]);

  return BlockInputFile;
}(_react.Component);

exports.default = BlockInputFile;