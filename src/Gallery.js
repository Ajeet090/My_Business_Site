import React from 'react';
import './Home.css' ;
import { useState, useEffect } from 'react';

function Gallery (){
    const[data , setData] = useState([]);
    useEffect(()=>{
    fetch('https://api.unsplash.com/photos/?client_id=9ywYxGjz_S7Ry6EQLpoZgRIP40gUnPrT7xLQmdYcVss')
    .then( (response) => response.json())
    .then((json) => setData(json))
    .catch( (err) =>{
      console.log(err);
    })
    }, [])

    return(
        <>
       <strong><h1 className='text-center mt-3'>App Gallery</h1></strong>
        <div className="d-flex justify-contant-evenly align-item-center flex-wrap">
        {data.map((use) => 

              <div key={use.id}>

              <img src={use.urls.small} alt='images'/>
             
              
              </div>
            )}
</div>
        </>
    )
}



export default Gallery;