import React from 'react';
import "./style.scss"

export default function Header() {
    return (
        <header>
            <div className='header'>
                <div className='header__logo'>
                    logo
                </div>
                <div className='header__navbar'>
                    <button>Anywhere</button>
                    <button>Anyweek</button>
                    <button>
                        <span>Add guest</span>
                    </button>
                </div>
                <div className='header__user'>
                    user
                </div>
            </div>
        </header>
    )
}
