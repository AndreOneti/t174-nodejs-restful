const express = require('express');
const router = express.Router();

router.post('/', (request, response) => {
  response.status(200).json({
    message: 'Handling POST requests to /tasks'
  });
});

module.exports = router;
