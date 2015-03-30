var WAAOffsetNode = module.exports = function(context) {
  this.context = context

  // Ones generator. We use only a single generator 
  // for all WAAOfsetNodes in the same AudioContext
  this._ones = WAAOffsetNode._ones.filter(function(ones) {
    return ones.context === context
  })[0]
  if (this._ones) this._ones = this._ones.ones 
  else {
    this._ones = context.createOscillator()
    this._ones.frequency.value = 0
    this._ones.setPeriodicWave(context.createPeriodicWave(
      new Float32Array([0, 1]), new Float32Array([0, 0])))
    this._ones.start(0)
    WAAOffsetNode._ones.push({ context: context, ones: this._ones })
  }

  // Multiplier
  this._output = context.createGain()
  this._ones.connect(this._output)
  this.offset = this._output.gain
  this.offset.value = 0
}

WAAOffsetNode.prototype.connect = function() {
  this._output.connect.apply(this._output, arguments)
}

WAAOffsetNode.prototype.disconnect = function() {
  this._output.disconnect.apply(this._output, arguments)
}

WAAOffsetNode._ones = []