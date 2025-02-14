import React, { useState } from "react";
import ChatRoomsList from "./chatroomlist";
import ChatRoom from "./chatroom";
import "./mainchat.css"; // Importing CSS

const MainChat = () => {
    const [currentRoom, setCurrentRoom] = useState(null);

    return (
        <div className="main-chat-container">
            {currentRoom ? (
                <div className="active-chat-room">
                    <ChatRoom room={currentRoom} onLeave={() => setCurrentRoom(null)} />
                    <button className="leave-room-btn" onClick={() => setCurrentRoom(null)}>
                        Leave Room
                    </button>
                </div>
            ) : (
                <div className="chat-selection">
                    <h2>Available Chat Rooms</h2>
                    <ChatRoomsList onJoinRoom={setCurrentRoom} />
                </div>
            )}
        </div>
    );
};

export default MainChat;
