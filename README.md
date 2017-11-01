# react.js pwa hello world
---
first, you should install node, npm, yarn

1. Install lib
    `npm install` or `yarn install`

2. Script in package.json
```javascript
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "webpack-dev-server --hot",
        "dev": "node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js"
    },
```

3. Start server
    `npm start` or `yarn start`
    `npm dev` or `yarn dev`

4. open browser: [http://localhost:7777](http://localhost:7777)
