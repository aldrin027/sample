import { Grid } from '@material-ui/core';
import React from 'react';
import './dashboard.scss';

let slideIndex = 1;

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName('card');

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('open');
    slides[i].classList.remove('close');
  }
  // const dots = document.getElementsByClassName('dot');

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(' active', '');
  // }
  slides[slideIndex - 1].style.display = 'block';
  // dots[slideIndex - 1].className += ' active';
}

// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// Thumbnail image controls
function currentSlide(n) {
  const slides = document.getElementsByClassName('card');

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('open');
    slides[i].classList.remove('close');
  }

  showSlides((slideIndex = n));
}

const Images = () => {
  return (
    <Grid container direction="column" justify="flex-start" alignItems="flex-start" spacing={3}>
      <Grid item container spacing={3} xs={12}>
        <Grid item xs={2} className="card-child">
          <div className="imageHolder p1" />
          <img
            style={{ maxHeight: 150, maxWidth: 150 }}
            src="https://images.unsplash.com/photo-1551326844-4df70f78d0e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1226&q=80"
            alt=""
          />
        </Grid>
        <Grid item xs={2} className="card-child">
          <img
            style={{ maxHeight: 150, maxWidth: 150 }}
            src="https://images.unsplash.com/photo-1543965860-82ed7d542cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1342&q=80"
            alt=""
          />
        </Grid>
        <Grid item xs={2} className="card-child">
          <img
            style={{ maxHeight: 150, maxWidth: 150 }}
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
            alt=""
          />
        </Grid>
        <Grid item xs={2} className="card-child">
          <div className="imageHolder p1" />
          <img
            style={{ maxHeight: 150, maxWidth: 150 }}
            src="https://images.unsplash.com/photo-1551326844-4df70f78d0e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1226&q=80"
            alt=""
          />
        </Grid>
        <Grid item xs={2} className="card-child">
          <img
            style={{ maxHeight: 150, maxWidth: 150 }}
            src="https://images.unsplash.com/photo-1543965860-82ed7d542cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1342&q=80"
            alt=""
          />
        </Grid>
        <Grid item xs={2} className="card-child">
          <img
            style={{ maxHeight: 150, maxWidth: 150 }}
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
            alt=""
          />
        </Grid>

        <Grid item xs={2} className="card-child">
          <div className="imageHolder p1" />
          <img
            style={{ maxHeight: 150, maxWidth: 150 }}
            src="https://images.unsplash.com/photo-1551326844-4df70f78d0e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1226&q=80"
            alt=""
          />
        </Grid>
        <Grid item xs={2} className="card-child">
          <img
            style={{ maxHeight: 150, maxWidth: 150 }}
            src="https://images.unsplash.com/photo-1543965860-82ed7d542cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1342&q=80"
            alt=""
          />
        </Grid>
        <Grid item xs={2} className="card-child">
          <img
            style={{ maxHeight: 150, maxWidth: 150 }}
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
            alt=""
          />
        </Grid>
        <Grid item xs={2} className="card-child">
          <div className="imageHolder p1" />
          <img
            style={{ maxHeight: 150, maxWidth: 150 }}
            src="https://images.unsplash.com/photo-1551326844-4df70f78d0e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1226&q=80"
            alt=""
          />
        </Grid>
        <Grid item xs={2} className="card-child">
          <img
            style={{ maxHeight: 150, maxWidth: 150 }}
            src="https://images.unsplash.com/photo-1543965860-82ed7d542cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1342&q=80"
            alt=""
          />
        </Grid>
        <Grid item xs={2} className="card-child">
          <img
            style={{ maxHeight: 150, maxWidth: 150 }}
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
            alt=""
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

const Dashboard = () => {
  React.useEffect(() => {
    const cards = document.querySelectorAll('.card');

    function toggleOpen() {
      this.classList.toggle('open');

      const sample = document.getElementsByClassName('card-child');

      [...sample].forEach((item) => item.classList.toggle('show'));

      for (let i = 0; i < cards.length; i++) {
        if (cards[i] !== this) cards[i].classList.toggle('close');
      }
    }

    cards.forEach((card) => {
      card.addEventListener('click', toggleOpen);
    });
  }, []);

  React.useEffect(() => {
    showSlides(slideIndex);
  }, []);

  // style = {{ height: 200, width: '100%', position: 'absolute' }}
  return (
    <>
      <div className="artboard">
        <div className="cards">
          <div className="card p1">
            <div className="backdrop">
              <div className="content">
                <Images />
                <a href="#">Food</a>
              </div>
            </div>
          </div>
          <div className="card p2">
            <div className="backdrop">
              <div className="content">
                <Images />
                <a href="#">people</a>
              </div>
            </div>
          </div>
          <div className="card p3">
            <div className="backdrop">
              <div className="content">
                <Images />
                <a href="#">Nature</a>
              </div>
            </div>
          </div>
          <div className="card p4">
            <div className="backdrop">
              <div className="content">
                <Images />
                <a href="#">Travel</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="column" onClick={() => currentSlide(1)}>
          <div className="img p1" />
        </div>
        <div className="column" onClick={() => currentSlide(2)}>
          <div className="img p2" />
        </div>
        <div className="column" onClick={() => currentSlide(3)}>
          <div className="img p3" />
        </div>
        <div className="column" onClick={() => currentSlide(4)}>
          <div className="img p4" />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

// <div className="artboard">
//   <div className="cards">
//     <div className="card p1" />
//   </div>

//   <div className="cards">
//     <div className="numbertext">2 / 6</div>
//     <img
//       src="https://images.pexels.com/photos/953724/pexels-photo-953724.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
//       alt=""
//     />
//   </div>

//   <div className="cards">
//     <div className="numbertext">3 / 6</div>
//     <img
//       src="https://images.pexels.com/photos/3494806/pexels-photo-3494806.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
//       alt=""
//     />
//   </div>

//   <div className="cards">
//     <div className="numbertext">4 / 6</div>
//     <img
//       src="https://images.pexels.com/photos/973506/pexels-photo-973506.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
//       alt=""
//     />
//   </div>

//   <div className="cards">
//     <div className="numbertext">5 / 6</div>
//     <img
//       src="https://images.pexels.com/photos/1937555/pexels-photo-1937555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
//       alt=""
//     />
//   </div>

//   <div className="cards">
//     <div className="numbertext">6 / 6</div>
//     <img
//       src="https://images.pexels.com/photos/3375493/pexels-photo-3375493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
//       style={{ width: '100%' }}
//       alt=""
//     />
//   </div>

//   <button type="button" className="prev" onClick={() => plusSlides(-1)}>
//     &#10094;
//         </button>
//   <button type="button" className="next" onClick={() => plusSlides(1)}>
//     &#10095;
//         </button>
// </div>
