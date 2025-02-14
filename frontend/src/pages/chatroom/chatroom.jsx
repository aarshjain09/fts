import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./chatroom.css"; // Importing CSS

const socket = io("http://localhost:4000");

const ChatRoom = ({ room, onLeave }) => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        socket.emit("joinRoom", room);

        socket.on("message", (msg) => {
            setMessages((prev) => [...prev, msg]);
        });

        return () => {
            socket.off("message");
        };
    }, [room]);

    const sendMessage = () => {
        if (message.trim() !== "") {
            socket.emit("chatMessage", { room, message });
            setMessage("");
        }
    };

    return (
        <div className="chat-room-container">
            <h2 className="chat-room-title">Chat Room: {room}</h2>
            <button className="leave-room-btn" onClick={onLeave}>Leave Room</button>
            
            <div className="chat-box">
                {messages.map((msg, index) => (
                    <p key={index} className="chat-message">{msg}</p>
                ))}
            </div>

            <div className="chat-input-container">
                <input
                    type="text"
                    className="chat-input"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                />
                <button className="send-message-btn" onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default ChatRoom;
