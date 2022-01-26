import React from 'react';
import './Footer.css';
import Swal from 'sweetalert2';


const Footer = () => {
    const handleSubscribe = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't to Subscribe",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Logout'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Thank you',
                    'Subscribed successfully.',
                    'success'
                )
            }
        })
    }
    return (
        <div>
            <div className="section5 text-start">
                <section className='footer-section '>
                    <h1 className="title inline-photo2 show-on-scroll2">Subscribe to our newsletter</h1>
                    <p className="inline-photo show-on-scroll">Get latest news on property postings, bankrupt details, new installment scheme.</p>
                </section>
                <section className='footer-section'>
                    <button onClick={handleSubscribe} className="btn2">Subscribe</button>
                </section>
            </div>


            <footer style={{ backgroundColor: '#273c75', color: '#dcdde1' }}>
                <div className="footer">
                    <section className='footer-section'>
                        <h3>Travel Agency</h3>
                        <p>Tourism is travel for pleasure or business; also the theory and practice of touring, the business of attracting, accommodating, and entertaining tourists, and the business of operating tours.</p>
                    </section>
                    <section className='footer-section'>
                        <h3>LINKS</h3>
                        <a href="/">Home</a>
                        <a href="/">About Us</a>
                        <a href="/">Blog</a>
                        <a href="/">Contact Us</a>
                    </section>
                    <section className='footer-section'>
                        <h3>OTHER</h3>
                        <a href="/">Privacy Policy</a>
                        <a href="/">Terms & Conditions</a>
                        <a href="/">Cookie Policy</a>
                    </section>
                    <section className='footer-section'>
                        <h3>ANY QUESTIONS?</h3>
                        <a href="emailto:rjmahir.faisal@gmail.com"><span><i className="fa fa-envelope"></i></span><span>support@travelagency.com</span></a>
                        <a href="tel:01928646555"><span><i className="fa fa-phone"></i></span><span>+880 01928646555</span></a>
                    </section>
                </div>
            </footer>
            <div className="sub-footer text-light fw-light">
                Copyright ©2021 All rights reserved | Travel Agency
            </div>
        </div>
    );
};

export default Footer;