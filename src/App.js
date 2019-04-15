import React, { Component } from 'react';
import Sidebar from './components/sidebar'
import About from './components/about-component'
import Education from './components/education-component'
import Experience from './components/experience-component'
import Home from './components/home-component'
import Skills from './components/skills-component'
import Blog from './components/blog'
import Contact from './components/contact'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div class="container-wrap">
          <Sidebar/>
		      <div id="colorlib-main">
            <Home/>
            <About/>
            <Skills/>
            <Education/>
            <Experience/>
            {/* <Blog/> */}
            {/* <Contact/> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
