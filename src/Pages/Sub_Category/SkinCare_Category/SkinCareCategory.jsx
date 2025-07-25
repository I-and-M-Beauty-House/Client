import React from 'react'
import './SkinCareCategory.scss'
import facemask from '../../../Image/facemask.jpg'
import lighttheraphy from '../../../Image/lightTheraphy.jpg'
import microdermabrasion from '../../../Image/microdermabrasion.jpg'


export default function SkinCareCategory() {
    return (
        <div className="skinCare-container">
            <div className="card-1">
                <div className="image">
                    <img src={facemask} style={{ width: "475px" }} />
                </div>
                <div className="description">
                    <h1>FASE MASKS</h1>
                    <p>At I & M Beauty House, our face mask treatments are designed to deeply nourish, hydrate, and revitalize your skin, giving you a fresh and radiant glow. Whether your skin is dry, oily, sensitive, or in need of detoxification, we offer customized face masks to suit your unique skin type and concerns.<br />
                        Each treatment begins with a gentle skin assessment, followed by a relaxing application of a premium mask—formulated with natural extracts, vitamins, and minerals—to cleanse pores, balance oil, boost hydration, and restore your skin’s natural glow. From hydrating gel masks to detoxifying clay masks, anti-aging sheet masks, or brightening fruit-based blends, we use only the best products to ensure safe, visible results.<br /><br/>
                        Give your skin the care it deserves—book your face mask session today and feel the difference in every layer.</p>
                </div>
            </div>
            <div className="card-2">
                <div className="description">
                    <h1>LED LIGHT THERAPHY</h1>
                    <p>At I & M Beauty House, our LED Light Therapy treatment offers a cutting-edge, non-invasive solution to address a wide range of skin concerns while promoting overall skin health. Using advanced light technology, this treatment harnesses the power of specific wavelengths of LED light to rejuvenate, heal, and balance the skin—without any pain or downtime.<br />
                        LED Light Therapy is safe for all skin types and can be used alone or as a complement to other facial treatments. It's perfect for anyone struggling with acne, dullness, aging skin, redness, or uneven texture—and it leaves your skin feeling calm, radiant, and refreshed.<br /><br/>
                        Let your skin glow from within—book your LED Light Therapy session today and discover the future of skincare.!</p>
                </div>
                <div className="image">
                    <img src={lighttheraphy} style={{ width: "550px" }} />
                </div>
            </div>
            <div className="card-3">
                <div className="iamge">
                    <img src={microdermabrasion} style={{ width: "475px", height: "425px" }} />
                </div>
                <div className="description">
                    <h1>MICRODERMABRASION</h1>
                    <p>At I & M Beauty House, our microdermabrasion treatment offers a gentle yet powerful solution to reveal smoother, brighter, and younger-looking skin. This non-invasive exfoliation procedure helps to deeply cleanse and renew the skin’s surface by removing dead skin cells, unclogging pores, and stimulating natural collagen production.<br />
                        Using advanced microdermabrasion technology, we gently polish the outer layer of your skin to reduce the appearance of fine lines, acne scars, sun damage, uneven skin tone, and dull texture. The result is instantly softer, fresher skin that looks revitalized and feels renewed.<br /><br/>
                        Glow with confidence—book your microdermabrasion session today and experience the power of smooth, beautiful skin.</p>
                </div>
            </div>
        </div>
    )
}
