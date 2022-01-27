import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, TextField } from '@mui/material';
import { useParams } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';
// import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import Footer from '../../Shared/Footer/Footer';

const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = React.useState({});

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
                        <Card className='shadow mb-3' style={{ borderRadius: '20px' }}>
                            <CardActionArea>
                                <CardMedia className='img-fluid'
                                    component="img"
                                    image={blog.img || "https://i.ibb.co/cNyd8LW/banner-3.png"}
                                    alt="Blog img"
                                    sx={{ borderRadius: '20px' }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {blog.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {blog.body}
                                    </Typography>
                                </CardContent>
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