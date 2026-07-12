-- Create user_progress table
CREATE TABLE user_progress (
  user_id UUID REFERENCES auth.users NOT NULL PRIMARY KEY,
  native_lang TEXT NOT NULL DEFAULT 'pt',
  xp INTEGER NOT NULL DEFAULT 0,
  unlocked_lesson_id INTEGER NOT NULL DEFAULT 1,
  streak INTEGER NOT NULL DEFAULT 0,
  last_played_date TEXT NOT NULL DEFAULT '',
  goal TEXT
);

-- Set up Row Level Security (RLS)
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

-- Allow users to view their own progress
CREATE POLICY "Users can view own progress." ON user_progress
  FOR SELECT USING (auth.uid() = user_id);

-- Allow users to insert their own progress
CREATE POLICY "Users can insert own progress." ON user_progress
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Allow users to update their own progress
CREATE POLICY "Users can update own progress." ON user_progress
  FOR UPDATE USING (auth.uid() = user_id);
