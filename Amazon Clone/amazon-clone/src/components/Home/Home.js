import React from 'react';
import './Home.css';
import Product from '../Product/Product';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={2000}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
        >
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="amazon-banner"
          />
          <img
            className="home__image_large"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Fashion/Diwali-Wave3/TEASER/TopBanner/Revised/PC_top-banner._CB450572186_.jpg"
            alt="banner"
          />
          <img
            className="home__image_large"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/TVs/AugustART/central_teaser/revised/freedom_sale_teaser_page_PC_rec._CB439510861_._SL1280_FMjpg_.jpg"
            alt="banner"
          />
          <img
            className="home__image_large"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Fashion/AugART19/Teaser/GW/freedom_sale_teaser_page_PC_14._CB439497099_._SL1280_FMjpg_.jpg"
            alt="banner"
          />
          <img
            className="home__image_large"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Consumables/AugART/Headers/PC_rec_pantry._SL1280_FMpng_.png"
            alt="banner"
          />
        </Carousel>

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curver LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
