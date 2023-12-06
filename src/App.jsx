import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import img1 from "./assets/img-1.jpg";
import img2 from "./assets/img-2.jpg";
import cardImg1 from "./assets/card-img-1.webp";
import cardImg2 from "./assets/card-img-2.webp";
import nandini from "./assets/nandiniMaam.png";
import sumanth from "./assets/sumanthsir.jpg";

import "./App.css";
import "./resp.css";
const App = () => {
  useEffect(() => {
    let locoScroll;
    function loco() {
      gsap.registerPlugin(ScrollTrigger);
      locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true,
      });
      locoScroll.on("scroll", ScrollTrigger.update);
      ScrollTrigger.scrollerProxy(".main", {
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
        pinType: document.querySelector(".main").style.transform
          ? "transform"
          : "fixed",
      });
      ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
      ScrollTrigger.refresh();
    }
    loco();

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        if(!(this.getAttribute("href") == '/internship')){
          e.preventDefault();
        locoScroll.scrollTo(
          document.querySelector(`${this.getAttribute("href")}`),
          "-30"
        )
        }
      });
    });
    if (window.innerWidth > 1000) {
      const tl = new gsap.timeline({
        scrollTrigger: {
          trigger: ".section--1",
          scroller: ".main",
          start: "80% 0%",
          end: "top 10%",
          scrub: true,
        },
      });
      tl
        .to(".hidden-navbar", {
          top: "0%",
          left: "0%",
          ease: Expo.easeInOut,
          duration: 1,
          opacity: 1,
        })
      const tl2 = gsap.timeline({
        scrollTrigger: {
          scroller: ".main",
          trigger: ".section--2",
          start: "top 50%",
          end: "120% bottom",
          scrub: true
        }
      })
      tl2
        .from(".even", {
          opacity: "0",
          stagger: 4,
          duration: 2,
          transform: "translateX(-10%)",
          ease: Expo.easeInOut,
        }, 's')
        .from(".odd", {
          opacity: "0",
          delay: 1,
          duration: 2,
          transform: "translateX(10%)",
          ease: Expo.easeInOut,
        }, 's')
      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: '.section--2',
          scroller: ".main",
          start: "120% 50%",
          end: "172% bottom",
          scrub: true,
          ease: Power3,
        }
      })
      tl3
        .from('.section--3', {
          opacity: 0,
          top: "50%"
        })
        .from('.left', {
          transform: "translateX(-10%)",
          opacity: 0,
        }, 's')
        .from('.right', {
          transform: "translateX(10%)",
          opacity: 0,
        }, 's')

      const tl4 = gsap.timeline({
        scrollTrigger: {
          scroller: ".main",
          trigger: ".section--4",
          start: "top 50%",
          end: "70% bottom",
          scrub: 2
        }
      })
      tl4
        .from('.section--4 h1', {
          opacity: 0
        })
        .from('.about h2', {
          opacity: 0
        })
        .from('.about p', {
          opacity: 0
        })
        .from('.co-founders', {
          opacity: 0
        })
        .from('.co-founder', {
          opacity: 0,
          transform: "translateY(30px)"
        })



    }
    const tl = gsap.timeline({});
    tl
      .from('#section-1 h1', {
        transform: "translate(-200%)",
        opacity: 0,
        ease: Power3,
        duration: 1.5
      }, "a")
      .from('#section-1 img', {
        transform: "translate(200%)",
        opacity: 0,
        ease: Power3,
        duration: 1.5
      }, "a")
      .from('.navbar ul li', {
        transform: "translateY(-300%)",
        stagger: 0.2
      }, "a")


  });


  return (
    <>
      <nav className="hidden-navbar">
        <ul>
          <li>
            <a href="#section-1">HOME</a>
          </li>
          <li>
            <a href="#section-2">INNOVATIONS</a>
          </li>
          <li>
            <a href="#section-3">ABOUT</a>
          </li>
        </ul>
      </nav>
      <div className="main">
        <Navbar internship = {false} />
        <section id="section-1" className="section--1">
          <h1>
            '' Enhancing Agriculture, Elevating Livestock: <span><div className="highlight"></div>LNS FarmerInfo</span> <br /> Where Cattle Well-Being Takes Center Stage in the Future of Farming. ''
          </h1>
          <img src={img1} alt="" />
        </section>
        <section className="section--2">
          <div className="card even">
            <img src={cardImg1} alt="" />
            <div>
              <h1>Caring for Farmers and Livestock</h1>
              <p>
                Rooted in love for the earth and its caretakers, we prioritise
                the well-being of both farmers and their farm animals.
              </p>
            </div>
          </div>
          <div className="card odd">
            <img src={cardImg2} alt="" />
            <div>
              <h1>Pioneering the Future of Agriculture</h1>
              <p>
                Our dedication to innovation steers us towards new approaches,
                transforming the agricultural world for the better.
              </p>
            </div>
          </div>
          <div className="card even">
            <img src={img2} className="img-2" alt="" />
            <div>
              <h1>Recognition</h1>
              <p>
                Acknowledged by NaaVIC India, our efforts to revolutionize
                agriculture and livestock welfare have not only made waves, but
                have galvanized a new generation of farming practices.
              </p>
            </div>
          </div>
        </section>
        <section id="section-2" className="section--3">
          <h1>Innovations</h1>
          <div className="product left">
            <h1>DAIRY FRIEND</h1>
            <img
              src="https://images.unsplash.com/photo-1561043394-9f7d16d9ae37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
              alt=""
            />
            <p>
            Unlock the power of instant blood sample analysis with DairyFriend. Our app empowers veterinarians to predict disease possibilities swiftly, facilitating early intervention and healthier cattle. Join us in revolutionizing livestock care, one scan at a time.
            it predicts cattle health, enabling early disease detection. Revolutionize livestock care with precision and speed.
            </p>
            <a href="#">Learn more</a>
          </div>
          <div className="product right">
            <h1>PLASTIC COW</h1>
            <img
              src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"
              alt=""
            />
            <p>
            In the realm of responsible farming, PlasticCow emerges as a sentinel for the well-being of your cattle. It harnesses the might of artificial intelligence and machine learning, ever vigilant against the unseen menace of plastic ingestion. With real-time monitoring, PlasticCow promptly detects instances where a cow may attempt to ingest plastic or foreign objects. Timely prevention takes precedence, allowing swift action to protect your livestock's health. This innovative device integrates seamlessly into your cattle management routine, offering valuable insights for your herd's safety.
            </p>
            <a href="#">Learn more</a>
          </div>
        </section>
        <section id="section-3" className="section--4">
          <h1>About - Us</h1>
          <div className="about">
            <h2>
              Welcome to LNS Farmer Info LLP - Pioneering Agriculture and Cattle
              Welfare, Recognized by NaaVIC India
            </h2>
            <p>
              LNS Farmer Info LLP is an agricultural and livestock-centric
              enterprise founded in 2021 by the visionary duo, Dr. C Nandini and
              Mr. Shiva Sumanth Reddy. Rooted in a profound love for the land
              and its caretakers, we are dedicated to enhancing the well-being
              of farmers and their cherished livestock companions. Our journey
              is marked by innovation and compassion, driven by a mission to
              redefine modern farming practices. We are proud to announce that
              we have been officially recognized by the National Association for
              the Advancement of Veterinary Informatics and Computational
              (NAAVIC) India for our exceptional contributions to agriculture
              and livestock welfare.
            </p>
          </div>
          <div className="line"></div>
          <br />
          <br />
          <br />
          <div className="co-founders">
            <h1>Co-Founders</h1>
            <div className="container">
              <div className="co-founder">
                <img src={nandini} alt="" />
                <h2>Dr. C Nandini</h2>
                <p>Vice-Principal | HOD CSE-AI, DSATM</p>
                <div className="line"></div>
                <p>
                  At LNS FarmerInfo LLP, we stand united for sharing a vision of agricultural transformation. Our journey is guided by the belief that knowledge, dedication, and cooperation can cultivate prosperity in the farming community. Together, we plow the fields of opportunity, nurturing growth and sustainability.
                </p>
              </div>
              <div className="co-founder">
                <img src={sumanth} alt="" />
                <h2>Shiva Sumanth Reddy</h2>
                <p>Asst. Professor, Dept. of CSE,DSATM</p>
                <div className="line"></div>
                <p>
                From our humble beginnings, we've always believed that innovation and passion can transform the world. At LNS FarmerInfo LLP, we are driven by a deep commitment to empower farmers with cutting-edge technology and solutions. Together, we sow the seeds of progress and reap the harvest of a brighter future.
                </p>
              </div>
            </div>
          </div>
          <div className="team">
            <h2>Our Team</h2>
            <div className="team-member">
              <h3>
                - <span>Vinayak Nawdhar</span> | Developer |
                vinayaknawdhar003@gmail.com
              </h3>
              <h3>
                - <span>Mr. Chandra Sekhar reddy</span> | Accounts officer |
                lnsfarmerinfor@gmail.com
              </h3>
              <h3>
                - <span>Mohan Raju N</span> | Technical Programmer |
                nmr1762002@gmail.com
              </h3>
              <h3>
                - <span>Samarth Srinivas</span> | Technical Programmer |
                samarthraju2002@gmail.com
              </h3>
              <h3>
                - <span>Sanjana Srinivas</span> | Technical Programmer |
                srinivassanjana1204@gmail.com
              </h3>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    </>
  );
};

export default App;
