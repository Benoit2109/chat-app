import React from "react";
import "./contact.css";
import PropTypes from 'prop-types';


class Contact extends React.Component{
  constructor(props){
    super(props);
    this.state ={ 
      online: props.Online,
    };
  }
  render(){
    return (
      <section className="Contact" key={this.props.Id}>
        <img className="avatar" src={this.props.Avatar} alt={this.props.Name} />
        <div>
          <p className="name">{this.props.Name}</p>
          <div className= "status"
          
          onClick = {event => {
            const isOnline = !this.state.online;
            console.log(isOnline)
            this.setState({ online: isOnline})
          }}>
            <span className={this.state.online? 'status-online':'status-offline'}></span><p className="status-text">{this.state.online ? 'online' : 'offline'}</p>
          </div>
        </div>
      </section>
    );
  }
}


/*const Contact = (props) => {
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
};*/

Contact.propTypes = {
  Name: PropTypes.string.isRequired,
  Avatar: PropTypes.string.isRequired,
  Online: PropTypes.bool.isRequired,
}

export default Contact;
