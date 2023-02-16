import React from 'react'
import './reusableContainer.css'

function ReusableContainer({text,open, setOpen, children}) {
  
  return (
    <div className={`${text}_wrapper rc_wrapper`}>
      <div className="rc_header">
        <h2>{text}</h2>
        <div
          className="rc_button" 
          onClick={()=>setOpen(!open)}
        >
          {open? "\u002B" : "\u2212"}
        </div>
      </div>
      {children}
    </div>
  )
}

export default ReusableContainer