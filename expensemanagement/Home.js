import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./image1.jpg";
import img2 from "./image2.jpg";
import img3 from "./image3.jpeg";

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="d-flex flex-column min-vh-100" >
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ fontWeight: "bold", color: "red" }}>
            Expense Tracker
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/" style={{ margin: "0 10px" }}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login" style={{ margin: "0 10px" }}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register" style={{ margin: "0 10px" }}>Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={{ margin: "0 10px" }}>About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main content of the page */}
      <div className="container text-center mt-5 flex-grow-1">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2">
            <h1 className="display-4">Welcome to the Expense Tracker</h1>
            <p className="lead">One step to Manage and Track your Expenses</p>
          </div>
        </div>
      </div>
      <br />

      {/* Slider / Carousel */}
      <div className="container text-center mt-5">
        <Slider {...sliderSettings}>
          <div>
            <img src={img1} alt="slide1" className="d-block w-100" style={{ height: "400px", objectFit: "contain" }} />
          </div>
          <div>
            <img src={img2} alt="slide2" className="d-block w-100" style={{ height: "400px", objectFit: "contain" }} />
          </div>
          <div>
            <img src={img3} alt="slide3" className="d-block w-100" style={{ height: "400px", objectFit: "contain" }} />
          </div>
        </Slider>
      </div>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="feature-item">
                <div className="feature-card">
                  <h3>Record Expenses</h3>
                  <p>Effortlessly record your expenses with our intuitive interface. Categorize and track your spending with ease.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-item">
                <div className="feature-card">
                  <h3>Graphical Analysis</h3>
                  <p>Gain insights into your spending habits with our graphical analysis tools. Visualize your expenses over time and make informed decisions.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-item">
                <div className="feature-card">
                  <h3>Expenses List</h3>
                  <p>View a detailed list of your expenses, sorted by category or date. Easily search and filter your expenses to find what you need.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center p-3 mt-auto" style={{ background: "#808080", color: "#ffffff" }}>
        <p className="mb-0">&copy; 2024 Expense Tracker. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
