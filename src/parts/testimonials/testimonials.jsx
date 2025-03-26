import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonials.scss";
import dotImage from "../../assets/images/dot.png";
import dotActiveImage from "../../assets/images/dotActive.png";

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      name: "John Smith",
      role: "Marketing Director at XYZ Corp",
    },
    {
      id: 2,
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      name: "John Smith",
      role: "Marketing Director at XYZ Corp",
    },
    {
      id: 3,
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      name: "John Smith",
      role: "Marketing Director at XYZ Corp",
    },
    {
      id: 4,
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      name: "John Smith",
      role: "Marketing Director at XYZ Corp",
    },
    {
      id: 5,
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      name: "John Smith",
      role: "Marketing Director at XYZ Corp",
    },
  ];

  const CustomDot = ({ onClick, active }) => {
    return (
      <div className="custom-dot" onClick={onClick}>
        <img src={active ? dotActiveImage : dotImage} alt="dot" />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    beforeChange: (current, next) => setActiveSlide(next),
    customPaging: (i) => <CustomDot active={i === activeSlide} />,
    appendDots: (dots) => (
      <div className="navigation-wrapper">
        <div className="dots-container">{dots}</div>
      </div>
    ),
  };

  return (
    <section className="box-container">
      <div className="title">
        <h2>Testimonials</h2>
        <p>
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>
      <div className="testimonials">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div className="testimonial-container" key={testimonial.id}>
              <div className="testimonial-card">
                <p className="testimonial-text">{testimonial.text}</p>
              </div>
              <div className="testimonial-info">
                <p className="testimonial-name">{testimonial.name}</p>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
