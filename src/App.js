import './App.css';
import './css/reset.css'
import './css/style.css'

import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />      
      <Main />
      <Footer />
    </div>
  );
}

export default App;
