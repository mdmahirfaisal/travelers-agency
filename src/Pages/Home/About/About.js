import React from 'react';
import './About.css';

const About = () => {


    return (
        <div id='about'>
            <h1 className='fw-bold text-secondary py-5'>ABOUT US</h1>
            <div className="about">

                <div className="upper">
                    <div className="logo">

                        {/* <img src="" alt="Your logo if any or remove this section" id="logo" /> */}
                        <div className="image">
                            <div className="camp">
                                <img src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/78235/tent-clipart-md.png" alt="Image" id="tent" />
                                <img src="https://thumbs.gfycat.com/LinedGoldenKentrosaurus-max-1mb.gif" alt="Image" id="fire" />
                            </div>
                        </div>
                    </div>
                    <div className="info">
                        <h1>ABOUT YELPCAMP</h1>
                        <p>
                            The periegesis, or "progress around" was an established literary genre during the Hellenistic age. A lost work by Agaclytus describing Olympia (πεὶ Ὀλμπίς) is referred to by the Suda and Photius.[3][4] Dionysius Periegetes (literally, Dionysius the Traveller)
                        </p>
                    </div>
                </div>

                <div className="lower">
                    <div className="info" id="lower-info">
                        <h1>ABOUT OUR TEAM</h1>
                        <p>
                            Travel literature became popular during the Song Dynasty (960-1279) of medieval China. The genre was called 'travel record literature' (youji wenxue), and was often written in narrative, prose, essay and diary style.
                        </p>
                    </div>
                    <div className="slider" id="lower-img">
                        <img src="https://i.pinimg.com/736x/6d/7d/b3/6d7db3a1037c8ac5b41b0ebfec293ca4.jpg" alt="Image" id="slider" />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default About;