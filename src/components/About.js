import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './style.css'

class About extends Component {
  render() {
    return (
      <div className='about-section'>
        <div className='about-content'>
          <h2>I am <span>Divya Singaram</span></h2>
          <p>Fresher With a passion for building innovative solutions and about taking risks to solve them by communicating and sharing experience and knowledge to become a Software Developer</p>
          <div>
            <button className='projects-btn'>
                <Link to="/project">Projects</Link>
            </button>
            <button className='linked-in-btn'>LinkedIn</button>
          </div>
        </div>
        <div>
          <img className='about-img' src="https://img.freepik.com/premium-vector/portrait-elegant-business-woman-with-arms-crossed-isolated-vector-illustration_126609-502.jpg?w=740" alt="about-img"/>
        </div>
      </div>
    );
  }
}

export default About;
