import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPasswordToUsers1709830147031 implements MigrationInterface {
    name = 'AddPasswordToUsers1709830147031'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
    }

}
