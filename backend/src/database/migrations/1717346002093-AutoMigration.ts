import { MigrationInterface, QueryRunner } from "typeorm";

export class AutoMigration1717346002093 implements MigrationInterface {
    name = 'AutoMigration1717346002093'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "issue" ALTER COLUMN "createdDate" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "issue" ALTER COLUMN "createdDate" SET DEFAULT '2024-06-02 18:30:28.877853+02'`);
    }

}
