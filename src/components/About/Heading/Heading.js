import React from "react";


import './Heading.css';

import bg from '../../../assets/images/tech-heading/bg.png'


function Heading() {


  return (
    <section className="heading">
      <img className='heading__bg' src={bg} alt='bg'/>
      <h2 className="heading__title">The DRC digital asset</h2>
      <p className="heading__text">Individual investors are underexposed to the precious gems market because of its closed and unstructured nature. The DRC offers opportunities to invest in precious gems with a transparent market value. Up to this date, there are no open-source diamond price sources or indices to track the current value of diamonds. DCR allows investors to view the fixated price of the physical asset by providing them with GIA certifications,  The creation of such a token opens investment opportunities and hedging options</p>
    </section>
  );
}

export default Heading;
