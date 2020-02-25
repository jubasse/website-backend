import { Column, Entity } from 'typeorm';
import { JobTypeEnum } from '../enums';
import { EntityBase } from './entity.base';

@Entity()
export class Experience extends EntityBase {
    @Column({ unique: true })
    public name!: string;

    @Column()
    public jobTitle!: string;

    @Column()
    public jobType!: JobTypeEnum;

    @Column()
    public jobContext!: string;

    @Column()
    public projectName!: string;

    @Column()
    public missionObjective?: string;

    @Column({ unique: true })
    public imagePath!: string;

    @Column({ nullable: true })
    public startedAt?: Date;

    @Column({ nullable: true })
    public endedAt?: Date;
}
