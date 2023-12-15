import React from 'react';
import Cards from './Cards';
import './Components.css';
import Footer from './Footer';
import Get_update from './Get_update';
import Jhon_week from './Jhon_week';
import './MediaQuery.css';
import Navbar from './Navbar';
import Welcome from './Welcome';
function Main(props) {
    return (
        <>
            <Navbar />
            <Welcome />
            <Jhon_week />
            <Cards />
            <Get_update/>
            <Footer/>
        </>
    );
}

export default Main;