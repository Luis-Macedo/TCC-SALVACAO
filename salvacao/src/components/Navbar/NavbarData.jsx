import React from 'react';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';

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
        icon: <BiIcons.BiLogIn/>, 
        cName: 'nav-text'
    },
    {
        title: 'Perfil',
        path: '/profile',
        icon: <FaIcons.FaUserAlt/>,
        cName: 'nav-text'
    }
]