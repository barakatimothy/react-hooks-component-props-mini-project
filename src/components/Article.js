import React from "react";
function Article({title ,fullDate,preview }){
    return (
       <article>
        <h3>{title}</h3>
        <small>{fullDate}</small>
        <p>{preview}</p>
       </article>
    )
}

const date = new  Date()
const day = date.getDate()
const month = date.getMonth()
const year = date.getFullYear()

const fullDate = `${date}- ${month} - ${year}`

export default Article;
