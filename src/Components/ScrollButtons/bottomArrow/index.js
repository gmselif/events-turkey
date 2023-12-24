import React from 'react'

//It is used to scroll to the bottom of the page when the BottomArrow is clicked.
//The BottomArrow will not be visible if it is scrolled to the bottom of the page.
function bottomArrow({visibleDown}) {

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  }

  return (
    <div xs={12}>
      <i className="bi bi-arrow-down-circle-fill"
        onClick={scrollToBottom}
        style={{ fontSize: "2rem", display: visibleDown ? 'inline' : 'none' }}
      />
    </div>
  )
}

export default bottomArrow