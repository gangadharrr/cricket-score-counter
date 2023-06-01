import React from 'react'

function ScoreHistoryComponent(props) {
    let row=[]
    for(let item of props.data)
    {
        row.push(<p style={{backgroundColor:item=='wd'||item=='nb'?'red':item==6 ||item==4?'green':'white' , color:item=='wd'||item=='nb'?'white':item==6 ||item==4?'white':'black'}}>{item}</p>);
    }
  return (
    <React.Fragment>
        {row}
    </React.Fragment>
  )
}

export default ScoreHistoryComponent