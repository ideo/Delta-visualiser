import React from 'react';
import TwoColumnBlock from './TwoColumnBlock/TwoColumnBlock'
import chairs from '../../assets/chairs.jpg'
import internet from '../../assets/internet.jpg'
import { CommunicationToolsCopy } from '../../lib/copy'
import './CommunicationTools.scss';

const CommunicationTools = () => {
    
    return (
        <div className='CommunicationTools'>
            <h1>{CommunicationToolsCopy[0]}</h1>
            <div className='subtitle'>{CommunicationToolsCopy[1]}</div>

            <TwoColumnBlock column1={CommunicationToolsCopy[2][0]} column2={CommunicationToolsCopy[2][1]} img1={internet} img2={chairs} />
            <div className='text'>
                <div className='bold'><span className='highlighted'>WHAT DO WE DO?</span></div>
                <div className='body'>
                    {CommunicationToolsCopy[3]}<br /><br />
                    {CommunicationToolsCopy[4]}<br /><br />
                </div>
            </div>
        </div>
    )
}

export default CommunicationTools;
