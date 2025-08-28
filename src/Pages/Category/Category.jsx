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
        { image: hairServise, name: 'Hair Service', link:"/hair" },
        { image: nailServise, name: 'Nail Service', link:"/nail" },
        { image: skinCareServise, name: 'Skin Care Service', link:"/skin-care" },
        { image: makeupServise, name: 'Makeup Service', link:"/makaup" },
        { image: hairRemovalServise, name: 'Hair Removal Service', link:"/hair-removal" },
        { image: eyebrowServise, name: 'Eye & Brow Service', link:"/eyebrow" }
    ];

    return (
        <div id='category' className="category-container">
            <div className="main-card">
                {services.map((service, index) => (
                   <a style={{textDecoration:"none", }} href={service.link} key={index}>
                     <div className="card" >
                        <div className="image">
                            <img src={service.image} alt={service.name} />
                        </div>
                        <div className="name">
                            <p>{service.name}</p>
                        </div>
                    </div>
                    </a>
                ))}
            </div>
        </div>
    )
}
