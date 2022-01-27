import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './UserProfile.css';
import profileImg from './image/profile.jpg';
import useAuth from '../../../hooks/useAuth';



const UserProfile = () => {
    const { user, logOut } = useAuth;

    const navigate = useNavigate();
    const handleLogout = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't to Logout!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Logout'
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                navigate('/')
                Swal.fire(
                    'Login out',
                    'Logout successfully.',
                    'success'
                )
            }
        })
    }
    return (
        <section>
            <h2 className='text-secondary fw-bold mb-5'>YOUR PROFILE</h2>
            <div className='user-profile-container'>
                <div className="profile-container">
                    <div className="profile-card">
                        <div className="profile-image">
                            <img src={profileImg} className='img-fluid' style={{ height: '250px' }} alt='User' />
                        </div>
                        <div className="content">
                            <h3 className='m-0 p-0 text-secondary fw-bold'>{user?.displayName || "User name"}</h3>
                            <h6 className='text-secondary mb-5 fw-light'>{user?.email || "User email"}</h6>
                            <button onClick={handleLogout} className='login-button text-center mx-auto mb-3'>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserProfile;