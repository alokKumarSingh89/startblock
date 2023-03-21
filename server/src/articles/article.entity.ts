import { Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table
export class Article extends Model<Article> {
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
    })
    id: string;

    @Column
    title: string

    @Column({
        type: DataType.TEXT
    })
    body: string

    @Column({defaultValue: DataType.NOW})
    createdAt?: Date;

    @Column({defaultValue: DataType.NOW})
    updatedAt?: Date;
}