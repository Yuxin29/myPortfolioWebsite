// routes/contact.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contact
router.post('/', async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    // basic server-side validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'name, email and message are required' });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    return res.status(201).json({ message: 'Contact saved' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
