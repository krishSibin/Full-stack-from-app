import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Handler for form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    // Assuming you have a backend API endpoint for registration
    const apiUrl = 'http://localhost:4000/app/'; // Replace with your actual backend API endpoint

    try {
      const response = await axios.post(apiUrl, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
        
      });

      if (response.status === 200) {
        // Registration successful, you can handle the response accordingly
        alert('Registration successful!');
        
      } else {
        // Handle errors from the backend
        alert('Registration failed.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
