import React from 'react'
import './EyeBrowService.scss'
import eyebrowshaping from '../../../Image/eyebrowShaping.jpg'
import eyebrowtinting from '../../../Image/eyebrowTinting.jpg'
import eyebrowextension from '../../../Image/eyelashExtension.jpg'

export default function EyeBrowService() {
    return (
        <div className="eyeBrowService-container">
            <div className="card-1">
                <div className="image">
                    <img src={eyebrowshaping} style={{ width: "475px" }} />
                </div>
                <div className="description">
                    <h1>EYEBROW SHAPING</h1>
                    <p>At I & M Beauty House, we believe that well-shaped eyebrows are the key to enhancing your natural beauty and defining your facial features. Our professional eyebrow shaping service is designed to create the perfect arch and balance that complements your face shape and personal style.<br />
                        Using precise techniques such as threading, waxing, or tweezing, our experienced beauticians carefully sculpt your brows to achieve clean lines, symmetry, and a flattering finish. Whether you prefer a natural, soft look or a more defined, bold brow, we tailor the shape to suit your features and desired outcome.<br /><br />
                        Let your eyes shine—book your eyebrow shaping session today and walk out with perfectly defined, confidence-boosting brows.</p>
                </div>
            </div>
            <div className="card-2">
                <div className="description">
                    <h1>EYEBROW TINTING</h1>
                    <p>At I & M Beauty House, our eyebrow tinting service is the perfect way to define, shape, and enhance your natural brows—without the need for daily makeup. This semi-permanent treatment adds depth and fullness by tinting each brow hair with a shade that complements your hair color and skin tone, creating a polished and balanced look.<br />
                        Ideal for sparse, light, or uneven brows, tinting helps to visibly thicken and darken your brows for a fuller, more symmetrical appearance. Our expert beauticians carefully select the perfect color and apply it with precision to ensure natural-looking, smudge-proof results that can last up to 4 weeks.<br /><br />
                        Wake up to perfect brows every day—book your eyebrow tinting appointment today at I & M Beauty House and enjoy effortless beauty.</p>
                </div>
                <div className="image">
                    <img src={eyebrowtinting} style={{ width: "550px" }} />
                </div>
            </div>
            <div className="card-3">
                <div className="iamge">
                    <img src={eyebrowextension} style={{ width: "475px", height: "450px" }} />
                </div>
                <div className="description">
                    <h1>EYELASH EXTENSION</h1>
                    <p>At I & M Beauty House, our eyelash tinting service is the perfect solution for darker, fuller-looking lashes—without the need for daily mascara. This quick and gentle treatment enhances the color and definition of your natural lashes, giving your eyes a beautifully lifted, expressive look from the moment you wake up.<br />
                        Using safe, high-quality, and specially formulated dyes, our skilled technicians apply a tint that complements your skin tone and hair color, resulting in a natural yet striking appearance. Whether you have light-colored lashes or simply want to add more depth and drama to your eyes, eyelash tinting is an effortless way to enhance your beauty routine.<br /><br />
                        Get bold, beautiful lashes the easy way—book your eyelash tinting session today at I & M Beauty House and let your eyes shine naturally.
                    </p>
                </div>
            </div>
        </div>
    )
}
