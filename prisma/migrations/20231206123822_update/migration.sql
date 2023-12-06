-- CreateEnum
CREATE TYPE "Notification" AS ENUM ('all');

-- CreateEnum
CREATE TYPE "Language" AS ENUM ('spanish', 'english', 'german', 'italian', 'french');

-- CreateEnum
CREATE TYPE "Theme" AS ENUM ('dark', 'light', 'red', 'blue', 'green');

-- AlterTable
ALTER TABLE "Platform" ADD COLUMN     "preferencesId" INTEGER;

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "preferencesId" INTEGER,
    "optionsId" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Preferences" (
    "id" SERIAL NOT NULL,
    "genreId" TEXT NOT NULL,
    "eSRBRatingId" TEXT,

    CONSTRAINT "Preferences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Options" (
    "id" SERIAL NOT NULL,
    "theme" "Theme" NOT NULL,
    "language" "Language" NOT NULL,
    "notifications" "Notification" NOT NULL,

    CONSTRAINT "Options_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CreatedVideogames" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FavouriteVideogames" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_WishlistVideogames" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PreferencesToPublisher" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PreferencesToTag" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PreferencesToStore" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlatformToPreferences" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_DeveloperToPreferences" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_GenreToPreferences" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_CreatedVideogames_AB_unique" ON "_CreatedVideogames"("A", "B");

-- CreateIndex
CREATE INDEX "_CreatedVideogames_B_index" ON "_CreatedVideogames"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FavouriteVideogames_AB_unique" ON "_FavouriteVideogames"("A", "B");

-- CreateIndex
CREATE INDEX "_FavouriteVideogames_B_index" ON "_FavouriteVideogames"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_WishlistVideogames_AB_unique" ON "_WishlistVideogames"("A", "B");

-- CreateIndex
CREATE INDEX "_WishlistVideogames_B_index" ON "_WishlistVideogames"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PreferencesToPublisher_AB_unique" ON "_PreferencesToPublisher"("A", "B");

-- CreateIndex
CREATE INDEX "_PreferencesToPublisher_B_index" ON "_PreferencesToPublisher"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PreferencesToTag_AB_unique" ON "_PreferencesToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_PreferencesToTag_B_index" ON "_PreferencesToTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PreferencesToStore_AB_unique" ON "_PreferencesToStore"("A", "B");

-- CreateIndex
CREATE INDEX "_PreferencesToStore_B_index" ON "_PreferencesToStore"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlatformToPreferences_AB_unique" ON "_PlatformToPreferences"("A", "B");

-- CreateIndex
CREATE INDEX "_PlatformToPreferences_B_index" ON "_PlatformToPreferences"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DeveloperToPreferences_AB_unique" ON "_DeveloperToPreferences"("A", "B");

-- CreateIndex
CREATE INDEX "_DeveloperToPreferences_B_index" ON "_DeveloperToPreferences"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_GenreToPreferences_AB_unique" ON "_GenreToPreferences"("A", "B");

-- CreateIndex
CREATE INDEX "_GenreToPreferences_B_index" ON "_GenreToPreferences"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_preferencesId_fkey" FOREIGN KEY ("preferencesId") REFERENCES "Preferences"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_optionsId_fkey" FOREIGN KEY ("optionsId") REFERENCES "Options"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preferences" ADD CONSTRAINT "Preferences_eSRBRatingId_fkey" FOREIGN KEY ("eSRBRatingId") REFERENCES "ESRBRating"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CreatedVideogames" ADD CONSTRAINT "_CreatedVideogames_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CreatedVideogames" ADD CONSTRAINT "_CreatedVideogames_B_fkey" FOREIGN KEY ("B") REFERENCES "Videogames"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FavouriteVideogames" ADD CONSTRAINT "_FavouriteVideogames_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FavouriteVideogames" ADD CONSTRAINT "_FavouriteVideogames_B_fkey" FOREIGN KEY ("B") REFERENCES "Videogames"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_WishlistVideogames" ADD CONSTRAINT "_WishlistVideogames_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_WishlistVideogames" ADD CONSTRAINT "_WishlistVideogames_B_fkey" FOREIGN KEY ("B") REFERENCES "Videogames"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PreferencesToPublisher" ADD CONSTRAINT "_PreferencesToPublisher_A_fkey" FOREIGN KEY ("A") REFERENCES "Preferences"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PreferencesToPublisher" ADD CONSTRAINT "_PreferencesToPublisher_B_fkey" FOREIGN KEY ("B") REFERENCES "Publisher"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PreferencesToTag" ADD CONSTRAINT "_PreferencesToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Preferences"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PreferencesToTag" ADD CONSTRAINT "_PreferencesToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PreferencesToStore" ADD CONSTRAINT "_PreferencesToStore_A_fkey" FOREIGN KEY ("A") REFERENCES "Preferences"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PreferencesToStore" ADD CONSTRAINT "_PreferencesToStore_B_fkey" FOREIGN KEY ("B") REFERENCES "Store"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlatformToPreferences" ADD CONSTRAINT "_PlatformToPreferences_A_fkey" FOREIGN KEY ("A") REFERENCES "Platform"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlatformToPreferences" ADD CONSTRAINT "_PlatformToPreferences_B_fkey" FOREIGN KEY ("B") REFERENCES "Preferences"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DeveloperToPreferences" ADD CONSTRAINT "_DeveloperToPreferences_A_fkey" FOREIGN KEY ("A") REFERENCES "Developer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DeveloperToPreferences" ADD CONSTRAINT "_DeveloperToPreferences_B_fkey" FOREIGN KEY ("B") REFERENCES "Preferences"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreToPreferences" ADD CONSTRAINT "_GenreToPreferences_A_fkey" FOREIGN KEY ("A") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreToPreferences" ADD CONSTRAINT "_GenreToPreferences_B_fkey" FOREIGN KEY ("B") REFERENCES "Preferences"("id") ON DELETE CASCADE ON UPDATE CASCADE;
