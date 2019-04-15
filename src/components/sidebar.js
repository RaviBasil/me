import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
				<a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" 
				data-toggle="collapse" data-target="#navbar" 
				aria-expanded="false" aria-controls="navbar"><i></i></a>
		<aside id="colorlib-aside" role="complementary" className="border js-fullheight">
			<div class="text-center">
				<div class="author-img" style={{"backgroundImage": 'url(images/about.jpg)'}}></div>
				<h1 id="colorlib-logo"><a href="index.html">Ravi Basil</a></h1>
				<span className="email"><i className="icon-mail"></i> skipperravi@gmail.com</span>
				<br/>
        <span className="number"><i className="icon-phone"></i>+91-721-776-3977</span>
			</div>
			<br/>
			<nav id="colorlib-main-menu" role="navigation" class="navbar">
				<div id="navbar" class="collapse">
					<ul>
						<li class="active"><a href="#" data-nav-section="home">Home</a></li>
						<li><a href="#" data-nav-section="about">About</a></li>
						{/* <li><a href="#" data-nav-section="services">Services</a></li> */}
						<li><a href="#" data-nav-section="skills">Skills</a></li>
						<li><a href="#" data-nav-section="education">Education</a></li>
						<li><a href="#" data-nav-section="experience">Experience</a></li>
						{/* <li><a href="#" data-nav-section="work">Work</a></li> */}
						{/* <li><a href="#" data-nav-section="blog">Blog</a></li> */}
						{/* <li><a href="#" data-nav-section="contact">Contact</a></li> */}
					</ul>
				</div>
			</nav>
			<nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.facebook.com/ravi.basil" target="_blank"><i className="icon-facebook2" /></a></li>
                <li><a href="https://twitter.com/ravi09basil" target="_blank"><i className="icon-twitter2" /></a></li>
                <li><a href="https://www.instagram.com/basilravi/" target="_blank"><i className="icon-instagram" /></a></li>
                <li><a href="https://www.linkedin.com/in/ravibasil/" target="_blank"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/ravibasil" target="_blank"><i className="icon-github"></i></a></li>
                {/* <li><a href="https://medium.com/@dhruv.barochia34788" target="_blank"><i className="icon-blogger2"></i></a></li> */}
              </ul>
            </nav>

			<div class="colorlib-footer">
				<ul>
					<li><a href="#"><i class="icon-facebook2"></i></a></li>
					<li><a href="#"><i class="icon-twitter2"></i></a></li>
					<li><a href="#"><i class="icon-instagram"></i></a></li>
					<li><a href="#"><i class="icon-linkedin2"></i></a></li>
				</ul>
			</div>

		</aside>
      </div>
    )
  }
}
