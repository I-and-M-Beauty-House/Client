import React from 'react';
import './ProductDisplay.scss';

export default function ProductDisply() {
    const images = [
        './Image/keune.png',
        './Image/loreal.png',
        './Image/wella.png',
        './Image/sothys.png',
        './Image/jevel.png',
    ];

    return (
        <div className="productDisplay-container">
            <div className="slider">
                <div className="slide-track">
                    {[...images, ...images].map((src, index) => (
                        <div className="slide" key={index}>
                            <img src={src} alt={`brand-${index}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
