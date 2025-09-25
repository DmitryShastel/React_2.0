import React from 'react';
import s from './playlist.module.css'
import Group from './icons/Group 2.svg'
import Cover from './icons/Cover.svg'
import Cover5 from './icons/Cover (5).svg'
import Cover6 from './icons/Cover (6).svg'

export const PlayList = () => {
    return (
        <div className={s.playlist}>
            <div className={s.settings}>
                <div className={s.next}>
                    <button>Next</button>
                </div>
                <div className={s.autoplay}>
                    <button>Autoplay</button>
                    <img src={Group}/>
                </div>
            </div>
                <div className={s.video}>
                    <img src={Cover} alt="Dollie Blair"/>
                    <span className={s.time}>4:15</span>
                    <div className={s.description}>
                        <span className={s.title}>A Brief History Of Creation</span>
                        <div className={s.statistics}>
                            <span>80k views · 3 days ago</span>
                            <span>Dollie Blair</span>
                        </div>
                    </div>
            </div>
            <div className={s.video}>
                <img src={Cover6} alt="Dollie Blair"/>
                <span className={s.time}>4:15</span>
                <div className={s.description}>
                    <span className={s.title}>A Good Autoresponder</span>
                    <div className={s.statistics}>
                        <span>123k views</span>
                        <span>Dollie Blair</span>
                    </div>
                </div>
            </div>
                <div className={s.video}>
                    <img src={Cover5} alt="Dollie Blair"/>
                    <span className={s.time}>4:15</span>
                    <div className={s.description}>
                        <span className={s.title}>Selecting The Right Hotel</span>
                        <div className={s.statistics}>
                            <span>123k views</span>
                            <span>Dollie Blair</span>
                        </div>
                    </div>

            </div>
                <div className={s.video}>
                    <img src={Cover} alt="Dollie Blair"/>
                    <span className={s.time}>4:15</span>
                    <div className={s.description}>
                        <span className={s.title}>A Brief History Of Creation</span>
                        <div className={s.statistics}>
                            <span>80k views · 3 days ago</span>
                            <span>Dollie Blair</span>
                        </div>
                    </div>

            </div>
        </div>
    );
};
