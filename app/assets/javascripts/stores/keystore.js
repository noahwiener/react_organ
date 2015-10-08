(function(root) {
  'use strict';

  var _keys = [];

  root.KeyStore = $.extend({}, EventEmitter.prototype, {
    notesPressed: function () {
      return _keys.slice();
    },

    emitChange: function () {
      KeyStore.emit(MESSAGE_TYPES.CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
      this.on(MESSAGE_TYPES.CHANGE_EVENT, callback);
    },
    // This should have Note.start as its callback

    removeChangeListener: function(callback) {
      this.removeListener(MESSAGE_TYPES.CHANGE_EVENT, callback);
    }
    // This should have Note.stop as its callback


  });

    AppDispatcher.register(function(action){
      switch(action.actionType){
        case MESSAGE_TYPES.KEY_PRESSED:
          _keys = [];
          _keys.push(action.noteName);
          KeyStore.emitChange();
          break;
        case  MESSAGE_TYPES.KEY_RELEASED:
          var index = _keys.indexOf(action.noteName);
          _keys.splice(index, 1);
          KeyStore.emitChange();
          break;
      }
    });

    KeyStore.setMaxListeners(30);

}(this));
