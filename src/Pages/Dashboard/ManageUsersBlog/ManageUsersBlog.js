import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';
// import useAuth from '../../../hooks/useAuth';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Button, CardActionArea, Collapse, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
// import FormControl from '@mui/material/FormControl';
// import NativeSelect from '@mui/material/NativeSelect';


const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

const ManageUsersBlog = () => {
    const [allUsersBlogs, setAllUsersBlogs] = React.useState([]);

    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    React.useEffect(() => {
        fetch('https://radiant-chamber-46753.herokuapp.com/userBlogs')
            .then(res => res.json())
            .then(data => setAllUsersBlogs(data))
            .catch(error => {
                Swal.fire({
                    position: 'top-middle',
                    icon: 'error',
                    title: ` ${error}`,
                    showConfirmButton: false,
                    timer: 3000
                })
            })
    }, []);

    // handle approve 
    const handleApproveBlog = async (id, blog) => {
        await axios.post('https://radiant-chamber-46753.herokuapp.com/blogs', blog)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'User Blog added home page Successfully',
                        showConfirmButton: false,
                        timer: 3000
                    })

                    const url = `https://radiant-chamber-46753.herokuapp.com/userBlogs/${id}`;
                    fetch(url, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                const available = allUsersBlogs.filter(user => user._id !== id);
                                setAllUsersBlogs(available);
                            }
                        })

                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'User Blog added home page Field',
                    })
                }
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error}`,
                })
            })

    }


    // handle delete 
    const handleDeleteBlog = (id) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success ms-2',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to delete this Blog",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `https://radiant-chamber-46753.herokuapp.com/userBlogs/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const available = allUsersBlogs.filter(user => user._id !== id);
                            setAllUsersBlogs(available);

                            swalWithBootstrapButtons.fire(
                                'Deleted!',
                                'Your Blogs has been deleted.',
                                'success'
                            )
                        }
                    })

            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })
    };

    return (
        <div className='mb-5'>
            <div className="container">
                <h1 className='text-secondary fw-bold pb-5'>MANAGE ALL USERS BLOGS</h1>
                <div className="row">

                    {
                        allUsersBlogs.length ?
                            allUsersBlogs.map(blog =>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <Card className="shadow mb-4" sx={{ borderRadius: '20px' }}>
                                        <CardActionArea expand={expanded}
                                            onClick={handleExpandClick}
                                            aria-expanded={expanded}
                                            aria-label="show more">
                                            <CardMedia
                                                component="img"
                                                height="194"
                                                image={blog?.img || "https://i.ibb.co/cNyd8LW/banner-3.png"}
                                                alt="Portfolio"
                                                style={{ borderRadius: '25px', height: '200px' }}
                                            />
                                            <CardContent className='p-2 pb-0 text-start'>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <h5>{blog.location}.</h5>
                                                        <p>{blog.time}.</p>
                                                    </div>
                                                    <div className="col-6">
                                                        <h5>$ {blog.expense}</h5>
                                                        <p> {blog.date}</p>
                                                        <p className='text-primary'>{blog.status}</p>
                                                    </div>
                                                </div>
                                                {/* Ratings  */}
                                                <Box sx={{ width: 200, display: 'flex', alignItems: 'center', }}>
                                                    <Rating name="text-feedback" value={parseInt(blog.ratings)} readOnly precision={0.5} emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />} /><Box sx={{ ml: 2 }}>{labels[parseInt(blog.ratings)]}</Box>
                                                </Box>

                                                <p className='ms-auto my-1 text-center'>{blog._id}</p>
                                            </CardContent>
                                            <CardActions disableSpacing>
                                                <Typography paragraph
                                                    style={{ fontSize: '13px', cursor: 'pointer' }} className='text-dark text-start fs-6'> See... <span className=''>{expanded ? "less" : "more"}</span>

                                                </Typography>
                                            </CardActions>
                                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                                <CardContent>
                                                    <p>{blog.experience}</p>

                                                </CardContent>
                                            </Collapse>
                                        </CardActionArea>
                                        <CardContent>

                                            <div className="row">
                                                <div className="col-6">
                                                    <Button onClick={() => handleDeleteBlog(blog._id)} variant='outlined' className=" w-100  ">DELETE</Button>
                                                </div>
                                                <div className="col-6">
                                                    <Button onClick={() => handleApproveBlog(blog._id, blog)} variant='outlined' className=" w-100  ">APPROVE</Button>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            )

                            :
                            <h1 className='fw-bold text-secondary'> You are not created any blogs</h1>
                    }


                </div>
            </div>
        </div>
    );
};

export default ManageUsersBlog;