import React from "react";

export default function Home() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
      style={{
        backgroundColor: "#EEF4E9",
        border: "9px solid #EEF4E9",
        borderRadius: "3rem",
      }}
    >
      <div className="carousel-indicators">
        <button
          type="button"
          id="b1"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          id="b1"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          id="b1"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
        <button
          type="button"
          id="b1"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={3}
          aria-label="Slide 4"
        />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container1" id="j1">
            <div className="ima">
              <img id="mango" src="/images/homeima/mango.png" />
              <img id="fruits" src="/images/homeima/fruits grp.png" />
              <img id="go" src="/images/homeima/green orng.png" />
              <img id="go1" src="/images/homeima/orange1.png" />
              <img id="go2" src="/images/homeima/products.png" />
            </div>
            <div className="container2">
              <h1 id="h11">Indyo Organic</h1>
              <h2 id="h12">Regional, Seasonal &amp; Affordable Products</h2>
              <h3 id="h13">
                Are you looking for organic food that is high-quality,
                inexpensive, and good for you and your loved ones? It appears
                your search has come to an end. Indyo Organic brings you the
                highest standard organic food for every mood.
              </h3>
              <div className="h14">
                <h4 id="h14">Let's Go</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container1" id="j1">
            <div className="ima">
              <img id="mango" src="/images/homeima/mango.png" />
              <img id="fruits" src="/images/homeima/fruits grp.png" />
              <img id="go" src="/images/homeima/green orng.png" />
              <img id="go1" src="/images/homeima/orange1.png" />
              <img id="go2" src="/images/homeima/products.png" />
            </div>
            <div className="container2">
              <h1 id="h11">Indyo Organic</h1>
              <h3 id="h13">
                So, what actually is organic food? Organic Food is Food with
                less chemicals, pesticides and fertilizers and more nutrients
                and minerals. Should contain more natural and less hazardous
                substances which causes less diseases and infections and has
                more health benefits.
              </h3>
              <div className="h14">
                <h4 id="h14">Let's Go</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container1" id="j1">
            <div className="ima">
              <img id="mango" src="/images/homeima/mango.png" />
              <img id="fruits" src="/images/homeima/fruits grp.png" />
              <img id="go" src="/images/homeima/green orng.png" />
              <img id="go1" src="/images/homeima/orange1.png" />
              <img id="go2" src="/images/homeima/products.png" />
            </div>
            <div className="container2">
              <h1 id="h11">Indyo Organic</h1>
              <h3 id="h13">
                Directly from the farmers, Indyo Organic brings you organic,
                handpicked, and nutritious food items. As a matter of fact, why
                settle for a state of bodily and mental deprivation? Choose
                Health, Choose Indyo Organic
              </h3>
              <div className="h14">
                <h4 id="h14">Let's Go</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container1" id="j1">
            <div className="ima">
              <img id="mango" src="/images/homeima/mango.png" />
              <img id="fruits" src="/images/homeima/fruits grp.png" />
              <img id="go" src="/images/homeima/green orng.png" />
              <img id="go1" src="/images/homeima/orange1.png" />
              <img id="go2" src="/images/homeima/products.png" />
            </div>
            <div className="container2">
              <h1 id="h11">Indyo Organic</h1>
              <h2 id="h12"> Products</h2>
              <h3 id="h13">
                Indyo Organic manufactures approximately 100 different types of
                organic food items, including Cereals, Gluten Free Flours,
                Pulses, Oils &amp; A2Ghee, Juices, Spices, Nuts, Herbs /Tea,
                Sweeteners, Honey, and many more which not only is wholesome but
                also tastes heavenly.
              </h3>
              <div className="h14">
                <h4 id="h14">Let's Go</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
