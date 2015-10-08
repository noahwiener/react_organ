var keyboardMap = {
81:"A4",
87:"A#",
69:"B4",
82:"C5",
84:"C#",
89:"D5",
85:"D#",
73:"E5",
79:"F5",
80:"F#",
219:"G5",
221:"G#",
220:"A5"
};

document.addEventListener('keydown', function (e) {
  var keycode = e.keyCode;
  var noteName = keyboardMap[keycode];
  KeyActions.keyPressed(noteName);
});

document.addEventListener('keyup', function (e) {
  var keycode = e.keyCode;
  var noteName = keyboardMap[keycode];
  KeyActions.keyReleased(noteName);
});

// need to find keycode. should invoke KeyActions.keyPressed
