import React,{ Component } from 'react';

class Hobbies extends Component {
  constructor(props) {
    super(props);

    this.hobbiesData = props.HobbiesData;

  }

  render(){
    return(
      <div id='hobbies' className='hobbies_cover'>
        <heading className='hobbies_heading'>Hobbies</heading>
        <div className='card-columns'>
          {
            this.hobbiesData.map((data, index) => (
              <dvi className=''>
                <div key={index} className="card hobbies_card align-items-center">
                  <p className="card-heading text-center">
                    <span className="card-title">{data.name}</span>
                  </p>
                </div>
              </dvi>
            ))
          }
        </div>
      </div>
    )
  }
}

export default Hobbies;
