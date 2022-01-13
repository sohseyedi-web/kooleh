import React, { useState } from 'react'
import { BiChevronDown } from "react-icons/bi";
import './Layout.scss'

const Accordion = () => {

    const [selected, setSelected] = useState(null);

    const activeAccordion = (index) => {
        if (selected === index) return setSelected(null)

        setSelected(index)
    }

    return (
        <section className='accordion' dir='rtl'>
            <div className="container">
                <div className="accordion-title">سوالات متداول شما</div>
                <div className="accordion-content">
                    <div className={selected === 1 ? "accordion-content__box active-box" : "accordion-content__box"} onClick={() => activeAccordion(1)}>
                        <div className="accordion-content__box-header">
                            <span className='accordion-content__box-header__title'>
                                اگر در هنگام خرید بلیط وارد درگاه پرداخت شدم و مبلغ بلیط از حساب کسر شد ولی بلیط نمایش داده نشد چه کاری انجام دهم؟
                            </span>
                            <span className={selected === 1 ? 'accordion-content__box-header__icon active-icon' : 'accordion-content__box-header__icon'}>
                                <BiChevronDown size={33} />
                            </span>
                        </div>
                        <div className={selected === 1 ? "accordion-content__box-body active-body" : "accordion-content__box-body"}>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد</p>
                        </div>
                    </div>
                    <div className={selected === 2 ? "accordion-content__box active-box" : "accordion-content__box"} onClick={() => activeAccordion(2)}>
                        <div className="accordion-content__box-header">
                            <span className='accordion-content__box-header__title'>
                                چند روز قبل از پرواز بلیط هواپیما را بخریم
                            </span>
                            <span className={selected === 2 ? 'accordion-content__box-header__icon active-icon' : 'accordion-content__box-header__icon'}>

                                <BiChevronDown size={33} />

                            </span>
                        </div>
                        <div className={selected === 2 ? "accordion-content__box-body active-body" : "accordion-content__box-body"}>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد</p>
                        </div>
                    </div>
                    <div className={selected === 3 ? "accordion-content__box active-box" : "accordion-content__box"} onClick={() => activeAccordion(3)}>
                        <div className="accordion-content__box-header">
                            <span className='accordion-content__box-header__title'>
                                پرواز من در فرودگاه لغو شد چه کاری انجام دهم
                            </span>
                            <span className={selected === 3 ? 'accordion-content__box-header__icon active-icon' : 'accordion-content__box-header__icon'}>
                                <BiChevronDown size={33} />
                            </span>
                        </div>
                        <div className={selected === 3 ? "accordion-content__box-body active-body" : "accordion-content__box-body"}>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Accordion
