import { Column, Entity } from 'typeorm';
import { EntityBase } from './entity.base';

@Entity()
export class Formation extends EntityBase {
    @Column({ unique: true })
    public name!: string;

    @Column()
    public organizationName!: string;

    @Column()
    public organizationPlace!: string;

    @Column({ nullable: true, default: null })
    public description?: string;

    @Column()
    public startedAt!: Date;

    @Column({ nullable: true })
    public endedAt?: Date;

    @Column({ unique: true })
    public imagePath!: string;
}
