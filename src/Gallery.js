import React from 'react'
import './Gallery.css'

const customLimit = 50;

const generator = limit => Math.floor(Math.random() * limit) + 1;

const randDigits = Array.from({ length: customLimit }, () => [generator(2), generator(2)]);

const Gallery = () => {

  return (
    <section className="gallery">
      {randDigits.map(([h,v], key) => (
        <div key={key} className={`item h${h} v${v}`}>
          <img src={`https://picsum.photos/500/500?random=${key}`} alt={`ALTS ${key}`} />
        </div>
      ))}
    </section>
  )
}

export default Gallery
