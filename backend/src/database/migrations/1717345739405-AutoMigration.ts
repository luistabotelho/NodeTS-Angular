import { MigrationInterface, QueryRunner } from "typeorm";

export class AutoMigration1717345739405 implements MigrationInterface {
    name = 'AutoMigration1717345739405'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "issue" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "category" character varying(10) NOT NULL, "description" character varying(250) NOT NULL, "createdDate" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT 'now()', CONSTRAINT "PK_f80e086c249b9f3f3ff2fd321b7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "issue"`);
    }

}
