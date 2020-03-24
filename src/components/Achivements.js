import React,{ Component } from 'react';

class Achivements extends Component{
  constructor(props) {
    super(props);

    this.achivementsData = props.AchivementsData;

  }

  render(){
    return(
      <div className='achivements_cover'>
        <div id='achivements'>
          achivements page
        </div>
      </div>
    )
  }
}

export default Achivements;
