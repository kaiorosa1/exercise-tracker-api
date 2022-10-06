import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateExercise1665020672008 implements MigrationInterface {
    name = 'CreateExercise1665020672008'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_exercises" ("id" varchar PRIMARY KEY NOT NULL, "duration" varchar NOT NULL, "date" datetime NOT NULL, "user_id" varchar NOT NULL, "category_id" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "title" varchar NOT NULL, "description" varchar NOT NULL, CONSTRAINT "FK_38c6a6434a839fa596ddd7f2e05" FOREIGN KEY ("category_id") REFERENCES "categories" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_d05e8618f5b30e7eb49952a531b" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_exercises"("id", "duration", "date", "user_id", "category_id", "created_at", "updated_at") SELECT "id", "duration", "date", "user_id", "category_id", "created_at", "updated_at" FROM "exercises"`);
        await queryRunner.query(`DROP TABLE "exercises"`);
        await queryRunner.query(`ALTER TABLE "temporary_exercises" RENAME TO "exercises"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exercises" RENAME TO "temporary_exercises"`);
        await queryRunner.query(`CREATE TABLE "exercises" ("id" varchar PRIMARY KEY NOT NULL, "duration" varchar NOT NULL, "date" datetime NOT NULL, "user_id" varchar NOT NULL, "category_id" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), CONSTRAINT "FK_38c6a6434a839fa596ddd7f2e05" FOREIGN KEY ("category_id") REFERENCES "categories" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_d05e8618f5b30e7eb49952a531b" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "exercises"("id", "duration", "date", "user_id", "category_id", "created_at", "updated_at") SELECT "id", "duration", "date", "user_id", "category_id", "created_at", "updated_at" FROM "temporary_exercises"`);
        await queryRunner.query(`DROP TABLE "temporary_exercises"`);
    }

}
