import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Task } from "./task";

@Entity("todo_Job")
export class Job extends BaseEntity {
  @PrimaryGeneratedColumn({
    name: "jobId",
    type: "int",
    unsigned: true,
    primaryKeyConstraintName: "todo_Job_PK_id",
  })
  id: number;

  @Column({
    name: "jobName",
    type: "varchar",
    length: 255,
  })
  name: string;

  @OneToMany(() => Task, (task) => task.job)
  tasks: Task[];
}
