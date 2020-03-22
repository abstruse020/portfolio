import React,{ Component } from 'react';
import cpplogo from '../Assets/CppLogo.png';


class Projects extends Component {
  constructor(props) {
    super(props);

    this.projectData = props.ProjectData;

  }

  render(){
    return(
      <div className='project_cover'>
        <div>
          {
            this.projectData.map((data, index) => (
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

export default Projects;
