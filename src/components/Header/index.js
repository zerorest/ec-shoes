import React from 'react';
import Search from './Search';
import Logo from '../../assets/img/Logo.png';
import ChartIcon from '../../assets/img/ChartIcon.svg';
import './styles.css';

const Header = () => (
    <header className="Header">
        <a className="Logo" href="/">
            <img src={ Logo } alt="Logo"/>
        </a>
        <Search />
        <a href="/" className="Chart">
            <span><img src={ ChartIcon } alt="Carrinho"/></span>
            <span>0</span>
        </a>
    </header>
);

export default Header;