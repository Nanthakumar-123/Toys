import React from "react";
import img2 from "../images/img.2.webp";
import img3 from "../images/img.3.webp";
import img4 from "../images/img.4.webp";
import img5 from "../images/img.5.avif";
import img6 from "../images/img.6.avif";
import img7 from "../images/img.7.avif";
import img8 from "../images/img.8.avif";
import img9 from "../images/img.9.avif";
import img10 from "../images/img.10.avif";
import img11 from "../images/img.11.avif";
import img12 from "../images/img.12.avif";
import img13 from "../images/img.13.avif";
import img14 from "../images/img.14.webp";
import img15 from "../images/img.15.avif";
import img16 from "../images/img.16.avif";
import img17 from "../images/img.17.avif";
import img18 from "../images/img.18.avif";
import img19 from "../images/img.19.avif";
import img20 from "../images/img.20.webp";
import "react-bootstrap";
import "./Home.css";
import Pro from "../maping/Pro.js";
import Best from "../maping/Best.js";
import { TbSettingsCog } from "react-icons/tb";
import { FaAward } from "react-icons/fa";
import { LiaSeedlingSolid } from "react-icons/lia";
import { MdHomeWork } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../stores/Cartslice";

const Home = () => {
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const addCart = (item) => {
    dispatch(addToCart(item));
  };
  const deleteCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={img3} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={img4} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div className="one">
        <h1>Bestsellers</h1>
      </div>
      <div className="nnn">
        {Best.map((item) => (
          <div class="card" key={item.id}>
            <img src={item.img} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">
                {item.title}
                <br />
                {item.discription}

                <div class="product-price">
                  <span class="current">₹{item.currentprice}</span>
                  <span class="original">₹{item.originalprice}</span>
                  <span class="save">save₹{item.saveprice}</span>
                </div>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="two">
        <h1>EVERY CHILD IS AN ARTIST!!</h1>
      </div>
      <div className="new">
        <h1>New Launches</h1>
      </div>

      <div className="nnn">
        {Pro.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.img} className="card-img-top" alt={item.title} />
            <div className="card-body">
              <p className="card-text">
                {item.title}
                <br />
                {item.discription}
                <div className="product-price">
                  <span className="current">₹{item.price}</span>
                </div>
              </p>
            </div>

            {cartProducts?.find((cartItem) => cartItem.id === item.id) ? (
              <button onClick={() => deleteCart(item.id)}>Remove From Cart</button>
            ) : (
              <button onClick={() => addCart(item)}>Add To Cart</button>
            )}
          </div>
        ))}
      </div>

      <div className="video">
        <iframe
          width="100%"
          height="600px"
          src="https://www.youtube.com/embed/Qj-N7wHYqng"
          title="Webby Holy City Varanasi 1000 Piece Puzzle for kids"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      <div className="iii">
        <div>
          <TbSettingsCog className="settings" />
          <br />
          <h1>Design</h1>
          <br />
          <p>
            We're committed to design new toys for kids that promote positive
            development & growth in young minds. Our toys are carefully crafted
            to provide children with the tools they need to thrive.
          </p>
        </div>
        <div>
          <FaAward className="award" />
          <br />
          <h1>Safety</h1>
          <br />
          <p>
            All of our toys are rigorously tested to ensure that they meet or
            exceed the highest safety standards. Child safety is our top
            priority while making toys for young boys and girls.
          </p>
        </div>
        <div>
          <LiaSeedlingSolid className="tree" />
          <br />
          <h1>Eco-Friendly</h1>
          <br />
          <p>
            We promote sustainability through our use of solar energy,
            eco-friendly FSC certified materials, recycled and recyclable
            materials and responsible waste management.
          </p>
        </div>
        <div>
          <MdHomeWork className="home" />
          <br />
          <h1>Made In India</h1>
          <br />
          <p>
            All our products are proudly researched, conceptualized, designed &
            manufactured in our facilities in India. Webby Toys are available
            for kids of all ages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
