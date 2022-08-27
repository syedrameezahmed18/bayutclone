import './App.css';
import Navigation from './navigation/navigation';
import { ScreenProvider } from './context/ScreenContext';
import { BrowserRouter as Router } from 'react-router-dom';
import './scss/Main.scss'

function App() {
  return (
    <ScreenProvider>
      <Router>
        <Navigation />
      </Router>
    </ScreenProvider>
  );
}

export default App;
