/*
 * Copyright (c) 2018, Kevin S. Perrine <kperrine@gmail.com>
 *
 * License: MIT
 */

import React, { Component } from "react";

import { MegadraftPlugin, MegadraftIcons } from "megadraft";

const { BlockContent, BlockData, BlockInput, CommonBlock } = MegadraftPlugin;
import { debounce } from "underscore";
import BlockInputFile from "./BlockInputFile";

export default class Block extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.data.src && prevState.typing === false) {
      return {
        src: nextProps.data.src
      };
    }

    return null;
  }

  constructor(props) {
    super(props);

    this._handleUploadImage = ::this._handleUploadImage;
    this._handleUrlChange = ::this._handleUrlChange;
    this._handleAltChange = ::this._handleAltChange;
    this._handleCaptionChange = ::this._handleCaptionChange;
    this._handleRightsHolderChange = ::this._handleRightsHolderChange;
    this._loadImageWhenUserStopsTyping = ::this._loadImageWhenUserStopsTyping;

    this._uploadInput = React.createRef();

    this.actions = [
      {
        key: "delete",
        icon: MegadraftIcons.DeleteIcon,
        action: this.props.container.remove
      }
    ];

    this.state = {
      src: this.props.data.src,
      typing: false,
      uploadError: ""
    };
  }

  _loadImageWhenUserStopsTyping = debounce(() => {
    this.props.container.updateData({ src: this.state.src });
    this.setState({ typing: false });
  }, 1000);

  _handleCaptionChange(event) {
    event.stopPropagation();
    this.props.container.updateData({ caption: event.target.value });
  }

  _handleRightsHolderChange(event) {
    event.stopPropagation();
    this.props.container.updateData({ rightsHolder: event.target.value });
  }

  _handleUrlChange(event) {
    event.stopPropagation();
    this.setState({ src: event.target.value, typing: true }, () =>
      this._loadImageWhenUserStopsTyping()
    );
  }

  _handleAltChange(event) {
    event.stopPropagation();
    this.props.container.updateData({ alt: event.target.value });
  }

  _handleUploadImage(fileList) {
    this.props
      .onUpload(fileList)
      .then(result => {
        this.props.container.updateData({ src: result.src });
      })
      .catch(error => this.setState({ uploadError: error.message }));
  }

  render() {
    const { ...commonProps } = this.props;
    const { uploadError } = this.state;

    return (
      <CommonBlock {...commonProps} actions={this.actions}>
        <BlockContent>
          {this.props.data.src ? (
            <img
              alt={this.props.data.alt}
              className={`muipImage muipImage--${this.props.data.display}`}
              src={this.props.data.src}
            />
          ) : null}
        </BlockContent>

        <BlockData>
          <BlockInput
            placeholder="Image Url"
            value={this.state.src}
            onChange={this._handleUrlChange}
          />
          <BlockInput
            placeholder="Image Alt"
            value={this.props.data.alt}
            onChange={this._handleAltChange}
          />
          <BlockInput
            placeholder="Caption"
            value={this.props.data.caption}
            onChange={this._handleCaptionChange}
          />
          <BlockInput
            placeholder="Rights Holder"
            value={this.props.data.rightsHolder}
            onChange={this._handleRightsHolderChange}
          />
          <BlockInputFile
            onChange={this._handleUploadImage}
            error={uploadError}
          />
        </BlockData>
      </CommonBlock>
    );
  }
}
