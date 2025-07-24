import React from 'react'
import './Booking.scss'
import { IoCallSharp } from "react-icons/io5";
import { SiWhatsapp } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";


export default function Booking() {
    return (
        <div className="booking-container">
            <div className="top">
                <h1>BOOKING NOW</h1>
                <p>Welcome to I & M Beauty House! Start your beauty journey by choosing the service of your choice. Select 'Category' to explore our full range of beauty treatments. Select your option below to continue with your booking.</p>
            </div>
            <div className="bottom">
                <div className="card-1">
                    <div className="icon">  <IoCallSharp style={{ marginTop: "50px", marginLeft: "25px", color: "rgb(86, 86, 138)" }} /></div>
                    <div className="topic">Phone</div>
                    <div className="name">+94772222222</div>
                    <div className="contact">
                        <button style={{backgroundColor:" rgb(86, 86, 138)"}}>Contact</button>
                    </div>
                </div>
                <div className="card-2">
                    <div className="icon"><SiWhatsapp style={{ marginTop: "50px", marginLeft: "25px", color: "green" }} /></div>
                    <div className="topic">Whatsapp</div>
                    <div className="name">+94772222222</div>
                    <div className="contact">
                        <button style={{backgroundColor:"  rgb(43, 69, 43)"}}>Contact</button>
                    </div>
                </div>
                <div className="card-3">
                    <div className="icon"><AiOutlineMail style={{ marginTop: "50px", marginLeft: "25px", color: "red" }} /></div>
                    <div className="topic">Email</div>
                    <div className="name">imbeautyhouse@gmail.com</div>
                    <div className="contact">
                        <button>Contact</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
