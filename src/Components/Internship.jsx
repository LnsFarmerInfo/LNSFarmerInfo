import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import close from '../assets/close.png'

const Internship = () => {

  useEffect(()=>{
    let locoScroll;
    function loco() {
      gsap.registerPlugin(ScrollTrigger);
      locoScroll = new LocomotiveScroll({
        el: document.querySelector(".internship"),
        smooth: true,
      });
      locoScroll.on("scroll", ScrollTrigger.update);
      ScrollTrigger.scrollerProxy(".internship", {
        scrollTop(value) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: document.querySelector(".internship").style.transform
          ? "transform"
          : "fixed",
      });
      ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
      ScrollTrigger.refresh();
    }
    loco();

    const closeBtn = document.querySelector('.close');
    const overlayEl = document.querySelector('.overlay');
    const internshipDiv = document.querySelector('.intership-form-div')
    closeBtn.addEventListener('click',function(){
      overlayEl.style.display = "none";
      internshipDiv.style.display = "none";
    })

    const applyBtn = document.querySelectorAll('.right-side button');
    applyBtn.forEach((btn) => {
      btn.addEventListener('click',function(){
        overlayEl.style.display = "block";
        internshipDiv.style.display = "flex";
      })
    })
  })

  return (
    <>
    <div className="overlay"></div>
    <div className="intership-form-div">
      <div className="close"><img src={close} alt="" /></div>
      <form action="" className='internship-form'>
        <div><input type="text" placeholder='your first name?' className='form-input' required/>
        <input type="text" className='form-input' placeholder='your last name?' required/></div>
        <select className='form-input' name="" id="" required>
          <option value="">Frontend Development</option>
          <option value="">Backend Development</option>
          <option value="">Machine Learning</option>
        </select>
        <input className='form-input' type="email" name="email" placeholder='your email address?' id="" />
        <input className='form-input' type="text" name="phone-number" placeholder='your Phone Number?' id="" />
        <input className='form-input' type="text" name="college-name" placeholder='your College name?' id="" />
        <input className='form-input' type="number" name="semester" placeholder='your Current Semester?' id="" max={8} min={1}/>
        <button type="submit">Apply</button>
      </form>
    </div>
    <div className="internship">
    <Navbar internship='true' />
      <div className='internship-container'>
        
        <div className="internship-card">
            <div className="image"><img src="https://i.ytimg.com/vi/MsnQ5uepIaE/maxresdefault.jpg" alt="" /></div>
            <div className="right-side">
              <h1>Front-end Development</h1>
              <h3>Bridging Imagination with User Interface Mastery!</h3>
              <p> In the realm of Front End Development, we're dedicated to shaping the user experience, pixel by pixel. Join our course cum internship program and unlock the art of creating visually stunning, user-friendly websites and applications. You'll master the latest web technologies, responsive design, and interactive user interfaces. Your journey begins here to make the web a more engaging, accessible, and beautiful place.</p>
              <button>Apply now </button>
            </div>
        </div>
        <div className="internship-card">
            <div className="image"><img src="https://plopdo.com/wp-content/uploads/2021/09/Backend-development.png" alt="" /></div>
            <div className="right-side">
              <h1>Backend-end Development</h1>
              <h3>Behind Every Great App, There's Back End Magic!</h3>
              <p>Dive into the world of Back End Development and discover the engine that drives innovation. Our course cum internship program will immerse you in the world of server-side technologies, databases, and application architecture. Learn how to build robust and efficient systems that power the digital world. Join us to become the backbone of cutting-edge applications and bring your ideas to life through the magic of code.</p>
              <button>Apply now </button>
            </div>
        </div>
        <div className="internship-card">
            <div className="image"><img src="https://www.fsm.ac.in/blog/wp-content/uploads/2022/08/ml-e1610553826718.jpg" alt="" /></div>
            <div className="right-side">
              <h1>machine learning</h1>
              <h3>Unleash the Power of AI Transforming Data to Insights!</h3>
              <p> Embark on a journey of discovery with our Machine Learning course cum internship opportunity. Here, you'll delve into the exciting universe of artificial intelligence and data science. Gain expertise in building predictive models, uncover hidden patterns, and develop intelligent solutions. Join us to harness the immense potential of AI and shape the future.</p>
              <button>Apply now </button>
            </div>
        </div>
      </div>
    <Footer/>
    </div>
    </>
  )
}

export default Internship