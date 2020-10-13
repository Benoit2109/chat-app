import React from "react";
import "./contact.css";
import PropTypes from 'prop-types';


const Contact = (props) => {
  return (
    <section className="Contact" key={props.Id}>
      <img className="avatar" src={props.Avatar} alt={props.Name} />
      <div>
        <p className="name">{props.Name}</p>
        <div className= "status">
          <span className={props.Online? 'status-online':'status-offline'}></span><p className="status-text">{props.Online ? "online" : "offline"}</p>
        </div>
      </div>
    </section>
  );
};

Contact.propTypes = {
  Name: PropTypes.string.isRequired,
  Avatar: PropTypes.string.isRequired,
  Online: PropTypes.bool.isRequired,
}

export default Contact;
