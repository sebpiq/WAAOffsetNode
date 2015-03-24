WAAOffsetNode
===========

A simple offset node (or constant value) for Web Audio API.


Installation
-------------

You can grab the latest browser build from [dist/](https://github.com/sebpiq/WAAOffsetNode/blob/master/dist/WAAOffsetNode-latest.js) or install through npm with `npm install waaoffset` 


Usage
-------

Create :

```javascript
var context = new AudioContext()
  , offsetNode = new WAAOffsetNode(context)
```

Connect :

```javascript
// `WAAOffsetNode.connect` takes the same arguments as `AudioNode.connect`
offsetNode.connect(someOtherNode)
```

Control :

```javascript
// `WAAOffsetNode.offset` is an `AudioParam`
offsetNode.offset.setValueAtTime(0.5, 10)
```


Build
-------

`npm run build`


Run the tests
---------------

Run `npm build.tests`. It will create a `waatest` folder in the root of the package. Then open `waatest/index.html` in a web browser.