import React from 'react';
import TwoColumnBlock from '../../components/TwoColumnBlock/TwoColumnBlock'
import chairs from '../../assets/chairs.jpg'
import internet from '../../assets/internet.jpg'
import { accessTools } from '../../lib/copy'
import './AccessTools.scss';

const AccessTools = () => {
    
    return (
        <div className='AccessTools'>
            <h1>95% of us have access to a laptop or PC at home,</h1>
            <h1> and 79% of us have access to a smartphone, but...</h1>
            <TwoColumnBlock column1={accessTools[0]} column2={accessTools[1]} img1={internet} img2={chairs}/>
        </div>
    )
}

export default AccessTools;
