import React from 'react'

export default function Carousal3d() {
  return (
<div>
        <h1 id="h41">Certifications And Affiliations </h1>
        <div className="c">
          <section id="slider">
            <input type="radio" name="slider" id="s1" defaultChecked />
            <input type="radio" name="slider" id="s2" />
            <input type="radio" name="slider" id="s3" />
            <input type="radio" name="slider" id="s4" />
            <input type="radio" name="slider" id="s5" />
            <label htmlFor="s1" id="slide1"><img src="/images/14.png" alt="" /></label>
            <label htmlFor="s2" id="slide2"><img src="/images/13.jpg" alt="" /></label>
            <label htmlFor="s3" id="slide3"><img src="/images/15.jpg" alt="" /></label>
            <label htmlFor="s4" id="slide4"><img src="/images/16.jpg" alt="" /></label>
            <label htmlFor="s5" id="slide5"><img src="/images/17.jpg" alt="" /></label>
          </section>
          <div className="hc1">
            <h2 id="hc1">More</h2>
          </div>
        </div>
      </div>
    );
}
