import React from 'react'

const Card = ({title,image,content,link}) => {
  return (
    <>
    <div className="burger1">
        <img
          src={image}
          alt=""
          width={"70%"}
          className="image"
          style={{ marginTop: "0.5rem" }}
        />
        <a href={link}>
          <h2 className="title">{title}</h2>
          <p className="content">{content}</p>
        </a>
      </div>
    </>
  )
}

export default Card