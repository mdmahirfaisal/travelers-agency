import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { CardActionArea } from '@mui/material';
import Swal from 'sweetalert2';
import UpdateBlog from './UpdateBlog';


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


const ManageBlogsInfo = ({ blog, blogsData, setBlogsData }) => {
    const { time, location, date, expense, experience, ratings } = blog;
    // modal control
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleDelete = (id) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success ms-2 rounded-pill py-1',
                cancelButton: 'btn btn-danger rounded-pill py-1'
            },
            buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to delete this item!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `https://radiant-chamber-46753.herokuapp.com/allBlogs/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const available = blogsData.filter(managePd => managePd._id !== id);
                            setBlogsData(available);

                            swalWithBootstrapButtons.fire(
                                'Deleted!',
                                'This Blog has been deleted.',
                                'success'
                            )
                        }
                    })

            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'this Blog is safe :)',
                    'error'
                )
            }
        })

    }


    return (
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
                        style={{ borderRadius: '25px' }}
                    />
                    <CardContent className='p-2 pb-0 text-start'>
                        <div className="row">
                            <div className="col-6">
                                <h5>{location}.</h5>
                                <p>{time}.</p>
                            </div>
                            <div className="col-6">
                                <h5>$ {expense}</h5>
                                <p> {date}</p>
                            </div>
                        </div>

                        {/* Ratings  */}
                        <Box sx={{ width: 200, display: 'flex', alignItems: 'center', }}>
                            <Rating name="text-feedback" value={parseInt(ratings)} readOnly precision={0.5} emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />} /><Box sx={{ ml: 2 }}>{labels[parseInt(ratings)]}</Box>
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
                            <p>{experience}</p>

                        </CardContent>
                    </Collapse>
                </CardActionArea>
                <CardContent>
                    <div className="row  mx-auto" style={{ width: '90%' }}>
                        <div className="col-6">
                            <Button onClick={handleOpen} variant='outlined' className=" px-3 w-100 py-0 rounded-pill  mt-2">UPDATE</Button>
                            <UpdateBlog
                                blog={blog}
                                open={open}
                                handleClose={handleClose}
                            ></UpdateBlog>
                        </div>

                        <div className="col-6">
                            <Button onClick={() => handleDelete(blog._id)} variant='outlined' className=" px-3 w-100 py-0 rounded-pill  mt-2">DELETE</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default ManageBlogsInfo;