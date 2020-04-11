import React from 'react';
import time from '../../assets/time_split.jpg'
import { productiveTimeCopy } from '../../lib/copy'
import './ProductiveTime.scss';

const ProductiveTime = () => {

    return (
        <div className='ProductiveTime'>
            <h1>{productiveTimeCopy[0]}</h1>
            <div className='content'>
                <div className='column'>
                    <div className='text'>
                        <div className='bold'><span className='highlighted'>WHAT DO WE DO?</span></div>
                        <div className='body'>
                            {productiveTimeCopy[1]}<br /><br />
                            {productiveTimeCopy[2]}<br /><br />
                        </div>
                    </div>
                </div>
                <div className='column'>
                    <img src={time} alt='img'/>
                </div>
            </div>
        </div>
    )
}

export default ProductiveTime;
