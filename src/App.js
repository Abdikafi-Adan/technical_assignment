import { useState, useEffect } from 'react';
import './styles/App.scss';
import Header from './components/Header';
import Search from './components/Search';
import ContactCard from './components/ContactCard';

function App() {
  const [person, setPerson] = useState([]);
  const [loding, setLoding] = useState(false);
  const [grid,setGrid] = useState(true)
  useEffect(function () {
    fetch(`https://randomuser.me/api/?results=12`)
      .then((res) => res.json())
      .then((data) => setPerson(data.results));
    setLoding(true);
    console.log(person);
  }, []);

  if (!loding) {
    return <div> Loding...</div>;
  } else {

    return (
      <div className="App">
        <Header />
        <Search  
        grid={grid}
        setGrid={setGrid}
           
        />
        <ContactCard 
          person={person}
          setperson={setPerson}
         grid={grid}
          setGrid={setGrid}
          
        />
      </div>
    );
  }
}

export default App;
