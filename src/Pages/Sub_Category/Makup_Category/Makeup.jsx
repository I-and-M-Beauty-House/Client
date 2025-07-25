import React from 'react'
import './Makeup.scss'
import makeup from '../../../Image/makeup.jpg'

export default function Makeup() {
  return (
    <div className="makeuo-container">
        <div className="card-1">
                <div className="image">
                    <img src={makeup} style={{ width: "475px" }} />
                </div>
                <div className="description">
                    <h1>HAIR CUT</h1>
                    <p>At I & M Beauty House, our professional hair cutting services are thoughtfully tailored to bring out your unique style, personality, and confidence. We understand that a great haircut can completely transform your appearance and elevate how you feel. That’s why our experienced and passionate stylists take the time to consult with you, understand your preferences, and craft a look that not only suits your features but also complements your lifestyle.<br /><br />
                         At I & M Beauty House, your comfort and satisfaction are our top priorities. Our welcoming salon environment, combined with expert service, ensures a relaxing and enjoyable experience from start to finish.<br /><br />
                        Ready for a fresh new look? Schedule your appointment today by contacting us—we're here to make you feel and look your best.</p>
                </div>
            </div>
    </div>
  )
}
