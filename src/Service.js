import React from 'react';
import './Service.css';
import CodeIcon from '@material-ui/icons/Code';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import ComputerIcon from '@material-ui/icons/Computer';
import ExplicitIcon from '@material-ui/icons/Explicit';
const  Service = () => {
 
 
return (
<>
<div className="service">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10 col-11 mx-auto">
            <div className="mt-2 mb-5 text-center">
              <h1 className="service_heading mt-5">OUR SERVICES</h1>
            </div>
            <div className="row ">
        
              <div className="col-md-6 mt-md-2 m-0">
                <span className="badge-info badge rounded-pill px-3 py-1 my-2 font-weight-light">
                  What We Do
                </span>
                <h3>Awesome with Extra Ordinary Flexibility Features</h3>
                <h6 className="font-weight-light subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
               
                <div className="row mt-md-5">
                  <div className="col-md-6 mt-3 aj">
<CodeIcon fontSize="large"/>
                    <h6 className="font-weight-medium">Web Development</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                  </div>
                  <div className="col-md-6 mt-3 aj">
                  <ExplicitIcon fontSize="large"/>
                    <h6 className="font-weight-medium">E-Commerce Website</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                  </div>
                  <div className="col-md-6 mt-3 aj">
                  <ComputerIcon fontSize="large"/>
                    <h6 className="font-weight-medium">Digital Marketing</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                  </div>
                  <div className="col-md-6 mt-3 aj">
                  <DeveloperModeIcon fontSize="large"/>
                    <h6 className="font-weight-medium">App Development</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                  </div>

                </div>
              </div>
    
              <div className="col-md-6 mt-md-5  ml-5">
                <div className="row wrap-service">
                 
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-12 img-hover mb-5 mt-5">
                        <img alt="ux" className="rounded img-shadow img-fluid" src="https://bit.ly/2Wb8UkT" />
                      </div>
                      <div className="col-md-12 img-hover mb-5">
                        <img alt="ux" className="rounded img-shadow img-fluid" src="https://bit.ly/3CZbDPn" />
                      </div>
                    </div>
                  </div>
                 
                  <div className="col-md-6 uneven-box"></div>
                  <div className="col-md-12 img-hover mb-5">
                        <img alt="ux" className="rounded img-shadow img-fluid" src="https://bit.ly/3z3JfcH" />
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     <div className="container mt-8">
       <h1 className="service_heading text-center">OUR Projects</h1>
       <ul className="project mt-8">
         <li><a href="https://school21site.blogspot.com/?m=1">Academic Site</a></li>
         <li><a href="https://apnischoolsite.blogspot.com/?m=1">School Site</a></li>
         <li><a href="https://iplpointstable-2020.blogspot.com/?m=1"> IPl Point Table Site</a></li>
         <li><a href="https://newcbsesyllabus.blogspot.com/?m=1">Syllabus</a></li>
         <li><a href="https://insightscurrentaffairs2020.blogspot.com/?m=1">Current Affairs</a></li>
         
       </ul>
     </div>
    
     
</>)
};

export default Service;