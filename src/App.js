
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [categories, setCategories] = useState();
  const [search, setSearch] = useState();
  const [dataSearched, setDataSearched] = useState();

    useEffect(() => {
      retrieveCategories()
    }, []);

  const retrieveCategories = async () => {
    try {
      const { data } = await axios.get('https://api.publicapis.org/categories');
      console.log(data);
      // setCategories(data);

    } catch(err) {
      console.log(err, '<== error retrieve categories');
    }

    // const handleChange = (e) => {
    //   setSearch(e.target.value)
    // }
    // const handleSubmit = async (e) => {
    //   try {
    //     e.preventDefault();
        
    //     const { data } = await axios.get('https://api.publicapis.org/entries?category=${search}')
    //     console.log(data, '<== response handle submit');

    //   } catch(err) {
    //     console.log(err, '<== error handle submit');
    //   }
    // }
  }

  return (
    <div className="App">
      {/* {JSON.stringify(categories)}  */}
      <h1>Serach data API</h1> <br />

      { /*<form>
          <input/>
          <button>Seacrh</button>
        </form>*/ }
      
      {categories && categories.map((category, index) => {
  <li key={index} > {category} </li>
} )} 
    </div>
  );
}

export default App;

{/* {JSON.stringify(categories)} onSubmit={handleSubmit} onChange={handleChange}*/}
{/* <p>{categories}</p> */}
