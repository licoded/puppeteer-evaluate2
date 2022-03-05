## install

```bash
npm i --save-dev @types/jest jest babel-jest
```

## with babel

```bash
npm i --save-dev babel-jest @babel/core @babel/preset-env 
```

```js
// babel.config.js
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```

## with typescript

> need with babel

```js
// babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
+    '@babel/preset-typescript',
  ],
};
```