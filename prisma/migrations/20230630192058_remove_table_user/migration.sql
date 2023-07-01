/*
  Warnings:

  - You are about to drop the column `creatorId` on the `Note` table. All the data in the column will be lost.
  - You are about to drop the column `creatorId` on the `Todo` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Note" DROP CONSTRAINT "Note_creatorId_fkey";

-- DropForeignKey
ALTER TABLE "Todo" DROP CONSTRAINT "Todo_creatorId_fkey";

-- AlterTable
ALTER TABLE "Note" DROP COLUMN "creatorId";

-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "creatorId";

-- DropTable
DROP TABLE "User";
