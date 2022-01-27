import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack'; import './Blogs.css';
import Swal from 'sweetalert2';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useNavigate } from 'react-router-dom';


const Blogs = () => {
    const [allBlogs, setAllBlogs] = React.useState([]);
    // pagination 
    const [page, setPage] = React.useState(0);
    const [pageCount, setPageCount] = React.useState(0)
    const handleChange = (event, value) => {
        setPage(value);
    };
    const size = 10;

    React.useEffect(() => {
        fetch(`http://localhost:5000/blogs?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setAllBlogs(data.blogs);
                const count = data.count;
                const pageNumber = Math.ceil(parseInt(count / size));
                setPageCount(pageNumber)
                console.log(data);
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error} `,

                })
            })
    }, [page]);

    const navigate = useNavigate();
    const handleDetails = (id) => {
        const url = `/blogDetails/${id}`
        navigate(url)
    }

    return (
        <div id='blogs'>
            <div className="blog-body">
                <div className="blog-hero">
                    <h1 className="hero-title">OUR BLOGS</h1>
                </div>

                <div className='blog-main'>
                    <h3 className='mt-3 fw-bold text-secondary'> Recent Posts <small className=' fw-bold ms-5'>Page Number: {page}</small></h3>

                    {allBlogs &&

                        allBlogs.map(blog => <div
                            key={blog._id}
                            className="blog-card text-start">
                            <img className="card-thumb img-fluid" style={{ minHeight: '100px' }} src={blog.img || "https://i.ibb.co/cNyd8LW/banner-3.png"} alt=''></img>
                            <h3 className="card-title"> {blog.name} </h3>
                            <p className="card-content">
                                <br /> <h5>Blog ID: {blog.id}</h5>
                                {blog.body}<span onClick={() => handleDetails(blog._id)} className="btn text-primary me-0 " >...Read More <KeyboardDoubleArrowRightIcon /></span>

                            </p>
                        </div>)
                    }

                </div>
                {/* Pagination  */}

                <div className="sidebar">
                    <div className="sidebar-content">
                        <h3>Other</h3>
                        <ul className='text-start'>
                            <li><a href="/">What's new</a></li>
                            <li><a href="/">Old posts</a></li>
                            <li><a href="/">Merch</a></li>
                            <li><a href="/">Social</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='bg-light py-3'>
                <Stack className='fs-1' spacing={4} style={{ marginLeft: '10%' }}>
                    <Pagination className="fs-1" count={pageCount} page={page} color='secondary' onChange={handleChange} />
                </Stack>
            </div>
        </div>
    );
};

export default Blogs;