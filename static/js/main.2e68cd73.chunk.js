(this["webpackJsonpthunderdrunk-app"]=this["webpackJsonpthunderdrunk-app"]||[]).push([[0],{14:function(e,t,n){e.exports=n(40)},19:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(12),s=n.n(l),i=(n(19),n(4)),u=n(5),h=n(2),c=n(7),o=n(6),d=n(13),p=n.n(d),f=(n(39),[29.266666666666666,32.86666666666667,36.53333333333333,40.06666666666667,43.7,47.3,50.86666666666667,54.5,58.1,61.666666666666664,70.73333333333333,77.9,85.1,92.3,100.4,111.43333333333334,161.93333333333334,165.56666666666666,169.26666666666668,172.83333333333334,222.9,226.4,229.96666666666667,233.66666666666666,251.26666666666668,254.76666666666668,257.23333333333335,258.3666666666667,262,265.3666666666667,268.93333333333334,272.4,275.93333333333334,279.1666666666667]);function m(e){return e.filter((function(e){return 0!==e.length})).map((function(e){return e.trim()}))}var y=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).inputRef=r.a.createRef(),a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.handleEnterShuffle=a.handleEnterShuffle.bind(Object(h.a)(a)),a.handleEnterClear=a.handleEnterClear.bind(Object(h.a)(a)),a.handleEnterStart=a.handleEnterStart.bind(Object(h.a)(a)),a}return Object(u.a)(n,[{key:"handleChange",value:function(e){this.setState({cursorPos:e.target.selectionEnd}),this.props.onChangeFun(e.target)}},{key:"handleEnterShuffle",value:function(e){"Enter"===e.key&&this.props.handleShuffleFun()}},{key:"handleEnterClear",value:function(e){"Enter"===e.key&&this.props.handleClearFun()}},{key:"handleEnterStart",value:function(e){"Enter"===e.key&&this.props.handleStartFun()}},{key:"componentDidUpdate",value:function(){this.inputRef.current.selectionEnd=this.props.cursorPos}},{key:"render",value:function(){var e=this.props.players.join("\n");return r.a.createElement("div",null,r.a.createElement("div",{id:"instructions"},r.a.createElement("p",null,"A simple app to help you play the ",r.a.createElement("a",{href:"https://www.drinkiwiki.com/Thunderstruck"},"Thunderstruck drinking game"))),r.a.createElement("div",{id:"player-input"},r.a.createElement("p",null,'Enter player names (one per line) and hit "Start!" to begin:'),r.a.createElement("textarea",{name:"player-input",rows:"20",cols:"24",spellCheck:"false",autoFocus:!0,value:e,onChange:this.handleChange,ref:this.inputRef})),r.a.createElement("div",{id:"control-buttons"},r.a.createElement("button",{id:"shuffle",onMouseUp:this.props.handleShuffleFun,onKeyUp:this.handleEnterShuffle},"Shuffle"),r.a.createElement("button",{id:"clear",onMouseUp:this.props.handleClearFun,onKeyUp:this.handleEnterClear},"Clear"),r.a.createElement("button",{id:"Start",onMouseUp:this.props.handleStartFun,onKeyUp:this.handleEnterStart},"Start!")))}}]),n}(r.a.Component);function E(e){return e.drinking?r.a.createElement("p",{className:"lineup-elt"},r.a.createElement("strong",null,e.name)):r.a.createElement("p",{className:"lineup-elt"},e.name)}function v(e){return e.players.map((function(t,n){return e.drinkingIndex===n?r.a.createElement(E,{name:t,drinking:!0,key:n}):r.a.createElement(E,{name:t,drinking:!1,key:n})}))}var b=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={count:0,numPlayers:e.players.length,ended:!1},a.handleProgress=a.handleProgress.bind(Object(h.a)(a)),a.handleEnded=a.handleEnded.bind(Object(h.a)(a)),a}return Object(u.a)(n,[{key:"handleProgress",value:function(e){e.playedSeconds+.1>=f[this.state.count]&&this.setState({count:this.state.count+1})}},{key:"handleEnded",value:function(e){this.setState({ended:!0})}},{key:"render",value:function(){var e="",t=" is on deck",n=-1;return this.state.ended?(e="Finished!",t=""):0===this.state.count?(e="waiting...",t=this.props.players[0]+t):(n=(this.state.count-1)%this.state.numPlayers,e=this.props.players[n]+", drink!",t=this.state.count<f.length?this.props.players[this.state.count%this.state.numPlayers]+t:""),r.a.createElement("div",null,r.a.createElement("table",{className:"main-table",align:"center"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"vid-cell",rowSpan:"3"},r.a.createElement(p.a,{url:"https://www.youtube.com/watch?v=v2AC41dglnM",progressInterval:10,volume:1,width:640,height:480,onProgress:this.handleProgress,onEnded:this.handleEnded,config:{youtube:{playerVars:{diablekb:1,playsinlinee:1}}}}),r.a.createElement("button",{id:"back",onMouseUp:this.props.handleRestartFun},"Restart")),r.a.createElement("td",{className:"current-cell"},r.a.createElement("p",{className:"drinking-player"},e),r.a.createElement("p",{className:"on-deck-player"},t))),r.a.createElement("tr",null,r.a.createElement("td",{className:"lineup-cell"},r.a.createElement("p",{className:"lineup-header"},"Lineup"),r.a.createElement(v,{players:this.props.players,drinkingIndex:n}))))))}}]),n}(r.a.Component),k=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={players:[],start:!0,cursorPos:0},a.handleNewChar=a.handleNewChar.bind(Object(h.a)(a)),a}return Object(u.a)(n,[{key:"handleNewChar",value:function(e){var t=this,n=e.selectionEnd,a=e.value.split("\n").map((function(e,a){return e.length>24?(n-=1,t.state.players[a]):e}));this.setState({players:a,cursorPos:n})}},{key:"handleShuffle",value:function(){for(var e=m(this.state.players),t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*t),a=e[t];e[t]=e[n],e[n]=a}this.setState({players:e})}},{key:"handleClear",value:function(){this.setState({players:[],cursorPos:0})}},{key:"handleStart",value:function(){var e=m(this.state.players);e.length<2?alert("Must have at least 2 players"):this.setState({players:e,start:!1})}},{key:"handleRestart",value:function(){this.setState({start:!0})}},{key:"render",value:function(){var e=this;return this.state.start?r.a.createElement(y,{players:this.state.players,cursorPos:this.state.cursorPos,onChangeFun:this.handleNewChar,handleShuffleFun:function(){return e.handleShuffle()},handleClearFun:function(){return e.handleClear()},handleStartFun:function(){return e.handleStart()}}):r.a.createElement(b,{players:this.state.players,handleRestartFun:function(){return e.handleRestart()}})}}]),n}(r.a.Component);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.2e68cd73.chunk.js.map