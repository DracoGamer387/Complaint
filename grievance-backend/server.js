const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post("/submit", (req, res) => {
  const { title, description, mood, timestamp } = req.body;

  console.log("📝 New Grievance Received:");
  console.log("Title:", title);
  console.log("Description:", description);
  console.log("Mood:", mood);
  console.log("Timestamp:", timestamp);

  // Optionally: save to a database or email here

  res.status(200).json({ message: "Grievance received 💌" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
