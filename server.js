const PORT = 8000;
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/gemini", async (req, res) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const chat = model.startChat({
    history: req.body.history,
  });

  const msg = req.body.message;

  const result = await chat.sendMessage(msg);
  const response = result.response;
  const data = response.text();
  console.log(data);
  res.send(data);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
