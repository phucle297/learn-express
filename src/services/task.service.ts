import { TaskRepository } from "@/infrastructure/repository/task.repo";

export class TaskService {
  private readonly _taskRepository = new TaskRepository();

  async createTask(name: string) {
    return this._taskRepository.createTask(name);
  }

  async getTasks() {
    return this._taskRepository.getTasks();
  }

  async getTaskById(id: number) {
    return this._taskRepository.getTaskById(id);
  }

  async updateTask(id: number, name: string) {
    return this._taskRepository.updateTask(id, name);
  }

  async deleteTask(id: number) {
    return this._taskRepository.deleteTask(id);
  }
}

export const taskService = new TaskService();
