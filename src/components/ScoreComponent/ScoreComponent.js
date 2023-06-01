import React from 'react'

function ScoreComponent(props) {
  return (
    <div className='ScoreComponent'>
        <h3>Score Board</h3>
        <p>Score : {props.score}</p>
        <p>Dot Balls : {props.dotBalls}</p>
        <p>No Balls : {props.noBalls}</p>
        <p>Wides : {props.wides}</p>
    </div>
  )
}

export default ScoreComponent