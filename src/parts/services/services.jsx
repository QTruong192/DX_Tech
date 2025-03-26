import React from "react";
import "./services.scss";
import arrow1 from "../../assets/images/arrow1.png";
import arrow2 from "../../assets/images/arrow2.png";
import service1 from "../../assets/images/service1.png";
import service2 from "../../assets/images/service2.png";
import service3 from "../../assets/images/service3.png";
import service4 from "../../assets/images/service4.png";
import service5 from "../../assets/images/service5.png";
import service6 from "../../assets/images/service6.png";
import cta from "../../assets/images/service7.png";
const Services = () => {
  return (
    <section className="box-container">
      <div className="title">
        <h2>Services</h2>
        <p>
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className="services-wrapper">
        <div className="service grey">
          <div className="service-content">
            <h3 className="service-title">
              <span>Search engine</span>
              <span>optimization</span>
            </h3>
            <div className="btn-service">
              <img className="arrow-img" src={arrow1} alt="" />
              <a href="">Learn more</a>
            </div>
          </div>
          <div className="wrapper-img">
            <img className="service-img" src={service1} alt="" />
          </div>
        </div>
        <div className="service green">
          <div className="service-content">
            <h3 className="service-title">
              <span>Search engine</span>
              <span>optimization</span>
            </h3>
            <div className="btn-service">
              <img className="arrow-img" src={arrow1} alt="" />
              <a href="">Learn more</a>
            </div>
          </div>
          <div className="wrapper-img">
            <img className="service-img" src={service2} alt="" />
          </div>
        </div>
        <div className="service black">
          <div className="service-content">
            <h3 className="service-title">
              <span>Search engine</span>
              <span>optimization</span>
            </h3>
            <div className="btn-service">
              <img className="arrow-img" src={arrow2} alt="" />
              <a href="">Learn more</a>
            </div>
          </div>
          <div className="wrapper-img">
            <img className="service-img" src={service3} alt="" />
          </div>
        </div>
        <div className="service grey">
          <div className="service-content">
            <h3 className="service-title">
              <span>Search engine</span>
              <span>optimization</span>
            </h3>
            <div className="btn-service">
              <img className="arrow-img" src={arrow1} alt="" />
              <a href="">Learn more</a>
            </div>
          </div>
          <div className="wrapper-img">
            <img className="service-img" src={service4} alt="" />
          </div>
        </div>
        <div className="service green">
          <div className="service-content">
            <h3 className="service-title">
              <span>Search engine</span>
              <span>optimization</span>
            </h3>
            <div className="btn-service">
              <img className="arrow-img" src={arrow1} alt="" />
              <a href="">Learn more</a>
            </div>
          </div>
          <div className="wrapper-img">
            <img className="service-img" src={service5} alt="" />
          </div>
        </div>
        <div className="service black">
          <div className="service-content">
            <h3 className="service-title">
              <span>Search engine</span>
              <span>optimization</span>
            </h3>
            <div className="btn-service">
              <img className="arrow-img" src={arrow2} alt="" />
              <a href="">Learn more</a>
            </div>
          </div>
          <div className="wrapper-img">
            <img className="service-img" src={service6} alt="" />
          </div>
        </div>
      </div>
      <div className="cta-wrapper">
        <div className="cta-content">
          <h3>Let’s make things happen</h3>
          <p>
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button>Get your free proposal</button>
        </div>
        <img className="cta-img" src={cta} alt="" />
      </div>
    </section>
  );
};

export default Services;
