import React from 'react'
import './Makeup.scss'
import makeup from '../../../Image/makeup.jpg'

export default function Makeup() {
    return (
        <div className="makeuo-container">
            <div className="card-1">
                <div className="image">
                    <img src={makeup} style={{ width: "565px" }} />
                </div>
                <div className="description">
                    <h1>MAKEUP</h1>
                    <p>At I & M Beauty House, our professional makeup services are designed to enhance your natural beauty and bring out your best features for any occasion. Whether you’re preparing for a wedding, party, photoshoot, corporate event, or simply want a fresh and polished everyday look, our skilled makeup artists are here to create the perfect look for you.<br />

                        We use high-quality, skin-friendly makeup products and the latest techniques to ensure a flawless, long-lasting finish that feels comfortable and looks stunning in any light. From soft glam and natural beauty to bold, dramatic, or bridal looks, each application is tailored to suit your skin tone, face shape, personal style, and the occasion.<br /><br/>

                        Our makeup services include:<br />
                        💄 Day & Evening Makeup<br />
                        👰 Bridal & Engagement Makeup<br />
                        📸 Photoshoot & Event Glam<br />
                        🌟 Custom Looks for Any Theme or Occasion<br /><br/>

                        During your session, we take the time to understand your preferences and skin needs, ensuring a smooth and enjoyable experience. Whether you prefer a light, radiant glow or full-coverage glam, we’ll help you look and feel your absolute best.<br />

                        At I & M Beauty House, it's not just about makeup—it's about confidence, creativity, and celebrating your individuality.<br /><br />
                        Let your beauty shine—book your makeup session today and get ready to turn heads.</p>
                </div>
            </div>
        </div>
    )
}
