var utils = require('waatest').utils
  , WAAOffsetNode = require('../index')

describe('WAAOffsetNode', function() {
  
  it('should be 0 by default', function(done) {
    var offsetNode
    utils.expectSamples(
      function(context) {
        offsetNode = new WAAOffsetNode(context)
        offsetNode.connect(context.destination)
      },
      [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
      done
    )
  })

  it('should be controller by the offset AudioParam', function(done) {
    var offsetNode
    utils.expectSamples(
      function(context) {
        offsetNode = new WAAOffsetNode(context)
        offsetNode.connect(context.destination)
        offsetNode.offset.setValueAtTime(0, 0)
        offsetNode.offset.linearRampToValueAtTime(1, 1)
      },
      utils.makeBlock(1, 44100, [function(ch, i) { return i * 1 / 44100 }]),
      done
    )
  })

})