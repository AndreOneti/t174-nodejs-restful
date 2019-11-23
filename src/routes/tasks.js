const express = require('express');
const router = express.Router();

router.post('/', (request, response) => {
  response.status(200).json({
    message: 'Handling POST requests to /api/tasks'
  });
});

router.get('/', (request, response) => {
  response.status(200).json({
    message: 'Handling GET requests to /api/tasks'
  });
});

module.exports = router;
