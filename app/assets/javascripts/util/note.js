(function(root) {
  'use strict';
  var AudioContext = window.AudioContext || window.webkitAudioContext;
  var ctx = new AudioContext();

  root.Note = function(freq) {
    this.gainNode = createGainNode();
    this.oscillatorNode = createOscillator(freq);
    this.oscillatorNode.connect(this.gainNode);
  };

  var createOscillator = function (freq) {
    var osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.value = freq;
    osc.detune.value = 0;
    osc.start(ctx.currentTime);
    return osc;
  };

  var createGainNode = function () {
    var gainNode = ctx.createGain();
    gainNode.gain.value = 0;
    gainNode.connect(ctx.destination);

    return gainNode;
  };

    Note.prototype.start = function () {
      this.gainNode.gain.value = 0.3;
    };

    Note.prototype.stop = function () {
      this.gainNode.gain.value = 0;
    };

}(this));
