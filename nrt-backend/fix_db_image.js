require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function fixImage() {
  const badUrl = 'https://images.unsplash.com/photo-1586528116311-ad8ed7c663c0?auto=format&fit=crop&w=1200&q=80';
  const goodUrl = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80'; // Valid warehouse/industry image
  
  try {
    const res = await pool.query(
      'UPDATE projects SET image_url = $1 WHERE image_url = $2 RETURNING *',
      [goodUrl, badUrl]
    );
    console.log(`Updated ${res.rowCount} row(s).`);
  } catch (err) {
    console.error('Error updating DB:', err);
  } finally {
    pool.end();
  }
}

fixImage();
