// import './App.css'
// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import React, { useState, useEffect } from 'react';

function App() {
  let data = ['a', 'b', 'c', 'd'];
  // let data = [];
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);  // To show loading status
  // const [error, setError] = useState(null);  // To handle errors

  // // UseEffect hook to fetch data from API when the component mounts
  // useEffect(() => {
  //   // Replace with your API URL
  //   const apiUrl = 'http://localhost:3000';

  //   // Fetch the data
  //   fetch(apiUrl)
  //     .then(response => response.json())  // Parse the JSON data
  //     .then(data => {
  //       setData(data);  // Update state with fetched data
  //       setLoading(false);  // Set loading to false when data is fetched
  //     })
  //     .catch(error => {
  //       setError(error);  // Handle errors
  //       setLoading(false);  // Set loading to false in case of error
  //     });
  // }, []);  // Empty dependency array means it runs only once when component mounts


  return (
    <React.Fragment>
      <p>Hello</p>
      {data.length === 0 ? <div>No data</div> : null}
      <ul className="list-group">
        {data.map((item) => <li key={item} className="list-group-item">{item}</li>)}
      </ul>
    </React.Fragment>
  );
}

export default App;