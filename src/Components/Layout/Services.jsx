import React from 'react'
import services1 from '../../assets/item/item-1.svg'
import services2 from '../../assets/item/item-2.svg'
import services3 from '../../assets/item/item-3.svg'
import services4 from '../../assets/item/item-4.svg'

import './Layout.scss'


const Services = () => {
    return (
        <section className='services' dir='rtl'>
            <div className="container">
                <div className="services-content">
                    <div className="services-content__box">
                        <div className="services-content__box-items">
                            <div className="services-content__box-items__title">
                                حمل و نقل
                            </div>
                            <div className="services-content__box-items__desc">
                                کوله با پوشش کلیه‌ی شیوه‌های حمل‌ونقل متداول، با امکان اعمال فیلترهای مختلف، در
                                بخش «وسیله نقلیه» به شما کمک می‌کند با آسان‌ترین روش، پاسخ مناسبتان را پیدا کنید.
                                در تمام مراحل این فرآیند، تیم پشتیبانی کوله بیست و چهار ساعته برای کمک به شما آماده
                                است.
                            </div>
                        </div>
                        <div className="services-content__box-img">
                            <img src={services1} alt="iran" />
                        </div>
                    </div>
                    <div className="services-content__box">
                        <div className="services-content__box-img">
                            <img src={services2} alt="iran" />
                        </div>
                        <div className="services-content__box-items">
                            <div className="services-content__box-items__title">محل اقامت</div>
                            <div className="services-content__box-items__desc">
                                در کوله می‌توانید با استفاده از خدمات بخش «محل اقامت»، تنها با چند کلیک اقامت
                                دلخواهتان را رزرو کنید. وجود فیلترهای مختلف و دسترسی به اطلاعات بخش زیادی از
                                اقامتگاه‌ها، با پشتیبانی و همراهی بیست و چهار ساعته کوله، می‌تواند کار انتخاب را برای
                                شما ساده‌تر کند.
                            </div>
                        </div>

                    </div>
                    <div className="services-content__box">
                        <div className="services-content__box-items">
                            <div className="services-content__box-items__title">جاذبه های گردشگری</div>
                            <div className="services-content__box-items__desc">
                                برای این که بهترین انتخا‌ب‌ها را از بین جاذبه‌های یک منطقه داشته باشید، اول باید
                                همه‌ی آن‌ها را بشناسید. سپس با توجه به سلیقه، می‌توانید با اعمال فیلترهای کاربردی،
                                بهترین جاذبه را با توجه به زمان و نوع سفر، تعیین کنید. برای این کار می‌توانید سری به
                                بخش «جاذبه‌های گردشگری» کوله بزنید.
                            </div>
                        </div>
                        <div className="services-content__box-img">
                            <img src={services3} alt="iran" />
                        </div>
                    </div>
                    <div className="services-content__box">
                        <div className="services-content__box-img">
                            <img src={services4} alt="iran" />
                        </div>
                        <div className="services-content__box-items">
                            <div className="services-content__box-items__title">دانش سفر</div>
                            <div className="services-content__box-items__desc">
                                بعضی وقت‌ها، رعایت یک نکته‌ی کوچک هم می‌تواند به کلی روی تجربه‌ی سفرتان تاثیر
                                بگذارد. در بخش «دانش سفر» کوله، سعی می‌کنیم تا اطلاعات و مهارت‌هایی، از کلی‌ترین
                                موضوعات تا موارد خیلی جزئی که ممکن است در سفر با آن مواجه شوید، به شما ارائه
                                کنیم.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
