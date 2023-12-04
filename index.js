// // Example code to fetch an animal fact
// document.getElementById('fetchButton').addEventListener('click', async () => {
//   const name = 'cat';
  
//   try {
//     const response = await fetch(`https://your-render-subdomain.onrender.com/animal/${name}`);
//     const data = await response.json();
    
//     // Display the fetched animal fact
//     alert(`Fact about ${data.name}: ${data.fact}`);
//   } catch (error) {
//     console.error(error);
//     // Handle errors if any
//     alert('Failed to fetch animal fact. Please try again.');
//   }
// });

const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.get('/animal/:name', (req, res) => {
  let { name } = req.params;
  
  console.log(name)
  if (name == ":cow"){
    res.send("moo")
  }

  if (name == ":cat"){
    res.send("meow")
  }

  if (name == ":dog"){
    res.send("woof")
  }

  if (name == ":lion"){
    res.send("roar")
  }

  if (name == ":bird"){
    res.send("chirp")
  }

  if (name == ":bee"){
    res.send("buzz")
  }

  if (name == ":elephant"){
    res.send("trumpets")
  }

  // try {
    
  //   const response = await axios.get(`https://api.api-ninjas.com/v1/animals?name=`);
  //   const animalFact = response.data.fact;

  //   res.json({ name, fact: animalFact });
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({ error: 'Internal Server Error' });
  // }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
