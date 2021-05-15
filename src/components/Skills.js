import React,{ Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

class Skills extends Component {
  constructor(props) {
    super(props);

    this.skillsData = props.SkillsData;
    this.state = {
      "CpplLogo": require('../Assets/CppLogo.png'),
      "PythonLogo": require('../Assets/CppLogo.png')
    }
  }
  giveImage(var1){
    if (var1==='../Assets/CppLogo.png') {
      return(require('../Assets/CppLogo.png'));
    }
    else if(var1==='../Assets/PythonLogo.png'){
      return(require('../Assets/PythonLogo.png'));
    }
    else if(var1==='../Assets/AndroidLogo.png'){
      return(require('../Assets/AndroidLogo.png'));
    }
    else if(var1==='../Assets/PhpLogo.png'){
      return(require('../Assets/PhpLogo.png'));
    }
    else if(var1==='../Assets/FlaskLogo.png'){
      return(require('../Assets/FlaskLogo.png'));
    }
    else if(var1==='../Assets/ReactLogo.png'){
      return(require('../Assets/ReactLogo.png'));
    }
    else if(var1==='../Assets/JavaLogo.png'){
      return(require('../Assets/JavaLogo.png'));
    }
    else{
      return(require('../Assets/Default.png'));
    }
  }
  render(){
    return(
        <div id='skills' className='skills_cover'>
          <heading className='skills_heading'>S<br/>k<br/>i<br/>l<br/>l<br/>s</heading>
          <div className='card-columns'>
            {
              this.skillsData.map((data, index) => (
                  <div key={index} className="card skills_card align-items-center">
                    <img className='card-img-top skills_img mx-auto d-block' src={this.giveImage(data.link)} alt='no img'></img>
                    <p className="card-body text-center">
                      <span className="card-title">{data.name}</span>
                    </p>
                  </div>
              ))
            }
          </div>
        </div>
    )
  }

}
export default Skills;
