const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const socketIo = require("socket.io");
const cors = require("cors");
const Document = require("./document");

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

mongoose.connect("mongodb://127.0.0.1:27017/collab-docs");

io.on("connection", (socket) => {
  socket.on("get-document", async (docId) => {
    const document = await findOrCreateDocument(docId);
    socket.join(docId);
    socket.emit("load-document", document.data);

    socket.on("send-changes", (delta) => {
      socket.broadcast.to(docId).emit("receive-changes", delta);
    });

    socket.on("save-document", async (data) => {
      await Document.findByIdAndUpdate(docId, { data });
    });
  });
});

async function findOrCreateDocument(id) {
  if (!id) return;
  const document = await Document.findById(id);
  if (document) return document;
  return await Document.create({ _id: id, data: "" });
}

server.listen(3001, () => console.log("Server started on port 3001"));
