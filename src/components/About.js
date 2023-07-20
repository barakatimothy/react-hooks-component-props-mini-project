import React from "react";

function About({imgurl='https://via.placeholder.com/215',
title = "blog logo", 
about}){
  return( 
    <aside>
        <>
            <img src={imgurl} alt={title}/>
            <p>{about}</p>
        </>  
    </aside>
  )
}
export default About;