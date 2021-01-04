import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import me from './me.png';
import aboutme from './about-me.png';

import { ParallaxProvider } from 'react-scroll-parallax';
import { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';

import ScrollableAnchor from 'react-scrollable-anchor'

import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true


// TOP PAGE TEMPLATE ========================================
 class TopPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollableAnchor id="home">

      <div className="page container">
        <div class="nav-wrapper">
          <div class="nav row">
            <div class="col-1 logo nav-left">KYR</div>
            <div class="col-10 nav-right">
              <ul class="nav-ul">
                <li><a href="#about" style={{color:"#000000"}}>about</a></li>
                <li><a href="#experience" style={{color:"#000000"}}>experience</a></li>
                <li><a href="#projects" style={{color:"#000000"}}>projects</a></li>
                <li><a href="#skills" style={{color:"#000000"}}>skills</a></li>
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
      </ScrollableAnchor>
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
        <a href="#skills" id="skillsNav">skills</a>
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
    
    return (
      <ScrollableAnchor id={this.props.id}>

      <div className="page container">

        <div class="header-wrapper">
          <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
          <span class="row">
            <h2 class="title col-12">{this.props.title}</h2>
          </span>
          </Parallax>


          <span class="row">
            <p class="desc col-8">{this.props.desc}</p>
            <span class="col-4"></span>
          </span>


        </div>
      </div>
      </ScrollableAnchor>


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
          <Parallax className="custom-class" y={[-20, 25]} tagOuter="figure">
          <span class="row">
            <h2 class="title col-12" style={{color: this.props.color}} >{this.props.title}</h2>
          </span>
          </Parallax>

          <span class="row">
            <span class="col-12">
            <img class="logo" src={this.props.url} width={this.props.width} height={this.props.height}></img>
            <p class="date">{this.props.date}</p></span>
          </span>
          <span class="row">
            <p class="desc col-8">{this.props.desc}</p>
            <span class="col-4"></span>
          </span>

          <span class="row learn-more-row" style={{display: this.props.boolLeanMore}}>
            <p class="desc col-8 learn-more"><a target="_blank" href={this.props.learnmore}>LEARN MORE →</a></p>
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
          <Parallax className="custom-class" y={[-40, 40]} tagOuter="figure">
          <span class="row">
            <h2 class="title col-12" style={{color: this.props.color}} >{this.props.title}</h2>
          </span>
          </Parallax>

          <span class="row">
            <span class="col-12">
            <p class="date">{this.props.date}</p></span>
          </span>

          <span class="row">
            <p class="desc col-8">{this.props.desc}</p>
            <span class="col-4"></span>
          </span>


          <span class="row learn-more-row" style={{display: this.props.boolLeanMore}}>
            <p class="desc col-8 learn-more"><a target="_blank" href={this.props.learnmore}>LEARN MORE →</a></p>
            <span class="col-4"></span>
          </span>
        </div>
        </div>
      </div>
    );
  }
}

class Skills extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollableAnchor id={this.props.id}>

      <div className="page container">
        <div class="header-wrapper">
          <div class="row">
            <h2 class="title col-12">Skills</h2>
          </div>

          <div class="row">
            <p class="desc col-8"><span style={{fontWeight: "600"}}>Programming: </span>Java, HTML, CSS, Wordpress, some PHP, React, and Python</p>
            <span class="col-4"></span>
          </div>
          <div class="row">
            <p class="desc col-8"><span style={{fontWeight: "600"}}>Languages: </span>English and Korean (fluent), Spanish and Japanese (proficient), Arabic (beginner)</p>
            <span class="col-4"></span>
          </div>

        </div>
      </div>
      </ScrollableAnchor>
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
      <ScrollableAnchor id={this.props.id}>

      <div className="page container">
        <div class="header-wrapper">
          <div class="row">
            <h2 class="title col-12">Say Hi</h2>
          </div>

          <div class="row">
            <p class="desc col-8">I'm reachable through any of the means below. Feel free to contact me.</p>
            <span class="col-4"></span>
          </div>

          <div class="row">
            <span class="col-1"><a target="_blank" href={this.props.link1}><img  width="50" height="50" src="https://cdn1.iconfinder.com/data/icons/social-media-outline-6/128/SocialMedia_Instagram-Outline-512.png"></img></a></span>
            <span class="col-1"><a target="_blank" href={this.props.link2}><img width="43" height="43" src="https://image.flaticon.com/icons/png/512/61/61109.png"></img></a></span>
            <span class="col-1"><a target="_blank" href={this.props.link3}><img width="47" height="47" src="https://image.flaticon.com/icons/png/512/25/25231.png"></img></a></span>
            <span class="col-1"><a target="_blank" href={this.props.link4}><img width="50" height="50" src="https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png"></img></a></span>
          </div>

        </div>
      </div>
      </ScrollableAnchor>
    );
  }
}


// RENDERING ========================================
var description1 = "Hello! My name is Kelly Ryoo, and I’m a student studying computer science at Cornell University in Ithaca, NY. I’m interested in front-end web dev and IOS development. I also have an interest in physics/astronomy, arabic, and east asian studies.";
var description2 = "Scroll down to learn more about my experience in computer science, as well as some of the executive positions I've held in student organizations.";
var description3 = "I designed and coded this website, but here are some other cool things I've made in the past!";

var uidev = "Worked as the UI Developer Intern at Hashtag Systems Inc. Learned and worked with front-end web development languages (HTML, CSS, Javascript), along with frameworks (Bootstrap). Frequently worked with Wordpress websites (plugins, themes, etc.).";
var sun = "Worked as a part of the Cornell Daily Sun's web development team. Maintained the Cornell Sun's website and strengthened the organization's online presence through redesigning and coding special pages. Also contributed to other side projects involving HTML, CSS and React.";
var pf = "Was a part of the design team at Passionfruit. Designed graphics and informational instagram posts for Korean and American audiences. Worked under a design lead who guided me throughout the process. Mainly used with Figma and Procreate.";
var research = "Will be participating in the Cornell McMahon Lab to study laser neural networks.";
var sd = "Will be hosting social events for WICC (Women In Computing Cornell) members.";
var cc = "Organized and hosted a variety of events as the events lead of Cornell Creatives. Held events such as calligraphy workshops and tech panels. Collaborated with other student organizations to host events tailored towards the CC community.";

var app = "Worked with four other students to create a flashcard app. Features include logging in/signing up, adding new flashcard set, editing flashcard sets, etc. Placed first place for 'Best Remote App' in the HackChallenge.";
var textadventure = "Coded a textadventure game in Java.";


function App() {
  return (
    <div>
      <TopPage />
      <SideNav />


      <Page title="About Me" desc={description1} id="about" imgurl="aboutme" />

      <Page title="Experience" desc={description2} id="experience" imgurl="aboutme" />
      <Element title="UI Developmer" color="#FF971D" background="#F9F6F7" desc={uidev} url="https://www.hashtag-ca.com/images/hashtag-new-logo-header.svg" width="170" height="40" date="June 2019 ~ Present" boolLeanMore="none"/>
      <Element title="Web Developer" color="#F6F6F6" background="#E49393" desc={sun} url="https://cornellsun.com/wp-content/uploads/2015/11/sunbannerwebsite-10.png" width="190" height="40" date="Oct 2020 ~ Present" boolLeanMore="none"/>
      <Element title="Graphic Designer" color="#F56A79" background="#D9ECF2" desc={pf} url="https://static1.squarespace.com/static/5f2a64ff769ae615affd3ce1/t/5f3bbb754b31496c55fb5fd5/1607397414333/?format=1500w" width="70" height="50" date="Oct 2020 ~ Present" boolLeanMore="block" learnmore="https://passionfruit.one/" />
      <Element title="Researcher" color="#557571" background="#F7D1BA" desc={research} url="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Cornell_University_seal.svg/1024px-Cornell_University_seal.svg.png" width="70" height="50" date="Oct 2020 ~ Present" boolLeanMore="block" learnmore="https://mcmahon.aep.cornell.edu/" />
      <Element title="Social Director" color="#3D7EA6" background="#FFA5A5" desc={sd} url="https://wicc.cornell.edu/img/watermark.png" width="120" height="30" date="Oct 2020 ~ Present" boolLeanMore="block" learnmore="http://wicc.cornell.edu/"/>
      <Element title="Events Lead" color="#9088D4" background="#EBCFC4" desc={cc} url="http://cornellcreatives.com/img/newLogo.png" width="70" height="50" date="Oct 2020 ~ Present" boolLeanMore="block" learnmore="http://cornellcreatives.com/"/>

      <Page title="Projects" desc={description3} id="projects" imgurl="aboutme" />
      <ProjectElement title="Flashcard App" color="#C9CBFF" background="#EFF8FF" desc={app} date="December 2020" boolLeanMore="block" learnmore="https://github.com/kelly-ryoo/flashcard-app-hack-challenge-frontend"/>
      <ProjectElement title="Textadventure" color="#999B84" background="#F4EEED" desc={textadventure} date="March 2019" boolLeanMore="block" learnmore="https://github.com/kelly-ryoo/Game-Hidden-Treasure"/>

      <Skills title="skills" id="skills" />

      <SayHi title="SayHi" id="sayhi" link1="https://www.instagram.com/k_ryoo/" link2="https://www.linkedin.com/in/kelly-ryoo/" link3="https://github.com/kelly-ryoo" link4="mailto:ryoo.kellyy@gmail.com" />

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

