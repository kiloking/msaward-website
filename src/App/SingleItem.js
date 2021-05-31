import React, {useEffect, useState} from 'react'
import ReactPlayer from 'react-player'
function SingleItem({data,handler}) {
  const {title , description , department,banner , link,ins,facebook,behance} = data
  const [active , setActive] = useState(false)
  const handleClick= () =>{
    setActive(!active)
    setTimeout(() => {
      handler()
    }, 450);
    // handler()
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(!active)
    }, 500);
    return () => clearTimeout(timer);
  },active);

  return (
    <div className="singleItem">
      <div className={active ? "blackbg active" : "blackbg"} onClick={handleClick}></div>
      <div className={active ? "itemContent active" : "itemContent"}>
        <div className="closeBtn" onClick={handleClick}>X</div>
        <div className="thumb" >
          <ReactPlayer 
            url={link} 
            width= "100%"
            height= "100%"
          />
        </div>
        <article>
          <div className="title">{title}
          </div>
          <div className="description">
          {description}
          </div>
          <div className="info">{department}</div>
          <div className="social">
              {ins ? <div className="linkitem"><a href={ins} target="_bkank">Instagram</a></div> : null}
              {facebook ? <div className="linkitem"><a href={facebook} target="_bkank">Facebook</a></div> : null}
              {behance ? <div className="linkitem"><a href={behance} target="_bkank">Behance</a></div> : null}
          </div>
          {/* <div className="link">http://google.com</div> */}
        </article>
      </div>
    </div>
  )
}

export default SingleItem
