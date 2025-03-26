import React from "react";
import "./studies.scss";
import arrow3 from "../../assets/images/arrow3.png";
const Studies = () => {
  return (
    <section className="box-container">
      <div className="title">
        <h2>Case Studies</h2>
        <p>
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>
      <div className="studies-wrapper">
      <div className="studies">
          <p>
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <div className="content-holder">
            <a>Learn more</a> <img className="studies-img" src={arrow3} alt="" />
          </div>
        </div>
        <div className="studies">
          <p>
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <div className="content-holder">
            <a>Learn more</a> <img className="studies-img" src={arrow3} alt="" />
          </div>
        </div>
        <div className="studies">
          <p>
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <div className="content-holder">
            <a>Learn more</a> <img className="studies-img" src={arrow3} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Studies;
