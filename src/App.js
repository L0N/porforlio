import './App.css';
import { Component } from 'react';
import { About } from './components/about'
import { Projects } from './components/projects'
import { Contact } from './components/contact'
import Header from './components/header'
import Books from '.components/books'

class App extends Component {

  state = {
    mainSectionHeading: "Portfolio",
    mainSubSectionHeading: "Frank Manue Jr",
    showAbout: false,
    showProjects: false,
    showContacts: false
  }

  handleClickAbout = () => {
    this.setState((prevState) => {
      const aboutToggle = !prevState.showAbout;
      console.log("Click About")
      return {
        showAbout: aboutToggle,
        showProjects: false,
        showContacts: false
      }
    })
    
    this.handleClickProjects = () => {
      this.setState((prevState => {
        const projectsToggle = !prevState.showProjects;
        console.log("Click Projects")
        return {
          showProjects: projectsToggle,
          showAbout: false,
          showContacts: false
          }
      }))
    }
    
    this.handleClickContact = () => {
      this.setState((prevState => {
        const contactToggle = !prevState.showContacts;
        console.log("Click Contacts")
        return {
          showContacts: contactToggle,
          showAbout: false,
          showProjects: false
        }
      }))
    }
  }

  render() {
    console.log("The page is rendering")
    return (
      <div className="App">
        <header className="App-header">
          < Header />
        </header>
        <main className="main-section">
          <h3>Portfolio</h3>
          <nav>
            <ul className="nav-title">
              <li onClick={this.handleClickAbout}>about</li>
              <li onClick={this.handleClickProjects}>projects</li>
              <li onClick={this.handleClickContact}>contact</li>
            </ul>
          </nav>
          
          <div>
            {
              (this.state.showAbout)
              ?
              < About />
              :
              ""
            }
          </div>
          <div>
            {
              (this.state.showContacts)
              ?
              < Contact />
              :
              ""
            }
          </div>
          <div>
            {
              (this.state.showProjects)
              ?
              < Projects />
              :
              ""
            }
          </div>
          <div>
            < Books />
          </div>         
        </main>
      </div>
    );

  }
}

export default App;
