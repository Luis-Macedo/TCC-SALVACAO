import React from 'react';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FiIcons from 'react-icons/fi';

export const NavbarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Mapa',
        path: '/map',
        icon: <FaIcons.FaMapMarkedAlt/>,
        cName: 'nav-text'
    },
    {
        title: 'Login',
        path: '/login',
        icons: <FiIcons.FiLogIn/>,
        cName: 'nav-text'
    },
    {
        title: 'Profile',
        path: '/profile',
        icons: <FaIcons.FaUserAlt/>,
        cName: 'nav-text'
    },
    {
        title: 'Instituições',
        path: '/institution',
        icon: <FaIcons.FaHospitalAlt/>,
        cName: 'nav-text'
    }
    
]