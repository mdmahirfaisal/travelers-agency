import * as React from 'react';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import Swal from 'sweetalert2';
import ManageBlogsInfo from './ManageBlogsInfo';
import useAuth from '../../../hooks/useAuth';



const ManageBlogs = () => {
    const { loading, setLoading } = useAuth();

    const [blogsData, setBlogsData] = React.useState([]);


    React.useEffect(() => {
        setLoading(true)
        fetch(`https://radiant-chamber-46753.herokuapp.com/allBlogs`)
            .then(res => res.json())
            .then(data => {
                setBlogsData(data);

            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error} `,

                })
            }).finally(() => setLoading(false))
    }, [setLoading]);

    return (
        <div className='mb-5'>
            <div className="container">
                <h1 className='text-secondary fw-bold pb-5'>MANAGE ALL BLOGS</h1>
                <div className="row">

                    {!blogsData.length && <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
                        <LinearProgress color="secondary" />
                        <LinearProgress color="secondary" />
                        <LinearProgress color="secondary" />
                        <LinearProgress color="secondary" />

                    </Stack>}
                    {!loading &&
                        blogsData.map(blog => <ManageBlogsInfo
                            key={blog._id}
                            blog={blog}
                            blogsData={blogsData}
                            setBlogsData={setBlogsData}
                        ></ManageBlogsInfo>)
                    }

                </div>
            </div>
        </div>
    );
};

export default ManageBlogs;