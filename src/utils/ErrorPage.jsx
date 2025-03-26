import React from 'react';
import './ErrorPage.css';
import { Link } from 'react-router-dom';

// Component for the star particle background
function StarParticles() {
  return (
    <div>
      <div className="starsec"></div>
      <div className="starthird"></div>
      <div className="starfourth"></div>
      <div className="starfifth"></div>
    </div>
  );
}

// Component for the lamp animation
function Lamp() {
  return (
    <div className="lamp__wrap">
      <div className="lamp">
        <div className="cable"></div>
        <div className="cover"></div>
        <div className="in-cover">
          <div className="bulb"></div>
        </div>
        <div className="light"></div>
      </div>
    </div>
  );
}

// Component for the error message and navigation
function ErrorMessage() {
  return (
    <section className="error">
      <div className="error__content">
        <div className="error__message message">
          <h1 className="message__title">Page Not Found</h1>
          <p className="message__text">
            MẤT KẾT NỐI!!!!
          </p>
        </div>
        <Link to="/" className="error__button button">
        <div className="error__nav e-nav">
          <a
            target="_blank"
            className="e-nav__link"
          ></a>
        </div>
        </Link>
      </div>
    </section>
  );
}

// Main ErrorPage component
function ErrorPage() {
  return (
    <div>
      <header className="top-header"></header>
      <StarParticles />
      <Lamp />
      <ErrorMessage />
    </div>
  );
}

export default ErrorPage;