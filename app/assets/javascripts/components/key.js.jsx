var Key = React.createClass({

  getInitialState: function () {
    return {pressed: false};
  },

  componentDidMount: function () {
    var freq = TONES[this.props.noteName];
    this.note = new Note(freq);
    KeyStore.addChangeListener(this._onChange);
  },

  _onChange: function () {

    if (KeyStore.notesPressed().indexOf(this.props.noteName) !== -1){
      this.setState({pressed: true});
      this.note.start();
    } else {
      this.setState({pressed: false});
      this.note.stop();
    }
  },

  render: function () {
    return (<div>{this.props.noteName}</div>);
  }
});


// write out render method inside of key.
