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

router.patch('/:taskId', checkAuth, async (request, response) => {
  const updatedTask = await taskService.update(
    request.params.taskId,
    request.body
  );
  updatedTask
    ? response.json(updatedTask)
    : notFound(request, response);
});

router.delete('/:taskId', checkAuth, async (request, response) => {
  const isDeleted = await taskService.delete(request.params.taskId);
  isDeleted
    ? response.end()
    : notFound(request, response);
});
module.exports = router;
