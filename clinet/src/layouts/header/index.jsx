import React from 'react'
import './index.scss'
const Header = () => {
  return (
    <div>
        <div className="header">
            <div className="logo">
                <span>MOVIE</span>
            </div>
            <div className="usersLogo">
                <i className="fa fa-user-circle-o" aria-hidden="true"></i>
            </div>
        </div>
    </div>
  )
}

export default Header