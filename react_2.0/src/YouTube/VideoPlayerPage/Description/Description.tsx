import React from 'react';
import s from './description.module.css'
import Oval from './icons/Oval (1).svg'
import Button from './icons/Button.svg'

export const Description = () => {
    return (
        <div className={s.description}>
            <div className={s.logo}>
                <img src={Oval}/>
                <div className={s.content}>
                    <div className={s.title}><h1>Food & Drink</h1></div>
                    <div className={s.publish}><span>Published on 14 Jun 2019</span></div>
                    <div className={s.text}><span>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. </span></div>
                    <div className={s.show}><button>Show more</button></div>
                </div>
            </div>
            <div className={s.subscription}><button>
                <img src={Button}/>
            </button></div>
        </div>
    );
};
