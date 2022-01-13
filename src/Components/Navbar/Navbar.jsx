import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { BiPhoneCall, BiEditAlt, BiUserPlus, BiFingerprint } from "react-icons/bi";
import logo from '../../assets/logo.svg'
import './Navbar.scss'


const Navbar = () => {

    const [active, setActive] = useState(false);
    const handleActive = () => setActive(!active);

    return (
        <nav className='navbars' dir='rtl'>
            <div className="navbars-content container">
                <Link to="/" className="navbars-content__logo">
                    <img src={logo} alt='logo kooleh' />
                </Link>
                <div className={active ? "navbars-content__link active-navbar" : "navbars-content__link"}>
                    <div className='navbars-content__link-items'>
                        <div className='navbars-content__link-items__icon'>
                            <BiPhoneCall />
                        </div>
                        <span className="navbars-content__link-items__text">
                            021-57528888
                        </span>
                    </div>
                    <div className='navbars-content__link-items'>
                        <span className='navbars-content__link-items__icon'>
                            <BiEditAlt />
                        </span>
                        <span className="navbars-content__link-items__text">
                            برنامه ریزی سفر
                        </span>
                    </div>
                    <div className='navbars-content__link-items'>
                        <span className='navbars-content__link-items__icon'>
                            <BiUserPlus />
                        </span>
                        <Link to="/auth" className="navbars-content__link-items__text">
                            ورود و ثبت نام
                        </Link>
                    </div>
                </div>
                <div className='navbars-content__icon' onClick={handleActive}>
                    <BiFingerprint size={28} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
