import React from 'react';
import s from './mainScreen.module.css'
import {Header} from "../Header/Header";
import {PlayerScreen} from "../PlayerScreen/PlayerScreen";
import {Description} from "../Description/Description";
import {PlayList} from "../Playlist/PlayList";

export const MainScreen = () => {
    return (
        <div className={s.container}>
            <div className={s.playHeaderBlock}><Header/></div>
            <div className={s.playScreenBlock}><PlayerScreen/></div>
            <div className={s.playDescriptionBlock}><Description/></div>
            <div className={s.playPlaylistBlock}><PlayList/></div>
        </div>
    );
};