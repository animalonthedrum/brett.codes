import React, { useState, useEffect } from "react";

const ScrollBar = ({name, children}) => {
   
   if (typeof window === 'undefined') {
      global.window = {}
    }
    
   let [pos, setPos] = useState(window.pageYOffset)
   let [visible, setVisible] = useState(true)
   
   useEffect(()=> {
      const handleScroll = () => {
         let temp = window.pageYOffset
         if(temp > 90){
            document.body.classList.remove('nav-top');
         }
         else {
            document.body.classList.add('nav-top');
         }
         setVisible(pos > temp);
         setPos(temp)
      };
      window.addEventListener("scroll", handleScroll);
      return(() => {
         window.removeEventListener("scroll", handleScroll);
      })
   })
  
      return (
         <>
            <div className={"scrollbar " + name + ' ' + (!visible ? "scrollbar-hidden" : " ")}>
            {children}
            </div>
         </>
         )
    }


    export default ScrollBar