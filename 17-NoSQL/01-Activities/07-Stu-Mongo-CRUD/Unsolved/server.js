const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "notetaker";
const collections = ["notes"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
  console.log("Database Error:", error);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "./public/index.html"));
});

// TODO: You will make six more routes. Each will use mongojs methods
// to interact with your mongoDB database, as instructed below.
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

// 1. Save a note to the database's collection
// POST: /submit
// ===========================================
app.get("/submit", (req, res) => {
  db.notes.insert(req.body, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  })
});
// 2. Retrieve all notes from the database's collection
// GET: /all
// ====================================================
app.get("/all", (req, res) => {
  db.notes.find({}, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  })
});
// 3. Retrieve one note in the database's collection by it's ObjectId

// TIP: when searching by an id, the id needs to be passed in
// as (mongojs.ObjectId(IdYouWantToFind))
// GET: /find/:id
// ==================================================================
app.get("/find/:id", (req, res) => {
  db.notes.findOne(
    {
      _id: mongojs.ObjectId(req.params.id)
  }, 
  
  (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  })
});
// 4. Update one note in the database's collection by it's ObjectId
// (remember, mongojs.ObjectId(IdYouWantToFind)
// POST: /update/:id
// ================================================================
app.get("/update/:id", (req, res) => {
  db.notes.findOne(
    {
      _id: mongojs.ObjectId(req.params.id)
  }, 
  {
    $set: {
      title: req.body.title,
      note: req.body.note,
      modified: Date.now()
    }
  },
  (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  })
});
// 5. Delete one note from the database's collection by it's ObjectId
// (remember, mongojs.ObjectId(IdYouWantToFind)
// DELETE: /delete/:id
// ==================================================================
app.get("/delete/:id", (req, res) => {
  db.notes.remove(
    {
      _id: mongojs.ObjectId(req.params.id)
  }, 
  
  (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  })
});
// 6. Clear the entire note collection
// DELETE: /clearall
// ===================================
app.get("/clearall", (req, res) => {
  db.notes.remove({}, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  })
});
// Listen on port 3000
app.listen(3000, () => {
  console.log("App running on port 3000!");
});
