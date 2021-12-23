import React from "react";



import './AboutCoin.css';

import card1 from '../../../assets/images/about-coin/card1.png'
import card2 from '../../../assets/images/about-coin/card2.png'
import card3 from '../../../assets/images/about-coin/card3.png'
import card4 from '../../../assets/images/about-coin/card4.png'

import bg from '../../../assets/images/about-coin/bg.png'

function AboutCoin() {


  return (
    <section className="about-coin">
       <img className="about-coin__card-bg" src={bg} alt='card' />
      <h2 className="about-coin__title">What is Diamond Coin Reserve (DCR)?</h2>
      <div className="about-coin__cards">
        <div className="about-coin__card">
          <img className="about-coin__card-img" src={card1} alt='card' />
          <h3 className="about-coin__card-title">Stable coin function</h3>
          <p  className="about-coin__card-text">A stable-coin function, which limits volatility to the ongoing fluctuations of the international spot gold price, by implementing constant market making services across all trading platforms (in addition to an actual commodity unpinning of the digital asset</p>
        </div>
        <div className="about-coin__card">
          <img className="about-coin__card-img" src={card2} alt='card' />
          <h3 className="about-coin__card-title">10% Miner’s Rate of Return</h3>
          <p  className="about-coin__card-text">The mining capacity for DCR coin holders who participate in the network is directly proportionate to the number of coins that are held and the maturity of those coins. A miner’s rate of return is up to 10% p.a compounded, depending on a variety of factors including node stability, network conditions, etc.</p>
        </div>
      </div>
      <div className="about-coin__cards">
        <div className="about-coin__card">
          <img className="about-coin__card-img" src={card3} alt='card' />
          <h3 className="about-coin__card-title">Unique use of blockchain’s mining function</h3>
          <p  className="about-coin__card-text">This creates the self sustaining distributed ledger, thus removing the need for intermediaries in validating transactions. Diamond Coin Reserve rewards DCR holders for staking their coins and contributing to the network by validating transactions and providing another point of decentralisation.</p>
        </div>
        <div className="about-coin__card">
          <img className="about-coin__card-img" src={card4} alt='card' />
          <h3 className="about-coin__card-title">Contributing to business development of tokens</h3>
          <p  className="about-coin__card-text">Digital assets that are built on this network will have to utilise the core DCR digital asset as gas for transactions, thus driving utility demand for the core blockchain DCR. However unlike Ethereum, the DCR network also provides business development services to the onboarding tokens, such as priority discounted listings on prominent digital asset exchanges.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutCoin;
