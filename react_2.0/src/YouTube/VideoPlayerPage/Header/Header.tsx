import React from 'react';
import s from './header.module.css'
import Menu from './icons/Menu.svg'
import Black from './icons/Black.svg'
import search from './icons/search.svg'
import Userpic from './icons/Userpic.svg'

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.burger}>
                <img src={Menu}/>
            </div>
            <div className={s.logo}>
                <img src={Black}/>
            </div>
            <div className={s.search}>
                <input type="text" placeholder="Search"/>
                <img src={search}/>
            </div>
            <div className={s.profileinfo}>
                <button className={s.profileBtn}></button>
                <button className={s.combinedBtn}></button>
                <div className={s.buttonOverlay}>
                    <button className={s.uiBtn}></button>
                    <button className={`${s.profileBtn} ${s.ovalBtn}`}>
                        <span className={s.notificationCount}>3</span>
                    </button>
                </div>
                <img src={Userpic}/>
            </div>
        </div>
    );
};