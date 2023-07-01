/*
  Warnings:

  - You are about to drop the `Tag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TagsOnTodos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TagsOnTodos" DROP CONSTRAINT "TagsOnTodos_tagId_fkey";

-- DropForeignKey
ALTER TABLE "TagsOnTodos" DROP CONSTRAINT "TagsOnTodos_todoId_fkey";

-- DropTable
DROP TABLE "Tag";

-- DropTable
DROP TABLE "TagsOnTodos";
