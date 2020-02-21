import { Column, Entity } from 'typeorm';
import { EntityBase } from './entity.base';

export enum JobTypeEnum {
    CDS = 'Centre de service (CDS)',
    ITSM = 'Gestion de services informatique (ITSM)',
    IT = `Technologie de l'information (IT)`
}

@Entity()
export class ExperienceEntity extends EntityBase {
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
