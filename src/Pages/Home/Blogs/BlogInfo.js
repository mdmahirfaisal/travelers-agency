import React from 'react';
import { useNavigate } from 'react-router-dom';
// import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Collapse, } from '@mui/material';

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
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



const BlogInfo = ({ blog }) => {

    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    const navigate = useNavigate();
    const handleDetails = (id) => {
        const url = `/blogDetails/${id}`
        navigate(url)
    }

    return (
        <div className="col-md-6 col-lg-4">
            <Card className='shadow mb-3' style={{ borderRadius: '20px' }}>
                <CardActionArea expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more">
                    <CardMedia className='img-fluid'
                        component="img"
                        image={blog.img || "https://i.ibb.co/cNyd8LW/banner-3.png"}
                        alt="Blog img"
                        sx={{ borderRadius: '20px', height: '200px', }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {blog.location} <span className='ms-3'>$ {blog.expense}</span>
                        </Typography>
                        <Typography variant="body1" color="text.inheritance">
                            {blog.time}
                        </Typography>
                        <Typography variant="body1" color="text.inheritance">
                            {blog.date}
                        </Typography>
                        <Box className='mb-3' sx={{ width: 200, display: 'flex', alignItems: 'center', margin: '0 auto' }}>
                            <Rating name="text-feedback" value={parseInt(blog.ratings)} readOnly precision={0.5} emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />} />
                            <Box sx={{ ml: 2 }}>{labels[parseInt(blog.ratings)]}</Box>
                        </Box>
                        <Typography variant="body2" color="text.primary">
                            {blog._id}
                        </Typography>

                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <Typography variant="body2" color="text.secondary">
                                {blog.experience}
                            </Typography>
                        </Collapse>

                    </CardContent>
                </CardActionArea>
                <CardContent className=''>
                    <Button onClick={() => handleDetails(blog._id)} variant="contained" className=" w-100 py-1 rounded-pill"> DETAILS</Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default BlogInfo;