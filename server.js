const express = require('express');
const app = express();

const noteRoutes = require('./routes/noteRoutes');

// Middleware to read JSON data
app.use(express.json());

// Note API routes
app.use('/notes', noteRoutes);

// Home route
app.get('/', (req, res) => {
    res.status(200).send('Notes CRUD API is running');
});

// Handle invalid routes
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

// Start server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});