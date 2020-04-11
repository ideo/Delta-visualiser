import React from 'react';
import './TwoColumnBlock.scss';

const TwoColumnBlock = ({ column1, column2, img1, img2 }) => {

    return (
        <div className='TwoColumnBlock'>
            <div className='column'>
                <img src={img1} alt='img' />
                <div className='header'>
                    {column1.header}
                </div>
                <div className='fact'>
                    {column1.fact}
                </div>
                <div className='title'>
                    <span className='highlighted'>WHAT DO WE DO?</span>
                    <div className='body'>
                        {column1.body}<br /><br />
                        {column1.link}<br /><br />
                        <a href={column1.site}>Go to tips</a>
                    </div>
                </div>

            </div>

            <div className='column'>
                <img src={img2} alt='img' />
                <div className='header'>
                    {column2.header}
                </div>
                <div className='fact'>
                    {column2.fact}
                </div>
                <div className='title'>
                    <span className='highlighted'>WHAT DO WE DO?</span>
                    <div className='body'>
                        {column2.body}<br /><br />
                        {column2.link}<br /><br />
                        <a href={column2.link}>See inspiration</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TwoColumnBlock;
