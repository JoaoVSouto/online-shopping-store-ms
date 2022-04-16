/*
  Warnings:

  - A unique constraint covering the columns `[authUserID]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "authUserID" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Customer_authUserID_key" ON "Customer"("authUserID");
