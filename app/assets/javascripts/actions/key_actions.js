var KeyActions = {
  keyPressed: function (noteName) {
    
    AppDispatcher.dispatch({
      actionType: MESSAGE_TYPES.KEY_PRESSED,
      noteName: noteName
    });
  },

  keyReleased: function (noteName) {
    AppDispatcher.dispatch({
      actionType: MESSAGE_TYPES.KEY_RELEASED,
      noteName: noteName
    });
  },

};
