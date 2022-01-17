import React from "react";


import './Heading.css';

import bg from '../../../assets/images/tech-heading/bg.png'


function Heading() {


  return (
    <section className="heading">
      <img className='heading__bg' src={bg} alt='bg'/>
      <h2 className="heading__title">How DCR works</h2>
      <p className="heading__text">DCR token provides a set of advanced features that enable users to explore blockchain use cases versatility</p>
    </section>
  );
}

export default Heading;
