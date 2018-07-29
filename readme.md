# preact-append-child

> Simple and lightweight append child component for Preact; for :atom_symbol: [Preact](https://github.com/developit/preact)

## But why?
To use the dom elements simply and quickly.

## Usage
for example [json-formatter-js](https://github.com/mohsen1/json-formatter-js)

```jsx
const { h, Component, render } = require("preact");
import JSONFormatter from "json-formatter-js";
import AppendChild from "preact-append-child";

class Demo extends Component {
  constructor() {
    super()
    this.state = {
      json: {
        count: 0
      }
    };
  }
  
  componentWillMount() {
    setInterval(() => {
      this.setState({
        json: {
          count: ++this.state.json.count
        }
      })
    }, 100)
  }

  render() {
    let formatter = new JSONFormatter(this.state.json);

    return (
      <div>
        <AppendChild child={formatter.render()}/>
      </div>
    );
  }
}

render(<Demo />, document.body);
```

[![Edit 3x3m6zo0wp](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/3x3m6zo0wp)

## Install

```
$ npm install --save preact-append-child
```

```html
<script src="https://unpkg.com/preact-append-child@1.0.0/dist/preact-append-child.min.js"></script>
```

## Properties

#### child
Type: `Object`

#### afterAppend
Type: `Function`

#### beforeAppend
Type: `Function`

## License

MIT © [Ahmet Şimşek](https://github.com/indatawetrust)
