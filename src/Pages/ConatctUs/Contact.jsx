import React from 'react'
import './Contact.scss'
import { ImLocation2 } from "react-icons/im";
import { BsFillClockFill } from "react-icons/bs";
import { MdAddCall } from "react-icons/md";
import { MdMarkEmailUnread } from "react-icons/md";


export default function Contact() {
    return (
        <div id='contact' className="contact-container">
            <div className="left">
                <h1>GET IN TOUCH</h1>
                <p>Start Your Journey to Beautiful Hair Today. Contact Us for Expert Hair Care and Personalized Services.</p>

                <div className="details">
                    <div className="location">
                        <p ><ImLocation2 style={{ marginRight: "15px" }} />No 05, Kandy Road, Kurunagala</p>
                    </div>
                    <div className="clock">
                        <p ><BsFillClockFill style={{ marginRight: "15px" }} /> 9.00 AM - 07.00 PM Tuesday - Sunday</p>
                    </div>
                    <div className="call">
                        <p ><MdAddCall style={{ marginRight: "15px" }} /> +94772222222</p>
                    </div>
                    <div className="email">
                        <p ><MdMarkEmailUnread style={{ marginRight: "15px" }} /> imbeautyhouse@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="right">
                <h1>SEND A MESSAGE</h1>
                <p>Reach Out to Us for Expert Hair Care and Personalized Services. Your Journey to Beautiful Hair Starts Here.</p>

                <div className="enter-details">
                    <form>
                        <div className='input-field'>
                            <input type='text' name='yourname' placeholder='Your Name*' required />
                            <input type='email' name='email' placeholder='Your Email*' required />
                            <input type='contactNo' name='contactNo' placeholder='Contact Number*' required />
                            <input type='subject' name='subject' placeholder='Subject*' required />
                            {/* <input type='text-area' name='description' placeholder='' required /> */}
                        </div>


                        <div style={{ marginTop: "10px", width: "100%" }}>
                            {/* <span>Description:</span> */}
                            <textarea
                                style={{ width: "100%" }}
                                rows={10}
                            />
                        </div>
                        <button style={{width:"100%"}}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
