import React from 'react';
import './Services.css';
const Services = () => {
    return (
      
<div id="services">
<div class="container">
    <h1 class="sub-title">My Services</h1>
    <div class="services-list">
         <div>
            <i class="fa-solid fa-code"></i>
            <h2>Web Design</h2>
            <p>I design websites. I have designed Wix's website.</p>
            <a href="https://es.wix.com/" target="_blank">Learn More</a>
         </div>

         <div>
            <i class="fa-solid fa-crop"></i>
            <h2>UI/UX Design</h2>
            <p>I'm a pro User Experience Designer. I helped Adobe desing their website</p>
            <a href="https://www.adobe.com/" target="_blank">Learn More</a>
         </div>

         <div>
            <i class="fa-brands fa-apple"></i>
            <h2>IOS App Design</h2>
            <p>I have made tons of IOS Apps, I can help you design your IOS app.</p>
            <a href="https://www.apple.com/es/app-store/" target="_blank">Learn More</a>
         </div>
    </div>
</div>
</div>
    );
  };
  
  export default Services;

