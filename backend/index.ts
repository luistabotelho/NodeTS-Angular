// Serverless Entrypoint - Mapper to handlers

import { Handler } from "aws-lambda";
import { GetIssuesHandler } from "./src/handlers/get-issues.handler";
import { SaveIssueHandler } from "./src/handlers/save-issue.handler";
import { DeleteIssueHandler } from "./src/handlers/delete-issue.handler";

export const getIssues: Handler = GetIssuesHandler.main

export const saveIssue: Handler = SaveIssueHandler.main

export const deleteIssue: Handler = DeleteIssueHandler.main