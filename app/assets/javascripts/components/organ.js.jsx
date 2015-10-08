var Organ = React.createClass({

  render: function () {
    return (
      <div>
        {
          Object.keys(TONES).map (function(tone, idx) {
            return <Key key={TONES[tone]} noteName={tone}/>;
          })
        }
      </div>
    );}
});
