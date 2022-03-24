import { useState, useEffect } from 'react';
import './styles/App.scss';
import Header from './components/Header';
import Search from './components/Search';
import ContactCard from './components/ContactCard';

function App() {
  const [person, setPerson] = useState([]);
  const [loding, setLoding] = useState(false);
  useEffect(function () {
    console.log("Effect ran");
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
        <Search />
        <ContactCard 
          person={person}
          setperson={setPerson}
        />
      </div>
    );
  }
}

export default App;
