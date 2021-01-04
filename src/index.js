import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import me from './me.png';
import aboutme from './about-me.png';

import { ParallaxProvider } from 'react-scroll-parallax';
import { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';

import ScrollableAnchor from "react-scrollable-anchor";

/*
1) make dynamic
2) add bolding to nav when you're on that section
3) fix animation + photo path
*/


// TOP PAGE TEMPLATE ========================================
 class TopPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page container" id="home">
        <div class="nav-wrapper">
          <div class="nav row">
            <div class="col-1 logo nav-left">KYR</div>
            <div class="col-10 nav-right">
              <ul class="nav-ul">
                <li><a href="#about" style={{color:"#000000"}}>about</a></li>
                <li><a href="#experience" style={{color:"#000000"}}>experience</a></li>
                <li><a href="#projects" style={{color:"#000000"}}>projects</a></li>
                <li style={{paddingRight: 0}}><a class="sayHi" href="#sayhi" style={{color:"#000000"}}>say hi</a></li>
              </ul>
            </div>
          </div>
        </div>


        <div class="header-wrapper">
          <Parallax className="custom-class" y={[-60, 40]} tagOuter="figure">
          <div class="row">
            <p class="col-12 heythere">Hey there, I'm</p>
          </div>
          </Parallax>

          <div class="row">
            <h2 class="title col-12">Kelly Ryoo</h2>
          </div>
        </div>

        <div class="me">
          <img src={me} width="350" height="490"/>
        </div>
      </div>
      
    );
  }
}

// NAV TEMPLATE ========================================
class SideNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="sidenav">
        <a href="#home" id="homeNav">home</a>
        <a href="#about" id="aboutNav">about</a>
        <a href="#experience" id="experienceNav">experience</a>
        <a href="#projects" id="projectsNav">projects</a>
        <a href="#sayhi" id="sayhiNav">say hi</a>
      </div>
    );
  }
}


// PAGE TEMPLATE ========================================
class Page extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    var x = this.props.imgurl;
    
    return (
      <div className="page container" id={this.props.id}>
        <div class="header-wrapper">
          <Parallax className="custom-class" y={[-40, 40]} tagOuter="figure">
          <span class="row">
            <h2 class="title col-12">{this.props.title}</h2>
          </span>
          </Parallax>


          <span class="row">
            <p class="desc col-8">{this.props.desc}</p>
            <span class="col-4"></span>
          </span>

          <div class="pagepics">
          <Parallax className="" x={[0, -30]} tagOuter="figure">
            <img src={x} width="350" height="490"/>
          </Parallax>
          </div>


        </div>

      </div>

    );
  }
}

// ELement TEMPLATE ========================================
class Element extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page"  style={{backgroundColor: this.props.background}}>
        <div class="container">
        <div class="header-wrapper">
          <span class="row">
            <h2 class="title col-12" style={{color: this.props.color}} >{this.props.title}</h2>
          </span>

          <span class="row">
            <span class="col-12">
            <img class="logo" src={this.props.url} width={this.props.width} height={this.props.height}></img>
            <p class="date">{this.props.date}</p></span>
          </span>

          <span class="row">
            <p class="desc col-8">{this.props.desc}</p>
            <span class="col-4"></span>
          </span>

          <span class="row learn-more-row">
            <p class="desc col-8 learn-more"><a href={this.props.learnmore}>LEARN MORE →</a></p>
            <span class="col-4"></span>
          </span>
        </div>
        </div>
      </div>
    );
  }
}

// ProjectElement TEMPLATE ========================================
class ProjectElement extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page"  style={{backgroundColor: this.props.background}}>
        <div class="container">
        <div class="header-wrapper">
          <span class="row">
            <h2 class="title col-12" style={{color: this.props.color}} >{this.props.title}</h2>
          </span>

          <span class="row">
            <span class="col-12">
            <p class="date">{this.props.date}</p></span>
          </span>

          <span class="row">
            <p class="desc col-8">{this.props.desc}</p>
            <span class="col-4"></span>
          </span>
        </div>
        </div>
      </div>
    );
  }
}

// SAY HI TEMPLATE ========================================
class SayHi extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page container" id={this.props.id}>
        <div class="header-wrapper">
          <div class="row">
            <h2 class="title col-12">Say Hi</h2>
          </div>

          <div class="row">
            <p class="desc col-8">I'm reachable through any of the means below. Feel free to contact me.</p>
            <span class="col-4"></span>
          </div>

          <div class="row">
            <span class="col-1"><a href="instagram.com"><img  width="50" height="50" src="https://cdn1.iconfinder.com/data/icons/social-media-outline-6/128/SocialMedia_Instagram-Outline-512.png"></img></a></span>
            <span class="col-1"><a href="linkedin.com"><img width="43" height="43" src="https://image.flaticon.com/icons/png/512/61/61109.png"></img></a></span>
            <span class="col-1"><a href="github.com"><img width="47" height="47" src="https://image.flaticon.com/icons/png/512/25/25231.png"></img></a></span>
            <span class="col-1"><a href="mailto:ryoo.kellyy@gmail.com"><img width="50" height="50" src="https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png"></img></a></span>
          </div>

        </div>
      </div>
    );
  }
}


// RENDERING ========================================
var description1 = "Hello! My name is Kelly Ryoo, and I’m a student studying computer science at Cornell University in Ithaca, NY. I’m interested in front-end web dev and IOS development.";
var description2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.";
var description3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.";

var uidev = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.";
var sun = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.";
var pf = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.";
var research = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.";
var sd = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.";
var cc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.";

var app = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.";
var textadventure = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.";


function App() {
  return (
    <div>
      <TopPage />
      <SideNav />


      <Page title="About Me" desc={description1} id="about" imgurl="aboutme" />

      <Page title="Experience" desc={description2} id="experience" imgurl="aboutme" />
      <Element title="UI Developmer" color="#FF971D" background="#F9F6F7" desc={uidev} url="https://www.hashtag-ca.com/images/hashtag-new-logo-header.svg" width="170" height="40" date="June 2019 ~ Present" learnmore="google.com"/>
      <Element title="Web Developer" color="#F6F6F6" background="#E49393" desc={sun} url="https://cornellsun.com/wp-content/uploads/2015/11/sunbannerwebsite-10.png" width="190" height="40" date="Oct 2020 ~ Present" />
      <Element title="Graphic Designer" color="#F56A79" background="#D9ECF2" desc={pf} url="https://static1.squarespace.com/static/5f2a64ff769ae615affd3ce1/t/5f3bbb754b31496c55fb5fd5/1607397414333/?format=1500w" width="70" height="50" date="Oct 2020 ~ Present" />
      <Element title="Researcher" color="#557571" background="#F7D1BA" desc={research} url="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Cornell_University_seal.svg/1024px-Cornell_University_seal.svg.png" width="70" height="50" date="Oct 2020 ~ Present" />
      <Element title="Social Director" color="#3D7EA6" background="#FFA5A5" desc={sd} url="https://wicc.cornell.edu/img/watermark.png" width="120" height="30" date="Oct 2020 ~ Present" />
      <Element title="Events Lead" color="#9088D4" background="#EBCFC4" desc={cc} url="http://cornellcreatives.com/img/newLogo.png" width="70" height="50" date="Oct 2020 ~ Present" />

      <Page title="Projects" desc={description3} id="projects" imgurl="aboutme" />
      <ProjectElement title="Flashcard App" color="#C9CBFF" background="#EFF8FF" desc={app} date="December 2020" />
      <ProjectElement title="Textadventure" color="#999B84" background="#F4EEED" desc={textadventure} date="March 2019" />

      <SayHi title="Experience" id="sayhi" />

    </div>
  );
}

class AppContainer extends Component{
  render() {
    return (
      <div>
        <ParallaxProvider>
            <App />
        </ParallaxProvider>
      </div>
    );
  }
}


ReactDOM.render(
  <AppContainer />,
  document.getElementById('root')
);

