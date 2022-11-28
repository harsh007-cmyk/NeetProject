import React from 'react'

function Mode() {
  return (
    <div className="mode">
        <span>Light</span>
    <div className='toggle-switch'>
        <label >
                <input type="checkbox" />
                <span className='slider'></span>
        </label>
    </div>
    <span>Dark</span>
    </div>
  )
}

export default Mode