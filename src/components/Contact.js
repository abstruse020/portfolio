import React,{ Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.contactData = props.ContactData;
  }
    render(){
      return(
        <div id='contact' className='contact_cover'>
          <heading className='contact_heading'>Contact</heading>
          <div className='resume col-md-4 mx-auto d-block'>
            <a href={require('../Assets/resume.pdf')}>Click to download<br/>Resume</a>
          </div>
          <div className='email col-md-4 mx-auto d-block'>
            <a href="mailto:bokharsh@gmail.com?subject=Hey Harsh">Click to send Email: {this.contactData.email}</a>
          </div>
          <div className='other-text col-md-4 mx-auto d-block'>
            Feel free to contact <span role='img' aria-label="smiley">&#128578;</span>
          </div>
        </div>
      )
    }

}

export default Contact;
