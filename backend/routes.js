const express = require("express");
const router = express.Router();
const db = require("./database");
const bcrypt = require("bcrypt");

const saltRounds = 10;

/** CRUD for Projects */

router.get("/projects", (req, res) => {
  db.all("SELECT * FROM projects", (err, projects) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(projects);
    }
  });
});

router.post("/projects", (req, res) => {
  db.run(
    "INSERT INTO projects (name, description, picture, completed) VALUES (?, ?, ?, ?)",
    req.body.name,
    req.body.description,
    req.body.picture,
    req.body.completed,
    function (err) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json({ id: this.lastID });
      }
    }
  );
});

router.get("/projects/:id", (req, res) => {
  db.get(
    "SELECT * FROM projects WHERE id = ?",
    req.params.id,
    (err, project) => {
      if (err) {
        res.status(500).send(err);
      } else if (project) {
        res.json(project);
      } else {
        res.status(404).send("Project not found");
      }
    }
  );
});

router.put("/projects/:id", (req, res) => {
  db.run(
    "UPDATE projects SET name = ?, description = ?, picture = ? WHERE id = ?",
    req.body.name,
    req.body.description,
    req.body.picture,
    req.params.id,
    function (err) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json({ changes: this.changes });
      }
    }
  );
});

router.delete("/projects/:id", (req, res) => {
  db.run("DELETE FROM projects WHERE id = ?", req.params.id, function (err) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({ changes: this.changes });
    }
  });
});

/** CRUD for Blogs */

router.get("/blogs", (req, res) => {
  db.all("SELECT * FROM blogs", (err, blogs) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(blogs);
    }
  });
});

router.post("/blogs", (req, res) => {
  db.run(
    "INSERT INTO blogs (title, content, picture) VALUES (?, ?, ?)",
    req.body.title,
    req.body.content,
    req.body.picture,
    function (err) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json({ id: this.lastID });
      }
    }
  );
});

router.get("/blogs/:id", (req, res) => {
  db.get("SELECT * FROM blogs WHERE id = ?", req.params.id, (err, blog) => {
    if (err) {
      res.status(500).send(err);
    } else if (blog) {
      res.json(blog);
    } else {
      res.status(404).send("Blog not found");
    }
  });
});

router.put("/blogs/:id", (req, res) => {
  db.run(
    "UPDATE blogs SET title = ?, content = ?, picture = ? WHERE id = ?",
    req.body.title,
    req.body.content,
    req.body.picture,
    req.params.id,
    function (err) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json({ changes: this.changes });
      }
    }
  );
});

router.delete("/blogs/:id", (req, res) => {
  db.run("DELETE FROM blogs WHERE id = ?", req.params.id, function (err) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({ changes: this.changes });
    }
  });
});

/** CRUD for Image Collections */

router.get("/imageCollections", (req, res) => {
  db.all("SELECT * FROM imageCollections", (err, imageCollections) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json(imageCollections);
  });
});

router.post("/imageCollections", (req, res) => {
  db.run(
    "INSERT INTO imageCollections (name, description, picture, project_id, blog_id) VALUES (?, ?, ?, ?, ?)",
    req.body.name,
    req.body.description,
    req.body.picture,
    req.body.project_id,
    req.body.blog_id,
    function (err) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json({ id: this.lastID });
      }
    }
  );
});

router.get("/imageCollections/:id", (req, res) => {
  db.get(
    "SELECT * FROM imageCollections WHERE id = ?",
    req.params.id,
    (err, imageCollection) => {
      if (err) {
        res.status(500).send(err);
      } else if (imageCollection) {
        res.json(imageCollection);
      }
      res.status(404).send("Image Collection not found");
    }
  );
});

router.put("/imageCollections/:id", (req, res) => {
  db.run(
    "UPDATE imageCollections SET name = ?, description = ?, picture = ?, project_id = ?, blog_id = ? WHERE id = ?",
    req.body.name,
    req.body.description,
    req.body.picture,
    req.body.project_id,
    req.body.blog_id,
    req.params.id,
    function (err) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json({ changes: this.changes });
      }
    }
  );
});

router.delete("/imageCollections/:id", (req, res) => {
  db.run(
    "DELETE FROM imageCollections WHERE id = ?",
    req.params.id,
    function (err) {
      if (err) {
        res.status;
      }
      res.json({ changes: this.changes });
    }
  );
});

/** CRUD for Users */

router.get("/users", (req, res) => {
  db.all("SELECT * FROM users", (err, users) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json(users);
  });
});

router.post("/users", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    db.run(
      "INSERT INTO users (username, password) VALUES (?, ?)",
      req.body.username,
      hashedPassword,
      function (err) {
        if (err) {
          res.status(500).send(err);
        } else {
          res.json({ id: this.lastID });
        }
      }
    );
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/users/:id", (req, res) => {
  db.get("SELECT * FROM users WHERE id = ?", req.params.id, (err, user) => {
    if (err) {
      res.status;
    }
    res.json(user);
  });
});

router.put("/users/:id", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    db.run(
      "UPDATE users SET username = ?, password = ? WHERE id = ?",
      req.body.username,
      hashedPassword,
      req.params.id,
      function (err) {
        if (err) {
          res.status(500).send(err);
        } else {
          res.json({ changes: this.changes });
        }
      }
    );
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete("/users/:id", (req, res) => {
  db.run("DELETE FROM users WHERE id = ?", req.params.id, function (err) {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ changes: this.changes });
  });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  db.get(
    "SELECT * FROM users WHERE username = ?",
    username,
    async (err, user) => {
      if (err) {
        res.status(500).send(err);
      } else if (!user) {
        res.status(400).send("User not found");
      } else {
        const match = await bcrypt.compare(password, user.password);
        if (match) {
          res.json({ message: "Login successful" });
        } else {
          res.status(400).send("Invalid password");
        }
      }
    }
  );
});

module.exports = router;
