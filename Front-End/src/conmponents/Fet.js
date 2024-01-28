import React, { useState } from 'react';
import axios from 'axios';

const Fet = () => {
  const [email, setEmail] = useState('');
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const fetchData = async () => {
    try {
      const apiUrl = 'http://localhost:4000/app/';
      const response = await axios.get(apiUrl, {
        params: { email },
      });

      if (response.status === 200 && response.data) {
        // Data found for the given email
        alert('Data found!'); 
        console.log(response.data.data.name);
        
      } else {
        // No data found for the given email
        alert('Data not found.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </label>
        <button type="submit">Fetch Data</button>
      </form>
    </div>
  );
};

export default Fet;
