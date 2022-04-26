import '../styles/App.scss';
import quotes from '../data/quotes.json';
import { useState } from "react";

function App() {
  const [data, setData] = useState(quotes);
  const [search, setSearch] = useState('');
  const[newContact, setNewContact] = useState({
    quote:'',
    character:'',
   })
   const handleSearch = (ev) => {
    setSearch(ev.target.value);
  };
  const handleNewQuote  = (ev) => {
    setNewQuote({
      ...newQuote,
      [ev.target.id]: ev.target.value,
    });
  };
  const handleClick = (ev) => {
    ev.preventDefault();
    setData([...data, newQuote]);
    setNewQuote({
      quote: '',
      character:'',    
    });
  };
  const htmlData = data
  .filter(
    (quote) =>
      quote.name.toLowerCase().includes(search.toLowerCase()) ||
      quote.lastname.toLowerCase().includes(search.toLowerCase())
  )
  .map((quote,i) => {
    return(
 );
  });
  const htmlData = data.map((quote)=>)
return(
    <div className="page">
      <header className="header">
        <h1 className="title">FRASES DE FRIENDS</h1>
        <form>
          <imput
            className="quote_search"
            autoComplete="off"
            type="search"
            name="search"
            placeholder="Filtrar por frase"
            onChange={handleSearch}
            value={search}
          />
          <imput
            className="character_search"
            autoComplete="off"
            type="search"
            name="search"
            placeholder="Filtrar por personaje"
            onChange={handleSearch}
            value={search}
          />
        </form>
      </header>
      <main></main>
      <footer className="footer">
        <p className="p_footer">AÑADIR UNA NUEVA FRASE</p>
        <form>
          <imput
            className="new_quote"
            autoComplete="off"
            type="search"
            name="search"
            placeholder="Frase"
            //onChange={handleSearch}
            //value={search}
          />
          <imput
            className="new_character"
            autoComplete="off"
            type="search"
            name="search"
            placeholder="Personaje"
            //onChange={handleSearch}
            //value={search}
          />
        </form>
      </footer>
    </div>
  );
}

export default App;
