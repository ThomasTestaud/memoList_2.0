const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const SQLquery = require('../sql/sql.js');
const { secretKey } = require('../config/config.js'); // Your JWT secret key

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    // Find the user by username in the database
    const query = "SELECT * FROM users WHERE username = ?";
    const values = [username];
    let user;
    SQLquery(query, values, (error, response) => {
      user = response[0];
    });
    console.log(user);
    
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);
    console.log("match: "+passwordMatch);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});


router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

    // Create a new user in the database
    const query = "INSERT INTO `users`(`username`, `email`, `password`) VALUES (?,?,?)";
    const values = [username, email, hashedPassword];
    SQLquery(query, values, (error, response) => {
      res.status(201).json({ message: 'User registered successfully' });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
