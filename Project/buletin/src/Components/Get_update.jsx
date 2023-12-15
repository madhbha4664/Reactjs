import React from 'react';

function Get_update(props) {
    return (
        <>
           <section id='update'>
            <div className="left">
                <h4>GET FIRST UPDATE</h4>
                <h2>Get the news in front line by <span>subscribe</span> &#9997; our latest updates</h2>
            </div>
            <div className="right">
                <div>
                    <input type="email" placeholder='Your email'/>
                    <button>Subscribe</button>
                </div>
            </div>
            </section> 
        </>
    );
}

export default Get_update;