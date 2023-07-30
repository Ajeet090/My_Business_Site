import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css' ;
import Contact from './Contact'
const  Home = () => {
return (
<>
<div className="container">
  <section id="header" className="header">
    
            <div className="ajeet">
                <h1>Grow your bussiness with  <strong> Ajeet</strong>
        </h1>
        <h2 > We are team of telented developer making websites</h2>
        <div className="pt-4">
            <Link to="/contact" className="btn  btn-style btn-style-border pt-lg-2 pt-2">Get Started</Link>
        </div>
            </div>
            <div className="img">
          
          <img src="https://bit.ly/3iK6Pp8" class="img-float" alt="ajeet" width="340" />
            </div>
  </section>
  <br/>
  <br/>
  <h1 className='text-center mt-5 '><strong>Though of the Day</strong></h1>
  <div className="d-flex justify-content-center align-items-center flex-wrap">
     <div className="svgimg">
        <img src="https://shorturl.at/ivIS7" alt="" />
    </div>
     <div className="content">
    <p> <b>“Faith is the bird that feels the light and sings when the dawn is still dark.” – Rabindranath Tagore</b></p>
       <p><b>“Follow your bliss and the universe will open doors where there were only walls.” – Joseph Campbell</b></p>
        </div>

     </div>
<Contact/>
  </div>
</>
);
};

export default Home; 