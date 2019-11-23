const express = require('express');
const router = express.Router();

const taskService = require('../services/taskService');
const notFound = require('../middleware/not-found');

const checkAuth = require('../middleware/check-auth');

router.post('/', checkAuth, async (request, response) => {

  const task = await taskService.add(request.body);

  response.status(200).json(task);
});

router.get('/', async (request, response) => {

  const tasks = await taskService.getAll();

  tasks && tasks.lenght
    ? response.json(tasks)
    : response.status(204).end();
});

router.get('/:taskId', async (request, response) => {
  const task = await taskService.getById(request.params.taskId);
  task
    ? response.json(task)
    : notFound(request, response);
});

router.patch('/:taskId', checkAuth, (request, response) => {
  response.status(200).json({
    taskId: request.params.taskId,
    message: 'Handling HTTP PATCH by ID'
  });
});

router.delete('/:taskId', checkAuth, async (request, response) => {
  const isDeleted = await taskService.delete(request.params.taskId);
  isDeleted
    ? response.end()
    : notFound(request, response);
});
module.exports = router;
