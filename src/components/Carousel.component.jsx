import React from 'react'

const styles = {
  div: { height: '60vh' },
  img: { transform: 'translateY(-30vh)' },
}

export default function Carousel() {
  return (
    <div
      id="carouselExampleInterval"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active" style={styles.div}>
          <img
            src="https://images.unsplash.com/photo-1530028877439-c742c97d1543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
            class="d-block w-100"
            style={styles.img}
            alt="..."
          />
        </div>
        <div class="carousel-item " style={styles.div}>
          <img
            src="https://images.unsplash.com/photo-1584819754713-aa8dc860a7fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
            class="d-block w-100"
            style={styles.img}
            alt="..."
          />
        </div>

        <div class="carousel-item " data-interval="10000" style={styles.div}>
          <img
            src="https://images.unsplash.com/photo-1551754479-aeca1281acf4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            class="d-block w-100"
            alt="..."
            style={styles.img}
          />
        </div>
        <div class="carousel-item" data-interval="2000" style={styles.div}>
          <img
            src="https://images.unsplash.com/photo-1487744480471-9ca1bca6fb7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1368&q=80"
            class="d-block w-100"
            alt="..."
            style={styles.img}
          />
        </div>
        <div class="carousel-item" style={styles.div}>
          <img
            src="https://images.unsplash.com/photo-1545262901-16886dd24850?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
            class="d-block w-100"
            style={styles.img}
            alt="..."
          />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleInterval"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleInterval"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  )
}
