import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack'; import './Blogs.css';
import Swal from 'sweetalert2';
import BlogInfo from './BlogInfo';

// const data=[
//     {
//         "date": "20/12/2020",
//         "time": "11.30pm",
//         "location": "germany",
//         "expense": "4500",
//         "ratings": "5",
//         "experience": "The early era of space exploration was driven by a 'Space Race' between the Soviet Union and the United States. The launch of the first human-made object to orbit Earth, the Soviet Union's Sputnik 1, on 4 October 1957, and the first Moon landing by the American Apollo 11 mission on 20 July 1969 are often taken as landmarks for this initial period."
//     },
// ]


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
        fetch(`https://radiant-chamber-46753.herokuapp.com/blogs?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setAllBlogs(data.blogs);
                const count = data.count;
                const pageNumber = Math.ceil(parseInt(count / size));
                setPageCount(pageNumber)
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error} `,

                })
            })
    }, [page]);


    return (
        <div id='blogs'>
            <div className="blog-body">
                <div className="blog-hero">
                    <h1 className="hero-title">OUR BLOGS</h1>
                </div>

                <div className='blog-main'>
                    <h3 className='my-5 fw-bold text-secondary'> EVERY PAGE BLOGS: ({allBlogs.length}) </h3>

                    <div className="container">
                        <div className="row g-4">
                            {allBlogs &&

                                allBlogs.map(blog => <BlogInfo
                                    key={blog._id}
                                    blog={blog}
                                ></BlogInfo>)
                            }
                        </div>
                    </div>

                </div>
            </div>

            <div style={{ backgroundColor: '#dcdde1' }}>
                <div className=' py-3 container'>
                    <h5 className=' fw-bold ms-5 text-start'>Page Number: {page}</h5>
                    <Stack className='fs-1 text-center' spacing={4} >
                        <Pagination className="fs-1" count={pageCount} page={page} color='secondary' onChange={handleChange} />
                    </Stack>
                </div>
            </div>

        </div>
    );
};

export default Blogs;