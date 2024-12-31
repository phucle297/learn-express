import { EntityManager } from "typeorm";
import { Job } from "../entity/job";

export class JobRepository {
  private manager: EntityManager;

  constructor(manager: EntityManager) {
    this.manager = manager;
  }

  async createJob(name: string) {
    return this.manager.create(Job, { name });
  }

  async getJobs() {
    return this.manager.find(Job);
  }

  async getJobById(id: number) {
    return this.manager.findOne(Job, id);
  }
}
