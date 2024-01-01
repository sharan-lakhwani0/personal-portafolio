import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div id="contact">
        <div className="container">
            <div className="row">
                <div className="contact-left">
                    <h1 className="sub-title">Contact Me</h1>
                    <p><i className="fa-solid fa-paper-plane"></i>slt00@iesemilidarder.com</p>
                    <p><i className="fa-solid fa-mobile"></i>+34680931424</p>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://twitter.com/?lang=es" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                        <a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://es.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    </div>

                    <a href="images/EN-CV_2022_SHARAN_LAKHWANI_TEJWANI.pdf" download className="btn btn2">Download CV</a>
                </div>
                <div className="contact-right">
                    <form>

                        <input type="text" name="Name" placeholder="Your Name" required />

                        <input type="email" name="email" placeholder="Your Email"required />

                        <textarea name="Message" rows="6" placeholder="Your Message"></textarea>

                        <button type="submit" className="btn btn2">Submit</button>


                    </form>
                </div>
            </div>
        </div>
        <div className="copyright">
            <p>Copyright © Sharan. Made with <i className="fa-solid fa-heart"></i> by Sharan</p>
        </div>
    </div>
    );
  };
  
  export default Contact;