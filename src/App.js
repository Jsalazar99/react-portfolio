import './App.css';
import './css/reset.css'
import './css/style.css'

import Header from './Components/Header';
import Aside from './Components/Aside';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Aside />
      <main>
        <div id='featured'>
          <Projects />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
