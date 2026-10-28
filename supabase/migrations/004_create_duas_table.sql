-- Create duas table (read-only reference data, seeded from src/data/duas.ts)
CREATE TABLE duas (
    id TEXT PRIMARY KEY,
    category TEXT NOT NULL,
    keywords TEXT[] NOT NULL DEFAULT '{}',
    arabic TEXT NOT NULL,
    transliteration TEXT NOT NULL,
    translation_en TEXT NOT NULL,
    translation_ur TEXT NOT NULL,
    reference TEXT NOT NULL,
    verified BOOLEAN NOT NULL DEFAULT FALSE
);

-- Enable Row Level Security
ALTER TABLE duas ENABLE ROW LEVEL SECURITY;

-- Create RLS Policies
-- Readable by anyone (including anon). There are deliberately no insert,
-- update or delete policies: only the dashboard or the service role can write.
CREATE POLICY "Anyone can read duas"
    ON duas FOR SELECT
    USING (true);
