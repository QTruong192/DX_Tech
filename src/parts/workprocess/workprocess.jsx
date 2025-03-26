import React from "react";
import { useState } from "react";
import dash from "../../assets/images/dashBtn.png";
import plus from "../../assets/images/plusBtn.png";
import "./workprocess.scss";

const WorkProcess = () => {
  const steps = [
    {
      id: 1,
      title: "Consultation",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: 2,
      title: "Research and Strategy Development",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: 3,
      title: "Implementation",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: 4,
      title: "Monitoring and Optimization",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: 5,
      title: "Reporting and Communication",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: 6,
      title: "Continual Improvement",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
  ];
  const [openStep, setOpenStep] = useState(1);

  const toggleStep = (id) => {
    setOpenStep(openStep === id ? null : id);
  };
  return (
    <section className="box-container">
      <div className="title">
        <h2>Our Working Process</h2>
        <p>
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>
      <div className="process-wrapper">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`step ${openStep === step.id ? "active" : ""}`}
          >
            <div className="work-header" onClick={() => toggleStep(step.id)}>
              <div className="step-title">
                <h2>{step.id.toString().padStart(2, "0")}</h2>
                <h4>{step.title}</h4>
              </div>
              <span className="icon">
                {openStep === step.id ? (
                  <img className="btn-expand" src={dash} alt="" />
                ) : (
                  <img className="btn-expand" src={plus} alt="" />
                )}
              </span>
            </div>
            {openStep === step.id && step.content && (
              <div className="content">{step.content}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkProcess;
