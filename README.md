# REAL-TIME-COLLABORATIVE-DOCUMENT-EDITOR
*COMPANY*: CODTECH IT SOLUTIONS 

*NAME*: MUZAMMIL AHMED 

*INTERN ID*: CTO4DG943

*DOMAIN*: WEB DEVELOPMENT

*DURATION*:4 WEEKS

*MENTOR*: NEELA SANTOSH 

# Real-Time Collaborative Document Editor
This project is a full-stack real-time collaborative document editor built as part of Task 3 of the CodTech Web Development Internship. The application allows multiple users to collaborate and edit documents simultaneously, similar to tools like Google Docs. It is designed using a modern and scalable tech stack including React.js, Node.js, Socket.io, and MongoDB.

# Technologies Used
Frontend: React.js, Quill.js (Rich Text Editor)

Backend: Node.js, Express.js

Database: MongoDB

Real-time Communication: Socket.io

Routing: React Router

Unique Document IDs: UUID

# Features
1. Real-time editing: All users connected to the same document see changes instantly using WebSockets.

2.  Rich text editing: Powered by Quill.js for a smooth WYSIWYG editing experience.

3.  Auto-save: Document content is saved every few seconds to MongoDB.

4.  Unique document links: Users can create and share documents using unique URLs.

5. WebSocket implementation: Efficient and fast sync between multiple clients.

# How It Works
1. A new document is created when the user visits the root URL (/), and a UUID is generated.

2. The frontend connects to the backend using Socket.io and requests the document content by ID.

3. If the document doesn't exist, a new one is created and stored in MongoDB.

4. As users type, deltas (changes) are emitted to the server and broadcast to all other clients in the same document room.

5. The document is automatically saved to MongoDB at regular intervals (every 2 seconds).

# This project demonstrates your ability to:

1. Work with full-stack technologies.

2. Implement real-time communication using WebSockets.

3. Manage a NoSQL database.

4. Build responsive, interactive UIs using React.



<img width="709" height="705" alt="Image" src="https://github.com/user-attachments/assets/597e5a65-64ae-469e-9b0d-7686e8232f6e" />
