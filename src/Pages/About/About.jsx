import React from 'react'
import './About.scss'
import about from '../../Image/About.jpg'

export default function About() {
    return (
        <div className="about-container">
            <div className="left">
                {/* <h1>About Us</h1> */}

                <p>Welcome to I & M Beauty House,  At I & M Beauty House, we believe that beauty is not just about appearance — it's about feeling confident, empowered, and refreshed.That’s why we offer a wide range of professional salon services including hair styling, coloring, treatments, nail care, skin and facial therapies, waxing, spa treatments, and stunning bridal makeovers — all delivered by a team of skilled and passionate beauty experts. We are committed to creating a warm, hygienic, and luxurious environment where every client feels valued and pampered. Our staff stays updated with the latest beauty trends and techniques to ensure that you receive the best service possible using only premium products and tools. Whether you're preparing for a special day, seeking a style transformation, or simply indulging in a self-care routine, I & M Beauty House is here to serve you with personalized care, creativity, and attention to detail. With our easy online booking system, customer-first attitude, and dedication to excellence, we invite you to experience beauty in a whole new way — one that celebrates you. Because at I & M Beauty House, your beauty is our passion.</p>

                <h2>Imeshika Madhubashini</h2>
                <p style={{fontWeight:"bold"}}>Founder, I & M Beauty House</p>
            </div>
            <div className="right">
                <img src={about} />
            </div>
        </div>
    )
}
