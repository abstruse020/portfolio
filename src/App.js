import React,{ Component } from 'react';
import Navbar from './components/Navbar';
import profileData from './profileData.json';
import Landing from './components/Landing';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navData : profileData.navbarData,
      landingData: profileData.LandingData,
      skillsData: profileData.Skills,
      projectData: profileData.Projects,
      achivementsData: profileData.Achievements
    }

  }
  render () {
    return (
      <div className="bgimage">
        <Navbar navbarData={this.state.navData}/>
        <Landing landingData={this.state.landingData}/>
        <Skills SkillsData={this.state.skillsData}/>
        <Projects ProjectData={this.state.projectData}/>
        <Achievements AchievementsData={this.state.achivementsData}/>
        <div className=''>

        </div>
    </div>
    );
  }
}

export default App;
