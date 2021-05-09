import { IconButton } from '@material-ui/core';
import { Instagram } from '@material-ui/icons';
import React from 'react';
import './dashboard3.scss';

const Dashboard3 = () => {
  React.useEffect(() => {
    function toggleOpen() {
      this.classList.toggle('open');
      for (let i = 0; i < cards.length; i++) {
        if (cards[i] !== this) cards[i].classList.toggle('close');
      }
    }

    const cards = document.querySelectorAll('.card');

    cards.forEach((card) => card.addEventListener('click', toggleOpen));
  }, []);

  return (
    <>
      <div className="artboard">
        <div className="cards">
          <div className="card p1">
            <a href="#">Food</a>
          </div>
          <div className="card p2">
            <a href="#">people</a>
          </div>
          <div className="card p3">
            <a href="#">Nature</a>
          </div>
          <div className="card p4">
            <a href="#">Travel</a>
          </div>
        </div>
      </div>
      <footer>
        <div className="content">
          <div className="top">
            <IconButton className="custom-icon" aria-label="upload picture" component="span">
              <Instagram />
            </IconButton>
            <a target="_blank" href="https://www.instagram.com/akshaycodes/?hl=en" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a target="_blank" href="https://twitter.com/akshaycodes/" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a target="_blank" href="http://akshaycodes.com/youtube" rel="noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
            <a target="_blank" href="https://codepen.io/akshaycodes/" rel="noreferrer">
              <i className="fab fa-codepen"></i>
            </a>
          </div>
          <div className="bottom">
            <a>
              made with <i className="fas fa-heart beat"></i> by{' '}
              <a target="_blank" href="https://codepen.io/akshaycodes/" rel="noreferrer">
                Akshaycodes
              </a>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Dashboard3;
