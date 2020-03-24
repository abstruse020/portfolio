import React,{ Component } from 'react';

class Achievements extends Component{
  constructor(props) {
    super(props);

    this.achievementsData = props.AchievementsData;

  }

  render(){
    return(
      <div className='achievements_cover'>
        <heading className='achievements_heading'>A<br/>C<br/>H<br/>I<br/>E<br/>V<br/>E<br/>M<br/>E<br/>N<br/>T<br/>S</heading>
        <div id='achievements' className='card-columns'>
          {
            this.achievementsData.map((data, index) => (
              <dvi className=''>
                <div key={index} className="card achievements_card align-items-center">
                  <p className="card-heading text-center">
                    <span className="card-title">{data.name}</span>
                  </p>
                  <p className='card-body'>
                    {data.about}
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

export default Achievements;
