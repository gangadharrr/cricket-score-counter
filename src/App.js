import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent/ButtonComponent';
import './components/ButtonComponent/ButtonComponent.css'
import ScoreComponent from './components/ScoreComponent/ScoreComponent';
import React, { useState } from "react";
import ScoreHistoryComponent from './components/ScoreHistoryComponent/ScoreHistoryComponent';

function App() {
  const [score ,setScore]=useState(0);
  const [dotBalls ,setDotBalls]=useState(0);
  const [noBalls ,setNoBalls]=useState(0);
  const [wides ,setWides]=useState(0);
  const [wickets ,setWickets]=useState(0);
  const [scoreHistory,setScoreHistory]=useState([]);
  
  function scoreUpdate(value,ex='')
  {
    let _history=scoreHistory;
    _history.push(ex==''?value:ex)
    setScoreHistory(_history);
    setScore(score+value);
    setTimeout(()=>{document.getElementById("scroller").scrollLeft=document.getElementById("scroller").scrollWidth},0);
  }
  function dotBallsUpdate()
  {
    let _history=scoreHistory;
    _history.push('.')
    setScoreHistory(_history);
    setDotBalls(dotBalls+1);
    setTimeout(()=>{document.getElementById("scroller").scrollLeft=document.getElementById("scroller").scrollWidth},0);

  }
  function noBallsUpdate()
  {
    scoreUpdate(1,'nb')
    setNoBalls(noBalls+1)
  }
  function widesUpdate()
  {
    scoreUpdate(1,'wd')
    setWides(wides+1);
  }
  return (
    <div className="App">
      <h1>Champions League T20</h1>
      <ScoreComponent score={score} wides={wides} dotBalls={dotBalls} noBalls={noBalls} wickets={wickets}/>
      <div className='row'>
        <div className='score-history' id="scroller" >
          <ScoreHistoryComponent  data={scoreHistory}/>
        </div>
        <ButtonComponent onClick={()=>{setWickets(0);setScore(0);setDotBalls(0);setNoBalls(0);setWides(0);setScoreHistory([])}} value="&#10227;"/>
      </div>
      <div className='buttons'>
        <ButtonComponent onClick={()=>{scoreUpdate(6)}} value="6"/>
        <ButtonComponent onClick={()=>{scoreUpdate(4)}} value="4"/>
        <ButtonComponent onClick={()=>{scoreUpdate(3)}} value="3"/>
        <ButtonComponent onClick={()=>{scoreUpdate(2)}} value="2"/>
        <ButtonComponent onClick={()=>{scoreUpdate(1)}} value="1"/>
        <ButtonComponent onClick={dotBallsUpdate} value="0"/>
        <ButtonComponent  onClick={noBallsUpdate} value="nb"/>
        <ButtonComponent  onClick={widesUpdate}value="wd"/>
        <ButtonComponent  onClick={()=>{scoreUpdate(0,'W');setWickets(wickets+1)}}value="W"/>
      </div>
    </div>
  );
}

export default App;
