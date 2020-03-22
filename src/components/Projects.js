import React,{ Component } from 'react';


class Projects extends Component {
  constructor(props) {
    super(props);

    this.projectData = props.ProjectData;

  }

  giveImage(var1){
    if (var1==='../Assets/CppLogo.png') {
      return(require('../Assets/CppLogo.png'));
    }
    else if(var1==='../Assets/PythonLogo.png'){
      return(require('../Assets/PythonLogo.png'));
    }
    else{
      return(require('../Assets/Default.png'));
    }
  }

  render(){
    return(
      <div id='project' className='project_cover'>
        <heading className='project_heading'>P<br/>R<br/>O<br/>J<br/>E<br/>C<br/>T<br/>S</heading>
        <div className='card-columns'>
          {
            this.projectData.map((data, index) => (
              <dvi className=''>
                <div key={index} className="card projects_card align-items-center">
                  <img className='card-img-top proj_img mx-auto d-block' src={this.giveImage(data.link)} alt='no img'></img>
                  <p className="card-body text-center">
                    <span className="card-title">{data.name}</span>
                  </p>
                  <p className='card-text'>
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

export default Projects;
