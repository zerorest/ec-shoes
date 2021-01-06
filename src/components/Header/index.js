import React from 'react';
import './styles.css';
import Logo from '../../assets/img/Logo.png';
import Icon from '../../assets/img/SearchIcon.png';
import ChartIcon from '../../assets/img/ChartIcon.png';

const Header = () => (
    <header id='main-header'>
        <div>
            <a href="/">
                <img src={ Logo } className="Logo" alt="Logo"/>
            </a>
        </div>
        <div className="Search-box">
            <form>
                <input type="text" placeholder="Busca"/>
                <button>
                    {/*Icons made by https://www.flaticon.com/authors/freepik*/}
                    <img src={ Icon } alt="Ícone"/>
                </button>
            </form>
        </div>
        <div>
            <a href="/" className="Chart">
                {/*Icons made by https://www.flaticon.com/authors/freepik*/}
                <span><img src={ ChartIcon } alt="Carrinho"/></span>
                <span>0</span>
            </a>
        </div>
    </header>
);

export default Header;