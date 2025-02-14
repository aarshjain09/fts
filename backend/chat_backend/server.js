const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000", // Allow frontend connection
        methods: ["GET", "POST"]
    }
});

app.use(cors());

let chatRooms = {}; // Stores active chat rooms and messages

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    // Send available chat rooms when a user connects
    socket.emit("roomList", Object.keys(chatRooms));

    // Handle room creation
    socket.on("createRoom", (roomName) => {
        if (!chatRooms[roomName]) {
            chatRooms[roomName] = [];
            io.emit("roomList", Object.keys(chatRooms)); // Update room list for all users
        }
    });

    // Handle joining a room
    socket.on("joinRoom", (room) => {
        socket.join(room);
        socket.emit("message", `You joined ${room}`);
        socket.emit("chatHistory", chatRooms[room]); // Send previous messages
    });

    // Handle sending messages
    socket.on("chatMessage", ({ room, message }) => {
        const msg = `User ${socket.id}: ${message}`;
        chatRooms[room].push(msg);
        io.to(room).emit("message", msg); // Broadcast message to room
    });

    // Handle user disconnect
    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});

// Start server on port 4000
server.listen(4000, () => {
    console.log("Chat server running on port 4000");
});
