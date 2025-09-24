import React from 'react';
import s from './mainScreen.module.css'
import {Header} from "../Header/Header";

export const MainScreen = () => {
    return (
        <div className={s.container}>
            <Header/>
        </div>
    );
};