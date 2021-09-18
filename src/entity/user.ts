import { Role } from 'src/enum/role.enum';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id?: number;
  @CreateDateColumn({ type: 'datetime' })
  createdDate?: Date;
  @UpdateDateColumn({ type: 'datetime' })
  updatedDate?: Date;
  @Column({ type: 'boolean', default: true })
  isActive?: boolean;
  @Column({ type: 'varchar', length: 30, unique: true  })
  nickname?: string;
  @Column({ type: 'varchar', length: 100 })
  password?: string;
  @Column({ type: 'varchar', length: 40, unique: true })
  email?: string;
  @Column({ type: 'int'})
  age?: number;
  @Column({ type: 'boolean', default:1 })
  gender?: boolean;
  @Column({ type: 'varchar', default: Role.User })
  rol?: Role;
}