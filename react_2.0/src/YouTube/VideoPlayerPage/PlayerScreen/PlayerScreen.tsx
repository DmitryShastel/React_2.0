import React from 'react';
import s from './playerScreen.module.css'
import Cover from './icons/Cover.svg'
import CombinedShare from './icons/CombinedShape.svg'
import CombinedShare1 from './icons/CombinedShape 1.svg'
import Fill62 from './icons/Fill 62.svg'
import More from './icons/More.svg'

export const PlayerScreen = () => {
    return (
        <div className={s.player}>
            <img src={Cover}/>
            <h1 className={s.titleOfVideo}>Dude You Re Getting A Telescope</h1>
            <div className={s.statistics}>
                <div className={s.views}>
                    <span>123k views</span>
                </div>
                <div className={s.likes}>
                    <div className={s.like}>
                        <img src={CombinedShare}/>
                        <span className={s.likeText}>123k</span>
                    </div>
                    <div className={s.like}>
                        <img src={CombinedShare1}/>
                        <span className={s.likeText}>123k</span>
                    </div>
                    <div className={s.like}>
                        <img src={Fill62}/>
                        <span className={s.likeText}>123k</span>
                    </div>
                    <img className={s.image} src={More}/>
                </div>
            </div>
            <div className={s.divider}></div>
        </div>
    );
};
