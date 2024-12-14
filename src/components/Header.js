import React from 'react'
import Button from './Button'

function Header({onAdd, showAdd}) {
  return (
    <div className='header'>
      <h1>Task Tracker</h1>
      <Button onAdd={onAdd} showAdd={showAdd}  />
    </div>
  )
}

export default Header
