
BEGIN TRANSACTION;

-- Destroying all the tables if they exist
DROP TABLE IF EXISTS "member";


-- Create tables
CREATE TABLE "member" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

INSERT INTO "member" ("name") VALUES
('Héraclès'),
('Thésée'),
('Persée'),
('Ulysse'),
('Achil'),
('Bellérophon');



COMMIT;

