import React from 'react';
import { Checkmark, Return, Star, Support } from '@static/images/icons';

const benefitsList = [
  {
    id: 1,
    name: '<b>Unique </b>products',
    image: <Star className="benefits__image" />,
  },
  {
    id: 2,
    name: '<b>24/7 </b>support',
    image: <Support className="benefits__image" />,
  },
  {
    id: 3,
    name: '<b>Free return </b> within 15 days',
    image: <Return className="benefits__image" />,
  },
  {
    id: 4,
    name: '<b>Happy </b>pet',
    image: <Checkmark className="benefits__image" />,
  },
];
const Benefits = () => {
  return (
    <div className="banner__benefits benefits">
      <ul className="benefits__list">
        {benefitsList.map((el) => (
          <li key={el.id} className="benefits__item">
            {el.image}
            <span
              className="benefits__text"
              dangerouslySetInnerHTML={{ __html: el.name }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Benefits;
