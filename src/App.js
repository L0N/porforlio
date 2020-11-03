import './App.css';
import { Component } from 'react';
import { About } from './components/about'
import { Contact } from './components/contact'

class App extends Component {
  render() {
    console.log("The page is rendering")
    return (
      <div className="App">
        <header className="App-header">
          <h2 class="portfolio-title">Frank Manue Jr</h2>
        </header>
        <main className="main-section">
          <h3>Main Section</h3>
          <nav>
            <ul className="nav-title">
              <li>about</li>
              <li>projects</li>
              <li>contact</li>
            </ul>
          </nav>
          < About />
          <div>projects</div>
          < Contact />
        </main>
      </div>
    );

  }
}

export default App;
