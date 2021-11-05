import React from 'react'

import "../Styles/blogs.css";



function theorythree() {


    return (
        <div>
            <div className="three"><h1 className="page-header"></h1>Technical Reflection</div>




            <div className="intro">
                <div className="h-entry" >


                <p> The goal for the technical aspect of the website is to have the website be as responsive as possible. Having a responsive Nav bar and content is important because it allows for a larger audience of people to access and consume the websites content. If it is limited to laptop users only and cannot accommodate for mobile users, the website will be at a severe disadvantage as most people carry their phones around with them everywhere and will likely read the blogs on the website on their phone. Therefore, the biggest concern is to ensure the blogs are readable on as many screens as possible. My next greatest concern is having the navigation be responsive as without an intuitive and easy to use navigation system the user will get frustrated and leave the website. With creating a responsive website as my main goal, all the elements on the website are responsive and the website will smoothly operate on multiple devices. I am still currently working on making the images more responsive as they do not scale accurately enough from device to device. </p> 
                        <p>Additionally it is important to still adhere to conventions like having metatags and alternate titles for pictures to ensure screen readers can describe the image. I used the <i>Web accessibility in Mind</i> guide to title my alternative tags approprietly. Read the guide here <a class="here" href="//webaim.org/techniques/alttext/">here </a></p>
                        <p>Currently the website does not use any ARIA tags. Therefor, the goal for the future of the website on a technical level will include integrating ARIA tags to create a more inclusive website.</p>
                        



                </div>

            </div>
        </div>




    );
}

export default theorythree;
