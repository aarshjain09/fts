import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./chatroom.css";

const socket = io("http://localhost:4000");

const ChatRoom = ({ room, onLeave }) => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        socket.emit("joinRoom", room);

        socket.on("message", (msg) => {
            setMessages((prev) => [...prev, msg]);
        });

        socket.on("chatHistory", (history) => {
            setMessages(history);
        });

        return () => {
            socket.emit("leaveRoom", room);
            socket.off("message");
            socket.off("chatHistory");
        };
    }, [room]);

    const sendMessage = () => {
        if (message.trim()) {
            socket.emit("chatMessage", { room, message });
            setMessage("");
        }
    };

    return (
        <div className="body1">
            <h2>Room: {room}</h2>
            <div className="Leave-room-btn">
                <button onClick={onLeave}>Leave Room</button>

            </div>

            <div className="chat-box">
                {messages.map((msg, index) => (
                    <div key={index}>
                        <strong>{msg.sender === socket.id ? "You" : msg.sender}:</strong> {msg.text}
                    </div>
                ))}
            </div>

            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message"
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default ChatRoom;
