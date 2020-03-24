import React,{ Component } from 'react';



class Navbar extends Component{
  constructor(props) {
    super(props);

    this.navData = props.navbarData;

  }

render() {
  return(
    <nav className='my_nav fixed-top navbar-expand-md navbar-dark'>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#my_nav_collapse"
        aria-controls="#my_nav_collapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
        <div className='collapse navbar-collapse' id='my_nav_collapse'>
          <ul className='navbar-nav mx-auto'>
            <li className='navbar_links nav-item'>
              <a className='nav-link' href='#about'>{this.navData.link1}<span class="sr-only">(current)</span></a>
            </li>
            <li className='navbar_links nav-item'>
              <a className='nav-link' href='#skills'>{this.navData.link2}</a>
            </li>
            <li className='navbar_links nav-item'>
              <a className='nav-link' href='#project'>{this.navData.link3}</a>
            </li>
            <li className='navbar_links nav-item'>
              <a className='nav-link' href='#achievements'>{this.navData.link4}</a>
            </li>
          </ul>
        </div>
    </nav>
  )
}
}

export default Navbar;
