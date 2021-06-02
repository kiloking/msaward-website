import React from 'react'
import Item from './Item'
function Awards({data,handler}) {

  return (
    <div className="awards">
      <div className="content">
        <div className="left">
          <h1>夢想大推薦</h1>
          <p>由夢想動畫內部評選出的三個最佳作品。</p>
        </div>
        <div className="right">
        {
        data.map((data,index)=>{
          return (
            <Item  data={data} index={index} handler={handler}/>
          )
        })
      }
          

   
        </div>
      </div>
    </div>
  )
}

export default Awards
