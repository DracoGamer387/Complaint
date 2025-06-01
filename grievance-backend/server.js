const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post("/submit", (req, res) => {
  const { title, description, mood, timestamp } = req.body;
  console.log("New grievance:", { title, description, mood, timestamp });
  res.status(200).json({ message: "Grievance received 💌" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
