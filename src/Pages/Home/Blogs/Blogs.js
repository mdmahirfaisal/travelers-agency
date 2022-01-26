import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack'; import './Blogs.css';

const blogsData = [
    {
        "Location": "Bichanakandi",
        "id": "1",
        "Time": "12.00 PM",
        "author": "Meer Salman",
        "Date": "12/2/2020",
        "img": "https://i.ibb.co/jwhjNS1/card6.jpg",
        "expense": "15000",
        "rating": "4",
        "transportation": "Bus, Car, Boat",
        "description": "I always love long boat ride. So when my friend Avijit told me he has a work in Sundarban and its a long boat journey, if I wish I can join with him. I did not even take a second to reply yes. Yes Sundarban I am coming. Next morning I boarded a Train from my nearest railway station and Avijit joined me after some stations. Within one hour we reached Canning, "
    },
    {
        "Location": "Bichanakandi",
        "id": "2",
        "Time": "12.00 PM",
        "author": "Meer Salman",
        "Date": "12/2/2020",
        "img": "https://i.ibb.co/jwhjNS1/card6.jpg",
        "expense": "15000",
        "rating": "4",
        "transportation": "Bus, Car, Boat",
        "description": "I always love long boat ride. So when my friend Avijit told me he has a work in Sundarban and its a long boat journey, if I wish I can join with him. I did not even take a second to reply yes. Yes Sundarban I am coming. Next morning I boarded a Train from my nearest railway station and Avijit joined me after some stations. Within one hour we reached Canning, the nearest rail head of Godkhali,the gateway of Sundarban. Godkhali is only one hour further journey from Canning.  "
    },
    {
        "Location": "Bichanakandi",
        "id": "3",
        "Time": "12.00 PM",
        "author": "Meer Salman",
        "Date": "12/2/2020",
        "img": "https://i.ibb.co/jwhjNS1/card6.jpg",
        "expense": "15000",
        "rating": "4",
        "transportation": "Bus, Car, Boat",
        "description": "I always love long boat ride. So when my friend Avijit told me he has a work in Sundarban and its a long boat journey, if I wish I can join with him. I did not even take a second to reply yes. Yes Sundarban I am coming. Next morning I boarded a Train from my nearest railway station and Avijit joined me after some stations. Within one hour we reached Canning, the nearest rail head of Godkhali,the gateway of Sundarban. Godkhali is only one hour further journey from Canning. Bus,Auto, Hired vehicle are available in Canning for Godkhali. We booked an Auto ad reached Godkhali.  "
    },
    {
        "Location": "Bichanakandi",
        "id": "4",
        "Time": "12.00 PM",
        "author": "Meer Salman",
        "Date": "12/2/2020",
        "img": "https://i.ibb.co/jwhjNS1/card6.jpg",
        "expense": "15000",
        "rating": "4",
        "transportation": "Bus, Car, Boat",
        "description": "I always love long boat ride. So when my friend Avijit told me he has a work in Sundarban and its a long boat journey, if I wish I can join with him. I did not even take a second to reply yes. Yes Sundarban I am coming. Next morning I boarded a Train from my nearest railway station and Avijit joined me after some stations. Within one hour we reached Canning, the nearest rail head of Godkhali,the gateway of Sundarban. Godkhali is only one hour further journey from Canning. Bus,Auto, Hired vehicle are available in Canning for Godkhali. We booked an Auto ad reached Godkhali. "
    },
    {
        "Location": "Bichanakandi",
        "id": "5",
        "Time": "12.00 PM",
        "author": "Meer Salman",
        "Date": "12/2/2020",
        "img": "https://i.ibb.co/jwhjNS1/card6.jpg",
        "expense": "15000",
        "rating": "4",
        "transportation": "Bus, Car, Boat",
        "description": "I always love long boat ride. So when my friend Avijit told me he has a work in Sundarban and its a long boat journey, if I wish I can join with him. I did not even take a second to reply yes. Yes Sundarban I am coming. Next morning I boarded a Train from my nearest railway station and Avijit joined me after some stations. Within one hour we reached Canning, "
    },
    {
        "Location": "Bichanakandi",
        "id": "6",
        "Time": "12.00 PM",
        "author": "Meer Salman",
        "Date": "12/2/2020",
        "img": "https://i.ibb.co/jwhjNS1/card6.jpg",
        "expense": "15000",
        "rating": "4",
        "transportation": "Bus, Car, Boat",
        "description": "I always love long boat ride. So when my friend Avijit told me he has a work in Sundarban and its a long boat journey, if I wish I can join with him. I did not even take a second to reply yes. Yes Sundarban I am coming. Next morning I boarded a Train from my nearest railway station and Avijit joined me after some stations. Within one hour we reached Canning, the nearest rail head of Godkhali,the gateway of Sundarban. Godkhali is only one hour further journey from Canning. Bus,Auto, Hired vehicle are available in Canning for "
    },
    {
        "Location": "Bichanakandi",
        "id": "7",
        "Time": "12.00 PM",
        "author": "Meer Salman",
        "Date": "12/2/2020",
        "img": "https://i.ibb.co/jwhjNS1/card6.jpg",
        "expense": "15000",
        "rating": "4",
        "transportation": "Bus, Car, Boat",
        "description": "I always love long boat ride. So when my friend Avijit told me he has a work in Sundarban and its a long boat journey, if I wish I can join with him. I did not even take a second to reply yes. Yes Sundarban I am coming. Next morning I boarded a Train from my nearest railway station and Avijit joined me after some stations. Within one hour we reached Canning, the nearest rail head of Godkhali,the gateway of Sundarban. Godkhali is only one hour further journey from Canning. Bus,Auto, Hired vehicle are available in "
    },
    {
        "Location": "Bichanakandi",
        "id": "9",
        "Time": "12.00 PM",
        "author": "Meer Salman",
        "Date": "12/2/2020",
        "img": "https://i.ibb.co/jwhjNS1/card6.jpg",
        "expense": "15000",
        "rating": "4",
        "transportation": "Bus, Car, Boat",
        "description": "I always love long boat ride. So when my friend Avijit told me he has a work in Sundarban and its a long boat journey, if I wish I can join with him. I did not even take a second to reply yes. Yes Sundarban I am coming. Next morning I boarded a Train from my nearest railway station and Avijit joined me after some stations. Within one hour we reached Canning,  "
    },
    {
        "Location": "Bichanakandi",
        "id": "10",
        "Time": "12.00 PM",
        "author": "Meer Salman",
        "Date": "12/2/2020",
        "img": "https://i.ibb.co/jwhjNS1/card6.jpg",
        "expense": "15000",
        "rating": "4",
        "transportation": "Bus, Car, Boat",
        "description": "I always love long boat ride. So when my friend Avijit told me he has a work in Sundarban and its a long boat journey, if I wish I can join with him. I did not even take a second to reply yes. Yes Sundarban I am coming. Next morning I boarded a Train from my nearest railway station and Avijit joined me after some stations. Within one hour we reached Canning,  "
    },
    {
        "Location": "Bichanakandi",
        "id": "11",
        "Time": "12.00 PM",
        "author": "Meer Salman",
        "Date": "12/2/2020",
        "img": "https://i.ibb.co/jwhjNS1/card6.jpg",
        "expense": "15000",
        "rating": "4",
        "transportation": "Bus, Car, Boat",
        "description": "I always love long boat ride. So when my friend Avijit told me he has a work in Sundarban and its a long boat journey, if I wish I can join with him. I did not even take a second to reply yes. Yes Sundarban I am coming. Next morning I boarded a Train from my nearest railway station and Avijit joined me after some stations. Within one hour we reached Canning, "
    },
    {
        "Location": "Bichanakandi",
        "id": "12",
        "Time": "12.00 PM",
        "author": "Meer Salman",
        "Date": "12/2/2020",
        "img": "https://i.ibb.co/jwhjNS1/card6.jpg",
        "expense": "15000",
        "rating": "4",
        "transportation": "Bus, Car, Boat",
        "description": "I always love long boat ride. So when my friend Avijit told me he has a work in Sundarban and its a long boat journey, if I wish I can join with him. I did not even take a second to reply yes. Yes Sundarban I am coming. Next morning I boarded a "
    },
    {
        "Location": "Bichanakandi",
        "id": "13",
        "Time": "12.00 PM",
        "author": "Meer Salman",
        "Date": "12/2/2020",
        "img": "https://i.ibb.co/jwhjNS1/card6.jpg",
        "expense": "15000",
        "rating": "4",
        "transportation": "Bus, Car, Boat",
        "description": "I always love long boat ride. So when my friend Avijit told me he has a work in Sundarban and its a long boat journey, if I wish I can join with him. I did not even take a second to reply yes. Yes Sundarban I am coming. Next morning I boarded a Train from my nearest railway station and Avijit joined me after some stations. Within one hour we reached Canning, "
    },
    {
        "Location": "Bichanakandi",
        "id": "14",
        "Time": "12.00 PM",
        "author": "Meer Salman",
        "Date": "12/2/2020",
        "img": "https://i.ibb.co/jwhjNS1/card6.jpg",
        "expense": "15000",
        "rating": "4",
        "transportation": "Bus, Car, Boat",
        "description": "I always love long boat ride. So when my friend Avijit told me he has a work in Sundarban and its a long boat journey, if I wish I can join with him. I did not even take a second to reply yes. Yes Sundarban I am coming. Next morning I boarded a Train from my nearest railway station and Avijit joined me after some stations. Within one hour we reached Canning, the nearest rail head of Godkhali,the gateway of Sundarban. Godkhali is only one hour further journey from Canning. Bus,Auto, Hired vehicle are available in Canning for Godkhali. We booked an Auto ad reached Godkhali. As our boat was prebooked  So we also didnt even  waste a single time and started our journey through river network. Within not more than 15 minute I felt the essence of Sundarban and understood why this called world largest Delta and mangrove forest. Our boat was running through a river, both side of  "
    },
    {
        "Location": "Bichanakandi",
        "id": "15",
        "Time": "12.00 PM",
        "author": "Meer Salman",
        "Date": "12/2/2020",
        "img": "https://i.ibb.co/jwhjNS1/card6.jpg",
        "expense": "15000",
        "rating": "4",
        "transportation": "Bus, Car, Boat",
        "description": "I always love long boat ride. So when my friend Avijit told me he has a work in Sundarban and its a long boat journey, if I wish I can join with him. I did not even take a second to reply yes. Yes Sundarban I am coming. Next morning I boarded a Train from my nearest railway station and Avijit joined me after some stations. Within one hour we reached Canning,"
    },
    {
        "Location": "Bichanakandi",
        "id": "16",
        "Time": "12.00 PM",
        "author": "Meer Salman",
        "Date": "12/2/2020",
        "img": "https://i.ibb.co/jwhjNS1/card6.jpg",
        "expense": "15000",
        "rating": "4",
        "transportation": "Bus, Car, Boat",
        "description": "I always love long boat ride. So when my friend Avijit told me he has a work in Sundarban and its a long boat journey, if I wish I can join with him. I did not even take a second to reply yes. Yes Sundarban I am coming. Next morning I boarded a Train from my nearest railway station and Avijit joined me after some stations. Within one hour we reached Canning, the nearest rail head of Godkhali,the gateway of Sundarban. Godkhali is only one hour further journey from Canning. Bus,Auto, Hired vehicle are available in Canning for Godkhali. We booked an Auto ad reached Godkhali. As our boat was prebooked  So we also didnt even  waste a single time and started our journey through river network. Within not more than 15 minute  "
    },
    {
        "Location": "Bichanakandi",
        "id": "17",
        "Time": "12.00 PM",
        "author": "Meer Salman",
        "Date": "12/2/2020",
        "img": "https://i.ibb.co/jwhjNS1/card6.jpg",
        "expense": "15000",
        "rating": "4",
        "transportation": "Bus, Car, Boat",
        "description": "I always love long boat ride. So when my friend Avijit told me he has a work in Sundarban and its a long boat journey, if I wish I can join with him. I did not even take a second to reply yes. Yes Sundarban I am coming. Next morning I boarded a Train from my nearest railway station and Avijit joined me after some stations. Within one hour we reached Canning,  "
    },
    {
        "Location": "Bichanakandi",
        "id": "18",
        "Time": "12.00 PM",
        "author": "Meer Salman",
        "Date": "12/2/2020",
        "img": "https://i.ibb.co/jwhjNS1/card6.jpg",
        "expense": "15000",
        "rating": "4",
        "transportation": "Bus, Car, Boat",
        "description": "I always love long boat ride. So when my friend Avijit told me he has a work in Sundarban and its a long boat journey, if I wish I can join with him. I did not even take a second to reply yes. Yes Sundarban I am coming. Next morning I boarded a Train from my nearest railway station and Avijit joined me after some stations. Within one hour we reached Canning, "
    },
    {
        "Location": "Bichanakandi",
        "id": "19",
        "Time": "12.00 PM",
        "author": "Meer Salman",
        "Date": "12/2/2020",
        "img": "https://i.ibb.co/jwhjNS1/card6.jpg",
        "expense": "15000",
        "rating": "4",
        "transportation": "Bus, Car, Boat",
        "description": "I always love long boat ride. So when my friend Avijit told me he has a work in Sundarban and its a long boat journey, if I wish I can join with him. I did not even take a second to reply yes. Yes Sundarban I am coming. Next morning I boarded a Train from my nearest railway station and Avijit joined me after some stations. Within one hour we reached Canning, the nearest rail head of Godkhali,the gateway of Sundarban. Godkhali is only one hour further journey from Canning. Bus,Auto, Hired vehicle are available in Canning for Godkhali. We booked an Auto ad reached Godkhali. As our boat was prebooked  So we also didnt even  waste a single time and started our journey through river network. Within not more than 15 minute I felt the essence of Sundarban and understood why this called world largest Delta and mangrove forest.  "
    },
    {
        "Location": "Bichanakandi",
        "id": "20",
        "Time": "12.00 PM",
        "author": "Meer Salman",
        "Date": "12/2/2020",
        "img": "https://i.ibb.co/jwhjNS1/card6.jpg",
        "expense": "15000",
        "rating": "4",
        "transportation": "Bus, Car, Boat",
        "description": "I always love long boat ride. So when my friend Avijit told me he has a work in Sundarban and its a long boat journey, if I wish I can join with him. I did not even take a second to reply yes. Yes Sundarban I am coming. Next morning I boarded a Train from my nearest railway station and Avijit joined me after some stations. Within one hour we reached Canning, the nearest rail head of Godkhali,the gateway of Sundarban. Godkhali is only one hour further journey from Canning. Bus,Auto, Hired vehicle are available in Canning for Godkhali. We booked an Auto ad reached Godkhali. As our boat was prebooked  So we also didnt even  waste a  "
    },
    {
        "Location": "Bichanakandi",
        "id": "22",
        "Time": "12.00 PM",
        "author": "Meer Salman",
        "Date": "12/2/2020",
        "img": "https://i.ibb.co/jwhjNS1/card6.jpg",
        "expense": "15000",
        "rating": "4",
        "transportation": "Bus, Car, Boat",
        "description": "I always love long boat ride. So when my friend Avijit told me he has a work in Sundarban and its a long boat journey, if I wish I can join with him. I did not even take a second to reply yes. Yes Sundarban I am coming. Next morning I boarded a Train from my nearest railway station and Avijit joined me after some stations. Within one hour we reached Canning, the "
    },
    {
        "Location": "Bichanakandi",
        "id": "23",
        "Time": "12.00 PM",
        "author": "Meer Salman",
        "Date": "12/2/2020",
        "img": "https://i.ibb.co/jwhjNS1/card6.jpg",
        "expense": "15000",
        "rating": "4",
        "transportation": "Bus, Car, Boat",
        "description": "I always love long boat ride. So when my friend Avijit told me he has a work in Sundarban and its a long boat journey, if I wish I can join with him. I did not even take a second to reply yes. Yes Sundarban I am coming. Next morning I boarded a Train from my nearest railway station and Avijit joined me after some stations. Within one hour we reached Canning, the  "
    },
    {
        "Location": "Bichanakandi",
        "id": "24",
        "Time": "12.00 PM",
        "author": "Meer Salman",
        "Date": "12/2/2020",
        "img": "https://i.ibb.co/jwhjNS1/card6.jpg",
        "expense": "15000",
        "rating": "4",
        "transportation": "Bus, Car, Boat",
        "description": "I always love long boat ride. So when my friend Avijit told me he has a work in Sundarban and its a long boat journey, if I wish I can join with him. I did not even take a second to reply yes. Yes Sundarban I am coming. Next morning I boarded a Train from my nearest railway station and Avijit joined me after some stations. Within one hour we reached Canning, the nearest rail head of Godkhali,the gateway of Sundarban. Godkhali is only one hour further journey from Canning. Bus,Auto, Hired vehicle are available in Canning for Godkhali. We booked an Auto ad reached Godkhali. As our boat was prebooked  So we also didnt even  waste a single time and started our journey through river network. Within not more than 15 minute I felt the essence of Sundarban and understood why this called world largest Delta and mangrove forest. Our boat was "
    },
    {
        "Location": "Bichanakandi",
        "id": "25",
        "Time": "12.00 PM",
        "author": "Meer Salman",
        "Date": "12/2/2020",
        "img": "https://i.ibb.co/jwhjNS1/card6.jpg",
        "expense": "15000",
        "rating": "4",
        "transportation": "Bus, Car, Boat",
        "description": "I always love long boat ride. So when my friend Avijit told me he has a work in Sundarban and its a long boat journey, if I wish I can join with him. I did not even take a second to reply yes. Yes Sundarban I am coming. Next morning I boarded a Train from my nearest railway station and Avijit joined me after some stations. Within one hour we reached Canning, the nearest rail head of Godkhali,the gateway of Sundarban. Godkhali is only one hour further journey from Canning. "
    },
    {
        "Location": "Bichanakandi",
        "id": "26",
        "Time": "12.00 PM",
        "author": "Meer Salman",
        "Date": "12/2/2020",
        "img": "https://i.ibb.co/jwhjNS1/card6.jpg",
        "expense": "15000",
        "rating": "4",
        "transportation": "Bus, Car, Boat",
        "description": "I always love long boat ride. So when my friend Avijit told me he has a work in Sundarban and its a long boat journey, if I wish I can join with him. I did not even take a second to reply yes. Yes Sundarban I am coming. Next morning I boarded a Train from my nearest railway station and Avijit joined me after some stations. Within one hour we reached Canning, the  "
    },
    {
        "Location": "Bichanakandi",
        "id": "27",
        "Time": "12.00 PM",
        "author": "Meer Salman",
        "Date": "12/2/2020",
        "img": "https://i.ibb.co/jwhjNS1/card6.jpg",
        "expense": "15000",
        "rating": "4",
        "transportation": "Bus, Car, Boat",
        "description": "I always love long boat ride. So when my friend Avijit told me he has a work in Sundarban and its a long boat journey, if I wish I can join with him. I did not even take a second to reply yes. Yes Sundarban I am coming. Next morning I boarded a Train from my nearest railway station and Avijit joined me after some stations. Within one hour we reached Canning, the nearest rail head of Godkhali,the gateway of Sundarban. Godkhali is only one hour further journey from Canning. Bus,Auto, Hired vehicle are available in Canning for Godkhali. We booked an Auto ad reached Godkhali. As our boat was prebooked  So we also didnt even  waste a single time and started our journey through river network. Within not more than 15 minute I felt the essence of Sundarban and understood why this called "
    },
    {
        "Location": "Bichanakandi",
        "id": "28",
        "Time": "12.00 PM",
        "author": "Meer Salman",
        "Date": "12/2/2020",
        "img": "https://i.ibb.co/jwhjNS1/card6.jpg",
        "expense": "15000",
        "rating": "4",
        "transportation": "Bus, Car, Boat",
        "description": "I always love long boat ride. So when my friend Avijit told me he has a work in Sundarban and its a long boat journey, if I wish I can join with him. I did not even take a second to reply yes. Yes Sundarban I am coming. Next morning I boarded a Train from my nearest railway station and Avijit joined me after some stations. Within one hour we reached Canning, the nearest rail head of Godkhali,the gateway of Sundarban. Godkhali is only one hour further journey from Canning. Bus,Auto, Hired vehicle are available in Canning for Godkhali. We booked an Auto ad reached Godkhali. As our boat was prebooked  So we also didnt even  waste a single time  "
    },
    {
        "Location": "Bichanakandi",
        "id": "29",
        "Time": "12.00 PM",
        "author": "Meer Salman",
        "Date": "12/2/2020",
        "img": "https://i.ibb.co/jwhjNS1/card6.jpg",
        "expense": "15000",
        "rating": "4",
        "transportation": "Bus, Car, Boat",
        "description": "I always love long boat ride. So when my friend Avijit told me he has a work in Sundarban and its a long boat journey, if I wish I can join with him. I did not even take a second to reply yes. Yes Sundarban I am coming. Next morning I boarded a Train from my nearest railway station and Avijit joined me after some stations. Within one hour we reached Canning, the nearest rail head of Godkhali,the gateway of Sundarban. Godkhali is only one hour further journey from Canning. Bus,Auto, Hired vehicle are available in Canning for Godkhali. We booked an Auto ad reached Godkhali. "
    },
    {
        "Location": "Bichanakandi",
        "id": "30",
        "Time": "12.00 PM",
        "author": "Meer Salman",
        "Date": "12/2/2020",
        "img": "https://i.ibb.co/jwhjNS1/card6.jpg",
        "expense": "15000",
        "rating": "4",
        "transportation": "Bus, Car, Boat",
        "description": "I always love long boat ride. So when my friend Avijit told me he has a work in Sundarban and its a long boat journey, if I wish I can join with him. I did not even take a second to reply yes. Yes Sundarban I am coming. Next morning I boarded a Train from my nearest railway station and Avijit joined me after some stations. Within one hour we reached Canning,  "
    },

]

const Blogs = () => {
    // const [blogsData, setBlogsData] = React.useState([]);

    // React.useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => res.json)
    //         .then(data => setBlogsData(data))
    //         .catch(error => console.log(error))
    // }, [])


    // pagination 
    const [page, setPage] = React.useState(0);
    const handleChange = (event, value) => {
        setPage(value);
    };

    console.log(page);
    return (
        <div id='blogs'>
            <div className="blog-body">
                <div className="blog-hero">
                    <h1 className="hero-title">OUR BLOGS</h1>
                </div>

                <div className='blog-main'>
                    <h3 className='mt-3 fw-bold text-secondary'> Recent Posts </h3>

                    {
                        blogsData.map(blog => <div
                            key={blog.id}
                            className="blog-card text-start">
                            <img className="card-thumb" src={blog.img}></img>
                            <h3 className="card-title">{blog.location} </h3>
                            <p className="card-content">
                                <br /> <h5>Blog ID: {blog.id}</h5>
                                {blog.description}
                                <a className="card-more" href="#">Read more </a>
                            </p>
                        </div>)
                    }
                </div>
                {/* Pagination  */}

                <div className="sidebar">
                    <div className="sidebar-content">
                        <h3>Other</h3>
                        <ul className='text-start'>
                            <li><a href="#">What's new</a></li>
                            <li><a href="#">Old posts</a></li>
                            <li><a href="#">Merch</a></li>
                            <li><a href="#">Social</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='bg-light py-3'>
                <Stack className='fs-1' spacing={4} style={{ marginLeft: '10%' }}>
                    <Typography>Page: {page}</Typography>
                    <Pagination className="fs-1" count={parseInt(blogsData.length / 5)} page={page} color='secondary' onChange={handleChange} />
                </Stack>
            </div>
        </div>
    );
};

export default Blogs;