import React from 'react'
import './Category.scss'
import hairServise from '../../Image/Hair-service.jpg'
import nailServise from '../../Image/Nail-service.jpg'
import skinCareServise from '../../Image/SkingCare-service.jpg'
import makeupServise from '../../Image/Makeup-service.jpg'
import hairRemovalServise from '../../Image/HairRemoval-service.jpg'
import eyebrowServise from '../../Image/Eyebrow-service.jpg'

export default function Category() {
    const services = [
        { image: hairServise, name: 'Hair Service' },
        { image: nailServise, name: 'Nail Service' },
        { image: skinCareServise, name: 'Skin Care Service' },
        { image: makeupServise, name: 'Makeup Service' },
        { image: hairRemovalServise, name: 'Hair Removal Service' },
        { image: eyebrowServise, name: 'Eye & Brow Service' }
    ];

    return (
        <div id='category' className="category-container">
            <div className="main-card">
                {services.map((service, index) => (
                    <div className="card" key={index}>
                        <div className="image">
                            <img src={service.image} alt={service.name} />
                        </div>
                        <div className="name">
                            <p>{service.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
