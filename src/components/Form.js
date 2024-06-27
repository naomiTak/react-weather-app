//Form.js

const Form = ({city, setCity, getWeather}) => {
  return(
    <form onSubmit={getWeather}> 
      <input type="text" name="city" placeholder="Find a city " onChange={e => setCity(e.target.value)} value={city}/>
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default Form;