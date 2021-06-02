import React from 'react'

function Header({slides}) {
  const [curr , setCurr] = React.useState(0);
  const { length } = slides;

  const goToNext = () => {
    setCurr(curr === length - 1 ? 0 : curr + 1);
  }
  React.useEffect(() => {
    setTimeout(goToNext, 4500)
  })
  return (
    <div className="header">
      {
        slides.map((data,i)=>{
          return (
            <img src={process.env.PUBLIC_URL+"/images/"+data.banner} alt="" className={i === curr ? "headerbg active" : "headerbg"} key={i} />
          )
          
        })
      }
        
      <div className="logo">
        <a href="https://www.moonshine.tw/" target="_blank" rel="noreferrer">
          <img src={process.env.PUBLIC_URL+"/images/"+"logo.svg"} alt="" />
        </a>
      </div>
      <div className="caption">
        <div className="subtitle"></div>
        <div className="title">2021 夢想動畫一番賞</div>
        <div className="desc">受到疫情影響，包含新一代、各校畢展等紛紛取消。夢想動畫邀集全台動畫畢製投稿曝光，也邀請你一起給所有作品一個掌聲。</div>
      </div>
    </div>
  )
}

export default Header
