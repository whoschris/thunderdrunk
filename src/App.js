import React from 'react';
import ReactPlayer from 'react-player';
//import './App.css';
import { OFFSET, MAX_NAME_LENGTH } from './constants';
import { THUNDER } from './constants';


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
    this.inputRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      cursorPos: e.target.selectionEnd,
    })
    this.props.onChangeFun(e.target);
  }

  componentDidUpdate() {
    this.inputRef.current.selectionEnd = this.props.cursorPos;
  }

  render(){
    //format names from array
    let names = this.props.players.join("\n");
    return(
      <div>
        <div id="instructions">
          <p>A simple app to help you play the <a href="https://www.drinkiwiki.com/Thunderstruck">Thunderstruck drinking game</a></p>
        </div>  
        <div id="player-input">
          <p>Enter player names (one per line) and hit "Start!" to begin:</p>
          <textarea 
            name="player-input" 
            rows="20" cols="24" 
            spellCheck="false"
            autoFocus
            value={names}
            onChange={this.handleChange}
            ref={this.inputRef}>        
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

function Player(props){
  if (props.drinking){
    return <li><strong>{props.name}</strong></li>;
  }
  return <li>{props.name}</li>;
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    const lineup = props.players.map((name ,index) => {
      return <Player name={name} drinking={false} key={index}/>;
    });

    this.state = {
      lineup: lineup,
      count: 0,
      numPlayers: lineup.length,
    }

    this.handleProgress = this.handleProgress.bind(this);
  }

  handleProgress(prog) {
    //console.log(prog.playedSeconds);
    if ((prog.playedSeconds+OFFSET) >= THUNDER[this.state.count]){
      this.setState({
        count: this.state.count+1,
      })
    }
  }

  render(){
    //TODO: restart/go back button
    let currentDrinker = "";
    let onDeck = " is on deck"
    if (this.state.count === 0) {
      currentDrinker = "waiting...";
      onDeck = this.props.players[0] + onDeck;
    }
    else {
      currentDrinker = this.props.players[(this.state.count-1) % this.state.numPlayers]
        + ", drink!";
      onDeck = this.props.players[this.state.count % this.state.numPlayers] + onDeck
    }

    //TODO Fix table width
    return(
      <div>
        <table style={{width: 1000}} align="center">
          <tbody>
            <tr>
              <td rowSpan="2">
                <button id="back" onMouseUp={this.props.handleRestartFun}>Restart</button> 
                <ReactPlayer 
                  url="https://www.youtube.com/watch?v=v2AC41dglnM"
                  progressInterval={10} 
                  onProgress={this.handleProgress}
                  config={{
                    youtube: {
                      playerVars: { diablekb: 1}
                    }
                  }}
                />
              </td>
              <td>
                <p id="drinking-player" style={{fontSize: 50, fontWeight: "bold", marginBottom: "10px"}}>{currentDrinker}</p>
                <p id="on-deck-player" style={{fontSize: 30, marginTop: "0px"}}>{onDeck}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Lineup:</p>
                <ul style={{listStyleType: "none"}}>
                  {this.state.lineup}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      players: [],
      start: true,
      cursorPos: 0,
    };
    // this.state = { //FOR DEBUGGING
    //   players: ["pelf", "chris", "riedel"],
    //   start: false,
    // };
    this.handleNewChar = this.handleNewChar.bind(this);
  }

  handleNewChar(target){
    let curPosNew = target.selectionEnd;
    const tmp = target.value.split("\n").map((str, i) => {
      if (str.length > MAX_NAME_LENGTH){
        curPosNew = curPosNew - 1;
        return this.state.players[i];
      }
      return str;
    });

    this.setState({
      players: tmp,
      cursorPos: curPosNew,
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
      cursorPos: 0,
    });
  }

  handleStart() { 
    const formatted = formatPlayerList(this.state.players);
    if (formatted.length < 2) {
      alert("Must have at least 2 players");
      return;
    }
    this.setState({
      players: formatted,
      start: false,
    });
  }

  handleRestart() {
    this.setState({
      start: true,
    });
  }

  render() {
    if (this.state.start){
      return(
        <Start 
          players={this.state.players} 
          cursorPos={this.state.cursorPos}
          onChangeFun={this.handleNewChar}
          handleShuffleFun={() => this.handleShuffle()}
          handleClearFun={() => this.handleClear()}
          handleStartFun={() => this.handleStart()}
        />
      );
    }
    else {
      return(
        <Game players={this.state.players} handleRestartFun={() => this.handleRestart()}/>
      )
    }
  }
}



export default App;
