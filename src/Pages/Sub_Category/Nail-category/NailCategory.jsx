import React from 'react'
import './NailCategory.scss'
import nailpedicure from '../../../Image/nail-pedicure.jpg'
import nailart from '../../../Image/nail-art.jpg'

export default function NailCategory() {
    return (
        <div className="nailCategory-container">
            <div className="card-1">
                <div className="image">
                    <img src={nailpedicure} style={{ width: "475px" }} />
                </div>
                <div className="description">
                    <h1>PEDICURE</h1>
                    <p>At I & M Beauty House, our luxurious nail pedicure service is designed to refresh, relax, and rejuvenate your feet while enhancing the beauty of your nails. Whether you're preparing for a special occasion or simply treating yourself to some well-deserved self-care, our professional pedicure treatments deliver both style and comfort in one soothing experience.<br />
                        Our pedicure begins with a warm soak to soften the skin and relieve tension, followed by gentle exfoliation to remove dead skin cells. We then shape, trim, and buff the nails with care, and treat your cuticles to promote healthy growth. To finish, enjoy a relaxing foot massage that melts away stress and improves circulation.<br />
                        Step into elegance and comfort—book your pedicure appointment today and give your feet the care they truly deserve.</p>
                </div>
            </div>
            <div className="card-2">
                <div className="description">
                    <h1>NAIL ART</h1>
                    <p>At I & M Beauty House, our nail art service is all about turning your nails into a canvas of creativity and style.We offer a wide range of nail art styles—from minimalistic accents and delicate florals to glitter, rhinestones, abstract art, 3D designs, and more. Whether you're getting ready for a special occasion, a festive celebration, or just want to express your personality through your nails, we've got the perfect design for you.<br />
                        Using high-quality polishes, gels, and safe decorative materials, we ensure your nail art not only looks stunning but also lasts. Every design is customized to match your outfit, mood, or theme, and we take great care to work with your nail shape and length for the best result.<br />
                        Let your nails do the talking—book your nail art appointment today and express your true style with every detail!</p>
                </div>
                <div className="image">
                    <img src={nailart} style={{ width: "550px" }} />
                </div>
            </div>
        </div>
    )
}
