/*
  Warnings:

  - You are about to drop the column `refresh_token` on the `user` table. All the data in the column will be lost.
  - Added the required column `isVerifed` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `refresh_token`,
    ADD COLUMN `code_otp` VARCHAR(191) NULL,
    ADD COLUMN `isVerifed` BOOLEAN NOT NULL;
