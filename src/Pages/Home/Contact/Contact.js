import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div id="contact">
            <div className="contact-body">
                <div className="container">
                    <div className="row contact-head">
                        <h1 className='contact-h1'>contact us</h1>
                    </div>
                    <div className="row contact-head">
                        <h4 className='text-center contact-h4'>We'd love to hear from you!</h4>
                    </div>
                    <div className="row input-container">
                        <div className="col-xs-12">
                            <div className="styled-input wide">
                                <input type="text" required />
                                <label>Name</label>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="styled-input">
                                <input type="text" required />
                                <label>Email</label>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="styled-input" style={{ float: 'right' }}>
                                <input type="text" required />
                                <label>Phone Number</label>
                            </div>
                        </div>
                        <div className="col-xs-12">
                            <div className="styled-input wide">
                                <textarea className='contact-text' required></textarea>
                                <label>Message</label>
                            </div>
                        </div>
                        <div className="col-xs-12">
                            <div className="btn-lrg submit-btn">Send Message</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;