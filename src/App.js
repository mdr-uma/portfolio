import React from 'react';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './components/About'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
  render(){
    return(
      <div className="App">
        <Router>
          <Navbar />
            <Route exact path='/about' component={About} />
        </Router>
        <Profile />

        <Footer />
      </div>
    )
  }
}

export default App
