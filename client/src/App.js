import Nav from './components/nav/nav'
import Homepage from './components/homepage/homepage'
import Services from './components/services/services'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

import './App.css'

const App = () =>{
  return (
    <div className="App">
        <Nav />
        <Homepage />
        <Services />
        <About />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
