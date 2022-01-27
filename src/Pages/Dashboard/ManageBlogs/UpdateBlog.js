import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Button, CircularProgress, TextField } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 15,
    borderRadius: '25px',
    p: 3,
};


const UpdateBlog = ({ blog, open, handleClose }) => {
    const { location, date, time, expense, experience, _id } = blog;
    const [BlogImg, setBlogImg] = React.useState(null);
    const [upLoading, setUpLoading] = React.useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const BlogData = {
            id: _id,
            location: data.location,
            date: data.date,
            time: data.time,
            img: BlogImg,
            expense: data.expense,
            experience: data.experience
        };

        setUpLoading(true)
        axios.put('http://localhost:5000/updateBlogs', BlogData)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'New Blog added Successfully',
                        showConfirmButton: false,
                        timer: 3000
                    })
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Blog update Canceled!',
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
            .finally(() => setUpLoading(false));


        console.log(data);
        console.log(errors);
    }


    // upload image
    const handleImgUpload = async e => {
        const imageData = new FormData();
        console.log(e.target.files[0]);
        imageData.set('key', 'b1329658ac9cd12416e1b24f8e686347');
        await imageData.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(response => {
                console.log(response.data.data.display_url);

                setBlogImg(response.data.data.display_url);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const uploadFile = () => {
        document.getElementById('productImg').click();
    }

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        {upLoading && <CircularProgress color="secondary" />}
                        <form onSubmit={handleSubmit(onSubmit)} className='form-control' style={{ minWidth: '400px' }}>
                            <p className='m-0 p-0'><small>Location</small></p>
                            <input className='form-control mb-1' type="text" required defaultValue={location} placeholder="Location" {...register("location")} />
                            <p className='m-0 p-0'><small>Expense</small></p>
                            <input className='form-control mb-1' type="text" required defaultValue={expense} placeholder="Expense" {...register("expense")} />
                            <p className='m-0 p-0'><small>Date</small></p>
                            <input className='form-control mb-1' type="text" required defaultValue={date} placeholder="Date" {...register("date")} />
                            <p className='m-0 p-0'><small>Time</small></p>
                            <input className='form-control mb-1' type="text" required defaultValue={time} placeholder="Time" {...register("time")} />
                            <Button type="submit" variant="outlined" onClick={uploadFile} className=" ">Upload image</Button>
                            <TextField id='productImg'

                                hidden

                                type="file" accept="image/*" onChange={handleImgUpload} required
                                variant="standard" />
                            {/* <p className='m-0 p-0'><small>Image URL</small></p>
                            <input className='form-control mb-1' type="file" accept="image/*" onChange={handleImgUpload} required defaultValue={"https://i.ibb.co/cNyd8LW/banner-3.png"} placeholder="Image URL" {...register("img")} /> */}
                            <p className='m-0 p-0'><small>Experience</small></p>
                            <textarea className='form-control mb-1' rows={5} required defaultValue={experience} type="text" placeholder="Experience" {...register("experience")} />
                            <input className='btn btn-danger ' type="submit" />
                        </form>



                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default UpdateBlog;