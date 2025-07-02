import React, { useEffect } from "react";
import { io } from "socket.io-client";
import { useParams } from "react-router-dom";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const SAVE_INTERVAL_MS = 2000;
let socket;
let quill;

export default function App() {
  const { id: documentId } = useParams();

  useEffect(() => {
    socket = io("http://localhost:3001");
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    const editor = document.getElementById("editor"); // <-- FIXED LINE
    quill = new Quill(editor, { theme: "snow" });
    quill.disable();
    quill.setText("Loading...");
  }, []);

  useEffect(() => {
    if (socket == null || quill == null) return;

    socket.once("load-document", (document) => {
      quill.setContents(document);
      quill.enable();
    });

    socket.emit("get-document", documentId);
  }, [documentId]);

  useEffect(() => {
    if (socket == null || quill == null) return;

    const handler = (delta) => {
      quill.updateContents(delta);
    };
    socket.on("receive-changes", handler);

    return () => {
      socket.off("receive-changes", handler);
    };
  }, []);

  useEffect(() => {
    if (socket == null || quill == null) return;

    const handler = (delta, oldDelta, source) => {
      if (source !== "user") return;
      socket.emit("send-changes", delta);
    };
    quill.on("text-change", handler);

    return () => {
      quill.off("text-change", handler);
    };
  }, []);

  useEffect(() => {
    if (socket == null || quill == null) return;

    const interval = setInterval(() => {
      socket.emit("save-document", quill.getContents());
    }, SAVE_INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  return <div id="editor" style={{ padding: "50px" }} />;
}
