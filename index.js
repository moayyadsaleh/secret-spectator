import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
// Making a GET request using axios
app.get("/", async (req, res) => {
    try {
      // Make the GET request using Axios
      const response = await axios.get(`${API_URL}/your-endpoint`);
      const data = response.data; // Assuming the API returns JSON data
  
      // Use the fetched data here
      res.json(data); // Send the data as a JSON response
    } catch (error) {
      // Handle errors here
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Error fetching data' }); // Send an error response
    }
  });
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });






















// HINTS:
// 1. Import express and axios

// 2. Create an express app and set the port number.

// 3. Use the public folder for static files.

// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
