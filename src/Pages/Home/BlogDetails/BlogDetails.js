import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Collapse, Rating, TextField } from '@mui/material';
import { useParams } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';
// import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import Footer from '../../Shared/Footer/Footer';
import StarIcon from '@mui/icons-material/Star';




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




const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = React.useState({});
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const { register, handleSubmit } = useForm();
    // const [productUpload, setProductUpload] = React.useState(false);

    // load single form specific ID
    React.useEffect(() => {
        fetch(`https://radiant-chamber-46753.herokuapp.com/blogs/${id}`)
            .then(res => res.json())
            .then(data => setBlog(data))
            .catch(error => {
                console.log(error);
            })
    }, [id]);
    console.log(blog);

    // Update

    /// Add order to database
    const handlePlaceOrder = (data) => {
        console.log(data)

        // const userData = { status: 'pending', name: user.displayName, email: user.email, phone: data.phone, address: data.address };
        // const newOrder = { ...userData, ...addOrder, orderTime: new Date() };
        // setProductUpload(true)
        // fetch('https://mysterious-waters-68327.herokuapp.com/orders', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(newOrder)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         setProductUpload(false)
        //         reset();
        //         Swal.fire({
        //             icon: 'success',
        //             title: 'Yes...',
        //             text: 'Your order placed successfully',
        //         })

        //     })
        //     .catch(error => {
        //         Swal.fire({
        //             icon: 'error',
        //             title: 'Error',
        //             text: `${error.message}`,
        //         })
        //     })
    };

    return (
        <div className='bg-light pb-5'>
            <Navigation />
            <div className="container">
                <h1 className="fw-bold tex-secondary py-4">BLOG DETAILS</h1>
                <div className='row'>

                    <div className="col-md-7">
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
                                    style={{ borderRadius: '25px' }}
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
                        </Card>
                    </div>


                    <div className="col-md-5">
                        <div className=" shadow bg-white mt-2 py-4" style={{ borderRadius: '20px' }}>
                            <h4 className='fw-bold'>Your opinion</h4>
                            <form onSubmit={handleSubmit(handlePlaceOrder)} className=" w-100 h-100  p-3 pt-0">
                                <TextField className="mb-3 w-100" variant="standard" type="text" defaultValue="" label="Name " />
                                <TextField className="mb-3 w-100" variant="standard" type="email" defaultValue="" label="Email " />
                                <TextField className="mb-3 w-100" variant="standard" label="Phone" required   {...register("phone")} />

                                <TextField className="mb-3 w-100" variant="standard"  {...register("address", { required: true })} label="Address" />
                                <Button type="submit" variant="contained" className=" w-100 py-1 rounded-pill"> ADD OPINION</Button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default BlogDetails;