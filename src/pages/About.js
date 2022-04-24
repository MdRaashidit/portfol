import React from 'react'
// import aboutImg  from "../images/about.png";
import logo from "../images/back.jfif";
import '../CSS/About.css'

import { FaReact, FaNodeJs } from 'react-icons/fa';

import { DiJavascript1, DiMongodb, DiBootstrap, DiCss3, DiJava, DiHtml5 } from "react-icons/di";

import { TiBatteryCharge } from "react-icons/ti";

import { IoIosSchool } from "react-icons/io";

import textImg from "../images/aboutPage.jpg";

const About = () => {
  return (

    <div className='aboutpage' style={{
      backgroundImage: 'url(' + textImg + ')',
      backgroundSize: "cover",
      backgroundPosition: 'center',
      height: "90vh",
      width: "100%",
      color: "#f5f5f5",
      backgroundAttachment: "fixed",

    }}>
  <img src={logo} alt='logo' className="img-fluid" ></img>

      <div class="card">
        <div class="content">
          <div class="front">
            <h4 className='myname'>Md Raashid</h4>
            <h4 className='names'>Software Developer @Cognizant</h4>
          </div>
          <div class="back">
          <h5 className='mynames'>Skills <TiBatteryCharge/></h5> <h5><FaReact />  <FaNodeJs /> <DiJavascript1 /> <DiMongodb /> <DiBootstrap/> <DiHtml5/> <DiCss3/> <DiJava/></h5> <hr/>
          <h5>Education <IoIosSchool/></h5> <h5 className='edu'>National Institute of Science and Technology (2017-2021)</h5>
          </div>
        </div>
      </div>

    </div>



  )
}


export default About


{/* <div>
<img src={logo} alt='logo' className="img-fluid"></img>
 <h5>Skills <TiBatteryCharge/></h5> <h5><FaReact />  <FaNodeJs /> <DiJavascript1 /> <DiMongodb /> <DiBootstrap/> <DiHtml5/> <DiCss3/> <DiJava/></h5>
</div> */}

