import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./style.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faBars, faUser } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return (
        <header>
            <div className='header__content'>
                <div className='header__logo'>
                    <Link to="/">LOGO</Link>
                </div>
                <div className='header__navbar'>
                    <NavLink to="/">Nơi ở</NavLink>
                    <NavLink to="/" className='mx-5'>Trải nghiệm</NavLink>
                    <NavLink to="/">Trải nghiệm trực tuyến</NavLink>
                </div>
                <div className='header__left'>
                    <div><Link to="/">Đón tiếp khách</Link></div>
                    <Link to="/" className='mx-3'><FontAwesomeIcon icon={faGlobe} /></Link>
                    <div className='header__user'>
                        <div><FontAwesomeIcon icon={faBars} /></div>
                        <div className='avatar'><FontAwesomeIcon icon={faUser} /></div>
                    </div>
                </div>
            </div>
            <div className='header__img'>

            </div>
        </header>
    )
}
