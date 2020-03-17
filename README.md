# Extra Prop Types

> Extra Prop Types for React Components

[![GitHub issues](https://img.shields.io/github/issues/brendon1555/extra-prop-types)](https://github.com/brendon1555/extra-prop-types/issues)
[![devDependencies](https://img.shields.io/david/dev/brendon1555/extra-prop-types)](https://david-dm.org/brendon1555/extra-prop-types?type=dev)
[![peerDependencies](https://img.shields.io/david/peer/brendon1555/extra-prop-types)](https://david-dm.org/brendon1555/extra-prop-types?type=peer)
[![License](https://img.shields.io/github/license/brendon1555/extra-prop-types)](http://badges.mit-license.org)

---

## Installation

```shell
$ yarn add extra-prop-types
```

or

```shell
$ npm install --save extra-prop-types
```

---

## Usage

```JSX

import * as ExtraPropTypes from 'extra-prop-types';


const SomeComponent = (colorProp) => (
    <div style={{ backgroundColor: colorProp }}></div>
)

SomeComponent.propTypes = {
    colorProp: ExtraPropTypes.color.isRequired
}

```

---
## Types

**color**
accepts:
- hex
  - #ffffff
- rgb
  - rgb(255, 255, 255)
- rgba
  - rgba(255, 255, 255, 1)
- hsl
  - hsl(0, 100%, 100%)
- hsla
  - hsla(0, 0%, 100%, 1)
---

## Contributing

> Want to add a type? To get started...

### Step 1

- **Option 1**

  - 🍴 Fork this repo!

- **Option 2**
  - 👯 Clone this repo to your local machine using `https://github.com/brendon1555/extra-prop-types.git`

### Step 2

- **HACK AWAY!** 🔨🔨🔨

### Step 3

- 🔃 Create a new pull request using <a href="https://github.com/brendon1555/extra-prop-types/compare/" target="_blank">`https://github.com/brendon1555/extra-prop-types/compare/`</a>.

---

## Contributors

|                 <a href="https://brendon1555.com" target="_blank">**Brendon Lees**</a>                  |
| :-----------------------------------------------------------------------------------------------------: |
| [![Brendon1555](https://avatars3.githubusercontent.com/u/12216552?&v=3&s=200)](https://brendon1555.com) |
|          <a href="http://github.com/brendon1555" target="_blank">`github.com/brendon1555`</a>           |

---

## Support

Reach out to me at one of the following places!

- Website at <a href="http://brendon1555.com" target="_blank">`brendon1555.com`</a>
- Twitter at <a href="http://twitter.com/brendon1555" target="_blank">`@brendon1555`</a>

---

## License

[![License](https://img.shields.io/github/license/brendon1555/extra-prop-types)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2020 © <a href="http://brendon1555.com" target="_blank">Brendon Lees</a>.
