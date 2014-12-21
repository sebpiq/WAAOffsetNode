WAAOffset
===========

A simple offset (or constant value) as audio signal for Web Audio API.

Create :

```javascript
var context = new AudioContext()
  , offsetNode = new WaaOffset(context)
```

Connect :

```javascript
// `WAAOffset.connect` takes the same arguments as `AudioNode.connect`
offsetNode.connect(someOtherNode)
```

Control :

```javascript
// `WAAOffset.offset` is an `AudioParam`
offsetNode.offset.setValueAtTime(0.5, 10)
```


Build
-------

`npm run build`


Run the tests
---------------

Run `npm build.tests`. It will create a `waatest` folder in the root of the package. Then open `waatest/index.html` in a web browser.