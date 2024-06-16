import { Category } from "@core/enums/category.enum";
import { IIssue } from "@core/models/issue.model";

export class IssueModel implements IIssue {
    constructor(item: Partial<IssueModel>) {
        Object.assign(this, item)
    }
    id: string | null = null
    category: Category = Category.Issue
    description: string = ""
    createdDate: Date = new Date()
}