import React from 'react'
import '../CSS/project.css'
import Particles from 'react-tsparticles';
export default function() {
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

      
    <div className='mycards'>

<div class="py-5">
    <div class="container">
      <div class="row hidden-md-up">
        <div class="col-md-4">
          <div class="card text-white bg-info">
            <div class="card-block">
              <h4 class="card-title">Pizza Delivery Application</h4> <br></br>
              <p class="card-text p-y-1">This Application Developed using MERN development in this user can login and order pizzas ✨</p>
              <a href="http://raashidpizza.herokuapp.com/" class="card-link">App Link</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card text-white bg-warning">
            <div class="card-block">
              <h4 class="card-title">Expenses Tracker</h4><br></br>
              <p class="card-text p-y-1">This Project is basically Developed Using Python (Django) in which you can add your Daily Expenses and Track your Total Investment, by just Creating account and Login into your Account ✨ </p>
              <a href="https://mdraashid1.pythonanywhere.com/accounts/login/?next=/" class="card-link">App Link</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card text-white bg-dark">
            <div class="card-block">
              <h4 class="card-title">KhataBook</h4><br></br>
              <p class="card-text p-y-1">This Project is Developed Using Python (Django) this is basically a KhataBook Designed for Personal use in which I can Add user and track the total amount which is Credited or Debited between the users ✨.</p>
              <a href="https://khatabook.pythonanywhere.com/" class="card-link">App Link</a>
            </div>
          </div>
        </div>
      </div>
          </div>
        </div>
      </div>
      </>
  )
}
