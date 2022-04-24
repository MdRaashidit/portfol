import React from 'react'
import '../CSS/Home.css'
import logo  from "../images/back.jfif";
import {Container} from "react-bootstrap"

import { Typewriter } from 'react-simple-typewriter'

import Particles from 'react-tsparticles';

import textImg from "../images/about.jpg";

const Home = () => {
  return (
  
       <div className='homepage'  style={{
      backgroundImage: 'url(' + textImg + ')',
      backgroundSize: "cover",
      backgroundPosition:'center',
      height: "90vh",
      width: "100%",
      color: "#f5f5f5",
      backgroundAttachment: "fixed",
      
  }}>

     
      <div className='typewr'>


      <h1 style={{marginLeft:'700px'}}>I'am a 
        <span style={{color:'#FFC300', fontweight:'bold', marginLeft:'10px'}}>
          <Typewriter
          loop
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={100}
          words={['Developer', 'Designer', ]}
          />
        </span>
      </h1>
      </div>

    </div>
  )
}

export default Home