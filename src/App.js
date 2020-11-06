import React from 'react';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About'
import Skills from './components/Skills';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
  render(){
    return(
      <div className="App">
        <Router>
          <Navbar />
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/skills' component={Skills} />
        </Router>
        <Footer />
      </div>
    )
  }
}

export default App
