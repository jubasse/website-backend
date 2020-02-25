import { Column, Entity } from 'typeorm';
import { EntityBase } from './entity.base';

@Entity()
export class Skill extends EntityBase {
    @Column({ unique: true })
    public name!: string;

    @Column({ nullable: true, default: null })
    public description?: string;

    @Column({ unique: true })
    public imagePath!: string;
}
