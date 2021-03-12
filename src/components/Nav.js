import React from 'react'
import Icon from './icon.png'
import {NavLink} from 'react-router-dom'
import Repo from '@material-ui/icons/FolderOpen';
import View from '@material-ui/icons/ViewWeek';
import Followers from '@material-ui/icons/PeopleOutline';
import Following from '@material-ui/icons/People';

export default function Nav() {

    return (
        <div className='nav-main'>
            <div className='nav-header'>
                <img src={Icon} alt='img'/>
                <p>GitData</p>
            </div>
            <div>
                <NavLink className="nav-item" activeClassName='nav-item-active' exact to='/'><View/><p>Overview</p></NavLink>
                <NavLink className="nav-item" activeClassName='nav-item-active' to='/repos'><Repo/><p>Repositories</p></NavLink>
                <NavLink className="nav-item" activeClassName='nav-item-active' to='/followers'><Followers/><p>Followers</p></NavLink>
                <NavLink className="nav-item" activeClassName='nav-item-active' to='/following'><Following/><p>Following</p></NavLink>
            </div>
        </div>
    )
}
