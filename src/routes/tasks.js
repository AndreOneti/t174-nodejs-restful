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

router.get('/:taskId', (request, response) => {
  response.status(200).json({
    taskId: request.params.taskId,
    message: 'Handling HTTP GET by ID'
  });
});

router.patch('/:taskId', (request, response) => {
  response.status(200).json({
    taskId: request.params.taskId,
    message: 'Handling HTTP PATCH by ID'
  });
});

router.delete('/:taskId', (request, response) => {
  response.status(200).json({
    taskId: request.params.taskId,
    message: 'Handling HTTP DELETE by ID'
  });
});
module.exports = router;
