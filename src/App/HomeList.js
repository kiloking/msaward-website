import React  from 'react'

function HomeList({data,handler}) {

  const handleClick= (index) =>{
    console.log(index)
    handler(index)
  }

  return (
    <div className="homelist">
      {
        data.map((data,index)=>{
          return (
          <div className="item" key={index}>
            <a className="card" onClick={()=> handleClick(index)}>
              <div className="thumb" style={{backgroundImage: `url("${process.env.PUBLIC_URL}/images/${data.works_vertical_b}")`}}>
                
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


    </div>
  )
}

export default HomeList
