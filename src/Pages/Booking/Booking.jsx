import React from 'react'
import './Booking.scss'
import { IoCallSharp } from "react-icons/io5";
import { SiWhatsapp } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";


export default function Booking() {
    return (
        <div className="booking-container">
            <div className="top">
                <h1>GET IN TOUCH</h1>
                <p>Welcome to I & M Beauty House! Start your beauty journey by choosing the service of your choice. Select 'Category' to explore our full range of beauty treatments. Select your option below to continue with your booking.</p>
            </div>
            <div className="bottom">
                <div className="card-1">
                    <div className="icon">
                        <div className='phone-icon-frame'>
                            <IoCallSharp style={{ color: "rgb(86, 86, 138)" }} />
                        </div>
                    </div>
                    <div className="topic">Phone</div>
                    <div className="name">+94772222222</div>
                    <a className="contact" href="tel:+94703778737" target="_blank">
                        <button style={{ backgroundColor: " rgb(86, 86, 138)" }}><FaTelegramPlane style={{ marginRight: "10px" }} />Contact</button>
                    </a>
                </div>
                <div className="card-2">
                    <div className="icon">
                        <div className='whatsapp-icon-frame'>
                            <SiWhatsapp style={{ color: "green" }} />
                        </div>
                    </div>
                    <div className="topic">Whatsapp</div>
                    <div className="name">+94772222222</div>
                    <a className="contact" href="https://wa.me/+94772222222/?text=Hello%20Imeshika!%20I'd%20like%20to%20know%20about%20packages."
                 target="_blank">
                        <button style={{ backgroundColor: " rgb(46, 120, 50)" }}><FaTelegramPlane style={{ marginRight: "10px" }} />Contact</button>
                    </a>
                </div>
                <div className="card-3">
                    <div className="icon">
                        <div className='email-icon-frame'>
                            <AiOutlineMail style={{ color: "rgb(86, 86, 138)" }} />
                        </div>
                    </div>
                    <div className="topic">Email</div>
                    <div className="name">imbeautyhouse@gmail.com</div>
                    <a className="contact" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=imbeautyhouse@gmail.com"
                        target="_blank">
                        <button style={{ backgroundColor: "rgb(86, 86, 138)" }}><FaTelegramPlane style={{ marginRight: "10px" }} />Contact</button>
                    </a>

                </div>
            </div>
        </div>
    )
}
