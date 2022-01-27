import * as React from 'react';
import './Navigation.css'
import { Container, Nav, Navbar, Overlay, Popover } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';



const Navigation = () => {
    const { user, logOut } = useAuth();
    const [isSticky, setSticky] = React.useState(false);
    const [isCollapsed, setCollapsed] = React.useState(null);



    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);


    const navigate = useNavigate();

    // logout
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
    };

    // pop over
    const [show, setShow] = React.useState(false);
    const [target, setTarget] = React.useState(null);
    const ref = React.useRef(null)

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };

    return (
        <>
            <Navbar
                collapseOnSelect
                expand="lg"
                variant="light"
                fixed="top"
                className={(isSticky || isCollapsed) ? "shadow-sm nav-bg-color py-2" : "py-4"}>
                <Container>

                    <Navbar.Brand
                        as={HashLink} to="/"
                        className="ml-md-5"
                        style={{ color: "#3a4256", fontSize: "1.55rem" }}>

                        <strong>TRAVEL AGENCY</strong>
                    </Navbar.Brand>

                    <Navbar.Toggle onClick={() => setCollapsed(!isCollapsed ? 'show' : null)} aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav" className={isCollapsed}>
                        <Nav className="me-auto">
                            <Nav.Link as={HashLink} to="/home#home" className="mr-md-5" onClick={() => window.scrollTo(500, 0)} active>Home</Nav.Link>

                            <Nav.Link as={HashLink} to="/home#about" className="mr-md-5" active> About </Nav.Link>

                            <Nav.Link as={HashLink} to="/home#blogs" className="mr-md-5" active> Blogs</Nav.Link>

                            <Nav.Link as={HashLink} to="/home#contact" className="mr-md-5" active>Contact Us</Nav.Link>

                            <Nav.Link as={HashLink} to="/" className="mr-md-5" active> Dashboard </Nav.Link>

                        </Nav>
                        <Nav className='ms-auto d-flex align-items-center'>
                            {
                                user.email ?
                                    <div ref={ref}>
                                        <h2 onClick={handleClick} style={{ cursor: 'pointer' }}><i className=" fas fa-user-circle"></i></h2>

                                        <Overlay
                                            show={show}
                                            target={target}
                                            placement="bottom"
                                            container={ref}
                                            containerPadding={20}
                                        >
                                            <Popover id="popover-contained" className='border-0 bg-light shadow'>
                                                <Popover.Header className='border-0' > <h5 className='text-center text-primary'>{user.displayName}</h5></Popover.Header>
                                                <Popover.Body>
                                                    <p>{user.email}</p>
                                                    <button onClick={handleLogout} className='btn btn-outline-danger px-5 w-100 py-0 rounded-pill text-center mx-auto mb-3'>Logout</button>

                                                </Popover.Body>
                                            </Popover>
                                        </Overlay>
                                    </div> :
                                    <Nav.Link as={HashLink} to="/login" className="me-3 text-decoration-non " active> Sign in </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {isSticky && <Navbar
                collapseOnSelect
                expand="lg"
                variant="light"
                fixed="bottom"
            >
                <Nav.Link className='up-arrow fs-5  rounded-pill text-decoration-none ms-auto me-4 mb-5' as={HashLink} to="/home#home"><i className="fas fa-arrow-up"></i></Nav.Link>
            </Navbar>}
        </>
    );
};

export default Navigation;