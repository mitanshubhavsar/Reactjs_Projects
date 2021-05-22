import React from 'react';
import './Checkout.css';
import Subtotal from '../Subtotal/Subtotal';
import { useStateValue } from '../../ContextAPI/StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import FlipMove from 'react-flip-move';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={2000}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
        >
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt="ad-banner"
          />
          <img
            className="checkout__ad"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonDevices/AugART/devices_PC._SL1280_FMjpg_.jpg"
            alt="ad-banner"
          />
        </Carousel>

        <div>
          <h3>{user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>
          <FlipMove
            enterAnimation="accordionVertical"
            leaveAnimation="accordionVertical"
          >
            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </FlipMove>
          <img
            className="checkout__adForStart"
            src="https://m.media-amazon.com/images/G/31/INAssociates/2016/June/AIP_GetStarted._CB459521907_._SL1280_FMjpg_.jpg"
            alt="ad-banner"
          />
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
