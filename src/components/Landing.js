import React,{ Component } from 'react';
// import image from '../Assets/profile.jpg'

class Landing extends Component {
  constructor(props) {
    super(props);

    this.LanData = props.landingData;

  }

  render(){
    return(
      <div id='about' className='land_cover'>
        <ul className='list'>
          <li className='col-md-4 image_section'>
            <img id='my_photo' className='' src={require('../Assets/profile.jpg')} alt='profile pic' onClick='../Assets/profile.jpg'></img>
            <div className='social'>
              <a href={this.LanData.twitterLink} target='_blank' rel='noopener noreferrer' class="fa fa-twitter"></a>
              <a href={this.LanData.githubLink} target='_blank' rel='noopener noreferrer' class="fa fa-github"></a>
              <a href={this.LanData.facebookLink} target='_blank' rel='noopener noreferrer' class="fa fa-facebook"></a>
            </div>
          </li>
          <li className='col-md-8'>
            <p className='name_section'>{this.LanData.FirstName} {this.LanData.LastName}</p>
            <div className='other_section'>
              {this.LanData.about}
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default Landing;
