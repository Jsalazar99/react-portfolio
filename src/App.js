import './App.css';
import Header from './Components/Header';
import Aside from './Components/Aside';
import Project from './Components/Project';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Aside />
      <main>
        <div id='featured'>
          <Project />
        </div>
        <Project />
      </main>
      <Footer />
    </div>
  );
}

export default App;
