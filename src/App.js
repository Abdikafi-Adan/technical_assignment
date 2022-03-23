import './styles/App.scss';
import Header from './components/Header';
import Search from './components/Search';
import ContactCard from './components/ContactCard';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <ContactCard/>
    </div>
  );
}

export default App;
