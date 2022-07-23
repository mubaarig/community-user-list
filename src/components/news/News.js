import React, { useState } from 'react'
import './News.css';

const News = ({ news }) => {
    return (

        <div >
            <div>
                <button>Restart</button>
                <button>Prev</button>
                <button>Next</button>

            </div>
            {/* {news.map((nws) => (
                <div key={nws.id}>
                    <p>{nws.title}</p>
                    <p><img src={nws.image} alt="news thumbnail" className='news__thumbnail' /></p>

                </div>
            ))} */}
            <div className="dj-slider">
                {news.map((nws) => (
                    <div className='dj-slide' key={nws.id}>
                        <p><h2>{nws.title}</h2></p>
                        <p>{nws.detail}</p>

                        <p><img src={nws.image} alt="news thumbnail" className='news__thumbnail' /></p>

                    </div>
                ))}

            </div>
        </div>
    )
}

export default News