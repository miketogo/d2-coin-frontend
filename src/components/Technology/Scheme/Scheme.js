import React from "react";


import './Scheme.css';

import scheme from '../../../assets/images/scheme/scheme.png'


function Scheme() {


    return (
        <section className="scheme">
            <h2 className="scheme__title">Aggregate Transactions</h2>
            <p className="scheme__text">Aggregate transactions merge multiple transactions into one, allowing trustless swaps,
                and other advanced logic. Diamond Coin Reserve does this by generating a one-time disposable smart
                contract. When all involved accounts have cosigned the AggregateTransaction, all the inner transactions
                are executed at the same time. An AggregateTransaction is bonded when it requires signatures from other participants.
                Once an aggregate bonded is announced, it reaches partial state—where it can live up to 2 days.</p>
            <img className="scheme__img" src={scheme} alt="scheme" />
        </section>
    );
}

export default Scheme;
