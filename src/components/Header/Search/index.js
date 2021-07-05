import React from 'react';
import Icon from '../../../assets/img/SearchIcon.svg';
import './styles.css';

const Search = () => (
    <form className="Search">
        <input type="text" placeholder="Busca"/>
        <button>
            <img className="Search-Icon" src={ Icon } alt="Ícone"/>
        </button>
    </form>
);

export default Search;