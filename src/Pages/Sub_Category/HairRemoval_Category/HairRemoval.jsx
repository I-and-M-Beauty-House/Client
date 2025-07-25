import React from 'react'
import './HairRemoval.scss'
import threding from '../../../Image/threading.jpg'
import laserhair from '../../../Image/laserHair.jpg'

export default function HairRemoval() {
    return (
        <div className="hairemoval-container">
            <div className="card-1">
                <div className="image">
                    <img src={threding} style={{ width: "475px" }} />
                </div>
                <div className="description">
                    <h1>THREADING</h1>
                    <p>At I & M Beauty House, our expert threading services offer a precise, natural, and gentle way to shape and define your facial features. Threading is a time-tested hair removal technique that uses a twisted cotton thread to remove unwanted hair from the root—without the use of chemicals or heat—making it perfect for all skin types, including sensitive skin.<br />
                        Whether you're looking to shape your eyebrows, clean up upper lip hair, or remove fine hairs from your forehead, cheeks, or chin, our skilled beauticians ensure a smooth, clean finish with minimal discomfort. The results are more defined, longer-lasting, and cleaner compared to waxing or plucking.<br /><br />
                        Enhance your natural features—book your threading appointment today for smooth, flawless skin and perfectly shaped brows.</p>
                </div>
            </div>
            <div className="card-2">
                <div className="description">
                    <h1>LASER HAIR REMOVAL</h1>
                    <p>Say goodbye to shaving, waxing, and tweezing—at I & M Beauty House, our advanced Laser Hair Removal treatment offers a safe, effective, and long-lasting solution for unwanted hair. Suitable for both women and men, this treatment uses cutting-edge laser technology to target hair follicles directly, resulting in permanent hair reduction over a series of sessions.<br />
                        Our trained professionals customize the treatment based on your skin type, hair texture, and desired areas, ensuring maximum comfort and optimal results. Whether it’s your face, underarms, arms, legs, bikini line, or full body, we provide precise and thorough care with the highest standards of safety and hygiene.<br /><br />
                        Experience the freedom of smooth, hair-free skin—book your Laser Hair Removal consultation today and start your journey to permanent confidence.</p>
                </div>
                <div className="image">
                    <img src={laserhair} style={{ width: "550px" }} />
                </div>
            </div>
        </div>
    )
}
