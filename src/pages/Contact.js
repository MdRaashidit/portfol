import React from 'react'
import aboutImg  from "../images/contact.jpg";
import '../CSS/Contact.css'
import Particles from 'react-tsparticles';

const Contact = () => {
  return (
    <>
      <Particles
      id="tsparticles"
      options={{
       
        fpsLimit: 120,
        interactivity: {
          events: {
          
     
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
          
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "daa520",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 30,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "star",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />


    <section className="common-section our-services">
    <div className="container mb-5">
      <div className="row">
        <div>
          <img src={aboutImg} alt='logo' className="img-fluid"></img>
        </div>
        <div>
        <h5 className='head'>
                    <span className="simple"> Connect with Me</span><br></br><br></br>
                </h5>
               <div className="social-icons">
                        <a className="social-icon mx-3" href="https://www.linkedin.com/in/mdraashid/"><i className="fab fa-linkedin-in"></i></a>
                        <a className="social-icon mx-3" href="https://github.com/MdRaashidit"><i className="fab fa-github"></i></a>
                        <a className="social-icon mx-3" href="https://www.hackerrank.com/_mdraashid_"><i className="fab fa-hackerrank"></i></a>
                        <a className="social-icon mx-3" href="mailto:mdraashidit@gmail.com"><i className="fa fa-envelope"></i></a>
                    </div>
        </div>

   

      </div>
    </div>

  
  </section>
  </>
  )
}

export default Contact