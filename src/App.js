import './App.css';
import { Component } from 'react';
import { About } from './components/about'
import { Projects } from './components/projects'
import { Contact } from './components/contact'

class App extends Component {

  state = {
    mainSectionHeading: "This is the main section heading"
  }

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
          < Projects />
          < Contact />
        </main>
      </div>
    );

  }
}

export default App;
