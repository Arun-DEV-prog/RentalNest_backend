-- CreateEnum
CREATE TYPE "usersRole" AS ENUM ('tenant', 'landlord', 'admin');

-- CreateEnum
CREATE TYPE "userStatus" AS ENUM ('active', 'banned');

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "name" VARCHAR NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "usersRole" NOT NULL,
    "phone" TEXT NOT NULL,
    "status" "userStatus" NOT NULL,
    "divison" CHAR NOT NULL,
    "district" CHAR NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
