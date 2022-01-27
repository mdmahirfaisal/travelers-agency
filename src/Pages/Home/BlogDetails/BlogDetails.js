import React from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';

const BlogDetails = () => {
    const { id } = useParams();
    return (
        <>
            <Navigation />
            <div>
                <h2>Blog ID: {id}</h2>
            </div>
        </>
    );
};

export default BlogDetails;