import React, { useState } from 'react'
import Logo from '../../assets/logo.svg'
import { FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi';
import { toast } from 'react-toastify';
import './Layout.scss'

const Footer = () => {

    const [email, setEmail] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        setEmail('');
        toast.success("درخواست شما ثبت شد")

    }

    return (
        <footer className='footer' dir='rtl'>
            <div className="container ">
                <div className="footer-content">
                    <div className="footer-content__logo">
                        <img src={Logo} alt="logo kooleh" />
                    </div>
                    <ul className="footer-content__list">
                        <li className='footer-content__list-items'>
                            <h5>با کوله</h5>
                            <span>درباره ما</span>
                            <span>قوانین</span>
                        </li>
                        <li className='footer-content__list-items'>
                            <h5>خدمات مشتریان</h5>
                            <span>سوالات متداول</span>
                            <span>تماس با ما</span>
                        </li>
                        <li className='footer-content__list-items'>
                            <h5>با ما همراه باشید</h5>
                            <div className="footer-content__list-items__social">
                                <a href="/">
                                    <FiInstagram size={25} />
                                </a>
                                <a href="/">
                                    <FiLinkedin size={25} />
                                </a>
                                <a href="/">
                                    <FiGithub size={25} />
                                </a>
                            </div>
                        </li>
                        <li className='footer-content__list-items'>
                            <h5>از جدیدترین تخفیف ها با خبر شوید</h5>
                            <div className="footer-content__list-items__box">
                                <input type="email" placeholder='آدرس ایمیل خود را وارد کنید' required value={email} onChange={(e) => setEmail(e.target.value)} />
                                <button type='submit' onClick={handleSubmit}>ثبت</button>
                            </div>
                        </li>
                    </ul>
                    <div className="footer-content__copy">
                        تمامی حقوق متعلق به سایت کوله می باشد
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
