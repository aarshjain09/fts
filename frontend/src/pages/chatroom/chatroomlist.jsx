import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:4000");

const ChatRoomsList = ({ onJoinRoom }) => {
    const [rooms, setRooms] = useState([]);
    const [roomName, setRoomName] = useState("");

    useEffect(() => {
        socket.on("roomList", (updatedRooms) => {
            setRooms(updatedRooms);
        });

        return () => socket.off("roomList");
    }, []);

    const createRoom = () => {
        if (roomName.trim() !== "") {
            socket.emit("createRoom", roomName);
            setRoomName("");
        }
    };

    return (
        <div>
            <h2>Available Chat Rooms</h2>
            <input
                type="text"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
                placeholder="Enter room name"
            />
            <button onClick={createRoom}>Create Room</button>

            <ul>
                {rooms.map((room, index) => (
                    <li key={index}>
                        {room} <button onClick={() => onJoinRoom(room)}>Join</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChatRoomsList;
