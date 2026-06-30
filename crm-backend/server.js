const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Maharshi@123",
  database: "crm_db",
});

db.connect((err) => {
  if (err) {
    console.log("Database Error:", err);
    return;
  }

  console.log("MySQL Connected ✅");
});

app.get("/", (req, res) => {
  res.json({
    message: "CRM backend is running",
    endpoints: ["/api/leads", "/api/leads/:id"],
  });
});

app.get("/api/leads", (req, res) => {
  db.query("SELECT * FROM leads", (err, results) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(results);
  });
});

app.delete("/api/leads/:id", (req, res) => {
  const { id } = req.params;

  db.query(
    "DELETE FROM leads WHERE id = ?",
    [id],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Lead deleted successfully",
      });
    }
  );
});

app.post("/api/leads", (req, res) => {
  const {
    customer,
    company,
    industry,
    status,
    stage,
    value,
    owner,
    source,
    phone,
    email,
  } = req.body;

  const sql = `
    INSERT INTO leads
    (
      customer,
      company,
      industry,
      status,
      stage,
      value,
      owner,
      source,
      phone,
      email
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      customer,
      company,
      industry,
      status,
      stage,
      value,
      owner,
      source,
      phone,
      email,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }

      res.json({
        message: "Lead added successfully",
        id: result.insertId,
      });
    }
  );
});

app.put("/api/leads/:id", (req, res) => {
  const { id } = req.params;

  const {
    customer,
    company,
    industry,
    status,
    phone,
    email,
  } = req.body;

  const sql = `
    UPDATE leads
    SET customer=?,
        company=?,
        industry=?,
        status=?,
        phone=?,
        email=?
    WHERE id=?
  `;

  db.query(
    sql,
    [
      customer,
      company,
      industry,
      status,
      phone,
      email,
      id,
    ],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Lead updated successfully",
      });
    }
  );
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});