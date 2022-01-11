import React from "react";


import './Network.css';

import card1 from '../../../assets/images/network/card1.png'
import card2 from '../../../assets/images/network/card2.png'
import card3 from '../../../assets/images/network/card3.png'
import card4 from '../../../assets/images/network/card4.png'
import card5 from '../../../assets/images/network/card5.png'
import card6 from '../../../assets/images/network/card6.png'

import bg from '../../../assets/images/network/bg.png'

const cards = [
    {
        photo: card1,
        title: 'Hybrid Chain',
        text: 'Designed for interoperability, users can preserve a permission ecosystem in a private chain and communicate freely with the public chain. It gives greater control over transaction fees, custody of sensitive data, and compatibility with existing company networks.',

    },
    {
        photo: card2,
        title: 'Enterprise Grade Security',
        text: 'Robust, built-in, and tested security features help reduce risks, i.e., from bespoke solutions. A plug-in framework makes it more resilient to human error and network attacks.',

    },
    {
        photo: card3,
        title: 'Account & Token Restrictions',
        text: 'Tokens and other assets can easily be restricted from any account that meets determined criteria. It lets you easily create regulatory-compliant assets (such as financial products), IDs, and non-transferable votes.',

    },
    {
        photo: card4,
        title: 'Interoperability',
        text: 'The network is interoperable to allow support of almost any business requirement. APIs ensure seamless integration with existing enterprise systems and processes and other networks and blockchains (i.e., DDK platform).',

    },
    {
        photo: card5,
        title: 'Multi-Level Multi-Signature',
        text: 'Users can create multi-level, multi-signature accounts allowing more complex account set-ups. It enables use cases like account recovery, anti-fraud monitoring, and ordered multi-stage transaction approvals.',

    },
    {
        photo: card6,
        title: 'Aggregate Transactions',
        text: 'The platform can merge multiple transaction Accounts into one by generating a single-use, disposable smart contract. The merging of transactions allows for trustless swaps, paying fees on behalf of a user, escrowed transactions, and many other easily configured business uses.',

    },
]


function Network() {


    return (
        <section className="network">
            <img className='network__bg' src={bg} alt='bg' />
            <h2 className="network__title">Network features</h2>
            <div className="network__cards">
                {
                    cards.map((item, i) => (
                        <div className="network__card" key={`card${i}`}>
                            <img className="network__card-photo" src={item.photo} alt="card_photo" />
                            <h3 className="network__card-title">{item.title}</h3>
                            <p className="network__card-text">{item.text}</p>
                        </div>
                    ))
                }


            </div>
        </section>
    );
}

export default Network;
