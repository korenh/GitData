import React from 'react'
import Icon from './icon.png'
import {NavLink} from 'react-router-dom'

export default function Nav() {

    return (

        <div className='nav-main'>
            <div className='nav-header'>
                <img src={Icon} alt='img'/>
                <p>GitData</p>
            </div>
            <div>
                <NavLink className="nav-item" activeClassName='nav-item-active' exact to='/'>Overview</NavLink><br/><br/>
                <NavLink className="nav-item" activeClassName='nav-item-active' to='/repos'>Repositories</NavLink><br/><br/>
                <NavLink className="nav-item" activeClassName='nav-item-active' to='/users'>Users</NavLink><br/><br/>
            </div>
        </div>
    )
}
