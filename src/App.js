import React from 'react';
//import './App.css';

function formatPlayerList(players){
  const formatted = players.filter(str => str.length !== 0).map((str) => {
    return str.trim();
  });
  return formatted;
}

class Start extends React.Component {
  //TODO: add line numbers to textarea
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChangeFun(e.target.value);
  }

  render(){
    //format names from array
    let names = this.props.players.join("\n");
    return(
      <div>
        <div id="player-input">
          <p>Enter player names, one per line:</p>
          <textarea 
            name="player-input" 
            rows="20" cols="24" 
            spellCheck="false"
            autoFocus
            value={names}
            onChange={this.handleChange}>        
          </textarea>
        </div>
        <div id="control-buttons">
          <button id="shuffle" onMouseUp={this.props.handleShuffleFun}>Shuffle</button>
          <button id="clear" onMouseUp={this.props.handleClearFun}>Clear</button>
          <button id="Start" onMouseUp={this.props.handleStartFun}>Start!</button>  
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render(){
    return(
      <div>hello game</div>
    );
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      players: [],
      start: true,
    };
    this.handleNewChar = this.handleNewChar.bind(this);
  }

  handleNewChar(value){
    const tmp = value.split("\n").map((str) => {
      if (str.length > 24){
        return str.substr(0, 24);
      }
      return str;
    });

    this.setState({
      players: tmp,
     });
  }

  handleShuffle() {
    const formatted = formatPlayerList(this.state.players);
    //fisher-yates shuffle
    for(let i = formatted.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * i)
      const temp = formatted[i]
      formatted[i] = formatted[j]
      formatted[j] = temp
    }

    this.setState({
      players: formatted,
    });
  }

  handleClear() {
    this.setState({
      players: [],
    });
  }

  handleStart() {
    this.setState({
      players: formatPlayerList(this.state.players),
      start: false,
    });
  }

  render() {
    if (this.state.start){
      return(
        <Start 
          players={this.state.players} 
          onChangeFun={this.handleNewChar}
          handleShuffleFun={() => this.handleShuffle()}
          handleClearFun={() => this.handleClear()}
          handleStartFun={() => this.handleStart()}
        />
      );
    }
    else {
      return(
        <Game players={this.state.players}/>
      )
    }
  }
}



export default App;
