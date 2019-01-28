import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'

export const Navigation: React.SFC<{}> = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavLink to="/" exact={true} activeStyle={{ color: '#23d160' }}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/play-game" exact={true} activeStyle={{ color: '#23d160' }}>
            Play
            <span className="emoji" role="img" aria-label="video game controller">
              🎮
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/play-matt" exact={true} activeStyle={{ color: '#23d160' }}>
            Play Matt*
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
