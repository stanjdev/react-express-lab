var express = require('express');
var router = express.Router();
const data = require('../MOCK_DATA.json');

/* GET NAMES listing. */
router.get('/', function(req, res, next) {
  const fullNames = data.map((entry) => `${entry.first_name} ${entry.last_name}`);
  res.json(fullNames);
});

module.exports = router;
