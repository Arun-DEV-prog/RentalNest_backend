-- CreateEnum
CREATE TYPE "rentalStatus" AS ENUM ('pending', 'approved', 'rejected', 'active_completed');

-- AlterTable
ALTER TABLE "properties" ADD COLUMN     "propertiesId" TEXT;

-- CreateTable
CREATE TABLE "rentalrequest" (
    "id" TEXT NOT NULL,
    "properties_id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "move_in_date" TEXT NOT NULL,
    "lease_duration" TEXT NOT NULL,
    "status" "rentalStatus" NOT NULL DEFAULT 'pending',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "rentalrequest_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "rentalrequest" ADD CONSTRAINT "rentalrequest_properties_id_fkey" FOREIGN KEY ("properties_id") REFERENCES "properties"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rentalrequest" ADD CONSTRAINT "rentalrequest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
