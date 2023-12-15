import React from 'react';

function Footer(props) {
    return (
        <>
        <footer>
            <div className="left">
                <div className="upper">
                    <h1 id='logo'>Buletin</h1>
                    <p>Craft narratives that ignite inspiration, knowladge,and entertaintment.</p>
                    <div className="social_main">
                        <div><i className="fa-brands fa-facebook"></i></div>
                        <div><i className="fa-brands fa-linkedin"></i></div>
                        <div><i className="fa-brands fa-square-twitter"></i></div>
                        <div><i className="fa-brands fa-square-instagram"></i></div>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className='footer_box'>
                    <h2>Business</h2>
                    <ul>
                        <li>Startup</li>
                        <li>Employee</li>
                        <li>Sucess</li>
                        <li>Videos</li>
                        <li>Markets</li>
                    </ul>
                </div>
                <div className='footer_box'>
                    <h2>Technology</h2>
                    <ul>
                        <li>Innovate</li>
                        <li>Gadget</li>
                        <li>Innovative Cities</li>
                        <li>Upstarts</li>
                        <li>Future Tech</li>
                    </ul>
                </div>
                <div className='footer_box'>
                    <h2>Travel</h2>
                    <ul>
                        <li>Destinations</li>
                        <li>Food & Drink</li>
                        <li>Stay</li>
                        <li>News</li>
                        <li>Videos</li>
                    </ul>
                </div>
                <div className='footer_box'>
                    <h2>Sports</h2>
                    <ul>
                        <li>Football</li>
                        <li>Tenis</li>
                        <li>Golf</li>
                        <li>Motospoets</li>
                        <li>Esports</li>
                    </ul>
                </div>
                <div className='footer_box'>
                    <h2>Entertaintment</h2>
                    <ul>
                        <li>Movies</li>
                        <li>Artist</li>
                        <li>Television</li>
                        <li>Influencer</li>
                        <li>Viral</li>
                    </ul>
                </div>
                <div className='footer_box'>
                    <h2>Features</h2>
                    <ul>
                        <li>As Equals</li>
                        <li>Call to Earth</li>
                        <li>Freedom Project</li>
                        <li>Inside Asia</li>
                        <li>2 Degress</li>
                    </ul>
                </div>
                <div className='footer_box'>
                    <h2>Weather</h2>
                    <ul>
                        <li>Climate</li>
                        <li>Strom Traker</li>
                        <li>Wildfire Traker</li>
                        <li>Earthquake</li>
                        <li>Video</li>
                    </ul>
                </div>
                <div className='footer_box'>
                    <h2>More</h2>
                    <ul>
                        <li>Design</li>
                        <li>Mentorship</li>
                        <li>Investment</li>
                        <li>Work for Buletin</li>
                        <li>Support Us</li>
                    </ul>
                </div>
            </div>
        </footer>
        </>
    );
}

export default Footer;