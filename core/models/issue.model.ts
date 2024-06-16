import { Category } from "../enums/category.enum"

export interface IIssue {
    id: string | null
    category: Category
    description: string
    createdDate: Date
}