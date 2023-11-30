-- CreateTable
CREATE TABLE "Videogames" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "description_raw" TEXT NOT NULL,
    "metacritic" DOUBLE PRECISION,
    "released" TEXT,
    "tba" BOOLEAN NOT NULL DEFAULT false,
    "background_image" TEXT NOT NULL,
    "background_image_additional" TEXT,
    "rating" DOUBLE PRECISION,
    "playtime" DOUBLE PRECISION,
    "dominant_color" TEXT,

    CONSTRAINT "Videogames_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Screenshots" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "videogamesId" TEXT,

    CONSTRAINT "Screenshots_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MetacriticPlatforms" (
    "id" TEXT NOT NULL,

    CONSTRAINT "MetacriticPlatforms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Platform" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "year_start" INTEGER,
    "games_count" INTEGER,
    "min_requirements" TEXT,
    "recommended_requirements" TEXT,

    CONSTRAINT "Platform_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Store" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "games_count" INTEGER,

    CONSTRAINT "Store_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Developer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "games_count" INTEGER,

    CONSTRAINT "Developer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Genre" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "games_count" INTEGER,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "games_count" INTEGER,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Publisher" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "games_count" INTEGER,

    CONSTRAINT "Publisher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ESRBRating" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "ESRBRating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MetacriticPlatformsToVideogames" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlatformToVideogames" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_StoreToVideogames" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_DeveloperToVideogames" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_GenreToVideogames" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TagToVideogames" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PublisherToVideogames" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ESRBRatingToVideogames" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Videogames_slug_key" ON "Videogames"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Platform_name_key" ON "Platform"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Platform_slug_key" ON "Platform"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Store_name_key" ON "Store"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Store_slug_key" ON "Store"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Developer_name_key" ON "Developer"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Developer_slug_key" ON "Developer"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Genre_name_key" ON "Genre"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Genre_slug_key" ON "Genre"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_slug_key" ON "Tag"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Publisher_name_key" ON "Publisher"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Publisher_slug_key" ON "Publisher"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "ESRBRating_name_key" ON "ESRBRating"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ESRBRating_slug_key" ON "ESRBRating"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "_MetacriticPlatformsToVideogames_AB_unique" ON "_MetacriticPlatformsToVideogames"("A", "B");

-- CreateIndex
CREATE INDEX "_MetacriticPlatformsToVideogames_B_index" ON "_MetacriticPlatformsToVideogames"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlatformToVideogames_AB_unique" ON "_PlatformToVideogames"("A", "B");

-- CreateIndex
CREATE INDEX "_PlatformToVideogames_B_index" ON "_PlatformToVideogames"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_StoreToVideogames_AB_unique" ON "_StoreToVideogames"("A", "B");

-- CreateIndex
CREATE INDEX "_StoreToVideogames_B_index" ON "_StoreToVideogames"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DeveloperToVideogames_AB_unique" ON "_DeveloperToVideogames"("A", "B");

-- CreateIndex
CREATE INDEX "_DeveloperToVideogames_B_index" ON "_DeveloperToVideogames"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_GenreToVideogames_AB_unique" ON "_GenreToVideogames"("A", "B");

-- CreateIndex
CREATE INDEX "_GenreToVideogames_B_index" ON "_GenreToVideogames"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TagToVideogames_AB_unique" ON "_TagToVideogames"("A", "B");

-- CreateIndex
CREATE INDEX "_TagToVideogames_B_index" ON "_TagToVideogames"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PublisherToVideogames_AB_unique" ON "_PublisherToVideogames"("A", "B");

-- CreateIndex
CREATE INDEX "_PublisherToVideogames_B_index" ON "_PublisherToVideogames"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ESRBRatingToVideogames_AB_unique" ON "_ESRBRatingToVideogames"("A", "B");

-- CreateIndex
CREATE INDEX "_ESRBRatingToVideogames_B_index" ON "_ESRBRatingToVideogames"("B");

-- AddForeignKey
ALTER TABLE "Screenshots" ADD CONSTRAINT "Screenshots_videogamesId_fkey" FOREIGN KEY ("videogamesId") REFERENCES "Videogames"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MetacriticPlatformsToVideogames" ADD CONSTRAINT "_MetacriticPlatformsToVideogames_A_fkey" FOREIGN KEY ("A") REFERENCES "MetacriticPlatforms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MetacriticPlatformsToVideogames" ADD CONSTRAINT "_MetacriticPlatformsToVideogames_B_fkey" FOREIGN KEY ("B") REFERENCES "Videogames"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlatformToVideogames" ADD CONSTRAINT "_PlatformToVideogames_A_fkey" FOREIGN KEY ("A") REFERENCES "Platform"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlatformToVideogames" ADD CONSTRAINT "_PlatformToVideogames_B_fkey" FOREIGN KEY ("B") REFERENCES "Videogames"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StoreToVideogames" ADD CONSTRAINT "_StoreToVideogames_A_fkey" FOREIGN KEY ("A") REFERENCES "Store"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StoreToVideogames" ADD CONSTRAINT "_StoreToVideogames_B_fkey" FOREIGN KEY ("B") REFERENCES "Videogames"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DeveloperToVideogames" ADD CONSTRAINT "_DeveloperToVideogames_A_fkey" FOREIGN KEY ("A") REFERENCES "Developer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DeveloperToVideogames" ADD CONSTRAINT "_DeveloperToVideogames_B_fkey" FOREIGN KEY ("B") REFERENCES "Videogames"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreToVideogames" ADD CONSTRAINT "_GenreToVideogames_A_fkey" FOREIGN KEY ("A") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreToVideogames" ADD CONSTRAINT "_GenreToVideogames_B_fkey" FOREIGN KEY ("B") REFERENCES "Videogames"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TagToVideogames" ADD CONSTRAINT "_TagToVideogames_A_fkey" FOREIGN KEY ("A") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TagToVideogames" ADD CONSTRAINT "_TagToVideogames_B_fkey" FOREIGN KEY ("B") REFERENCES "Videogames"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublisherToVideogames" ADD CONSTRAINT "_PublisherToVideogames_A_fkey" FOREIGN KEY ("A") REFERENCES "Publisher"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublisherToVideogames" ADD CONSTRAINT "_PublisherToVideogames_B_fkey" FOREIGN KEY ("B") REFERENCES "Videogames"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ESRBRatingToVideogames" ADD CONSTRAINT "_ESRBRatingToVideogames_A_fkey" FOREIGN KEY ("A") REFERENCES "ESRBRating"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ESRBRatingToVideogames" ADD CONSTRAINT "_ESRBRatingToVideogames_B_fkey" FOREIGN KEY ("B") REFERENCES "Videogames"("id") ON DELETE CASCADE ON UPDATE CASCADE;
