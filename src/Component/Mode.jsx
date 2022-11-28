import React from 'react'

function Mode() {
  return (
    <div className='toggle-switch'>
        <label >
                <input type="checkbox" />
                <span className='slider'></span>
        </label>
    </div>
  )
}

export default Mode