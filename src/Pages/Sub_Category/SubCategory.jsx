import React from 'react'
import './SubCategory.scss'
import haircut from '../../Image/haircut.jpg'
import hairextention from '../../Image/hair-extention.jpeg'
import haircolor from '../../Image/haircolor.jpg'

export default function SubCategory() {
    return (
        <div className="subCategory-container">
            <div className="card-1">
                <div className="image">
                    <img src={haircut} style={{ width: "475px" }} />
                </div>
                <div className="description">
                    {/* <h1>Hair Cut</h1> */}
                    <p>At I & M Beauty House, our professional hair cutting services are thoughtfully tailored to bring out your unique style, personality, and confidence. We understand that a great haircut can completely transform your appearance and elevate how you feel. That’s why our experienced and passionate stylists take the time to consult with you, understand your preferences, and craft a look that not only suits your features but also complements your lifestyle.<br /><br />


                        At I & M Beauty House, your comfort and satisfaction are our top priorities. Our welcoming salon environment, combined with expert service, ensures a relaxing and enjoyable experience from start to finish.<br /><br />

                        Ready for a fresh new look? Schedule your appointment today by contacting us—we're here to make you feel and look your best.</p>
                </div>
            </div>
            <div className="card-2">
                <div className="description">
                    <p>At I & M Beauty House, we offer premium hair extension services designed to add instant length, volume, and glamour to your natural hair. Whether you're dreaming of long, flowing locks, extra fullness, or just a bit of added flair for a special occasion, our expert stylists are here to bring your vision to life with flawless, natural-looking results.<br /><br />

                        We use high-quality extensions that blend seamlessly with your own hair and are available in a variety of textures, colors, and lengths to match your personal style. Our team specializes in safe and comfortable application methods—including clip-ins, tape-ins, and micro-ring techniques—ensuring minimal damage and maximum durability.<br /><br />


                        Book your appointment today and step out with the luxurious hair you've always wanted!</p>
                </div>
                <div className="image">
                    <img src={hairextention} style={{ width: "550px" }} />
                </div>
            </div>
            <div className="card-3">
                <div className="iamge">
                    <img src={haircolor} style={{ width: "475px", height:"425px" }} />
                </div>
                <div className="description">
                    <p>At I & M Beauty House, our hair coloring services are designed to transform your look and express your unique personality with vibrant, customized color. Whether you're looking to refresh your natural shade, cover grays, add dimension with highlights, or make a bold statement with a trendy color, our expert colorists are here to make it happen.<br /><br />

                        We use high-quality, salon-grade color products that nourish and protect your hair while delivering rich, long-lasting results. From classic tones like deep browns and warm blondes to fashion-forward hues like ash grey, burgundy, caramel, or even vivid shades like blue or pink—we bring creativity and precision to every coloring session.<br /><br />

                        Ready for a fresh, head-turning color? Book your appointment with us today and let your hair reflect your inner style.</p>
                </div>
            </div>
        </div>
    )
}
