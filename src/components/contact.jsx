import React from "react";
import "./contact.css";

const Img =
  "https://avatars3.githubusercontent.com/u/70884216?s=460&u=7dc21945481dc5f12e54b9f0fdc6f484bfc2d3dd&v=4";
const Alt = "BenOnBike";
const Name = "Ben LE BOURDONNEC";
const Status = true;


const Contact = () => {
  return (
    <section className="Contact">
      <img className="avatar" src={Img} alt={Alt} />
      <div>
        <p className="name">{Name}</p>
        <div className= "status">
          <span className="status-online"></span><p className="status-text">{Status ? "online" : "offline"}</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
