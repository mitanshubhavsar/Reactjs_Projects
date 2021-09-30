import React from 'react';
import './Product.css';
import './skeleton.css';
import img1 from '../../assets/images/page2_img1.jpg';
import img2 from '../../assets/images/page2_img2.jpg';
import img3 from '../../assets/images/page2_img3.jpg';
import img4 from '../../assets/images/page2_img4.jpg';
import img5 from '../../assets/images/page2_img5.jpg';
import img6 from '../../assets/images/page2_img6.jpg';
import img7 from '../../assets/images/page2_img7.jpg';
import img8 from '../../assets/images/page2_img8.jpg';

export default function Products() {
  return (
    <>
      <h1 className="products__heading">Our Products</h1>
      <div class="container_12">
        <div class="banners">
          <div class="grid_4">
            <div class="banner">
              <img src={img1} alt="" />
              <div class="label">
                <div class="title">NEW ZEALAND</div>
                <div class="price">
                  from<span>$ 1.200</span>
                </div>
                <a href="#abc">LEARN MORE</a>
              </div>
            </div>
          </div>
          <div class="grid_4">
            <div class="banner">
              <img src={img2} alt="" />
              <div class="label">
                <div class="title">GOA</div>
                <div class="price">
                  from<span>$ 1.500</span>
                </div>
                <a href="#abc">LEARN MORE</a>
              </div>
            </div>
          </div>
          <div class="grid_4">
            <div class="banner">
              <img src={img3} alt="" />
              <div class="label">
                <div class="title">FRANCE</div>
                <div class="price">
                  from<span>$ 1.600</span>
                </div>
                <a href="#abc">LEARN MORE</a>
              </div>
            </div>
          </div>
          <div class="clear"></div>
          <div class="grid_4">
            <div class="banner">
              <img src={img4} alt="" />
              <div class="label">
                <div class="title">CANADA</div>
                <div class="price">
                  from<span>$ 2000</span>
                </div>
                <a href="#abc">LEARN MORE</a>
              </div>
            </div>
          </div>
          <div class="grid_4">
            <div class="banner">
              <img src={img5} alt="" />
              <div class="label">
                <div class="title">TURKEY</div>
                <div class="price">
                  from<span>$ 1.500</span>
                </div>
                <a href="#abc">LEARN MORE</a>
              </div>
            </div>
          </div>
          <div class="grid_4">
            <div class="banner">
              <img src={img6} alt="" />
              <div class="label">
                <div class="title">EGYPT</div>
                <div class="price">
                  from<span>$ 1.500</span>
                </div>
                <a href="#abc">LEARN MORE</a>
              </div>
            </div>
          </div>
          <div class="clear"></div>
          <div class="grid_4">
            <div class="banner">
              <img src={img7} alt="" />
              <div class="label">
                <div class="title">JAPAN</div>
                <div class="price">
                  from<span>$ 1000</span>
                </div>
                <a href="#abc">LEARN MORE</a>
              </div>
            </div>
          </div>
          <div class="grid_4">
            <div class="banner">
              <img src={img8} alt="" />
              <div class="label">
                <div class="title">BRAZIL</div>
                <div class="price">
                  from<span>$ 1.700</span>
                </div>
                <a href="#abc">LEARN MORE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
