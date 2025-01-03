import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
