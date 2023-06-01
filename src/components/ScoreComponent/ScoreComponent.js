import React from 'react'

function ScoreComponent(props) {
  return (
    <div className='ScoreComponent'>
        <h3>Score Board</h3>
        <p>Score : {props.score}/{props.wickets}</p>
        <p>Dot Balls : {props.dotBalls}</p>
        <p>No Balls : {props.noBalls}</p>
        <p>Wides : {props.wides}</p>
        <p>Sixes : {props.sixes}</p>
        <p>Fours : {props.fours}</p>
    </div>
  )
}

export default ScoreComponent