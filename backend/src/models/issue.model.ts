import { Category } from "@core/enums/category.enum";
import { IIssue } from "@core/models/issue.model";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Issue implements IIssue {
    constructor(values: Partial<IIssue>) {
        Object.assign(this, values)
    }

    @PrimaryGeneratedColumn("uuid")
    id: string | null = null;

    @Column({
        type: "character varying",
        length: 10,
        nullable: false
    })
    category: Category = Category.Issue;

    @Column({
        type: "character varying",
        length: 250,
        nullable: false
    })
    description: string = "";

    @Column({
        type: "timestamp with time zone",
        nullable: false
    })
    createdDate: Date = new Date();
}