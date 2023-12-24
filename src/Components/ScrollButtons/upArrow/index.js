import React from 'react'

//It is used to scroll to the top of the page when the UpArrow is clicked.
//The UpArrow will not be visible if it is scrolled to the top of the page.
function upArrow({visibleUp}) {
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div>
      <i className="bi bi-arrow-up-circle-fill"
        onClick={scrollToTop}
        style={{ fontSize: "2rem", display: visibleUp ? 'inline' : 'none' }}
      />
    </div>
  )
}

export default upArrow