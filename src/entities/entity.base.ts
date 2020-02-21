import { Column, ObjectID, ObjectIdColumn } from 'typeorm';

export abstract class EntityBase {

    @ObjectIdColumn()
    public _id!: ObjectID;

    @Column()
    public createdAt?: Date;

    @Column()
    public updatedAt?: Date;
}
