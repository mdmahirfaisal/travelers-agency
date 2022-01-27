import React, { useState } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'
import TextField from '@mui/material/TextField';
import { CircularProgress, Button } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Box from '@mui/material/Box';

import StarIcon from '@mui/icons-material/Star';
import Rating from '@mui/material/Rating';



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


const AddBlog = () => {
    const [uploading, setUploading] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    const [productImg, setProductImg] = useState(null)

    const [rateValue, setRateValue] = React.useState(0);
    const [hover, setHover] = React.useState(-1);


    const handleImgUpload = async e => {
        const imageData = new FormData();
        console.log(e.target.files[0]);
        imageData.set('key', 'b1329658ac9cd12416e1b24f8e686347');
        await imageData.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(response => {
                console.log(response.data.data.display_url);

                setProductImg(response.data.data.display_url);
            })
            .catch(error => {
                console.log(error);
            });
    };
    const onSubmit = productData => {
        const data = {
            date: productData.date,
            expense: productData.expense,
            location: productData.location,
            time: productData.time,
            ratings: rateValue,
            img: productImg,
            experience: productData.experience,

        };

        reset()
        setUploading(true)
        axios.post('https://mysterious-waters-68327.herokuapp.com/products', data)
            .then(res => {
                console.log(res);
                setUploading(false)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'New product added Successfully',
                        showConfirmButton: false,
                        timer: 3000
                    })
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Order placed Canceled!',
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

    };

    const uploadFile = () => {
        document.getElementById('productImg').click();
    }

    return (
        <div className="container ">
            <h2 className="fw-bold text-secondary ">PLEASE ADD A BLOG</h2>
            {uploading && <CircularProgress></CircularProgress>}

            <div className=" py-3" >
                <form onSubmit={handleSubmit(onSubmit)} className=" row form-control border-0 bg-white shadow  py-4 px-3" style={{ maxWidth: '700px', margin: 'auto', borderRadius: '20px' }}>

                    <TextField className="col-12 col-md-5 me-md-2"
                        label="Spot Location"
                        required
                        {...register("location")}
                        variant="standard" />


                    <TextField className="col-12 col-md-5 ms-md-2"
                        label="Total Expense"
                        required
                        type="number" {...register("expense")}
                        variant="standard" />


                    <TextField className="col-12 col-md-5 me-md-2"
                        label="Date"
                        required
                        {...register("date")}
                        variant="standard" />


                    <TextField className="col-12 col-md-5 ms-md-2"
                        label="Time"
                        required
                        type="number" {...register("time")}
                        variant="standard" />

                    <div className="row">
                        <div className="col-md-6">
                            <Form.Label className="text-start d-block  mt-3">Spot image</Form.Label>
                            <Button type="submit" variant="outlined" onClick={uploadFile} className="d-block ">Upload image</Button>
                            <TextField id='productImg'
                                className="col-12 col-md-10"
                                hidden
                                label="Upload Image"
                                type="file" accept="image/*" onChange={handleImgUpload} required
                                variant="standard" />
                        </div>

                        <div className="col-md-6">
                            {/* ratings  */}
                            <Form.Label className="text-start d-block  mt-3">Rate Us</Form.Label>
                            <Box className=" d-flex align-items-center ">
                                <Rating
                                    className="fs-1 d-block text-start"
                                    name="hover-feedback"
                                    value={rateValue}
                                    precision={0.5}
                                    onChange={(event, newValue) => {
                                        setRateValue(newValue);
                                    }}
                                    onChangeActive={(event, newHover) => {
                                        setHover(newHover);
                                    }}
                                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                />
                                {rateValue !== null && (
                                    <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : rateValue]}</Box>
                                )}
                            </Box>
                        </div>
                    </div>

                    <Form.Label className="text-start  mt-4">Experience</Form.Label>
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={5}
                        placeholder="Experience"
                        className="col-12 col-md-12 " style={{ borderRadius: '5px', width: '100%' }}  {...register("experience", { required: true })}
                    />
                    <Button type="submit" variant="contained" className=" w-100  rounded-pill">ADD A BLOG</Button>

                </form>
            </div>

        </div>
    );
};

export default AddBlog;