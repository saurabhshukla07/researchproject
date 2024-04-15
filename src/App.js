import logo from './logo.svg';
import './App.css';
import ResearchTab from './ResearchTab';
import CitationPopup from './CitationPopup';
import NavbarResearchProject from './NavbarResearchProject';
import 'bootstrap/dist/css/bootstrap.min.css';
import SwitchButton from './SwitchButton';

function App() {
  return (
    <div className="App">
      
      <NavbarResearchProject></NavbarResearchProject>
     <ResearchTab></ResearchTab>
  <CitationPopup></CitationPopup>
    </div>
  );
}

export default App;
