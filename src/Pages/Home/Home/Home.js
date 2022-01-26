import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';

const Home = () => {

    return (
        <>
            <div id="home">
                <Navigation ></Navigation>
                <Banner></Banner>
                <About></About>
                <Blogs></Blogs>
                <Footer></Footer>
            </div>
        </>
    );
};

export default Home;