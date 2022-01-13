import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator'
import { toast } from 'react-toastify';
import './Layout.scss'
import { useRef } from 'react';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [, forceUpdate] = useState();

    const validator = useRef(new SimpleReactValidator({
        messages: {
            required: "(!) پر کردن این فیلد الزامی است ",
            email: "(!) ایمیل به طور صحیح وارد نشده "
        },
        element: message => <div className='contact-error'>{message}</div>
    }))

    const handleSubmit = (e) => {
        e.preventDefault();

        const userMsg = { name, email, message }

        if (validator.current.allValid()) {
            console.log(userMsg);
            toast.success("درخواست شما ثبت شد")
            setName('');
            setEmail('');
            setMessage('');
        } else {
            validator.current.showMessages()
            forceUpdate(1)
            toast.error("لطفا فرم بدون خطا باشد");
        }
    }

    return (
        <section className='contact' dir='rtl'>
            <div className="container">
                <div className="contact-title">تماس با ما</div>
                <div className="contact-content">
                    <form className="contact-content__form" onSubmit={handleSubmit}>
                        <input type="text" name='name' placeholder='نام' value={name} onChange={(e) => {
                            setName(e.target.value);
                            validator.current.showMessageFor("name")
                        }} />
                        {validator.current.message("name", name, "required")}
                        <input type="email" name='email' placeholder='ایمیل' value={email} onChange={(e) => {
                            setEmail(e.target.value);
                            validator.current.showMessageFor("email")
                        }} />
                        {validator.current.message("email", email, "required|email")}
                        <textarea placeholder='پیام' name='message' value={message} onChange={(e) => {
                            setMessage(e.target.value);
                            validator.current.showMessageFor("message")
                        }}></textarea>
                        {validator.current.message("message", message, "required")}
                        <input type='submit' value="ارسال نظر" />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
