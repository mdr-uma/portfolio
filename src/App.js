import React from 'react';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Profile from './components/Profile'

class App extends React.Component {
  render(){
    return(
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        
        <main className= "main">
          <Profile />
        </main>

        <Footer />
      </div>
    )
  }
}

export default App
