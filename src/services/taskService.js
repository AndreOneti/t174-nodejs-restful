const db = {};

let sequence = 0;

class TaskService {
  static add(newTask) {
    return new Promise((resolve) => {
      const task = {
        id: ++sequence,
        done: newTask.done || false,
        description: newTask.description
      }
      db[task.id] = task;
      resolve(task);
    });
  }

  static getAll() {
    const toArray = key => db[key];
    return new Promise((resolve) => {
      const tasks = Object.keys(db).map(toArray);
      resolve(tasks);
    });
  }

  static getById(id) {
    return new Promise((resolve) => {
      resolve(db[id]);
    });
  }
}

module.exports = TaskService;
