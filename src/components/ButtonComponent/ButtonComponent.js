import React from 'react'

function ButtonComponent(props) {
   
  return (
    <React.Fragment>
        <button className='ButtonComponent' onClick={props.onClick}>{props.value}</button>
    </React.Fragment>
  )
}

export default ButtonComponent