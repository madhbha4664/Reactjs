import React, { useEffect, useState } from 'react';

function Cards() {
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => {
                console.log(data.products); 
                setDetails(data.products);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <section id='cards'>
            <div className='top'>
                <h1>Latest News</h1>
                <button>See all <i className="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className='card_main'>
                {details.map((el, i) => (
                    <div className='card' key={i}>
                        <div className='card_pic'><img src={el.images[0]} alt="Product Image" /></div>
                        <div className='card_info'>
                        <h4>{el.category}</h4>
                        <h3>{el.title}</h3>
                        <p>{el.description}</p>
                        <h5>${el.price}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Cards;
