import React from "react";



import './Advantages.css';

// import blue from '../../../assets/images/adv/blue.png'
// import green from '../../../assets/images/adv/green.png'

import crypto from '../../../assets/images/adv/crypto.png'
import euro from '../../../assets/images/adv/euro.png'

function Advantages() {


  return (
    <section className="advantages">
      <div className="advantages__card advantages__card_blue">
        {/* <img className="advantages__card-bg" src={blue} alt='card' /> */}
        <h2 className="advantages__card-title">The DCR alliance platform</h2>
        <p className="advantages__card-text">Swap and stake all major cryptos (DCR, BTC, ETH) and fiat</p>
        <img className="advantages__card-img" src={crypto} alt='coins' />
        <a target="_blank" rel="noreferrer" href="/#" className="advantages__card-link">
          Start here
        </a>
      </div>
      <div className="advantages__card advantages__card_green">
        {/* <img className="advantages__card-bg" src={green} alt='card' /> */}
        <h2 className="advantages__card-title">The DCR fiat platform</h2>
        <p className="advantages__card-text">Buy &#38; convert crypto to fiat and visa versa </p>
        <img className="advantages__card-img" src={euro} alt='euro' />
        <a target="_blank" rel="noreferrer" href="/#" className="advantages__card-link">
          Start here
        </a>
      </div>
    </section>
  );
}

export default Advantages;
