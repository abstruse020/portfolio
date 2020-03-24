import React,{ Component } from 'react';

class Achievements extends Component{
  constructor(props) {
    super(props);

    this.achievementsData = props.AchievementsData;

  }

  render(){
    return(
      <div id='achievements' className='achievements_cover'>
        <heading className='achievements_heading'>achievements</heading>
        <div className='card-columns'>
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
