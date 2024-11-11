
import { useEffect ,useState} from 'react';
import './App.css';


const CountryCard=({name,flag})=>{
  return (
    <div className='card'>
     <img src={flag} alt={name} />
     <p>{name}</p>
    </div>
  )
}
function App() {
const [countries,setCountries]=useState([])
useEffect(() => {
  const fetchData = async () => {
      try {
          let response = await fetch("https://xcountries-backend.azurewebsites.net/all");
          let data = await response.json();
          setCountries(data);
      } catch (error) {
        console.error("Error fetching data: "+error)
      }
  };

  fetchData();
}, []);

  return (
    <div className="App">
      {countries.map((country) => (
        <CountryCard key={country.abbr}
          name={country.name}
          flag={country.flag}
           />
        
      ))}
    </div>
  );
}

export default App;
