import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { useForm } from 'react-hook-form';

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
    const { location, date, time, expense, experience } = blog;

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);


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

                        <form onSubmit={handleSubmit(onSubmit)} className='form-control' style={{ minWidth: '400px' }}>
                            <p className='m-0 p-0'><small>Location</small></p>
                            <input className='form-control mb-1' type="text" required defaultValue={location} placeholder="Location" {...register("location")} />
                            <p className='m-0 p-0'><small>Expense</small></p>
                            <input className='form-control mb-1' type="text" required defaultValue={expense} placeholder="Expense" {...register("expense")} />
                            <p className='m-0 p-0'><small>Date</small></p>
                            <input className='form-control mb-1' type="text" required defaultValue={date} placeholder="Date" {...register("date")} />
                            <p className='m-0 p-0'><small>Time</small></p>
                            <input className='form-control mb-1' type="text" required defaultValue={time} placeholder="Time" {...register("time")} />
                            <p className='m-0 p-0'><small>Image URL</small></p>
                            <input className='form-control mb-1' type="text" required defaultValue={"https://i.ibb.co/cNyd8LW/banner-3.png"} placeholder="Image URL" {...register("img")} />
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