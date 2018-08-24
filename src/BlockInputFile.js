import React, { Component } from "react";

import classNames from "classnames";

export default class BlockInputFile extends Component {
  constructor(props) {
    super(props);
    this._inputRef = React.createRef();

    this._handleChange = ::this._handleChange;
  }

  renderError(error) {
    if (!error) {
      return;
    }
    return <div className="block__input__error-text">{error}</div>;
  }

  _handleDrop(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  _handleChange(event) {
    event.preventDefault();
    event.stopPropagation();

    this.props.onChange(this._inputRef.current.files);
  }

  render() {
    let { value, error, styles, onChange, ...props } = this.props;
    styles = styles || {};

    let className = classNames({
      block__input: true,
      "block__input--empty": !value,
      "block__input--error": error,
      [`block__input--${styles.padding}-padding`]: styles.padding,
      [`block__input--${styles.text}-text`]: styles.text
    });

    return (
      <div className="block__input__row">
        <div className="block__input__wrapper">
          <input
            {...props}
            ref={this._inputRef}
            type="file"
            className={className}
            onDrop={this._handleDrop}
            onChange={this._handleChange}
          />
        </div>
        {this.renderError(error)}
      </div>
    );
  }
}
