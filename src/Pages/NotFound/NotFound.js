import React from 'react';
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import Navigation from '../Shared/Navigation/Navigation';
import './NotFound.css';

const NotFound = () => {
    return (
        <>
            <Navigation></Navigation>
            <div className='notfound-body'>
                <div className="notfound-wrapper">
                    <div className="notfound-title" data-content="404">
                        404
                    </div>

                    <div className="notfound-subtitle" data-content="Oops, the page you're looking for doesn't exist">
                        Oops, the page you're looking for doesn't exist.
                    </div>

                    <div className='mt-5'>
                        <Nav.Link as={HashLink}
                            to="/home#home"
                            className='login-button text-center mx-auto mb-3'>
                            Back to home
                        </Nav.Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFound;