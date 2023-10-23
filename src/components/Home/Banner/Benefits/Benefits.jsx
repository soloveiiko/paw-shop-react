import React from 'react';
import Icon from '@components/Base/Icon/Icon';
import { Star } from '@static/images/svg-icons/icons';

const benefitsList = [
  { id: 1, name: '<b>Unique </b>products', image: 'stars' },
  { id: 2, name: '<b>24/7 </b>support', image: 'support' },
  {
    id: 3,
    name: '<b>Free return </b> within 15 days',
    image: 'return',
  },
  { id: 4, name: '<b>Happy </b>pet', image: 'checkmark' },
];
const Benefits = () => {
  return (
    <div className="banner__benefits benefits">
      <ul className="benefits__list">
        {benefitsList.map((el) => (
          <li key={el.id} className="benefits__item">
            <Icon className="benefits__image" name={el.image} />
            <span
              className="benefits__text"
              dangerouslySetInnerHTML={{ __html: el.name }}
            />
          </li>
        ))}
      </ul>
      <Star />
    </div>
  );
};

export default Benefits;
