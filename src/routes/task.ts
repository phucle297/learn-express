import { taskService } from "@/services/task.service";
import { Router } from "express";

export const taskRouter = Router();

const _PREFIX = "/tasks";

taskRouter.get(_PREFIX, async (req, res, next) => {
  try {
    const tasks = await taskService.getTasks();
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
});

taskRouter.get(_PREFIX + "/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const taskById = await taskService.getTaskById(Number(id));
    res.status(200).json(taskById);
  } catch (error) {
    next(error);
  }
});

taskRouter.post(_PREFIX, async (req, res, next) => {
  try {
    const task = req.body;
    const newTask = await taskService.createTask(task.name);
    res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
});

taskRouter.put(_PREFIX, async (req, res, next) => {
  try {
    const task = req.body;
    const updatedTask = await taskService.updateTask(task.id, task);
    res.status(200).json(updatedTask);
  } catch (error) {
    next(error);
  }
});

taskRouter.delete(
  _PREFIX,
  async (
    req: {
      params: { id: string };
    },
    res,
    next,
  ) => {
    try {
      const id = req.params.id;
      await taskService.deleteTask(Number(id));
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  },
);
