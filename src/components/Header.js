import React from 'react';
import '../styles/videostyle.css'
import bgvideo from '../media/webvideo.mp4'

export const Header = () => {
    return (
        <div>
            <video autoPlay muted loop id="myVideo">
                <source src={bgvideo} type="video/mp4" />
            </video>

            <h1 className="header">Tiny Studio</h1>
        </div>
    )
}