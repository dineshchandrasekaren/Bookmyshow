import React from "react";

export const PrevArrow = ({className, style, onClick}) => (
  <>
    <div className={className}
        style={{...style,backgroundImage:"radial-gradient(circle, rgba(0,0,0,0.7777310753402924) 0%, rgba(0,0,0,0.8785714114747462) 31.8%, rgba(255,255,255,0.7133053050321692) 35.8%)",width:"30px",height:"30px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"5px"}}
        onClick={onClick}/>
  </>
);

export const NextArrow = ({className, style, onClick})=> (
  <>
    <div className={className}
      style={{ ...style, backgroundImage:"radial-gradient(circle, rgba(0,0,0,0.7777310753402924) 0%, rgba(0,0,0,0.8785714114747462) 31.8%, rgba(255,255,255,0.7133053050321692) 35.8%)",width:"30px",height:"30px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"5px"}}
         onClick={onClick}/>
  </>
);
