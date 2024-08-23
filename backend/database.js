const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db.sqlite");

db.serialize(() => {
  // Create a new table named "projects" if it doesn't exist
  db.run(
    "CREATE TABLE IF NOT EXISTS projects (id INTEGER PRIMARY KEY, name TEXT, description TEXT, completed INTEGER DEFAULT 0, picture TEXT)"
  );

  // Create a new table named "blogs" if it doesn't exist
  db.run(
    "CREATE TABLE IF NOT EXISTS blogs (id INTEGER PRIMARY KEY, title TEXT, content TEXT, picture TEXT)"
  );

  // Create a new table named "imageCollections" if it doesn't exist
  db.run(
    `CREATE TABLE IF NOT EXISTS imageCollections (
      id INTEGER PRIMARY KEY,
      name TEXT,
      description TEXT,
      picture TEXT,
      project_id INTEGER,
      blog_id INTEGER,
      FOREIGN KEY (project_id) REFERENCES projects(id),
      FOREIGN KEY (blog_id) REFERENCES blogs(id)
    )`
  );
});

module.exports = db;
