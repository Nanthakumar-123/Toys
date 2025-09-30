import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import img1 from "../images/img.1.avif";
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
      <div className="toys">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link to="/">
            <img src={img1} />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar">
                <ul className="nav-list">
                  <li className="dropdown">
                    <select value={selectedOption} onChange={handleChange}>
                      <option value=" Shop By Category ▾">
                        Shop By Category 
                      </option>
                      {/* <Link to="/art"> */}
                      <li>
                        <a>
                          <option value=" Art"> Art</option>
                        </a>
                      </li>
                      {/* </Link> */}
                      {/* <option value=" Art & Craft"> Art & Craft</option> */}
                      <option value=" Blocks"> Blocks</option>
                      <option value=" Doll Houses"> Doll Houses</option>
                      <option value=" Early Development">
                        Early Development
                      </option>
                      <option value=" Games"> Games</option>
                      <option value=" Play Tents">Play Tents </option>
                      <option value=" Plush"> Plush</option>
                      <option value=" Puzzles">Puzzles </option>
                      <option value=" Slides"> Slides</option>
                      <option value=" STEAM Kits"> STEAM Kits</option>
                    </select>
                    <select value={selectedOption} onChange={handleChange}>
                      <option value=" Shop By Age ▾">Shop By Age </option>
                      <option value=" 0 to 1 Years">0 to 1 Years</option>
                      <option value=" 2 to 4 Years"> 2 to 4 Years</option>
                      <option value=" 5 to 7 Years"> 5 to 7 Years</option>
                      <option value=" 8 to 12 Years">8 to 12 Years</option>
                      <option value=" 12+ Years"> 12+ Years</option>
                    </select>
                    <select value={selectedOption} onChange={handleChange}>
                      <option value=" Puzzles ▾">Puzzles </option>
                      <option value=" Kids Puzzles">Kids Puzzles</option>
                      <option value=" Early Learning">Early Learning </option>
                      <option value=" 24 Pieces Puzzles">
                        24 Pieces Puzzles{" "}
                      </option>
                      <option value=" 36 Pieces Puzzles">
                        36 Pieces Puzzles
                      </option>
                      <option value=" 40 Pieces Puzzles">
                        40 Pieces Puzzles{" "}
                      </option>
                    </select>
                    <select value={selectedOption} onChange={handleChange}>
                      <option value=" DIY ▾ "> DIY </option>
                      <option value=" Doll Houses ">Doll Houses</option>
                      <option value=" Games"> Games</option>
                      <option value=" Art & Craft">Art & Craft </option>
                      <option value=" STEAM Kit">STEAM Kit</option>
                    </select>
                    <select className="nan" value={selectedOption} onChange={handleChange}>
                      <option value="  Outdoor ▾"> Outdoor </option>
                      <option value=" Play Tents">Play Tents</option>
                      <option value=" Slides"> Slides</option>
                    </select>
                    {selectedOption && <p> {selectedOption}</p>}
                  </li>
                  <Link to="/cart">
                  <li className="nav-item">
                      <a>Cart</a>
                    </li>
                  </Link>
                  <Link to="/upload">
                    <li className="nav-item">
                      <a>Upload</a>
                    </li>
                  </Link>
                  <Link to="/update">
                    <li className="nav-item">
                      <a>update</a>
                    </li>
                  </Link>
                </ul>

                <div className="icon">
                  <a>
                    <IoSearch style={{ fontSize: 30 }} />
                  </a>
                  <a>
                    <CgProfile style={{ fontSize: 30 }} />
                  </a>
                  <a>
                    <FiShoppingCart style={{ fontSize: 30 }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
