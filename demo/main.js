/*
 * Copyright (c) 2018, Kevin S. Perrine <kperrine@gmail.com>
 *
 * License: MIT
 */

import React from "react";
import ReactDOM from "react-dom";
import { MegadraftEditor } from "megadraft";
import { editorStateFromRaw, editorStateToJSON } from "megadraft/lib/utils";

import plugin from "../src/plugin";

import INITIAL_CONTENT from "./content";

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: editorStateFromRaw(INITIAL_CONTENT)
    };
    this.onChange = ::this.onChange;
    this.handleUpload = ::this.handleUpload;
    this.handleDumpState = ::this.handleDumpState;
  }

  onChange(content) {
    this.setState({ content });
  }

  handleUpload(fileList) {
    const [file] = fileList;
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://api.imgur.com/3/image");
      xhr.setRequestHeader(
        "Authorization",
        `Client-ID ${process.env.REACT_APP_IMGUR_CLIENT_ID}`
      );
      const data = new FormData();
      data.append("image", file);
      xhr.send(data);
      xhr.addEventListener("load", () => {
        const response = JSON.parse(xhr.responseText);
        if (response.success) {
          resolve({ src: response.data.link });
        } else {
          reject(new Error(response.data.error));
        }
      });
      xhr.addEventListener("error", () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    });
  }

  handleDumpState() {
    console.log(editorStateToJSON(this.state.content));
  }

  render() {
    const pluginName = "megadraft button plugin";
    return (
      <div className="content">
        <header>
          <h1>{pluginName} - Megadraft Plugin</h1>
          <button onClick={this.handleDumpState}>Dump State</button>
        </header>

        <div className="editor">
          <MegadraftEditor
            plugins={[plugin({ handleUpload: this.handleUpload })]}
            editorState={this.state.content}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById("container"));
