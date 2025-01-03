import { EntityManager } from "typeorm";
import { dataSource } from "../datasource/datasource";
import { Task } from "../entity/task";

export class TaskRepository {
  private manager: EntityManager;

  constructor() {
    this.manager = new EntityManager(dataSource);
  }

  async createTask(name: string) {
    return this.manager.create(Task, { name });
  }

  async getTasks() {
    return this.manager.find(Task);
  }

  async getTaskById(id: number) {
    return this.manager.findOne(Task, {
      where: { id },
    });
  }

  async updateTask(id: number, name: string) {
    return this.manager.update(Task, id, { name });
  }

  async deleteTask(id: number) {
    return this.manager.delete(Task, id);
  }
}
