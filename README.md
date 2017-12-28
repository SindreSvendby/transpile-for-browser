# transpile-for-browser

_Let's you transpile code based on the user-agent_

Modern browsers seldom need to transpile much of the code we need.
This library lets you transpile only the minimum of what you need for the specify browser.

```js
import { transform } from "transpile-for-browser";
const userAgent =
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36";
const arrowFunctionCode = "() => console.log('testing arrrow function')";
const code = transform(userAgent, arrowFunctionCode);
```

uses babel ❤️, [babel-preset-env](https://github.com/babel/babel/tree/master/packages/babel-preset-env) and [ua-parser-js](https://github.com/faisalman/ua-parser-js)

## Missing

* No minifing

## Module bundler

This is _not_ a module bundler, it only takes in one file and transpile it.
If you are not sure if you should use this, Check out [webpack](https://webpack.github.io/), [parcel](http://parceljs.com/) and [rollup](https://rollupjs.org/)
