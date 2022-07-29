import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState();
  const [dataSearched, setDataSearched] = useState()

  useEffect(() => {
    retrieveCategories()
  }, []);

  const retrieveCategories = async () => {
    try {
      const { data } = await axios.get('https://api.publicapis.org/categories');
      setCategories(data.categories);
    
      
    } catch(err) {
      console.log(err, '<== error retrieve categories');
    }

    const handleChange = (e) => {
      setSearch(e.target.value)
    }

    const handleSubmit = async (e) => {
      try {
        e.preventDefault();
        const { data } = await axios.get('https://api.publicapis.org/entries?category=${search}')
        console.log(data, '<== response handle submit');
        setDataSearched(data.categories);

      }catch(err) {
        console.log(err, '<== error handle submit');
      }
    }
  }

  return (
    <div className="App">
      <h1>Seacrh data API</h1> <br />
        <form onSubmit={retrieveCategories.handleSubmit}>
            <input onChange={retrieveCategories.handleChange}/>
            <button>Seacrh</button>
        </form>
        <br />

        {/* {JSON.stringify(categories)}  */}
        {/* {JSON.stringify(dataSearched)} */}
        
        <ul>
          {dataSearched && dataSearched.map((data, index) => {
            console.log(data, '<== data searched');
            return (
              <>
                <li>{data.API}</li>
                <li>{data.Category}</li>
                <li>{data.Link}</li>
                <br />
                <br />
              </>
            )
          })}
        </ul>
    </div>
  );

}

export default App;


{/* {JSON.stringify(dataSearched)}; */}

{/* <ul>
{categories && categories.map((category, index) => {
return <li key={index} > {category} </li>
})}
</ul> */}
{/* {JSON.stringify(categories)}  */}
{/* {JSON.stringify(categories)} onSubmit={handleSubmit} onChange={handleChange}*/}
{/* <p>{categories}</p> */}
