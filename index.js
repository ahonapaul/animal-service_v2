// Example code to fetch an animal fact
document.getElementById('fetchButton').addEventListener('click', async () => {
  const name = 'cat'; // You can replace this with user input or any other method to get the animal name
  
  try {
    const response = await fetch(`https://your-render-subdomain.onrender.com/animal/${name}`);
    const data = await response.json();
    
    // Display the fetched animal fact
    alert(`Fact about ${data.name}: ${data.fact}`);
  } catch (error) {
    console.error(error);
    // Handle errors if any
    alert('Failed to fetch animal fact. Please try again.');
  }
});

const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.get('/animal/:name', async (req, res) => {
  const { name } = req.params;

  try {
    // Make a request to an external API (for example, 'https://some-animal-facts-api.com')
    const response = await axios.get(`https://some-animal-facts-api.com/${name}`);
    const animalFact = response.data.fact;

    res.json({ name, fact: animalFact });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
