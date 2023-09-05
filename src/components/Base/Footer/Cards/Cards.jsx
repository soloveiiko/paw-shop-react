import React from 'react';
import { cardCheque, cardFondy, cardLiqpay, cardPayPal, cardWayForPay } from '@static';

const cardsList = [
  { id: 1, name: 'PayPal', image: cardPayPal },
  { id: 2, name: 'Fondy', image: cardFondy },
  { id: 3, name: 'Liqpay', image: cardLiqpay },
  { id: 4, name: 'Cheque', image: cardCheque },
  { id: 5, name: 'WayForPay', image: cardWayForPay },
];
const Cards = () => {
  return (
    <div className="footer__cards cards">
      <ul className="cards__list">
        {cardsList.map((card) => (
          <li key={card.id} className="cards__item">
            <img className="cards__image" src={card.image} alt={card.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cards;
