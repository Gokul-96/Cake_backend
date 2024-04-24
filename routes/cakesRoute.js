const express = require('express');
const router = express.Router();
const Cake = require('../models/cakeModel');


router.get('/getcakes', async (req, res) => {
    try {
      const cakes = await Cake.find({});
      res.send(cakes);
    } catch (error) {
     return res.status(400).json({ message: 'Error retrieving cakes' });
    }
  });

  module.exports = router;