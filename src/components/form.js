import React from 'react'

export default function Form() {
  return (
<div>
        <div className="bb">
          <div className="flexx">
            <div className="containerr">
              <h1 id="hb1" style={{color: 'white'}}>GET IN TOUCH</h1>
              <h3 id="hb2" style={{color: 'white'}}>If you are in organic industry or want to join the organic revolution
                drop us a mail.
              </h3>
              <div className="te">
                <input type="text" placeholder="name" />
                <input type="email" placeholder="email" />
              </div>
              <div className="sub">
                <textarea id="subject" name="subject" placeholder="comment" style={{height: '100px', fontSize: '2rem'}} defaultValue={""} />
              </div>
              <div className="submit">
                <input type="submit" defaultValue="Submit" />
              </div>
            </div>
            <div className="info">
              <div className="em">
                <i className="fa-solid fa-envelope" style={{color: 'white', fontSize: '7rem'}} />
                <h1 id="f1"> Email us at:<br />
                  abc@gmail.com</h1>
              </div>
              <div className="em">
                <i className="fa-solid fa-phone" style={{color: 'white', fontSize: '7rem'}} />
                <h1 id="f1">Contact us at:<br />
                  +911234567890</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="imagess">
            <div className="i">
              <i className="fa-brands fa-facebook" style={{color: 'white', fontSize: '7rem'}} />
            </div>
            <div className="i">
              <i className="fa-brands fa-instagram" style={{color: 'white', fontSize: '7rem'}} />
            </div>
            <div className="i">
              <i className="fa-brands fa-pinterest" style={{color: 'white', fontSize: '7rem'}} />
            </div>
          </div>
          <h1 id="e">@copyright@indigoorganic.com</h1>
        </div>
        {/**/}
      </div>  )
}
