-- CreateEnum
CREATE TYPE "usersRole" AS ENUM ('tenant', 'landlord', 'admin');

-- CreateEnum
CREATE TYPE "userStatus" AS ENUM ('active', 'banned');

-- CreateTable
CREATE TABLE "properties" (
    "id" TEXT NOT NULL,
    "title" VARCHAR NOT NULL,
    "dexcription" TEXT,
    "rent" DECIMAL(65,30) NOT NULL,
    "bedrooms" DECIMAL(65,30) NOT NULL,
    "bathrooms" DECIMAL(65,30) NOT NULL,
    "size_sqft" DECIMAL(65,30) NOT NULL,
    "floor" DECIMAL(65,30) NOT NULL,
    "availability" BOOLEAN NOT NULL,
    "available_from" TIMESTAMP(3) NOT NULL,
    "address" TEXT NOT NULL,
    "division" CHAR NOT NULL,
    "images" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "properties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" VARCHAR NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "usersRole" NOT NULL,
    "phone" TEXT NOT NULL,
    "status" "userStatus" NOT NULL DEFAULT 'active',
    "divison" CHAR NOT NULL,
    "district" CHAR NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "properties" ADD CONSTRAINT "properties_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
