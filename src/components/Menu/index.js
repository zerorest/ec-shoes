import React, { useState } from 'react';
import './styles.css';

const Menu = () => {
    const [isActive, setActive] = useState(false);
    const [isOverflow, setOverflow] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
        setOverflow(!isOverflow);

        const body = document.getElementById('wrapper');
        if (!isOverflow) {
            body.style.overflow = ('hidden');
        }
        else {
            body.style.overflow = ('initial');
        }
    }

    return (
        <div className={`Menu-section ${isActive ? "On" : ""}`}>
            <div className="Menu-toggle" onClick={toggleClass}>
                <div className="One"></div>
                <div className="Two"></div>
                <div className="Three"></div>
            </div>
            <nav>
                <ul>
                    <li>Social</li>
                    <li>Casual</li>
                    <li>Sneakers</li>
                    <li>Sandália</li>
                    <li>Chinelo</li>
                    <li>Bota</li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu;