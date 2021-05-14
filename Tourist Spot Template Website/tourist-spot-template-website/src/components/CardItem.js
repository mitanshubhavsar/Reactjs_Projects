import React from 'react';
import { Link } from 'react-router-dom';

function CardItem() {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link">
          <figure className="cards__item__pic-wrap">
            <img className="cards__item__img" src="" alt="Travel Image" />
            <div className="cards__item__info">
              <h5 className="cards__item__text"></h5>
            </div>
          </figure>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
