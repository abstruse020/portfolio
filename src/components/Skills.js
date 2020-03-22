import React,{ Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import cpplogo from '../Assets/CppLogo.png';
import pythonlogo from '../Assets/PythonLogo.png';

class Skills extends Component {
  constructor(props) {
    super(props);

    this.skillsData = props.SkillsData;

  }
  render(){
    return(
        <div id='skills' className='skills_cover'>
          <heading className='skills_heading'>S<br/>k<br/>i<br/>l<br/>l<br/>s</heading>
          <div className='card-columns'>
            {
              this.skillsData.map((data, index) => (
                <dvi className=''>
                  <div key={index} className="card skills_card align-items-center">
                    <img className='card-img-top skills_img mx-auto d-block' src={cpplogo} alt='no img'></img>
                    <p className="card-body text-center">
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
export default Skills;
