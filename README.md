# Megadraft Upload Plugin - Megadraft Plugin

## Usage

Include the plugin in the `plugins` prop of your `Megadraft` instance.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { MegadraftEditor } from 'megadraft';

import plugin from 'megadraft-uploadable-image-plugin';

class Example extends React.Component {
  /**
   * The success responses are expected to contain a `src` property, and the errors are generic JS `new Error('an error message')`
   *
   * An example uploading to imgur
   */
  handleUpload(fileList) {
    const [file] = fileList;
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://api.imgur.com/3/image');
      xhr.setRequestHeader(
        'Authorization',
        `Client-ID ${process.env.REACT_APP_IMGUR_CLIENT_ID}`
      );
      const data = new FormData();
      data.append('image', file);
      xhr.send(data);
      xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText);
        if (response.success) {
          resolve({ src: response.data.link });
        } else {
          reject(new Error(response.data.error));
        }
      });
      xhr.addEventListener('error', () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    });
  }

  render() {
    return (
      <MegadraftEditor
        plugins={[plugin({ handleUpload: this.handleUpload })]}
      />
    );
  }
}

ReactDOM.render(<Example />, document.getElementById('container'));
```

## Contributing

Install, run, test.

```
# Install npm dependencies
make setup

# Gulp dev-server task with webpack + sass running on http://localhost:8080/
make run

# Run mocha tests + eslint
make test
```

If you're constantly running tests, there's a faster alternative using mocha's
watch feature:

```
make watch_unit
```

## Releasing

There's a `prepublish` script entry on `package.json` that runs build tasks
before publishing the package.

```
npm publish
```

## Third Party

The sample plugin uses the extension icon from https://design.google.com/icons/
under [Apache License Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).
