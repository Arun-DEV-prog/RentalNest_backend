-- AlterTable
ALTER TABLE "properties" ALTER COLUMN "division" SET DATA TYPE CHAR;

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "role" SET DEFAULT 'tenant',
ALTER COLUMN "divison" SET DATA TYPE CHAR,
ALTER COLUMN "district" SET DATA TYPE CHAR;
