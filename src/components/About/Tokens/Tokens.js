import React from "react";


import './Tokens.css';

import tokens from '../../../assets/images/tokens/tokens.png'


function Tokens() {


  return (
    <section className="tokens">
     <img className="tokens__img" src={tokens} alt="tokens"/>
     <p className="tokens__text">Each individual DCR token represents 2 carats held in a vault in custody and will be capable of being fractionalized up to two decimal places (i.e. increments as small as 0.01 carats). Holders of DCR will be able to redeem their tokens for a physical diamond, subject to the payment of fees and minimum redemption requirements.</p>
    </section>
  );
}

export default Tokens;
