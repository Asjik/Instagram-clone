import React from 'react';
import "./Suggestions.css";
import { Avatar } from '@mui/material';

function Suggestions() {
    return (
    <div className='suggestions'>
        <div className='suggestions__title'>Suggestions for you</div>
        <div className='suggestions__userNames'>
            
            <div className='suggestions__userName'>
                <div className='userName__left'>
                    <span className='suggestion__avatar'>
                        <Avatar></Avatar>
                    </span>
                    <div className='userName__info'>
                        <span className='userName'>user name</span>
                        <span className='info'> Follow by user</span>
                    </div>
                </div>
                <button className='follow__button'>Follow</button>
            </div>

            <div className='suggestions__userName'>
                <div className='userName__left'>
                    <span className='suggestion__avatar'>
                        <Avatar></Avatar>
                    </span>
                    <div className='userName__info'>
                        <span className='userName'>user name</span>
                        <span className='info'> Follow by user</span>
                    </div>
                </div>
                <button className='follow__button'>Follow</button>
            </div>

            <div className='suggestions__userName'>
                <div className='userName__left'>
                    <span className='suggestion__avatar'>
                        <Avatar></Avatar>
                    </span>
                    <div className='userName__info'>
                        <span className='userName'>user name</span>
                        <span className='info'> Follow by user</span>
                    </div>
                </div>
                <button className='follow__button'>Follow</button>
            </div>

            <div className='suggestions__userName'>
                <div className='userName__left'>
                    <span className='suggestion__avatar'>
                        <Avatar></Avatar>
                    </span>
                    <div className='userName__info'>
                        <span className='userName'>user name</span>
                        <span className='info'> Follow by user</span>
                    </div>
                </div>
                <button className='follow__button'>Follow</button>
            </div>
        </div>
    </div>
    )
}

export default Suggestions;
