import './App.css';
import { Component } from 'react';
import { About } from './components/about'
import { Projects } from './components/projects'
import { Contact } from './components/contact'
import Header from './components/header'
import Books from './components/books'

class App extends Component {

  state = {
    mainSectionHeading: "Portfolio",
    mainSubSectionHeading: "Frank Manue Jr",
    showAbout: false,
    showProjects: false,
    showContacts: false,
    books: [
      {
        Title: "Don Quixote",
        author: "Miguel de Cervantes",
        blurb: "Often referred to as the first modern European novel, Don Quixote follows the exploits of the titular noble who becomes obsessed with the romantic notion of chivalry. On a self-imposed mission to become a knight-errant, Don Quixote recruits common farmer, Sancho Panza, as his squire. Unfortunately, however, their quests rarely end well—among other misadventures, Don Quixote does battle with a herd of sheep, attacks a group of monks, and even frees a group of convicted criminals."
      },
      {
        Title: "Lord of the Rings",
        author: "J.R.R. Tolkien",
        blurb: "This high-fantasy novel is a famous three volume epic. It centers around an all powerful ring forged by the Dark Lord Sauron. For many years the ring is sought after by all likes, but at the start of the novel, it resides in the simple home of the hobbit Bilbo Baggins. Bilbo sets a momentous quest upon his cousin Frodo’s shoulders, tasking him with the journey to Mount Doom to destroy the ring. "
      },
      {
        Title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        blurb: "Harry Potter and the Sorcerer’s Stone brings readers into a world of magic at Hogwarts School of Witchcraft and Wizardry. On his eleventh birthday, Harry’s magical heritage is brought to light by the bumbling half-giant Hagrid. As he embarks on his new life as a wizard, he finds that there’s more to this news than just learning spells and potions. The Dark Lord Voldemort, who had tried and failed to kill Harry as an infant, is regaining power, and Harry stands in his path."
      }

    ]
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
          {
            this.state.books.map((books, i) => {
              return (
                < Books booksdata={books} />
              )
            })
          }
          </div>
        </main>
      </div>
    );

  }
}

export default App;
