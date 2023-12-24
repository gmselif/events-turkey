import React, { useState } from 'react'
import "bootstrap-icons/font/bootstrap-icons.css"
import UpArrow from './upArrow'
import BottomArrow from './bottomArrow'

//This component is used in App.js file.
function ScrollButtons() {
  const [visibleUp, setVisibleUp] = useState(false)
  const [visibleDown, setVisibleDown] = useState(true)
  

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight
    const clientHeight = document.documentElement.clientHeight

    //If it is not scrolled to 300 don't show ScrollUp Button.
    if (scrolled > 300) {
      setVisibleUp(true)
    }
    else if (scrolled <= 300) {
      setVisibleUp(false)
    }

    //If it is scrolled to the bottom of the page, don't show ScrollDown Button.  
    if ( scrollHeight - (scrolled+clientHeight) <= 1 ) {
      setVisibleDown(false)
    } else {
      setVisibleDown(true)
    }
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div style={{
      position: "fixed",
      bottom: "20px",
      right: "10px",
      zIndex: "1",
      cursor: "pointer",
      color: "#ffc107"
    }}>
      <UpArrow visibleUp={visibleUp}/>
      <BottomArrow visibleDown={visibleDown}/>
      
    </div>
  );
}

export default ScrollButtons;