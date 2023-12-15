import React from 'react';

function Jhon_week(props) {
    return (
        <>
          <section id='jhon_week'>
            <div className='left'>
                <img src="../Images/jhon_week.jpeg" alt="Jhon Week Poster"/>
            </div>
            <div className='right'>
                <p className='time'>
                    <img src="../Images/netflixLogo.jpg" alt="Netflix Image" /> Netflix <li>12 Minutes ago</li>
                </p>
                <h1>Where To Watch 'Jhon Wick: Chapter 4'</h1>
                <p className='info'>There's been no official announcement regarding Jhon Wick: Chapter 4' streaming relese. However,given it's a Lionsgate film,Jhon Wick: Chapter 4 will eventully be relesed on starz....</p>
                <p className='read'>
                <span>Movies</span>
                <li>4 min read</li>
            </p>
            </div>
           
            </section>  
        </>
    );
}

export default Jhon_week;