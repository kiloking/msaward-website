import React from 'react'
import styled from 'styled-components';
function Item({data,index,handler}) {


  const handleClick= (dataId) =>{
    handler(dataId)
  }

  const ThumbBG = styled.div`
      background-image: url(${process.env.PUBLIC_URL}/images/${data.works_vertical_b});
      position: relative;
      width: 100%;
      height: 283px;
      background-size: cover;
      background-position: center;
      transition: 0.3s;
    @media (max-width: 1400px) {  
      height: 100%;
    }
    @media (max-width: 480px) {
      background-image: url(${process.env.PUBLIC_URL}/images/${data.works_horizontal_b});
      height: 160px;
    }
  `;
  return (
  <div className="item" key={data.id}>
      <a className="card" onClick={()=> handleClick(data.id)}>
        <ThumbBG
        />
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
}

export default Item
