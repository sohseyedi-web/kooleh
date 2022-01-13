import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator'
import { toast } from 'react-toastify';
import './Auth.scss'
import { useRef } from 'react';

const Auth = () => {

    const [data, setData] = useState('');
    const [, forceUpdate] = useState();

    const validator = useRef(new SimpleReactValidator({
        messages: {
            required: "پر کردن این فیلد الزامی است (!)",
            min: "شماره موبایل اشتباه وارد شده (!)"
        },
        element: message => <div className='auth-error'>{message}</div>
    }))

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validator.current.allValid()) {
            console.log(data);
            toast.success('پیام ارسال شد...')
            setData("")
        } else {
            validator.current.showMessages()
            forceUpdate(1)
            toast.error("لطفا فرم بدون خطا باشد");
        }
    }

    return (
        <section className='auth'>
            <div className="container">
                <div className="auth-content">
                    <form className="auth-content__box" onSubmit={handleSubmit}>
                        <h2 className="auth-content__box-title">کوله</h2>
                        <h5 className="auth-content__box-subtitle">ورود / ثبت نام</h5>
                        <div className="auth-content__box-input">
                            <label>شماره موبایل  خود را وارد کنید</label>
                            <input type="text" name='data' value={data} onChange={(e) => {
                                setData(e.target.value);
                                validator.current.showMessageFor("data")
                            }} />
                            {validator.current.message("data", data, "required|min:11")}
                        </div>
                        <button type='submit'>ورود به کوله</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Auth
