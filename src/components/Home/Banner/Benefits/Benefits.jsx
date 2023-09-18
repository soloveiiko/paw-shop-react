import React from 'react';
import { icoCheckmark, icoReturn, icoStar, icoSupport } from '@static';
import Image from '@components/Base/Image/Image';

const benefitsList = [
  { id: 1, name: '<b>Unique </b>products', alt: 'Unique', image: icoStar },
  { id: 2, name: '<b>24/7 </b>support', alt: 'Support', image: icoSupport },
  { id: 3, name: '<b>Free return </b> within 15 days', alt: 'Free return', image: icoReturn },
  { id: 4, name: '<b>Happy </b>pet', alt: 'Happy pet', image: icoCheckmark },
];
const Benefits = () => {
  return (
    <div className="banner__benefits benefits">
      <ul className="benefits__list">
        {benefitsList.map((el) => (
          <li key={el.id} className="benefits__item">
            <Image className="benefits__image" src={el.image} width="30" height="30" loading="lazy" alt={el.alt} />
            <span className="benefits__text" dangerouslySetInnerHTML={{ __html: el.name }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Benefits;