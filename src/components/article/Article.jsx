import React from 'react'

const Article = ({imgurl, title}) => {
  return (
    <div className='lau__blog-container_article'>
      <div className='lau__blog-container_article-image'>
        <img src ={imgurl}/>
      </div>
      <div className='lau__blog-container_article-contents'>
        <div>
          <br/>
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  )
}

export default Article