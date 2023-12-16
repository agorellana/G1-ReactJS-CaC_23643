import React from "react";
import { useEffect, useState } from "react";

export const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false)

  useEffect(() =>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY > 100){
        setBackToTopButton(true)
      } else{
        setBackToTopButton(false)
      }
    })
  },[])

  const scrollUp = () =>{
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return <div>
    {backToTopButton && (
      <button style={{
        borderRadius:"50%",
        border:"none",
        position:"fixed",
        bottom:"40px",
        right:"20px",
        height:"50px",
        width:"50px",
        backgroundColor:"#693567",
        backgroundImage:"url(/arrowup.png)",
        backgroundSize:"100%",
        color:"#fff",
      }}
      onClick={scrollUp}
      ></button>
    )}

  </div>
}

