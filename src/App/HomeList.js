import React  from 'react'

function HomeList({data,handler}) {

  const handleClick= (dataId) =>{
    console.log(dataId)
    handler(dataId)
  }
  let emptyItemLists = [];
  for (let index = 0; index < 5; index++) {
    emptyItemLists.push(<div className="item"></div>)
    
  }
  return (
    <div className="homelist">
      {
        data.map((data,index)=>{
          return (
          <div className="item" key={index}>
            <a className="card" onClick={()=> handleClick(data.id)}>
              <div 
                className="thumb" 
                style={{
                  backgroundImage: `url("${process.env.PUBLIC_URL}/images/${data.works_vertical_b}")`
                }}>
                
              </div>
              <article>
                <div className="title">
                  {data.title}
                </div>
                <div className="description">
                  {data.description.substr(0,30)}...
                </div>
                <div className="info">{data.department}</div>
                {/* <div className="link">http://google.com</div> */}
              </article>

              
            </a>
          </div>
          )
        })
      }
      {emptyItemLists}


    </div>
  )
}

export default HomeList
