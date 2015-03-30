var assert = require('assert')
  , utils = require('waatest').utils
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

  it('should use the same ones generator for all WAAOffsetNodes', function(done) {
    var offsetNode1, offsetNode2
    utils.expectSamples(
      function(context) {
        offsetNode1 = new WAAOffsetNode(context)
        offsetNode2 = new WAAOffsetNode(context)
        assert.equal(offsetNode1._ones, offsetNode2._ones)

        offsetNode1.connect(context.destination)
        offsetNode2.connect(context.destination)
        offsetNode1.offset.setValueAtTime(10, 0)
        offsetNode2.offset.setValueAtTime(0.1, 0)
      },
      [
        [10.1, 10.1, 10.1, 10.1, 10.1, 10.1],
        [10.1, 10.1, 10.1, 10.1, 10.1, 10.1]
      ],
      done
    )
  })

})