import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
   <div className='app__wrapper_img app__wrapper_img-reverse'>
     <img src={images.chef} alt='chef'className='' />
   </div>
   <div className="app__wrapper_info">
     <SubHeading title='Chefs Word' />
     <h1 className="headtext__cormorant">
       What We Believe in
     </h1>
     <div className="app__chef-content">
       <div className="app__chef-content_quote">
         <img src={images.quote} alt='quote'/>
         <p className='p__opensans'>For nine years the management and staff of this location worked   </p>
       
       </div>
       <p className='p__opensans'>We wish to assure you all that our other locations on Freshwater Road, Topsail Road, Highland Drive, Commonwealth Ave. and Carbonear remain open to serve you </p>
     </div>
     <div className="app__chef-sign">
       <p>Kevin luo</p>
       <p className="p__opensans"> Chef & Founder</p>
         <img src={images.sign} alt="sing"/>
     </div>
   </div>
  </div>
);

export default Chef;
