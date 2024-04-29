-- AlterTable
ALTER TABLE `user` MODIFY `role` ENUM('owner', 'admin', 'user') NOT NULL DEFAULT 'user';
