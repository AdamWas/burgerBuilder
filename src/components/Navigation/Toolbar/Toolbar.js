import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

import classess from './Toolbar.css'

const toolbar = (props) => (
    <header className={classess.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <div className={classess.Logo}>
            <Logo/>
        </div>
        <nav className={classess.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);


export default toolbar;