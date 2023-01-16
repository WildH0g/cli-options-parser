<h1 align="center">Welcome to cli-options-parser 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/WildH0g/cli-options-parser#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/WildH0g/cli-options-parser/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/WildH0g/cli-options-parser/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/WildH0g/cli-options-parser" />
  </a>
  <a href="https://twitter.com/wildhogsm" target="_blank">
    <img alt="Twitter: wildhogsm" src="https://img.shields.io/twitter/follow/wildhogsm.svg?style=social" />
  </a>
</p>

> Parser command line options into an object. Uses `--key value1 -k value2` syntax.

### 🏠 [Homepage](https://github.com/WildH0g/cli-options-parser)

## Install

```sh
npm install cli-options-parser
```

## Usage

Your CLI App:

```js
// cli-app.js
import cliToObject from 'cli-options-parser';

const obj = cliToObject();

console.log('⚠️  This is what we got:');
Object.entries(obj).forEach(([key, value]) =>
  console.log(`${key.replace(/^-{1,2}/, '')}: ${value}`)
);
```

Command line prompt:

```sh
/path/to/cli-app.js --name John --age 23 --is-adult

# cliToObject returns { '--name': 'John', '--age': '23', '--isAdult': true }
# cli-app.js prints:
# ⚠️  This is what we got:
# name: John
# age: 23
# is-adult: true
```

Import the `cliToObject()` function from `cli-options-parser`. Call it and store the returned result in a variable. What it will do is read `process.argv` and return the options in an object as key-value pairs. Keys without values are assigned the value of `true`.

## Syntax

Keys are preceeded with a double dash `--` and can optionally be followed by a value. If no value is followed, then the value of true is assigned. For example:

- `--name John` produces `{ '--name': 'John' }`
- `--is-engineer` produces `{ '--is-engineer': true }`

Optionally you can use short-hand one-letter keys preceeded with a single dash `-`. The same rules apply. For example:

- `-n John` produces `{ '-n': 'John' }`
- `-h` produces `{ '-h': true }`

## Run tests

```sh
npm run test
```

## Author

👤 **Dmitry Kostyuk**

- Website: [https://www.wurkspaces.dev](https://www.wurkspaces.dev)
- Twitter: [@wildhogsm](https://twitter.com/wildhogsm)
- Github: [@WildH0g](https://github.com/WildH0g)
- LinkedIn: [@dmitrykostyuk](https://linkedin.com/in/dmitrykostyuk)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/WildH0g/cli-options-parser/issues). You can also take a look at the [contributing guide](https://github.com/WildH0g/cli-options-parser/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2023 [Dmitry Kostyuk](https://github.com/WildH0g).<br />
This project is [MIT](https://github.com/WildH0g/cli-options-parser/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
