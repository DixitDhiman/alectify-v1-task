import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { UserRole } from '../enum/users.enum';
import Task from 'src/api/task/entities/task.entity';
 
@Entity()
class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @PrimaryColumn()
  public firstName: string;

  @Column()
  public lastName: string;
 
  @PrimaryColumn({ unique: true })
  public email: string;

  @PrimaryColumn({
    type: "enum",
    enum: UserRole,
    default: UserRole.GUEST
  })
  public userRole: UserRole;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => Task, (task) => task.userId)
  tasks: Task[];
}
 
export default User;