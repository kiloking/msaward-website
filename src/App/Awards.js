import React from 'react'

function Awards() {
  return (
    <div className="awards">
      <div className="content">
        <div className="left">
          <h1>夢想大推薦</h1>
          <p>由夢想動畫內部評選出的三個最佳作品。</p>
        </div>
        <div className="right">
          <div className="item">
            <a className="card">
              <div className="thumb" style={{backgroundImage: `url("${process.env.PUBLIC_URL}/images/works_vertical/b/01.jpg")`}}></div>

              <article>
                <div className="title">
                  Twinkle Twinkle 聖誕奇蹟
                </div>
                <div className="author">林大成</div>
                <div className="info">國立雲林科技大學<br/>數位媒體設計系</div>
              </article>
            </a>
          </div>
          <div className="item">
            <a className="card">
              <div className="thumb" style={{backgroundImage: `url("${process.env.PUBLIC_URL}/images/works_vertical/b/02.jpg")`}}></div>

              <article>
                <div className="title">
                  Twinkle Twinkle 聖誕奇蹟
                </div>
                <div className="author">林大成</div>
                <div className="info">國立雲林科技大學<br/>數位媒體設計系</div>
              </article>
            </a>
          </div>
          <div className="item">
            <a className="card">
              <div className="thumb" style={{backgroundImage: `url("${process.env.PUBLIC_URL}/images/works_vertical/b/03.jpg")`}}></div>

              <article>
                <div className="title">
                  Twinkle Twinkle 聖誕奇蹟
                </div>
                <div className="author">林大成</div>
                <div className="info">國立雲林科技大學<br/>數位媒體設計系</div>
              </article>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Awards
