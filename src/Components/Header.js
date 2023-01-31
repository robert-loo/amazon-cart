import React from 'react'
import './Header.css'

function Header(props) {
  console.log(props);
  return (
    <div className="App-header">
        <h1>Amazon Cart {props.name} </h1>
    </div>
  )
}

export default Header