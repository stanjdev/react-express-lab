const express = require('express');
const router = express.Router();
const data = require('../MOCK_DATA.json');

/* GET Email List */
router.get('/', (req, res, next) => {
  const emails = data.map((entry) => entry.email);
  res.json(emails);
})

module.exports = router;
