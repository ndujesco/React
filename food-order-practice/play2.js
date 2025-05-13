import React, { useContext } from "react";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";
// import Animate from 'animate.css-react';
import "animate.css/animate.compat.css"; // Import Animate.css styles
import uprightarrow from "../images/uprightarrow.png";
import homeSegment4arrow from "../images/homeSegment4arrow.png";
import serviceshero from "../images/serviceshero.jpg";

import { Link } from "react-router-dom";
import { SectionsContext } from "../store/section-context";
import Stats from "../components/stats";

function Services() {
  const iconClasses = [
    "fa-heart-circle-check",
    "fa-address-card",
    "fa-people-group",
    "fa-star",
    "fa-circle-check",
  ];
  const { services } = useContext(SectionsContext);
  const { meta, hero, summary, careServices, agencyService, staff } = services;
  return (
    <div>
      <div
        className="aboutheroreplacement p-md-5 p-4"
        style={{
          backgroundImage: `url(${hero.uri || serviceshero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          backgroundColor: "rgb(0 0 0 / 70%)",
        }}
      >
        <div className="aboutheroreplacementbox">
          <div className="lhsheading">
            {" "}
            <span className="thick-dot"></span>{" "}
            <span className="ps-1">{hero.headline}</span>{" "}
          </div>
          <div className="lhssubtitle pb-1 pt-3">{hero.subheadline}</div>
        </div>
      </div>

      <div
        className="aboutsegment1 p-4 p-md-5"
        dangerouslySetInnerHTML={{ __html: summary }}
      ></div>
      <div className="horizontal-border-line pt-5"></div>

      {/* --------------SERVICES SEGMENT 2-------------- */}

      <Stats />
      <div className="greybg">
        {/* --------------SERVICES SEGMENT 2--------------   */}
        <div className="servicessegment2 p-4 p-md-5">
          <div className="d-flex">
            <div className="homeSegment1aboutusline"></div>
            <div className="homeSegment1aboutus ps-2">
              {careServices.title}{" "}
            </div>
          </div>
          <div className="d-md-flex homeSegment6container">
            <div className="homeSegment3intro py-3">{careServices.intro}</div>
            <div className="pt-3 pt-md-5">
              <Link
                className=" py-3 testimonialbtn abouttestimonial"
                to={`mailto:admin@brookshealthandcare.com`}
              >
                <span className="pe-2 ">Book Appointment</span>{" "}
                <img
                  src={uprightarrow}
                  alt="arrow"
                  className="homeSegment6testimoialarrow"
                />
              </Link>
            </div>
          </div>
          <div className="aboutsegment3container py-5 py-md-4">
            {careServices.items.map(({ title, description }, index) => (
              <ScrollAnimation
                key={index}
                className="aboutsegment3box"
                animateIn="bounceInUp"
                animationOut="fadeOut"
              >
                <div>
                  <i
                    className={`aboutsegment3icon fa-solid ${
                      iconClasses[index % iconClasses.length]
                    }`}
                  ></i>
                </div>
                <div className="aboutsegment3boxtitle py-3">{title}</div>
                <div className="aboutsegment3boxdesc">{description}</div>
              </ScrollAnimation>
            ))}
          </div>
        </div>

        {/* --------------SERVICES SEGMENT 3--------------   */}
        <div className="servicessegment2 p-4 p-md-5">
          <div className="d-flex">
            <div className="homeSegment1aboutusline"></div>
            <div className="homeSegment1aboutus ps-2">
              {agencyService.title}
            </div>
          </div>
          <div className="d-md-flex  homeSegment6container">
            <div className="homeSegment3intro py-3">{agencyService.intro}</div>
            <div className="pt-3 pt-md-5">
              <Link
                className=" py-3 testimonialbtn "
                to={`mailto:admin@brookshealthandcare.com`}
              >
                <span className="pe-2 ">Book Appointment</span>{" "}
                <img
                  src={uprightarrow}
                  alt="arrow"
                  className="homeSegment6testimoialarrow"
                />
              </Link>
            </div>
          </div>
          <div className="aboutsegment3container py-4">
            {agencyService.items.map(({ title, description }, index) => (
              <ScrollAnimation
                key={index} // Add a unique key for each ScrollAnimation
                className="aboutsegment3box"
                animateIn="bounceInUp"
                animationOut="fadeOut"
              >
                <div>
                  <i
                    className={`aboutsegment3icon fa-solid ${
                      iconClasses[index % iconClasses.length]
                    }`}
                  ></i>
                </div>
                <div className="aboutsegment3boxtitle py-3">{title}</div>
                <div className="aboutsegment3boxdesc">{description}</div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
        {/* --------------SERVICES SEGMENT 4--------------   */}
        <div className="servicessegment2 p-4 p-md-5">
          <div className="d-flex">
            <div className="homeSegment1aboutusline"></div>
            <div className="homeSegment1aboutus ps-2">TYPES OF STAFF </div>
          </div>
          <div className="d-md-flex homeSegment6container">
            <div className="homeSegment3intro py-3">
              Meet our diverse team of dedicated professionals.{" "}
            </div>
            <div className="pt-md-5 py-3">
              <Link
                className=" py-3 testimonialbtn "
                to={`mailto:admin@brookshealthandcare.com`}
              >
                <span className="pe-2 ">Book Appointment</span>{" "}
                <img
                  src={uprightarrow}
                  alt="arrow"
                  className="homeSegment6testimoialarrow"
                />
              </Link>
            </div>
          </div>
          <div className="aboutsegment3container py-4">
            <ScrollAnimation
              className="aboutsegment3box"
              animateIn="bounceInUp"
              animationOut="fadeOut"
            >
              <div>
                <i className="aboutsegment3icon fa-solid fa-heart-circle-check"></i>
              </div>
              <div className="aboutsegment3boxtitle py-3">
                Healthcare Assistant
              </div>
              <div className="aboutsegment3boxdesc">
                Assisting with activities of daily living and providing basic
                medical care under the supervision of a registered nurse.{" "}
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              className="aboutsegment3box"
              animateIn="bounceInUp"
              animationOut="fadeOut"
            >
              <div>
                <i className="fa-solid fa-people-group aboutsegment3icon"></i>
              </div>
              <div className="aboutsegment3boxtitle py-3">Nurses</div>
              <div className="aboutsegment3boxdesc">
                Providing specialized care and support for individuals with
                health conditions.{" "}
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              className="aboutsegment3box"
              animateIn="bounceInUp"
              animationOut="fadeOut"
            >
              <div>
                <i className="fa-solid aboutsegment3icon fa-address-card"></i>
              </div>
              <div className="aboutsegment3boxtitle py-3">Support Worker</div>
              <div className="aboutsegment3boxdesc">
                Offering emotional support, companionship, and assistance with
                daily tasks for individuals in need.{" "}
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* --------------HOME SEGMENT 4-------------- */}
        <div className="pb-5">
          <div className="homeSegment4 p-4 p-md-5">
            <div className="homeSegment4container p-4">
              <div>
                <div className="homeSegment4title">Brooks Health and Care</div>
                <div className="homeSegment4subtitle pt-2">
                  Let's Discuss Your Health Needs
                </div>
              </div>
              <Link
                to={`mailto: admin@brookshealthandcare.com?subject=Interested%20In%20Services&body=Hello!%20I'm%20interested%20in...`}
                className="homeSegment4contactUs"
              >
                Contact Us{" "}
                <img className="ps-2" src={homeSegment4arrow} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
