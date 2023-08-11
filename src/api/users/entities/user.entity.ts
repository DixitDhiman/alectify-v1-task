import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { UserRole } from '../enum/users.enum';
import Task from 'src/api/task/entities/task.entity';

@Entity()
class User {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public firstName: string;

  @Column()
  public lastName: string;

  @Column({ unique: true })
  public email: string;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.GUEST
  })
  public userRole: UserRole;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => Task, (task: Task) => task.user)
  public posts: Task[];
}

export default User;