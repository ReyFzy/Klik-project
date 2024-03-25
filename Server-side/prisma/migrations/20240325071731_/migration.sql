/*
  Warnings:

  - You are about to drop the column `isVerifed` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `isVerifed`,
    ADD COLUMN `isVerified` BOOLEAN NOT NULL DEFAULT false;
