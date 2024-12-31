import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Job } from "./job";

@Entity("todo_Task")
export class Task {
  @PrimaryGeneratedColumn({
    name: "taskId",
    type: "int",
    unsigned: true,
    primaryKeyConstraintName: "todo_Task_PK_id",
  })
  id: number;

  @Column({
    name: "taskName",
    type: "varchar",
    length: 255,
  })
  name: string;

  @ManyToOne(() => Job, (job) => job.tasks)
  job: Job;
}
