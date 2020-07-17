import React from 'react';
import './App.css';
import './assets/css/bootstrap.min.css';
import './assets/css/styles.css'
import './assets/image/header-bg.jpg'
import Portfolio from './components/PortfolioDir/Portfolio'
import PortfolioInfo from './components/PortfolioDir/PortfolioInfo'
import Services from './components/ServicesDir/Services'
import About from './components/AboutDir/About'
import AboutInfo from './components/AboutDir/AboutInfo'
import TeamInfo from './components/TeamDir/TeamInfo'
import Team from './components/TeamDir/Team'
import Navingation from './components/NavDir/Navigation';
import Client from './components/ClientsDir/Client'
import Contact from './components/ContactDir/Contact'
import Footer from './components/FooterDir/Footer'

function App() {
    const portfolioLinks = PortfolioInfo
    const aboutLinks = AboutInfo
    const teamLinks = TeamInfo
    //const ModalLinks = PortModalInfo

  return (
    <div className="App">
      <body id="page-top">
      {/* <!-- Navigation--> */}
        <Navingation></Navingation>
        {/* <!-- Masthead--> */}
        <header className="masthead">
            <div className="container">
                <div className="masthead-subheading">Welcome To Our Studio!</div>
                <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
                <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
            </div>
        </header>
        {/* <!-- Services-->  */}
        <Services></Services>
        {/* <!-- Portfolio Grid--> */}
        <Portfolio portfolioLinks={portfolioLinks}></Portfolio>
        {/* <!-- About--> */}
        <About aboutLinks={aboutLinks}></About>
        {/* <!-- Team--> */}
        <Team teamLinks={teamLinks}></Team>        
        {/* <!-- Clients--> */}
        <Client></Client>
        {/* <!-- Contact--> */}
        <Contact></Contact>
        {/* <!-- Footer--> */}
        <Footer></Footer>
        {/* <!-- Portfolio Modals--> */}
        {/* <PortModal ModalLinks={ModalLinks}></PortModal> */}   
        </body>     
    </div>
  );
}

export default App;
