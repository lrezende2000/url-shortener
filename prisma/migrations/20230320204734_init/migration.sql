-- CreateTable
CREATE TABLE "url" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "realLink" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME
);
